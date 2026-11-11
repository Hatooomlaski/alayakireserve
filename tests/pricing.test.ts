import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/config/products";
import { WHOLESALE_ITEMS } from "@/config/wholesale";
import {
  buildOrderItem,
  formatSlotCount,
  orderItemId,
  resolvePortion,
  restoreSavedItems,
  summariseSlots,
  wholesaleTier,
} from "@/lib/pricing";

const product = (id: string) => {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) throw new Error(`missing product ${id}`);
  return p;
};
const tier = (id: string, shortLabel: string) => {
  const t = product(id).tiers?.find((x) => x.shortLabel === shortLabel);
  if (!t) throw new Error(`missing tier ${id} ${shortLabel}`);
  return t;
};
const wholesale = (id: string) => {
  const w = WHOLESALE_ITEMS.find((x) => x.id === id);
  if (!w) throw new Error(`missing wholesale item ${id}`);
  return w;
};

describe("catalogue", () => {
  it("prices sharing slots as agreed", () => {
    expect(tier("cow-sharing", "¼ Slot").price).toBe(5000);
    expect(tier("cow-sharing", "½ Slot").price).toBe(10000);
    expect(tier("cow-sharing", "1 Slot").price).toBe(20000);
    expect(tier("goat-meat-ogufe", "½ Slot").price).toBe(12500);
    expect(tier("goat-meat-ogufe", "1 Slot").price).toBe(25000);
    expect(tier("ram-sharing", "½ Slot").price).toBe(12500);
    expect(tier("ram-sharing", "1 Slot").price).toBe(25000);
  });

  it("sells sharing fresh only and specialty cuts fresh or frozen", () => {
    for (const id of ["cow-sharing", "goat-meat-ogufe", "ram-sharing"]) {
      expect(product(id).availableStates).toEqual(["Fresh"]);
    }
    for (const id of ["specialty-cow-head", "specialty-cow-tail", "specialty-cow-leg"]) {
      expect(product(id).availableStates).toEqual(["Fresh", "Frozen"]);
    }
  });

  it("links every wholesale row to a real product", () => {
    for (const w of WHOLESALE_ITEMS) {
      expect(PRODUCTS.some((p) => p.id === w.productId)).toBe(true);
    }
  });
});

describe("resolvePortion / buildOrderItem", () => {
  it("prices a single specialty unit at its starting rate", () => {
    expect(resolvePortion(product("specialty-cow-leg"), undefined)).toEqual({
      portionLabel: "1 Unit",
      unitPrice: 6000,
    });
  });

  it("keeps a wholesale specialty pack's own price", () => {
    const item = buildOrderItem(
      product("specialty-cow-leg"),
      wholesaleTier(wholesale("wholesale-cow-leg-pack")),
      "Fresh",
      "Wholesale Commercial Prep",
      1
    );
    expect(item.unitPrice).toBe(12000);
    expect(item.portionLabel).toBe("Pack of 2");
    expect(item.weightKg).toBeUndefined();
  });

  it("sends the wholesale full goat as slots, not kilograms", () => {
    const item = buildOrderItem(
      product("goat-meat-ogufe"),
      wholesaleTier(wholesale("wholesale-goat-full")),
      "Fresh",
      undefined,
      1
    );
    expect(item.slots).toBe(4);
    expect(item.weightKg).toBeUndefined();
    expect(item.shareAnimal).toBe("Goat");
  });

  it("gives each cut style its own cart line", () => {
    const beef = product("prime-beef-boneless");
    const oneKg = tier("prime-beef-boneless", "1kg");
    const cuts = beef.cutOptions ?? [];
    expect(orderItemId(beef, oneKg, "Fresh", cuts[0])).not.toBe(
      orderItemId(beef, oneKg, "Fresh", cuts[2])
    );
  });

  it("keeps line IDs stable so carts saved before the change still match", () => {
    const beef = product("prime-beef-boneless");
    expect(orderItemId(beef, tier("prime-beef-boneless", "1kg"), "Fresh", "A")).toBe(
      "prime-beef-boneless-1kg-Fresh-A"
    );
  });
});

describe("restoreSavedItems", () => {
  it("re-prices from the catalogue and drops anything invalid", () => {
    const restored = restoreSavedItems([
      { productId: "prime-beef-boneless", portionLabel: "1kg", meatState: "Fresh", unitPrice: 1, quantity: 2, customCutting: "A" },
      { productId: "deleted-product", portionLabel: "1kg", meatState: "Fresh", quantity: 1 },
      { productId: "prime-beef-boneless", portionLabel: "3kg", meatState: "Fresh", quantity: 1 },
      { productId: "prime-beef-boneless", portionLabel: "1kg", meatState: "Raw", quantity: 1 },
      { productId: "prime-beef-boneless", portionLabel: "1kg", meatState: "Fresh", quantity: -3 },
      { productId: "prime-beef-boneless", portionLabel: "10kg Master Carton", meatState: "Fresh", unitPrice: 5, quantity: 1, customCutting: "Wholesale Commercial Prep" },
      { productId: "specialty-cow-head", portionLabel: "1 Unit", meatState: "Fresh", unitPrice: 5, quantity: 1 },
      "junk",
      null,
    ]);
    expect(restored.map((i) => [i.portionLabel, i.unitPrice, i.quantity])).toEqual([
      ["1kg", 7700, 2],
      ["10kg Master Carton", 77000, 1],
      ["1 Unit", 50000, 1],
    ]);
  });

  it("moves a no-longer-offered state to an available one and merges", () => {
    const restored = restoreSavedItems([
      { productId: "goat-meat-ogufe", portionLabel: "1 Slot (Share)", meatState: "Frozen", quantity: 1, customCutting: "Party Stew Chunks" },
      { productId: "goat-meat-ogufe", portionLabel: "1 Slot (Share)", meatState: "Fresh", quantity: 2, customCutting: "Party Stew Chunks" },
    ]);
    expect(restored).toHaveLength(1);
    expect(restored[0].meatState).toBe("Fresh");
    expect(restored[0].quantity).toBe(3);
  });

  it("returns an empty cart for non-array data", () => {
    expect(restoreSavedItems({ not: "an array" })).toEqual([]);
    expect(restoreSavedItems(null)).toEqual([]);
  });
});

describe("slot summaries", () => {
  it("formats fractions", () => {
    expect(formatSlotCount(0.25)).toBe("¼");
    expect(formatSlotCount(0.5)).toBe("½");
    expect(formatSlotCount(1.75)).toBe("1¾");
    expect(formatSlotCount(2)).toBe("2");
  });

  it("totals slots per animal and ignores weighed cuts", () => {
    const items = [
      buildOrderItem(product("cow-sharing"), tier("cow-sharing", "1 Slot"), "Fresh", undefined, 1),
      buildOrderItem(product("cow-sharing"), tier("cow-sharing", "½ Slot"), "Fresh", undefined, 1),
      buildOrderItem(product("goat-meat-ogufe"), tier("goat-meat-ogufe", "½ Slot"), "Fresh", undefined, 1),
      buildOrderItem(product("ram-sharing"), tier("ram-sharing", "1 Slot"), "Fresh", undefined, 2),
      buildOrderItem(product("prime-beef-boneless"), tier("prime-beef-boneless", "1kg"), "Fresh", undefined, 1),
    ];
    expect(summariseSlots(items)).toBe("1½ Cow Slots + ½ Goat Slot + 2 Ram Slots");
    expect(summariseSlots([items[4]])).toBeNull();
  });
});
