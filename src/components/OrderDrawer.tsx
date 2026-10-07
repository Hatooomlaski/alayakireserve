"use client";

import React from "react";
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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-6 sm:pl-10">
        <div className="w-screen max-w-lg bg-reserve-emerald-surface border-l border-reserve-gold/30 shadow-2xl flex flex-col justify-between text-reserve-cream">
          {/* Drawer Header */}
          <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-reserve-emerald">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-reserve-gold/20 border border-reserve-gold flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-reserve-gold" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-reserve-cream">
                  Bespoke WhatsApp Order
                </h2>
                <p className="text-[11px] text-reserve-gold/90 font-medium">
                  Alayaki Reserve • Direct Dispatch Desk
                </p>
              </div>
            </div>

            <button
              onClick={closeDrawer}
              className="p-2 rounded-lg text-reserve-cream-muted hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
            {/* Empty State */}
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-reserve-gold">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h3 className="font-serif text-xl text-reserve-cream font-semibold">
                  Your Order Builder is Empty
                </h3>
                <p className="text-xs text-reserve-cream-muted max-w-xs mx-auto">
                  Click on any cut, weight, or portion in our catalog to automatically populate your order here.
                </p>
                <button
                  onClick={closeDrawer}
                  className="px-5 py-2.5 rounded-full bg-reserve-gold text-reserve-emerald font-bold text-xs uppercase tracking-wider"
                >
                  Browse Artisanal Cuts
                </button>
              </div>
            ) : (
              <>
                {/* Selected Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-reserve-cream-muted uppercase tracking-wider">
                    <span>Selected Cuts ({items.length})</span>
                    <button
                      onClick={clearCart}
                      className="text-rose-400 hover:text-rose-300 font-medium flex items-center gap-1 normal-case text-xs"
                    >
                      <Trash2 className="w-3 h-3" /> Clear list
                    </button>
                  </div>

                  <div className="divide-y divide-white/10">
                    {items.map((item) => (
                      <div key={item.id} className="py-3.5 space-y-2">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-0.5">
                            <h4 className="font-serif text-base font-bold text-reserve-cream leading-tight">
                              {item.productName}
                            </h4>
                            <div className="flex flex-wrap items-center gap-2 text-[11px] text-reserve-cream-muted">
                              <span className="font-semibold text-reserve-gold">
                                {item.portionLabel}
                              </span>
                              <span>•</span>
                              <span
                                className={`px-1.5 py-0.2 rounded text-[10px] font-medium ${
                                  item.meatState === "Fresh"
                                    ? "bg-amber-500/20 text-amber-300"
                                    : "bg-cyan-500/20 text-cyan-300"
                                }`}
                              >
                                {item.meatState}
                              </span>
                              {item.customCutting && (
                                <>
                                  <span>•</span>
                                  <span className="text-reserve-gold-light italic">
                                    Cut: {item.customCutting}
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="text-right">
                            <span className="font-serif text-sm font-bold text-reserve-gold block">
                              {item.isSpecialty && "From "}
                              {formatNaira(item.unitPrice * item.quantity)}
                              {item.isSpecialty && "*"}
                            </span>
                            <span className="text-[10px] text-reserve-cream-muted block">
                              {formatNaira(item.unitPrice)} each
                            </span>
                          </div>
                        </div>

                        {/* Quantity and Remove buttons */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center gap-2 bg-reserve-emerald-dark px-2 py-1 rounded-lg border border-white/10">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 hover:text-reserve-gold transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold px-2">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 hover:text-reserve-gold transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-reserve-cream-muted/60 hover:text-rose-400 p-1"
                            title="Remove cut"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Delivery Option Toggle */}
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <label className="text-xs font-semibold uppercase tracking-wider text-reserve-cream-muted block">
                    Fulfilment Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "delivery" })}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        customer.deliveryType === "delivery"
                          ? "bg-reserve-gold text-reserve-emerald border-reserve-gold shadow-gold-glow"
                          : "bg-reserve-emerald-dark/80 text-reserve-cream-muted border-white/10 hover:border-white/20"
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Doorstep Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "pickup" })}
                      className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        customer.deliveryType === "pickup"
                          ? "bg-reserve-gold text-reserve-emerald border-reserve-gold shadow-gold-glow"
                          : "bg-reserve-emerald-dark/80 text-reserve-cream-muted border-white/10 hover:border-white/20"
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Adigbe Store Pickup (Free)</span>
                    </button>
                  </div>
                </div>

                {/* Abeokuta Delivery Zone Selector (if delivery chosen) */}
                {customer.deliveryType === "delivery" && (
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-reserve-cream-muted flex items-center justify-between">
                      <span>Abeokuta Delivery Zone:</span>
                      <span className="text-reserve-gold text-[11px] font-bold">
                        {selectedZone ? formatNaira(selectedZone.fee) : "Select Zone"}
                      </span>
                    </label>
                    <select
                      value={customer.deliveryZoneId}
                      onChange={(e) => updateCustomer({ deliveryZoneId: e.target.value })}
                      className="w-full bg-reserve-emerald-dark text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none font-medium"
                    >
                      {DELIVERY_ZONES.filter((z) => !z.isPickup).map((zone) => (
                        <option key={zone.id} value={zone.id} className="bg-reserve-emerald-dark">
                          {zone.name} — {formatNaira(zone.fee)} ({zone.estimatedTime})
                        </option>
                      ))}
                    </select>
                    {selectedZone && (
                      <p className="text-[11px] text-reserve-cream-muted/80 italic">
                        Coverage: {selectedZone.area}
                      </p>
                    )}
                  </div>
                )}

                {/* Customer Details Form (Optional on-site helpers) */}
                <div className="space-y-3 pt-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-reserve-cream-muted block">
                    Contact & Delivery Details (Optional):
                  </label>

                  <div className="space-y-2.5">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name (Optional)"
                        value={customer.fullName}
                        onChange={(e) => updateCustomer({ fullName: e.target.value })}
                        className="w-full bg-reserve-emerald-dark text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={customer.phone}
                        onChange={(e) => updateCustomer({ phone: e.target.value })}
                        className="w-full bg-reserve-emerald-dark text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50"
                      />
                    </div>

                    {customer.deliveryType === "delivery" && (
                      <div>
                        <input
                          type="text"
                          placeholder="Delivery Address / Closest Landmark (Optional)"
                          value={customer.deliveryAddress}
                          onChange={(e) => updateCustomer({ deliveryAddress: e.target.value })}
                          className="w-full bg-reserve-emerald-dark text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Custom Cutting Instructions */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-reserve-cream-muted flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-reserve-gold" />
                    <span>Special Cutting & Butchering Instructions:</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Cut beef into bite-sized stew chunks, pack intestines separately..."
                    value={customer.cuttingInstructions}
                    onChange={(e) => updateCustomer({ cuttingInstructions: e.target.value })}
                    className="w-full bg-reserve-emerald-dark text-reserve-cream text-xs rounded-xl p-3 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50"
                  />
                </div>

                {/* Specialty Item Disclaimer Notice if applicable */}
                {hasSpecialtyItems && (
                  <div className="p-3 rounded-xl bg-reserve-burgundy/40 border border-reserve-gold/30 flex items-start gap-2.5 text-xs text-reserve-gold-light">
                    <AlertTriangle className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      <strong>*Specialty Item Notice:</strong> Prices for Cow Head, Tail, and Leg are base rates. Exact final weight and pricing will be finalized with you on WhatsApp prior to butchering.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer / Direct Native WhatsApp Link */}
          {items.length > 0 && (
            <div className="p-5 sm:p-6 border-t border-white/15 bg-reserve-emerald space-y-4">
              {/* Financial Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-reserve-cream-muted">
                <div className="flex justify-between">
                  <span>Cuts Subtotal:</span>
                  <span className="font-semibold text-white">{formatNaira(subtotal)}</span>
                </div>

                {customer.deliveryType === "delivery" && selectedZone && (
                  <div className="flex justify-between">
                    <span>Delivery Fee ({selectedZone.name}):</span>
                    <span className="font-semibold text-white">{formatNaira(deliveryFee)}</span>
                  </div>
                )}

                {customer.deliveryType === "pickup" && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Self-Pickup at Adigbe:</span>
                    <span>FREE</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Estimated Total:</span>
                  <span className="font-serif text-2xl font-bold text-reserve-gold">
                    {formatNaira(totalWithDelivery)}
                  </span>
                </div>
              </div>

              {/* Main Green/Gold WhatsApp Order Action Link (Native <a> tag so it is never blocked) */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-900/50 hover:brightness-105 active:scale-98 transition-all border border-emerald-400/40 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Send Order to WhatsApp ({DISPLAY_PHONE_NUMBER})</span>
              </a>

              <div className="text-center">
                <p className="text-[11px] text-reserve-cream-muted/70 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-reserve-gold" />
                  <span>Opens WhatsApp directly with your verified cut breakdown.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
