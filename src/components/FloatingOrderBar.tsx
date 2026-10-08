"use client";

import React from "react";
import { useOrder } from "@/context/OrderContext";
import { formatNaira } from "@/lib/utils";
import { Scale, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";

export default function FloatingOrderBar() {
  const {
    totalItemCount,
    totalEstimatedWeightKg,
    totalEstimatedSlots,
    subtotal,
    openDrawer,
    getWhatsAppOrderUrl,
  } = useOrder();

  if (totalItemCount === 0) return null;

  return (
    <aside
      aria-label="Live Order Summary"
      className="fixed bottom-0 left-0 right-0 z-40 bg-pristine border-t border-steel-border shadow-bottom-bar transition-all duration-300 animate-in slide-in-from-bottom"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-3.5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Left: Live Tally & Weight Accuracy Indicator */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-between sm:justify-start">
            <button
              type="button"
              onClick={openDrawer}
              className="flex items-center gap-2.5 text-left group"
              title="Click to review order breakdown"
            >
              <div className="w-10 h-10 rounded-xl bg-charcoal text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:bg-ruby transition-colors flex-shrink-0">
                <ShoppingBag className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs sm:text-sm font-extrabold text-charcoal">
                    Total Items: {totalItemCount}
                  </span>
                  <span className="text-steel-light hidden xs:inline">•</span>
                  <span className="text-xs sm:text-sm font-bold text-steel flex items-center gap-1">
                    <Scale className="w-3.5 h-3.5 text-ruby flex-shrink-0" />
                    <span>
                      Est. Weight:{" "}
                      {totalEstimatedWeightKg > 0
                        ? `${totalEstimatedWeightKg.toFixed(1)}kg`
                        : `${totalEstimatedSlots} Slot(s)`}
                    </span>
                  </span>
                </div>
                <div className="text-[11px] text-steel">
                  Accurately weighed to the gram • You pay for pure meat
                </div>
              </div>
            </button>

            {/* Subtotal preview on mobile */}
            <div className="sm:hidden text-right">
              <span className="text-[10px] text-steel uppercase tracking-wider block">
                Estimated Total
              </span>
              <span className="font-serif font-bold text-base text-charcoal">
                {formatNaira(subtotal)}
              </span>
            </div>
          </div>

          {/* Right: Subtotal + WhatsApp Green Action Button */}
          <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-end">
            <div className="hidden sm:block text-right pr-2">
              <span className="text-[10px] uppercase tracking-wider text-steel block font-semibold">
                Estimated Subtotal
              </span>
              <span className="font-serif text-lg font-bold text-charcoal">
                {formatNaira(subtotal)}
              </span>
            </div>

            {/* Quick Review Drawer Button */}
            <button
              type="button"
              onClick={openDrawer}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-steel-border bg-steel-surface hover:bg-steel-border text-charcoal text-xs font-bold transition-colors"
            >
              <span>Review Details</span>
            </button>

            {/* Official WhatsApp Green Checkout Button */}
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs sm:text-sm shadow-whatsapp-glow transition-all active:scale-98 whitespace-nowrap min-h-[44px]"
            >
              <MessageCircle className="w-4 h-4 fill-white flex-shrink-0" />
              <span>Send Order via WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
