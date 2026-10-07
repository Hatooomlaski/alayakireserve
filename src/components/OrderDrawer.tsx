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
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Slide-over panel: Full width on mobile, max-w-lg on desktop */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-lg bg-card-gradient border-l border-reserve-gold/30 shadow-luxury-lg flex flex-col justify-between text-reserve-cream">
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-reserve-obsidian">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-reserve-gold-bright to-reserve-gold text-reserve-obsidian flex items-center justify-center shadow-gold-glow flex-shrink-0">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-reserve-cream">
                  Bespoke WhatsApp Order
                </h2>
                <p className="text-[11px] text-reserve-gold font-semibold">
                  Alayaki Reserve • Direct Dispatch Desk
                </p>
              </div>
            </div>

            <button
              onClick={closeDrawer}
              className="w-10 h-10 rounded-xl text-reserve-cream-muted hover:text-white hover:bg-white/10 flex items-center justify-center transition-colors"
              aria-label="Close drawer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Drawer Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
            {/* Empty State */}
            {items.length === 0 ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/5 border border-reserve-gold/30 flex items-center justify-center text-reserve-gold-bright shadow-inner">
                  <ShoppingBag className="w-8 h-8 opacity-80" />
                </div>
                <h3 className="font-serif text-2xl text-reserve-cream font-bold">
                  Your Order Builder is Empty
                </h3>
                <p className="text-xs sm:text-sm text-reserve-cream-muted max-w-xs mx-auto leading-relaxed">
                  Select your preferred portions and cuts from our catalog to instantly populate your verified order here.
                </p>
                <button
                  type="button"
                  onClick={closeDrawer}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-reserve-gold-bright to-reserve-gold text-reserve-obsidian font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                >
                  Browse Artisanal Cuts
                </button>
              </div>
            ) : (
              <>
                {/* Selected Items List */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-reserve-cream-muted uppercase tracking-wider font-semibold">
                    <span>Selected Cuts ({items.length})</span>
                    <button
                      type="button"
                      onClick={clearCart}
                      className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 normal-case text-xs transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" /> Clear list
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {items.map((item) => (
                      <div key={item.id} className="p-3.5 rounded-xl bg-reserve-obsidian/85 border border-white/10 space-y-2.5">
                        <div className="flex items-start justify-between gap-3">
                          <div className="space-y-1">
                            <h4 className="font-serif text-base sm:text-lg font-bold text-reserve-cream leading-snug">
                              {item.productName}
                            </h4>
                            <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-reserve-cream-muted">
                              <span className="font-bold text-reserve-gold-bright">
                                {item.portionLabel}
                              </span>
                              <span>•</span>
                              <span
                                className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                  item.meatState === "Fresh"
                                    ? "bg-amber-500/20 text-amber-300 border border-amber-400/30"
                                    : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
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

                          <div className="text-right flex-shrink-0">
                            <span className="font-serif text-base font-bold text-reserve-gold-bright block">
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
                        <div className="flex items-center justify-between pt-1 border-t border-white/5">
                          <div className="flex items-center gap-1 bg-reserve-obsidian px-1.5 py-1 rounded-lg border border-white/10">
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-7 h-7 rounded-md hover:bg-white/10 text-reserve-cream flex items-center justify-center transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <span className="text-xs font-bold px-2.5 min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-7 h-7 rounded-md bg-reserve-gold/20 hover:bg-reserve-gold text-reserve-gold hover:text-reserve-obsidian flex items-center justify-center transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <button
                            type="button"
                            onClick={() => removeItem(item.id)}
                            className="text-xs text-rose-400/80 hover:text-rose-400 p-1 flex items-center gap-1 transition-colors"
                            title="Remove cut"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            <span className="text-[11px]">Remove</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fulfilment Option Toggle */}
                <div className="pt-4 border-t border-white/10 space-y-2.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-reserve-cream-muted block">
                    Fulfilment Preference:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "delivery" })}
                      className={`min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        customer.deliveryType === "delivery"
                          ? "bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian border-reserve-gold shadow-gold-glow"
                          : "bg-reserve-obsidian/85 text-reserve-cream-muted border-white/10 hover:border-white/20"
                      }`}
                    >
                      <Truck className="w-4 h-4" />
                      <span>Doorstep Delivery</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => updateCustomer({ deliveryType: "pickup" })}
                      className={`min-h-[44px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold border transition-all ${
                        customer.deliveryType === "pickup"
                          ? "bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian border-reserve-gold shadow-gold-glow"
                          : "bg-reserve-obsidian/85 text-reserve-cream-muted border-white/10 hover:border-white/20"
                      }`}
                    >
                      <Store className="w-4 h-4" />
                      <span>Adigbe Pickup (Free)</span>
                    </button>
                  </div>
                </div>

                {/* Abeokuta Delivery Zone Selector (if delivery chosen) */}
                {customer.deliveryType === "delivery" && (
                  <div className="space-y-2 bg-reserve-obsidian/80 p-3 rounded-xl border border-white/10">
                    <label className="text-xs font-bold uppercase tracking-wider text-reserve-cream-muted flex items-center justify-between">
                      <span>Abeokuta Delivery Zone:</span>
                      <span className="text-reserve-gold-bright text-xs font-bold">
                        {selectedZone ? formatNaira(selectedZone.fee) : "Select Zone"}
                      </span>
                    </label>
                    <select
                      value={customer.deliveryZoneId}
                      onChange={(e) => updateCustomer({ deliveryZoneId: e.target.value })}
                      className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none font-medium min-h-[42px]"
                    >
                      {DELIVERY_ZONES.filter((z) => !z.isPickup).map((zone) => (
                        <option key={zone.id} value={zone.id} className="bg-reserve-obsidian">
                          {zone.name} — {formatNaira(zone.fee)} ({zone.estimatedTime})
                        </option>
                      ))}
                    </select>
                    {selectedZone && (
                      <p className="text-[11px] text-reserve-cream-muted/90 italic">
                        Coverage: {selectedZone.area}
                      </p>
                    )}
                  </div>
                )}

                {/* Customer Details Form (Optional on-site helpers) */}
                <div className="space-y-2.5 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-reserve-cream-muted block">
                    Contact & Delivery Details (Optional):
                  </label>

                  <div className="space-y-2">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name (Optional)"
                        value={customer.fullName}
                        onChange={(e) => updateCustomer({ fullName: e.target.value })}
                        className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50 min-h-[42px]"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        placeholder="Phone Number (Optional)"
                        value={customer.phone}
                        onChange={(e) => updateCustomer({ phone: e.target.value })}
                        className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50 min-h-[42px]"
                      />
                    </div>

                    {customer.deliveryType === "delivery" && (
                      <div>
                        <input
                          type="text"
                          placeholder="Delivery Address / Closest Landmark (Optional)"
                          value={customer.deliveryAddress}
                          onChange={(e) => updateCustomer({ deliveryAddress: e.target.value })}
                          className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50 min-h-[42px]"
                        />
                      </div>
                    )}
                  </div>
                </div>

                {/* Custom Cutting Instructions */}
                <div className="space-y-2 pt-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-reserve-cream-muted flex items-center gap-1.5">
                    <Scissors className="w-3.5 h-3.5 text-reserve-gold" />
                    <span>Special Cutting & Butchering Instructions:</span>
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Cut beef into bite-sized stew chunks, pack intestines separately..."
                    value={customer.cuttingInstructions}
                    onChange={(e) => updateCustomer({ cuttingInstructions: e.target.value })}
                    className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl p-3 border border-white/15 focus:border-reserve-gold focus:outline-none placeholder:text-reserve-cream-muted/50"
                  />
                </div>

                {/* Specialty Item Disclaimer Notice if applicable */}
                {hasSpecialtyItems && (
                  <div className="p-3.5 rounded-xl bg-reserve-burgundy/40 border border-reserve-gold/40 flex items-start gap-2.5 text-xs text-reserve-gold-light leading-relaxed">
                    <AlertTriangle className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                    <p>
                      <strong>*Specialty Item Notice:</strong> Prices for Cow Head, Tail, and Leg are base rates. Exact final weight and pricing will be finalized with you on WhatsApp prior to butchering.
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Drawer Footer / Direct Native WhatsApp Link */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-white/15 bg-reserve-obsidian space-y-3.5">
              {/* Financial Calculation Breakdown */}
              <div className="space-y-1.5 text-xs text-reserve-cream-muted">
                <div className="flex justify-between">
                  <span>Cuts Subtotal:</span>
                  <span className="font-bold text-white">{formatNaira(subtotal)}</span>
                </div>

                {customer.deliveryType === "delivery" && selectedZone && (
                  <div className="flex justify-between">
                    <span>Delivery Fee ({selectedZone.name}):</span>
                    <span className="font-bold text-white">{formatNaira(deliveryFee)}</span>
                  </div>
                )}

                {customer.deliveryType === "pickup" && (
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>Self-Pickup at Adigbe Store:</span>
                    <span>FREE</span>
                  </div>
                )}

                <div className="pt-2 border-t border-white/10 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Estimated Total:</span>
                  <span className="font-serif text-2xl font-bold text-reserve-gold-bright">
                    {formatNaira(totalWithDelivery)}
                  </span>
                </div>
              </div>

              {/* Main Green/Gold WhatsApp Order Action Link */}
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 sm:py-4 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:brightness-110 text-white font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-lg shadow-emerald-950/70 active:scale-98 transition-all border border-emerald-400/50 text-center"
              >
                <MessageCircle className="w-5 h-5 fill-white text-emerald-600" />
                <span>Send Order to WhatsApp ({DISPLAY_PHONE_NUMBER})</span>
              </a>

              <div className="text-center">
                <p className="text-[11px] text-reserve-cream-muted/80 flex items-center justify-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-reserve-gold" />
                  <span>Opens WhatsApp directly with your verified cuts & instructions.</span>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
