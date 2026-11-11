import { PRODUCTS } from "@/config/products";
import { WHOLESALE_ITEMS } from "@/config/wholesale";
import {
  CustomerDetails,
  MeatState,
  OrderItem,
  PriceTier,
  ProductItem,
  ShareAnimal,
  WholesaleItem,
} from "@/types/store";

export function specialtyPortionLabel(product: ProductItem): string {
  return `1 ${product.unitLabel || "Unit"}`;
}

/**
 * Portion label and unit price for a product. An explicit tier always wins,
 * including for specialty cuts (wholesale packs pass one); without a tier a
 * specialty cut is a single unit at its starting price.
 */
export function resolvePortion(
  product: ProductItem,
  tier: PriceTier | undefined
): { portionLabel: string; unitPrice: number } {
  if (tier) return { portionLabel: tier.weightLabel, unitPrice: tier.price };
  if (product.isSpecialty) {
    return {
      portionLabel: specialtyPortionLabel(product),
      unitPrice: product.baseStartingPrice ?? 0,
    };
  }
  return { portionLabel: "Standard Portion", unitPrice: 0 };
}

/** Cart line ID. Every field that makes a line distinct (incl. cut style) is part of it. */
export function orderItemId(
  product: ProductItem,
  tier: PriceTier | undefined,
  meatState: MeatState,
  customCutting?: string
): string {
  const { portionLabel } = resolvePortion(product, tier);
  return `${product.id}-${portionLabel}-${meatState}-${customCutting || "standard"}`;
}

export function buildOrderItem(
  product: ProductItem,
  tier: PriceTier | undefined,
  meatState: MeatState,
  customCutting: string | undefined,
  quantity: number
): OrderItem {
  const { portionLabel, unitPrice } = resolvePortion(product, tier);
  return {
    id: orderItemId(product, tier, meatState, customCutting),
    productId: product.id,
    productName: product.name,
    yorubaName: product.yorubaName,
    portionLabel,
    meatState,
    unitPrice,
    quantity,
    weightKg: tier?.weightKg,
    slots: tier?.slots,
    shareAnimal: tier?.slots ? product.shareAnimal : undefined,
    isSpecialty: product.isSpecialty,
    customCutting,
  };
}

const FRACTION_GLYPHS: Record<number, string> = { 0.25: "¼", 0.5: "½", 0.75: "¾" };

/** 0.5 → "½", 1.75 → "1¾", 2 → "2", 0.125 → "0.125". */
export function formatSlotCount(slots: number): string {
  const whole = Math.floor(slots);
  const fraction = Math.round((slots - whole) * 1000) / 1000;
  if (fraction === 0) return String(whole);
  const glyph = FRACTION_GLYPHS[fraction];
  if (glyph) return whole > 0 ? `${whole}${glyph}` : glyph;
  return String(Math.round(slots * 1000) / 1000);
}

const SHARE_ANIMAL_ORDER: ShareAnimal[] = ["Cow", "Goat", "Ram"];

/**
 * Slot totals per animal, e.g. "1½ Cow Slots + ½ Goat Slot".
 * Returns null when the cart has no sharing slots.
 */
export function summariseSlots(items: OrderItem[]): string | null {
  const totals = new Map<ShareAnimal, number>();
  for (const item of items) {
    if (!item.slots) continue;
    const animal = item.shareAnimal ?? "Goat";
    totals.set(animal, (totals.get(animal) ?? 0) + item.slots * item.quantity);
  }
  const parts = SHARE_ANIMAL_ORDER.filter((a) => totals.has(a)).map((animal) => {
    const count = totals.get(animal)!;
    return `${formatSlotCount(count)} ${animal} Slot${count > 1 ? "s" : ""}`;
  });
  return parts.length > 0 ? parts.join(" + ") : null;
}

/** Wholesale row as a price tier. Display-only estimates are not passed on. */
export function wholesaleTier(item: WholesaleItem): PriceTier {
  return {
    weightLabel: item.portionLabel,
    price: item.price,
    weightKg: item.weightKg,
    slots: item.slots,
  };
}

function findCurrentTier(product: ProductItem, portionLabel: string): PriceTier | undefined {
  const retail = product.tiers?.find((t) => t.weightLabel === portionLabel);
  if (retail) return retail;
  const wholesale = WHOLESALE_ITEMS.find(
    (w) => w.productId === product.id && w.portionLabel === portionLabel
  );
  return wholesale ? wholesaleTier(wholesale) : undefined;
}

/**
 * Rebuilds a cart saved in localStorage against the current catalogue, so
 * prices, names and weights always come from config. Lines whose product or
 * portion no longer exists, or that are malformed, are dropped.
 */
export function restoreSavedItems(raw: unknown): OrderItem[] {
  if (!Array.isArray(raw)) return [];

  const restored = new Map<string, OrderItem>();
  for (const entry of raw) {
    if (!entry || typeof entry !== "object") continue;
    const saved = entry as Partial<OrderItem>;

    const product = PRODUCTS.find((p) => p.id === saved.productId);
    if (!product || typeof saved.portionLabel !== "string") continue;
    if (saved.meatState !== "Fresh" && saved.meatState !== "Frozen") continue;
    // If a state is no longer offered (e.g. goat went fresh-only), switch the
    // line to one that is; matching lines are merged below.
    const meatState = product.availableStates.includes(saved.meatState)
      ? saved.meatState
      : product.availableStates[0];

    const quantity = Math.floor(Number(saved.quantity));
    if (!Number.isFinite(quantity) || quantity < 1) continue;

    const tier = findCurrentTier(product, saved.portionLabel);
    const isSingleSpecialtyUnit =
      !tier && product.isSpecialty && saved.portionLabel === specialtyPortionLabel(product);
    if (!tier && !isSingleSpecialtyUnit) continue;

    const customCutting =
      typeof saved.customCutting === "string" && saved.customCutting
        ? saved.customCutting
        : undefined;

    const item = buildOrderItem(product, tier, meatState, customCutting, quantity);
    const existing = restored.get(item.id);
    restored.set(
      item.id,
      existing ? { ...existing, quantity: existing.quantity + quantity } : item
    );
  }
  return Array.from(restored.values());
}

export function restoreSavedCustomer(
  raw: unknown,
  defaults: CustomerDetails
): CustomerDetails {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return defaults;
  const saved = raw as Partial<CustomerDetails>;
  const pickString = (value: unknown, fallback: string) =>
    typeof value === "string" ? value : fallback;

  return {
    ...defaults,
    fullName: pickString(saved.fullName, defaults.fullName),
    phone: pickString(saved.phone, defaults.phone),
    deliveryType:
      saved.deliveryType === "pickup" || saved.deliveryType === "delivery"
        ? saved.deliveryType
        : defaults.deliveryType,
    deliveryZoneId: pickString(saved.deliveryZoneId, defaults.deliveryZoneId),
    deliveryAddress: pickString(saved.deliveryAddress, defaults.deliveryAddress),
    cuttingInstructions: pickString(saved.cuttingInstructions, defaults.cuttingInstructions),
    preferredMeatState:
      saved.preferredMeatState === "Fresh" || saved.preferredMeatState === "Frozen"
        ? saved.preferredMeatState
        : defaults.preferredMeatState,
  };
}
