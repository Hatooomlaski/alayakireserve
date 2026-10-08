"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProductItem, MeatState, PriceTier } from "@/types/store";
import { useOrder } from "@/context/OrderContext";
import { formatNaira } from "@/lib/utils";
import {
  ShieldCheck,
  Plus,
  Minus,
  Check,
  Snowflake,
  Sun,
  AlertCircle,
  Scissors,
  CheckCircle2,
  Scale,
} from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    incrementItem,
    decrementItem,
    getItemQuantity,
    getProductTotalQuantity,
    getProductSelectedItems,
    openDrawer,
  } = useOrder();

  // Selected portion/tier (default to 1kg for beef/offal, 1 Slot for goat)
  const defaultTierIndex =
    product.category === "beef" || product.category === "intestines" ? 1 : 0;
  const [selectedTier, setSelectedTier] = useState<PriceTier | undefined>(
    product.tiers && product.tiers.length > 0
      ? product.tiers[defaultTierIndex] || product.tiers[0]
      : undefined
  );

  // Selected meat state (Fresh vs Frozen)
  const [selectedState, setSelectedState] = useState<MeatState>(
    product.availableStates[0]
  );

  // Selected cut preference
  const [selectedCut, setSelectedCut] = useState<string>(
    product.cutOptions && product.cutOptions.length > 0 ? product.cutOptions[0] : ""
  );

  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const currentPortionLabel = product.isSpecialty
    ? `1 ${product.unitLabel || "Unit"}`
    : selectedTier
    ? selectedTier.weightLabel
    : "Standard Portion";

  const currentPrice = product.isSpecialty
    ? product.baseStartingPrice || 0
    : selectedTier
    ? selectedTier.price
    : 0;

  // Quantity of the CURRENT active combination in cart
  const currentItemQuantity = getItemQuantity(
    product.id,
    currentPortionLabel,
    selectedState
  );

  const totalOfThisProductInCart = getProductTotalQuantity(product.id);
  const selectedItemsOfThisProduct = getProductSelectedItems(product.id);

  const handleAddOne = () => {
    incrementItem(product, selectedTier, selectedState, selectedCut);
    setToastMessage(`Added ${selectedTier?.shortLabel || currentPortionLabel}!`);
    setTimeout(() => setToastMessage(null), 1600);
  };

  const handleRemoveOne = () => {
    decrementItem(product, selectedTier, selectedState, selectedCut);
  };

  return (
    <div className="group relative rounded-2xl bg-pristine border border-steel-border hover:border-steel-dark overflow-hidden shadow-pristine-sm hover:shadow-pristine-md transition-all duration-300 flex flex-col justify-between">
      {/* Top Media on Pure White Container for maximum appetite appeal */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-white border-b border-steel-border/60">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-104 transition-transform duration-500"
        />

        {/* Soft bottom vignette to keep price tag legible */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />

        {/* Top Badges (Pristine clean badges, non-red to maintain focus on CTAs) */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          {product.isBonelessGuaranteed ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-charcoal text-white text-[11px] font-extrabold tracking-wide shadow-md border border-charcoal-border">
              <span>🥩</span> 100% Boneless Pure Meat
            </span>
          ) : product.trustBadge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-charcoal/90 text-white text-[11px] font-semibold backdrop-blur-sm shadow-md">
              <ShieldCheck className="w-3.5 h-3.5 text-reserve-gold" />
              {product.trustBadge}
            </span>
          ) : (
            <span />
          )}

          {/* Yoruba cultural tag */}
          {product.yorubaName && (
            <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[10px] text-charcoal border border-steel-border font-bold tracking-wide shadow-sm">
              {product.yorubaName.split("(")[0].trim()}
            </span>
          )}
        </div>

        {/* Floating In-Order Indicator if already chosen */}
        {totalOfThisProductInCart > 0 && (
          <div className="absolute top-12 left-3 bg-charcoal text-white border border-charcoal-border px-3 py-1 rounded-lg text-xs font-bold shadow-md flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-3.5 h-3.5 text-whatsapp" />
            <span>{totalOfThisProductInCart} in Order</span>
          </div>
        )}

        {/* Floating Price Pill in bottom corner */}
        <div className="absolute bottom-3 right-3 bg-pristine border border-steel-border px-3.5 py-1.5 rounded-xl shadow-pristine-md">
          <div className="text-right">
            <span className="text-[10px] text-steel uppercase tracking-wider block font-semibold">
              {product.isSpecialty ? "Base Rate" : "Active Selection"}
            </span>
            <span className="font-sans text-base sm:text-lg font-extrabold text-charcoal">
              {product.isSpecialty && "From "}
              {formatNaira(currentPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4 bg-pristine">
        <div>
          {/* Title & Yoruba translation */}
          <div className="space-y-0.5">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal leading-snug group-hover:text-ruby transition-colors">
              {product.name}
            </h3>
            {product.yorubaName && (
              <p className="text-xs text-steel font-medium italic">
                {product.yorubaName}
              </p>
            )}
          </div>

          {/* Editorial Description */}
          <p className="mt-2 text-xs sm:text-[13px] text-steel font-normal leading-relaxed">
            {product.description}
          </p>

          {/* Specialty Sizing Disclaimer */}
          {product.isSpecialty && (
            <div className="mt-3 p-2.5 rounded-xl bg-steel-surface border border-steel-border flex items-start gap-2 text-[11px] text-charcoal leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-ruby" />
              <span>
                <strong>Starting rate notice:</strong> Final price depends on actual cow size upon butcher weigh-in, verified directly with you on WhatsApp.
              </span>
            </div>
          )}
        </div>

        {/* Interactive Portion & Weight Selection */}
        <div className="space-y-3 pt-3 border-t border-steel-border">
          {product.tiers && product.tiers.length > 0 && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <label className="text-[11px] uppercase tracking-wider text-charcoal font-bold truncate flex items-center gap-1">
                  <Scale className="w-3 h-3 text-steel" />
                  <span>Choose Portion / Share:</span>
                </label>
                <span className="text-xs text-charcoal font-bold truncate text-right flex-shrink-0">
                  {selectedTier?.weightLabel}
                </span>
              </div>
              <div
                className={`grid gap-2 ${
                  product.tiers.length === 3
                    ? "grid-cols-3"
                    : product.tiers.length === 4
                    ? "grid-cols-2 sm:grid-cols-4"
                    : "grid-cols-3 sm:grid-cols-5"
                }`}
              >
                {product.tiers.map((tier) => {
                  const isSelected = selectedTier?.weightLabel === tier.weightLabel;
                  const qtyForThisTier = getItemQuantity(
                    product.id,
                    tier.weightLabel,
                    selectedState
                  );

                  return (
                    <button
                      key={tier.weightLabel}
                      type="button"
                      onClick={() => setSelectedTier(tier)}
                      className={`relative w-full min-w-0 px-1 py-2.5 rounded-xl text-center flex flex-col items-center justify-center transition-all border overflow-hidden ${
                        isSelected
                          ? "bg-ruby text-white border-ruby shadow-ruby-glow font-bold"
                          : "bg-white text-charcoal border-steel-border hover:border-charcoal/40 hover:bg-steel-surface font-semibold"
                      }`}
                    >
                      <span className="block font-bold text-xs truncate max-w-full leading-tight">
                        {tier.shortLabel || tier.weightLabel}
                      </span>
                      {tier.subtitle && (
                        <span
                          className={`block text-[10px] truncate max-w-full leading-tight mt-0.5 ${
                            isSelected ? "text-white/80" : "text-steel"
                          }`}
                        >
                          {tier.subtitle}
                        </span>
                      )}
                      <span
                        className={`block text-[10px] font-extrabold truncate max-w-full mt-1 ${
                          isSelected ? "text-white" : "text-charcoal"
                        }`}
                      >
                        {formatNaira(tier.price)}
                      </span>
                      {qtyForThisTier > 0 && (
                        <span className="absolute top-1 right-1 min-w-[17px] h-[17px] px-0.5 rounded-full bg-charcoal text-white text-[9px] font-bold flex items-center justify-center border border-white shadow">
                          {qtyForThisTier}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Fresh vs Cold-Chain Frozen Toggle */}
          <div>
            <label className="text-[11px] uppercase tracking-wider text-charcoal block mb-2 font-bold">
              Processing & Storage State:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {product.availableStates.map((state) => {
                const isSelected = selectedState === state;
                return (
                  <button
                    key={state}
                    type="button"
                    onClick={() => setSelectedState(state)}
                    className={`min-h-[42px] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-bold border transition-all ${
                      isSelected
                        ? state === "Fresh"
                          ? "bg-amber-50 border-amber-400 text-amber-900 shadow-sm"
                          : "bg-cyan-50 border-cyan-400 text-cyan-900 shadow-sm"
                        : "bg-white border-steel-border text-steel hover:text-charcoal hover:border-steel-dark"
                    }`}
                  >
                    {state === "Fresh" ? (
                      <Sun className="w-3.5 h-3.5 text-amber-500" />
                    ) : (
                      <Snowflake className="w-3.5 h-3.5 text-cyan-500" />
                    )}
                    <span className="truncate">
                      {state === "Fresh" ? "Fresh (Friday Batch)" : "Frozen (In-Store Daily)"}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cutting Preference Selector */}
          {product.cutOptions && product.cutOptions.length > 0 && (
            <div>
              <label className="text-[11px] uppercase tracking-wider text-charcoal block mb-1.5 font-bold flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-steel" />
                <span>Custom Butcher Cut Style:</span>
              </label>
              <select
                value={selectedCut}
                onChange={(e) => setSelectedCut(e.target.value)}
                className="w-full bg-white text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none min-h-[42px]"
              >
                {product.cutOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-white text-charcoal">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Summary of items added for this product */}
          {selectedItemsOfThisProduct.length > 0 && (
            <div className="p-2.5 rounded-xl bg-steel-surface border border-steel-border text-[11px] space-y-1">
              <span className="text-charcoal font-bold block">Currently in your Order:</span>
              <div className="space-y-1 text-steel">
                {selectedItemsOfThisProduct.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-[10px]">
                    <span>• {item.portionLabel} ({item.meatState}) x{item.quantity}</span>
                    <span className="text-charcoal font-bold">{formatNaira(item.unitPrice * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Area: Either Add Button or Direct Thumb-Friendly Stepper Controls */}
          <div className="pt-1">
            {currentItemQuantity > 0 ? (
              <div className="space-y-2">
                {/* Thumb-friendly [ - ] Quantity [ + ] Stepper */}
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-steel-surface border border-steel-border">
                  <button
                    type="button"
                    onClick={handleRemoveOne}
                    className="w-11 h-11 rounded-lg bg-white border border-steel-border hover:bg-steel-border text-charcoal flex items-center justify-center transition-colors active:scale-95"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <div className="text-center px-2">
                    <span className="text-xs font-extrabold text-charcoal block">
                      {currentItemQuantity} in Order ({formatNaira(currentPrice * currentItemQuantity)})
                    </span>
                    <span className="text-[10px] text-steel">
                      {currentPortionLabel} • {selectedState}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddOne}
                    className="w-11 h-11 rounded-lg bg-ruby hover:bg-ruby-hover text-white flex items-center justify-center transition-colors shadow-ruby-glow active:scale-95"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={openDrawer}
                  className="w-full min-h-[40px] py-2 px-3 rounded-xl bg-charcoal hover:bg-charcoal-rich text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Review Order Builder</span>
                </button>
              </div>
            ) : (
              /* Deep Ruby Crimson Call To Action */
              <button
                onClick={handleAddOne}
                type="button"
                className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-ruby hover:bg-ruby-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-ruby-glow active:scale-98 transition-all"
              >
                {toastMessage ? (
                  <>
                    <Check className="w-4 h-4 text-white stroke-[3]" />
                    <span>{toastMessage}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-white stroke-[3] flex-shrink-0" />
                    <span className="truncate">
                      Add {selectedTier?.shortLabel || currentPortionLabel} ({formatNaira(currentPrice)})
                    </span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
