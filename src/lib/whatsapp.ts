import { CustomerDetails, OrderItem, DeliveryZone } from "@/types/store";
import { formatNaira } from "./utils";

export const WHATSAPP_PHONE_NUMBER = "2348153861887";
export const DISPLAY_PHONE_NUMBER = "+234 815 386 1887";

interface WhatsAppOrderPayload {
  items: OrderItem[];
  customer: CustomerDetails;
  selectedZone?: DeliveryZone;
  subtotal: number;
  hasSpecialtyItems: boolean;
}

export function generateWhatsAppOrderUrl({
  items,
  customer,
  selectedZone,
  subtotal,
  hasSpecialtyItems,
}: WhatsAppOrderPayload): string {
  const deliveryTypeDisplay =
    customer.deliveryType === "pickup"
      ? "Pickup at Adigbe Store (God's Hope Hospital Car Park)"
      : `Delivery to ${selectedZone ? selectedZone.name : "Abeokuta Address"}`;

  const addressDisplay =
    customer.deliveryType === "pickup"
      ? "Self-Pickup in person"
      : customer.deliveryAddress || "Address provided via WhatsApp";

  const selectedItemsLines = items.map((item) => {
    const specialtyFlag = item.isSpecialty ? " - Starting from " : " - ";
    const unitPriceDisplay = formatNaira(item.unitPrice * item.quantity);
    const star = item.isSpecialty ? "*" : "";
    const cutNote = item.customCutting ? ` [Cut: ${item.customCutting}]` : "";
    const qtyStr = item.quantity > 1 ? ` x${item.quantity}` : "";

    return `• ${item.productName} [${item.portionLabel}] (${item.meatState})${qtyStr}${cutNote}${specialtyFlag}${unitPriceDisplay}${star}`;
  });

  const specialtyNotice = hasSpecialtyItems
    ? "*Specialty Item Notice:* Prices for Head/Tail/Leg are base rates and will be finalized upon cow sizing."
    : null;

  const cuttingInstructions =
    customer.cuttingInstructions.trim() || "Standard hygienic precision cuts";

  const deliveryFee =
    customer.deliveryType === "delivery" && selectedZone
      ? selectedZone.fee
      : 0;

  const totalEstimateWithDelivery = subtotal + deliveryFee;

  const message = [
    "*NEW ORDER INQUIRY - ALAYAKI RESERVE*",
    "----------------------------------",
    `*Customer Name:* ${customer.fullName || "Valued Client"}`,
    `*Contact Phone:* ${customer.phone || "Not specified"}`,
    `*Delivery Type:* ${deliveryTypeDisplay}`,
    `*Delivery Address:* ${addressDisplay}`,
    `*Meat State Preference:* ${customer.preferredMeatState}`,
    "",
    "*SELECTED ITEMS:*",
    ...selectedItemsLines,
    "",
    `*Estimated Order Subtotal:* ${formatNaira(subtotal)}`,
    customer.deliveryType === "delivery" && selectedZone
      ? `*Estimated Delivery Fee (${selectedZone.name}):* ${formatNaira(deliveryFee)}`
      : null,
    customer.deliveryType === "delivery" && selectedZone
      ? `*Grand Total (with Delivery):* ${formatNaira(totalEstimateWithDelivery)}`
      : null,
    specialtyNotice,
    `*Cutting Instructions:* ${cuttingInstructions}`,
    "----------------------------------",
    "Hello Alayaki Reserve, I am ready to confirm this order.",
  ]
    .filter((line) => line !== null)
    .join("\n");

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateCorporateWhatsAppUrl(details: {
  companyName: string;
  contactPerson: string;
  phone: string;
  estimatedVolume: string;
  supplyType: string;
  notes?: string;
}): string {
  const message = [
    "*B2B CORPORATE / BULK SUPPLY INQUIRY - ALAYAKI RESERVE*",
    "----------------------------------",
    `*Organization / Business:* ${details.companyName || "Commercial Client"}`,
    `*Contact Person:* ${details.contactPerson || "Procurement Manager"}`,
    `*Contact Phone:* ${details.phone || "Pending"}`,
    `*Supply Category:* ${details.supplyType}`,
    `*Estimated Volume / Schedule:* ${details.estimatedVolume}`,
    details.notes ? `*Additional Requirements:* ${details.notes}` : null,
    "----------------------------------",
    "Hello Alayaki Reserve, we are interested in setting up a bespoke wholesale supply agreement with guaranteed cold-chain delivery for our establishment.",
  ]
    .filter(Boolean)
    .join("\n");

  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function generateQuickWhatsAppInquiry(topic: string = "Butchering Schedule & Available Cuts"): string {
  const message = `Hello Alayaki Reserve, I would like to inquire about: ${topic}.`;
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
}
