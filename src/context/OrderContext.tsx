"use client";

import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import { OrderItem, CustomerDetails, DeliveryZone, MeatState, ProductItem, PriceTier } from "@/types/store";
import { DELIVERY_ZONES } from "@/config/zones";
import { generateWhatsAppOrderUrl } from "@/lib/whatsapp";

interface OrderContextType {
  items: OrderItem[];
  addItem: (product: ProductItem, tier: PriceTier | undefined, meatState: MeatState, customCutting?: string) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, newQty: number) => void;
  clearCart: () => void;
  customer: CustomerDetails;
  updateCustomer: (updates: Partial<CustomerDetails>) => void;
  selectedZone: DeliveryZone | undefined;
  subtotal: number;
  deliveryFee: number;
  totalWithDelivery: number;
  totalItemCount: number;
  hasSpecialtyItems: boolean;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  openDrawer: () => void;
  closeDrawer: () => void;
  getWhatsAppOrderUrl: () => string;
}

const defaultCustomer: CustomerDetails = {
  fullName: "",
  phone: "",
  deliveryType: "delivery",
  deliveryZoneId: "zone-adigbe",
  deliveryAddress: "",
  cuttingInstructions: "",
  preferredMeatState: "Fresh",
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export function OrderProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<OrderItem[]>([]);
  const [customer, setCustomer] = useState<CustomerDetails>(defaultCustomer);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on client mount
  useEffect(() => {
    try {
      const savedItems = localStorage.getItem("alayaki_reserve_cart");
      const savedCustomer = localStorage.getItem("alayaki_reserve_customer");
      if (savedItems) {
        setItems(JSON.parse(savedItems));
      }
      if (savedCustomer) {
        setCustomer(JSON.parse(savedCustomer));
      }
    } catch (e) {
      console.warn("Could not load cart state from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // Save changes to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("alayaki_reserve_cart", JSON.stringify(items));
      localStorage.setItem("alayaki_reserve_customer", JSON.stringify(customer));
    } catch (e) {
      console.warn("Could not persist cart state to localStorage", e);
    }
  }, [items, customer, isLoaded]);

  const selectedZone = useMemo(() => {
    if (customer.deliveryType === "pickup") {
      return DELIVERY_ZONES.find((z) => z.isPickup);
    }
    return DELIVERY_ZONES.find((z) => z.id === customer.deliveryZoneId) || DELIVERY_ZONES[1];
  }, [customer.deliveryType, customer.deliveryZoneId]);

  const addItem = (
    product: ProductItem,
    tier: PriceTier | undefined,
    meatState: MeatState,
    customCutting?: string
  ) => {
    const portionLabel = product.isSpecialty
      ? `1 ${product.unitLabel || "Unit"}`
      : tier
      ? tier.weightLabel
      : "Standard Portion";

    const unitPrice = product.isSpecialty
      ? product.baseStartingPrice || 0
      : tier
      ? tier.price
      : 0;

    // Unique ID combining product, portion, and state
    const itemId = `${product.id}-${portionLabel}-${meatState}-${customCutting || "standard"}`;

    setItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.id === itemId);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + 1,
        };
        return next;
      }

      const newItem: OrderItem = {
        id: itemId,
        productId: product.id,
        productName: product.name,
        yorubaName: product.yorubaName,
        portionLabel,
        meatState,
        unitPrice,
        quantity: 1,
        isSpecialty: product.isSpecialty,
        customCutting,
      };
      return [...prev, newItem];
    });

    setIsDrawerOpen(true);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => prev.filter((i) => i.id !== itemId));
  };

  const updateQuantity = (itemId: string, newQty: number) => {
    if (newQty <= 0) {
      removeItem(itemId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.id === itemId ? { ...i, quantity: newQty } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const updateCustomer = (updates: Partial<CustomerDetails>) => {
    setCustomer((prev) => ({ ...prev, ...updates }));
  };

  const subtotal = useMemo(() => {
    return items.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);
  }, [items]);

  const deliveryFee = useMemo(() => {
    if (customer.deliveryType === "pickup" || !selectedZone) return 0;
    return selectedZone.fee;
  }, [customer.deliveryType, selectedZone]);

  const totalWithDelivery = subtotal + deliveryFee;

  const totalItemCount = useMemo(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  }, [items]);

  const hasSpecialtyItems = useMemo(() => {
    return items.some((item) => item.isSpecialty);
  }, [items]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const getWhatsAppOrderUrl = () => {
    return generateWhatsAppOrderUrl({
      items,
      customer,
      selectedZone,
      subtotal,
      hasSpecialtyItems,
    });
  };

  return (
    <OrderContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        customer,
        updateCustomer,
        selectedZone,
        subtotal,
        deliveryFee,
        totalWithDelivery,
        totalItemCount,
        hasSpecialtyItems,
        isDrawerOpen,
        setIsDrawerOpen,
        openDrawer,
        closeDrawer,
        getWhatsAppOrderUrl,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}

export function useOrder() {
  const context = useContext(OrderContext);
  if (!context) {
    throw new Error("useOrder must be used within an OrderProvider");
  }
  return context;
}
