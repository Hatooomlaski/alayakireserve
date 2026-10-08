"use client";

import React, { useState } from "react";
import { PRODUCTS } from "@/config/products";
import { ProductCategory } from "@/types/store";
import ProductCard from "./ProductCard";
import WholesaleTable from "./WholesaleTable";
import FloatingOrderBar from "./FloatingOrderBar";
import { Sparkles, Utensils, Building2, ShoppingBag } from "lucide-react";
import { useOrder } from "@/context/OrderContext";

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
  const [activeMode, setActiveMode] = useState<"retail" | "wholesale">("retail");
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("all");
  const { totalItemCount } = useOrder();

  const filteredProducts =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <section
      id="catalog"
      className="py-14 sm:py-20 lg:py-24 bg-pristine relative border-t border-steel-border pb-32 sm:pb-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-surface border border-steel-border text-charcoal text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-ruby" />
            <span>Artisanal Catalog & Live Portion Calculator</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            The Reserve Butchery Selection
          </h2>
          <p className="text-steel text-sm sm:text-base font-normal max-w-xl mx-auto">
            Choose your cuts below. Pure sanctuary white packaging, accurate weigh-in to the gram, and immediate dispatch direct to WhatsApp.
          </p>

          {/* DUAL-MODE TOGGLE (Home Cook / Foodie vs Wholesale / Restaurant) */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-steel-surface border border-steel-border shadow-pristine-sm max-w-md w-full">
              <button
                type="button"
                onClick={() => setActiveMode("retail")}
                className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeMode === "retail"
                    ? "bg-charcoal text-white shadow-md"
                    : "text-steel hover:text-charcoal"
                }`}
              >
                <Utensils className="w-4 h-4 text-ruby" />
                <span>Home Cook & Foodie</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveMode("wholesale")}
                className={`flex-1 py-2.5 px-3 sm:px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  activeMode === "wholesale"
                    ? "bg-charcoal text-white shadow-md"
                    : "text-steel hover:text-charcoal"
                }`}
              >
                <Building2 className="w-4 h-4 text-ruby" />
                <span>Wholesale & Chef Mode</span>
              </button>
            </div>
          </div>
        </div>

        {/* CONDITIONALLY RENDER: RETAIL CATALOG vs WHOLESALE SPREADSHEET */}
        {activeMode === "retail" ? (
          <>
            {/* Filter Chips Bar (Home Cook Mode) */}
            <div className="mt-8 sm:mt-10 flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
              {FILTERS.map((f) => {
                const isActive = activeCategory === f.category;
                return (
                  <button
                    key={f.category}
                    type="button"
                    onClick={() => setActiveCategory(f.category)}
                    className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all border min-h-[42px] ${
                      isActive
                        ? "bg-charcoal text-white border-charcoal shadow-md"
                        : "bg-white text-steel border-steel-border hover:border-steel-dark hover:text-charcoal"
                    }`}
                  >
                    <span>{f.label}</span>
                    {f.badge && (
                      <span
                        className={`text-[10px] px-2 py-0.5 rounded-full font-extrabold uppercase tracking-wider ${
                          isActive
                            ? "bg-ruby text-white"
                            : "bg-steel-surface text-charcoal border border-steel-border"
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
          </>
        ) : (
          /* High-density Wholesale & Restaurant Ordering Table */
          <WholesaleTable />
        )}
      </div>

      {/* Floating Live Order Summary Bar */}
      <FloatingOrderBar />
    </section>
  );
}
