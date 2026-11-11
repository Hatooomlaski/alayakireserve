export type MeatState = "Fresh" | "Frozen";

export type ProductCategory = "all" | "beef" | "intestines" | "specialty" | "sharing";

/** Animal a sharing slot belongs to; slots are only summed per animal. */
export type ShareAnimal = "Cow" | "Goat" | "Ram";

export interface PriceTier {
  weightLabel: string;
  shortLabel?: string;
  subtitle?: string;
  weightKg?: number;
  slots?: number;
  price: number;
}

export interface ProductItem {
  id: string;
  name: string;
  yorubaName?: string;
  category: ProductCategory;
  description: string;
  trustBadge?: string;
  isBonelessGuaranteed?: boolean;
  isSpecialty: boolean;
  baseStartingPrice?: number;
  tiers?: PriceTier[];
  availableStates: MeatState[];
  /** Omit until a photo exists; the card shows a branded placeholder. */
  imageUrl?: string;
  /** Set on sharing products; tiers then carry `slots` (fractions allowed, e.g. 0.5). */
  shareAnimal?: ShareAnimal;
  cutOptions?: string[];
  unitLabel?: string;
}

export interface WholesaleItem {
  id: string;
  productId: string;
  name: string;
  /** Label shown on the cart line and in the WhatsApp message. Keep stable: saved carts are matched on it. */
  portionLabel: string;
  specification: string;
  price: number;
  /** Net weight that is actually sold (sent with the order). */
  weightKg?: number;
  /** Goat slots (sent with the order instead of a weight). */
  slots?: number;
  /** Rough weight for display only (specialty cuts and goat), never sent as a weighed total. */
  estimatedWeightKg?: number;
  defaultState: MeatState;
}

export interface OrderItem {
  id: string;
  productId: string;
  productName: string;
  yorubaName?: string;
  portionLabel: string;
  meatState: MeatState;
  unitPrice: number;
  quantity: number;
  weightKg?: number;
  slots?: number;
  shareAnimal?: ShareAnimal;
  isSpecialty: boolean;
  customCutting?: string;
}

export interface CustomerDetails {
  fullName: string;
  phone: string;
  deliveryType: "pickup" | "delivery";
  deliveryZoneId: string;
  deliveryAddress: string;
  cuttingInstructions: string;
  preferredMeatState: MeatState;
  preferredDate?: string;
}

export interface DeliveryZone {
  id: string;
  name: string;
  area: string;
  fee: number;
  estimatedTime: string;
  isPickup?: boolean;
}

export interface ButcheringSchedule {
  dayName: string;
  scheduleDate: string;
  status: "Next Live Butchering" | "Taking Pre-Orders" | "Scheduled Slot";
  timeWindow: string;
  availableSlots: number;
}
