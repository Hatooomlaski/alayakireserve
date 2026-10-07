export type MeatState = "Fresh" | "Frozen";

export type ProductCategory = "all" | "beef" | "intestines" | "specialty" | "goat";

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
  imageUrl: string;
  cutOptions?: string[];
  unitLabel?: string;
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
