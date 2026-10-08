"use client";

import React from "react";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";
import { DELIVERY_ZONES } from "@/config/zones";
import { formatNaira } from "@/lib/utils";
import { DISPLAY_PHONE_NUMBER } from "@/lib/whatsapp";
import {
  X,
  Trash2,
  Plus,
  Minus,
  MessageCircle,
  Truck,
  Store,
  MapPin,
  AlertTriangle,
  Scissors,
  CheckCircle2,
  ShieldCheck,
  ShoppingBag,
  Scale,
  Sparkles,
} from "lucide-react";

export default function OrderDrawer() {
  const {
    items,
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
    totalEstimatedWeightKg,
    totalEstimatedSlots,
    hasSpecialtyItems,
    isDrawerOpen,
    closeDrawer,
    getWhatsAppOrderUrl,
  } = useOrder();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-charcoal/80 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Slide-over panel: Full width on mobile, max-w-lg on desktop */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-lg bg-white border-l border-steel-border shadow-luxury-lg flex flex-col justify-between text-charcoal">
          {/* Drawer Header (Rich Charcoal Black) */}
          <div className="p-4 sm:p-6 border-b border-charcoal-border flex items-center justify-between bg-charcoal text-white">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border-2 border-reserve-gold shadow-gold-glow bg-white overflow-hidden flex-shrink-0">
                <Image
                  src="/images/logo-crest.jpg"
                  alt="Alayaki Reserve Official Brand Crest"
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                  Bespoke WhatsApp Order
                </h2>
                <p className="text-[11px] text-reserve-gold-bright font-semibold">
                  Alayaki Reserve • Direct Dispatch Desk
                </p>
              </div>
            </div>

            <button
              onClick={closeDrawer}
              className="w-10 h-10 rounded-xl text-steel-light hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 bg-pristine-muted">
            {/* Empty State */}
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal shadow-inner">
                  <ShoppingBag className="w-8 h-8 opacity-80" />
                </div>
                <h3 className="font-serif text-2xl text-charcoal font-bold">
                  Your Order Builder is Empty
                </h3>
                <p className="text-xs sm:text-sm text-steel max-w-xs mx-auto leading-relaxed">
                  Select your preferred portions and cuts from our catalog to instantly compile your verified order here.
                </p>
                <button
                  onClick={closeDrawer}
                  className="mt-2 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-charcoal hover:bg-charcoal-rich text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
                >
                  Browse Artisanal Cuts
                </button>
              </div>
            ) : (
              <>
                {/* Cart Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-ruby" />
                      <span>
                        Selected Cuts ({totalItemCount} Items
                        {totalEstimatedWeightKg > 0 && ` • ~${totalEstimatedWeightKg.toFixed(1)}kg`})
                      </span>
                    </span>
                    <button
                      onClick={clearCart}
                      className="text-[11px] text-steel hover:text-ruby flex items-center gap-1 transition-colors font-medium"
                    >
                      <Trash2 className="w-3 h-3" />
                      <span>Clear All</span>
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 rounded-2xl bg-white border border-steel-border shadow-pristine-sm flex items-center justify-between gap-3"
                      >
                        <div className="space-y-1 min-w-0 flex-1">
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <h4 className="font-bold text-xs sm:text-sm text-charcoal truncate">
                              {item.productName}
                            </h4>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                                item.meatState === "Fresh"
                                  ? "bg-amber-100 text-amber-900"
                                  : "bg-cyan-100 text-cyan-900"
                              }`}
                            >
                              {item.meatState}
                            </span>
                          </div>

                          <div className="text-[11px] text-steel flex items-center gap-2 flex-wrap">
                            <span className="font-semibold text-charcoal">
                              {item.portionLabel}
                            </span>
                            <span>•</span>
                            <span>{formatNaira(item.unitPrice)} each</span>
                            {item.isSpecialty && (
                              <span className="text-ruby font-bold">
                                (Base Rate)
                              </span>
                            )}
                          </div>

                          {item.customCutting && (
                            <div className="text-[10px] text-steel flex items-center gap-1 font-medium">
                              <Scissors className="w-3 h-3 text-steel" />
                              <span className="truncate">Cut: {item.customCutting}</span>
                            </div>
                          )}
                        </div>

                        {/* Quantity Stepper & Price */}
                        <div className="flex flex-col items-end gap-1.5 flex-shrink-0">
                          <span className="font-sans font-extrabold text-xs sm:text-sm text-charcoal">
                            {formatNaira(item.unitPrice * item.quantity)}
                          </span>

                          <div className="flex items-center gap-1 bg-steel-surface rounded-lg p-0.5 border border-steel-border">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-md bg-white hover:bg-steel-border text-charcoal flex items-center justify-center transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3 stroke-[2.5]" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-charcoal tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-md bg-ruby hover:bg-ruby-hover text-white flex items-center justify-center transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3 stroke-[2.5]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* UPGRADED WALK-IN VS DELIVERY SELECTOR */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-charcoal block">
                    Choose Fulfillment Method:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Option A: Home Delivery */}
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "delivery" })}
                      className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        customer.deliveryType === "delivery"
                          ? "bg-charcoal text-white border-charcoal shadow-md"
                          : "bg-white text-charcoal border-steel-border hover:border-steel-dark"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Truck
                          className={`w-5 h-5 ${
                            customer.deliveryType === "delivery"
                              ? "text-ruby"
                              : "text-steel"
                          }`}
                        />
                        {customer.deliveryType === "delivery" && (
                          <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-xs sm:text-sm block">
                          🚗 Home Delivery
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 leading-snug ${
                            customer.deliveryType === "delivery"
                              ? "text-steel-light"
                              : "text-steel"
                          }`}
                        >
                          Carefully packaged with temperature-controlled protection.
                        </span>
                      </div>
                    </button>

                    {/* Option B: In-Store Pickup */}
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "pickup" })}
                      className={`p-4 rounded-2xl text-left border transition-all flex flex-col justify-between ${
                        customer.deliveryType === "pickup"
                          ? "bg-charcoal text-white border-charcoal shadow-md"
                          : "bg-white text-charcoal border-steel-border hover:border-steel-dark"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <Store
                          className={`w-5 h-5 ${
                            customer.deliveryType === "pickup"
                              ? "text-reserve-gold-bright"
                              : "text-steel"
                          }`}
                        />
                        {customer.deliveryType === "pickup" && (
                          <CheckCircle2 className="w-4 h-4 text-whatsapp" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-xs sm:text-sm block">
                          🏪 In-Store Pickup
                        </span>
                        <span
                          className={`text-[11px] block mt-0.5 leading-snug ${
                            customer.deliveryType === "pickup"
                              ? "text-steel-light"
                              : "text-steel"
                          }`}
                        >
                          God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta.
                        </span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Delivery Zone Selector (if Delivery Chosen) */}
                {customer.deliveryType === "delivery" ? (
                  <div className="space-y-3 p-4 rounded-2xl bg-white border border-steel-border shadow-pristine-sm">
                    <div>
                      <label className="text-[11px] font-bold text-charcoal block mb-1">
                        Select Abeokuta Delivery Zone:
                      </label>
                      <select
                        value={customer.deliveryZoneId}
                        onChange={(e) =>
                          updateCustomer({ deliveryZoneId: e.target.value })
                        }
                        className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none"
                      >
                        {DELIVERY_ZONES.filter((z) => !z.isPickup).map((zone) => (
                          <option key={zone.id} value={zone.id}>
                            {zone.name} ({zone.area}) — {formatNaira(zone.fee)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-charcoal block mb-1">
                        Street Address & Landmark:
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., No 14 Opposite Zenith Bank, Ibara"
                        value={customer.deliveryAddress}
                        onChange={(e) =>
                          updateCustomer({ deliveryAddress: e.target.value })
                        }
                        className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2 border border-steel-border focus:border-charcoal focus:outline-none"
                      />
                    </div>
                  </div>
                ) : (
                  /* Walk-In Store Details */
                  <div className="p-3.5 rounded-2xl bg-white border border-steel-border shadow-pristine-sm space-y-1.5 text-xs text-charcoal">
                    <div className="flex items-center gap-1.5 text-charcoal font-bold">
                      <MapPin className="w-4 h-4 text-ruby" />
                      <span>Walk-In Pickup Location:</span>
                    </div>
                    <p className="text-steel text-[11px]">
                      God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State.
                    </p>
                    <p className="text-[11px] text-charcoal font-semibold">
                      Opening Hours: Mon–Sat: 8am–7pm | Sun: 1pm–7pm
                    </p>
                    <p className="text-[10px] text-steel">
                      (Fresh Friday collection opens 12 noon; frozen cuts ready anytime)
                    </p>
                  </div>
                )}

                {/* Customer Details Form */}
                <div className="space-y-3 p-4 rounded-2xl bg-white border border-steel-border shadow-pristine-sm">
                  <span className="text-xs font-bold text-charcoal block">
                    Your Information:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-steel block mb-1">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Chief Adeyemi"
                        value={customer.fullName}
                        onChange={(e) =>
                          updateCustomer({ fullName: e.target.value })
                        }
                        className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2 border border-steel-border focus:border-charcoal focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-steel block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 0801 234 5678"
                        value={customer.phone}
                        onChange={(e) =>
                          updateCustomer({ phone: e.target.value })
                        }
                        className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2 border border-steel-border focus:border-charcoal focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-steel block mb-1">
                      Special Cutting or Packing Notes
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Cut into small bite sizes, pack in separate bags"
                      value={customer.cuttingInstructions}
                      onChange={(e) =>
                        updateCustomer({ cuttingInstructions: e.target.value })
                      }
                      className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2 border border-steel-border focus:border-charcoal focus:outline-none"
                    />
                  </div>
                </div>

                {/* Specialty Item Sizing Notice */}
                {hasSpecialtyItems && (
                  <div className="p-3 rounded-xl bg-steel-surface border border-steel-border flex items-start gap-2 text-xs text-charcoal">
                    <AlertTriangle className="w-4 h-4 text-ruby flex-shrink-0 mt-0.5" />
                    <p className="text-[11px] leading-relaxed">
                      <strong>Cow Head, Tail, or Leg Included:</strong> These specialty cuts carry base prices. Exact final weights and cost will be verified with you directly on WhatsApp upon sizing.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer / WhatsApp Dispatch Action */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 bg-white border-t border-steel-border space-y-3">
              {/* Financial Calculation Summary */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-steel">
                  <span>Estimated Meat Subtotal:</span>
                  <span className="font-bold text-charcoal font-sans">
                    {formatNaira(subtotal)}
                  </span>
                </div>

                {customer.deliveryType === "delivery" && selectedZone && (
                  <div className="flex justify-between text-steel">
                    <span>Delivery ({selectedZone.name}):</span>
                    <span className="font-bold text-charcoal font-sans">
                      {formatNaira(deliveryFee)}
                    </span>
                  </div>
                )}

                <div className="flex justify-between text-base font-bold text-charcoal pt-2 border-t border-steel-border">
                  <span>Estimated Total:</span>
                  <span className="font-sans font-extrabold text-lg text-charcoal">
                    {formatNaira(totalWithDelivery)}
                  </span>
                </div>
              </div>

              {/* Final Action Button: Official WhatsApp Green Exclusively */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[50px] py-3.5 px-4 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-extrabold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-whatsapp-glow transition-all active:scale-98"
              >
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>Send Order via WhatsApp (+2348153861887)</span>
              </a>

              <p className="text-[10px] text-center text-steel">
                Zero on-site card charges. You confirm your meat cuts directly on WhatsApp with our butcher desk.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
