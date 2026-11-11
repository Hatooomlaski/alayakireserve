import { describe, expect, it } from "vitest";
import { PRODUCTS } from "@/config/products";
import { DELIVERY_ZONES } from "@/config/zones";
import { buildOrderItem } from "@/lib/pricing";
import { generateWhatsAppOrderUrl, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";
import type { CustomerDetails } from "@/types/store";

const product = (id: string) => PRODUCTS.find((p) => p.id === id)!;

const customer: CustomerDetails = {
  fullName: "Test Customer",
  phone: "08012345678",
  deliveryType: "delivery",
  deliveryZoneId: "zone-ibara",
  deliveryAddress: "No 14 Opposite Zenith Bank, Ibara",
  cuttingInstructions: "",
  preferredMeatState: "Fresh",
};

function decodeMessage(url: string): string {
  return decodeURIComponent(url.split("?text=")[1]);
}

describe("generateWhatsAppOrderUrl", () => {
  const beef = product("prime-beef-boneless");
  const cow = product("cow-sharing");
  const tail = product("specialty-cow-tail");
  const items = [
    buildOrderItem(beef, beef.tiers![1], "Fresh", "Suya Strips (Thinly Sliced)", 2),
    buildOrderItem(cow, cow.tiers![2], "Fresh", undefined, 1),
    buildOrderItem(tail, undefined, "Frozen", undefined, 1),
  ];
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  const zone = DELIVERY_ZONES.find((z) => z.id === "zone-ibara")!;

  const url = generateWhatsAppOrderUrl({
    items,
    customer,
    selectedZone: zone,
    subtotal,
    hasSpecialtyItems: true,
  });
  const message = decodeMessage(url);

  it("targets the shop's WhatsApp number", () => {
    expect(url.startsWith(`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=`)).toBe(true);
  });

  it("includes customer, items, cut and totals", () => {
    expect(message).toContain("*Customer Name:* Test Customer");
    expect(message).toContain("No 14 Opposite Zenith Bank, Ibara");
    expect(message).toContain("• Prime Boneless Beef [1kg] (Fresh) x2 [Cut: Suya Strips (Thinly Sliced)] - ₦15,400");
    expect(message).toContain("*Accurately Weighed Total:* 2kg");
    expect(message).toContain("*Sharing Slots:* 1 Cow Slot");
    expect(message).toContain("Starting from ₦15,000*");
    expect(message).toContain(`*Estimated Order Subtotal:* ₦${subtotal.toLocaleString("en-NG")}`);
    expect(message).toContain(`*Estimated Delivery Fee (${zone.name}):* ₦${zone.fee.toLocaleString("en-NG")}`);
    expect(message).toContain("*Specialty Item Notice:*");
  });

  it("omits delivery lines for pickup", () => {
    const pickup = decodeMessage(
      generateWhatsAppOrderUrl({
        items,
        customer: { ...customer, deliveryType: "pickup" },
        selectedZone: DELIVERY_ZONES.find((z) => z.isPickup),
        subtotal,
        hasSpecialtyItems: true,
      })
    );
    expect(pickup).toContain("In-Store Walk-In Pickup");
    expect(pickup).not.toContain("Estimated Delivery Fee");
  });
});
