"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/config/products";
import { ProductCategory } from "@/types/store";
import ProductCard from "./ProductCard";
import { Sparkles, ShoppingBag, ShieldCheck } from "lucide-react";
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
  const { totalItemCount, subtotal, openDrawer } = useOrder();

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section id="catalog" className="py-16 md:py-24 bg-reserve-emerald relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-reserve-gold/10 border border-reserve-gold/30 text-reserve-gold text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Luxury Catalog</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream">
            The Reserve Butchery Selection
          </h2>
          <p className="text-reserve-cream-muted text-sm sm:text-base font-light">
            Every cut is inspected by certified veterinarians, prepared in hygienic cold-chain environments, and customized to your exact stew, pepper soup, or roasting preference.
          </p>
        </div>

        {/* Filter Chips Bar */}
        <div className="mt-10 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {FILTERS.map((f) => {
            const isActive = activeCategory === f.category;
            return (
              <button
                key={f.category}
                type="button"
                onClick={() => setActiveCategory(f.category)}
                className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all border ${
                  isActive
                    ? "bg-reserve-gold text-reserve-emerald border-reserve-gold font-bold shadow-gold-glow"
                    : "bg-reserve-emerald-surface/80 text-reserve-cream-muted border-white/10 hover:border-reserve-gold/40 hover:text-white"
                }`}
              >
                <span>{f.label}</span>
                {f.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                      isActive
                        ? "bg-reserve-burgundy text-white"
                        : "bg-reserve-burgundy/60 text-reserve-gold-light"
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

        {/* Floating Cart Indicator when items are added */}
        {totalItemCount > 0 && (
          <div className="sticky bottom-6 z-30 mt-10 max-w-xl mx-auto">
            <div className="bg-reserve-emerald-surface/95 border-2 border-reserve-gold p-3.5 sm:p-4 rounded-2xl shadow-gold-glow-lg backdrop-blur-md flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-reserve-gold/20 border border-reserve-gold flex items-center justify-center text-reserve-gold font-bold">
                  {totalItemCount}
                </div>
                <div>
                  <div className="text-xs text-reserve-cream-muted">
                    {totalItemCount} {totalItemCount === 1 ? "cut" : "cuts"} in Order Builder
                  </div>
                  <div className="font-serif text-lg font-bold text-reserve-gold">
                    Subtotal: {formatNaira(subtotal)}
                  </div>
                </div>
              </div>

              <button
                onClick={openDrawer}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-reserve-gold to-reserve-gold-dark text-reserve-emerald font-bold text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Review WhatsApp Order</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
