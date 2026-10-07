"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/config/products";
import { ProductCategory } from "@/types/store";
import ProductCard from "./ProductCard";
import { Sparkles, ShoppingBag, MessageCircle, ArrowRight } from "lucide-react";
import { useOrder } from "@/context/OrderContext";
import { formatNaira } from "@/lib/utils";

interface FilterOption {
  label: string;
  category: ProductCategory;
  badge?: string;
}

const FILTERS: FilterOption[] = [
  { label: "All Artisanal Cuts", category: "all" },
  { label: "Boneless Beef (100% Pure)", category: "beef", badge: "Guaranteed" },
  { label: "Assorted Intestines (Inu Eran)", category: "intestines" },
  { label: "Specialty Cow Cuts (Ori/Iru/Bokoto)", category: "specialty" },
  { label: "Ogufe Goat Meat", category: "goat" },
];

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const { totalItemCount, subtotal, openDrawer, getWhatsAppOrderUrl } = useOrder();

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-14 sm:py-20 lg:py-24 bg-obsidian-gradient relative border-t border-reserve-gold/20 pb-28 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-reserve-gold/10 border border-reserve-gold/30 text-reserve-gold-bright text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Luxury Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream">
            The Reserve Butchery Selection
          </h2>
          <p className="text-reserve-cream-muted text-sm sm:text-base font-light max-w-xl mx-auto">
            Choose your desired portions below. Your bespoke order compiles automatically in real-time, ready to dispatch directly to WhatsApp for priority preparation.
          </p>
        </div>

        {/* Filter Chips Bar (Optimized for smooth mobile touch swipe) */}
        <div className="mt-8 sm:mt-10 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
          {FILTERS.map((f) => {
            const isActive = activeCategory === f.category;
            return (
              <button
                key={f.category}
                type="button"
                onClick={() => setActiveCategory(f.category)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all border min-h-[42px] ${
                  isActive
                    ? "bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian border-reserve-gold font-bold shadow-gold-glow scale-102"
                    : "bg-reserve-obsidian/80 text-reserve-cream-muted border-white/10 hover:border-reserve-gold/40 hover:text-white"
                }`}
              >
                <span>{f.label}</span>
                {f.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      isActive
                        ? "bg-reserve-burgundy text-white"
                        : "bg-reserve-burgundy/80 text-reserve-gold-light"
                    }`}
                  >
                    {f.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Products Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Persistent Floating Bottom Bar across the screen when items are chosen */}
      {totalItemCount > 0 && (
        <div className="fixed bottom-3 left-3 right-3 sm:left-auto sm:right-6 sm:max-w-md z-40 animate-in fade-in slide-in-from-bottom duration-300">
          <div className="bg-reserve-obsidian/95 border-2 border-reserve-gold p-3 sm:p-3.5 rounded-2xl shadow-luxury-lg backdrop-blur-xl flex items-center justify-between gap-3 text-reserve-cream">
            <button
              type="button"
              onClick={openDrawer}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-reserve-gold-bright to-reserve-gold text-reserve-obsidian flex items-center justify-center font-bold text-sm shadow-gold-glow group-hover:scale-105 transition-transform flex-shrink-0">
                {totalItemCount}
              </div>
              <div className="min-w-0">
                <div className="text-[11px] text-reserve-cream-muted flex items-center gap-1 font-medium truncate">
                  <span>{totalItemCount} {totalItemCount === 1 ? "cut" : "cuts"} chosen</span>
                  <span className="text-reserve-gold-bright underline text-[10px]">(View)</span>
                </div>
                <div className="font-serif text-base sm:text-lg font-bold text-reserve-gold-bright leading-tight truncate">
                  {formatNaira(subtotal)}
                </div>
              </div>
            </button>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                type="button"
                onClick={openDrawer}
                className="px-3 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold text-white transition-colors hidden sm:block"
              >
                Review
              </button>

              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 sm:px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-600 hover:brightness-110 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-1.5 transition-all active:scale-95 border border-emerald-400/50"
              >
                <MessageCircle className="w-4 h-4 fill-white text-emerald-600" />
                <span className="hidden xs:inline sm:inline">Order on WhatsApp</span>
                <span className="xs:hidden sm:hidden">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
