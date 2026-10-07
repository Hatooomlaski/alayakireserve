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
  ShoppingBag,
} from "lucide-react";

interface ProductCardProps {
  product: ProductItem;
}

export default function ProductCard({ product }: ProductCardProps) {
  const {
    addItem,
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

  // Total items of this product across all portions in cart
  const totalOfThisProductInCart = getProductTotalQuantity(product.id);
  const selectedItemsOfThisProduct = getProductSelectedItems(product.id);

  const handleAddOne = () => {
    incrementItem(product, selectedTier, selectedState, selectedCut);
    setToastMessage(`Added ${currentPortionLabel}!`);
    setTimeout(() => setToastMessage(null), 1800);
  };

  const handleRemoveOne = () => {
    decrementItem(product, selectedTier, selectedState, selectedCut);
  };

  return (
    <div className="group relative rounded-2xl bg-card-gradient border border-reserve-gold/25 hover:border-reserve-gold/60 overflow-hidden shadow-luxury-md hover:shadow-luxury-lg transition-all duration-300 flex flex-col justify-between">
      {/* Top Media & Badges */}
      <div className="relative w-full h-56 sm:h-64 overflow-hidden bg-reserve-obsidian">
        <Image
          src={product.imageUrl}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-reserve-obsidian via-reserve-obsidian/30 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
          {product.isBonelessGuaranteed ? (
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-reserve-burgundy via-reserve-burgundy-light to-reserve-burgundy border border-reserve-gold text-reserve-gold-light text-[11px] font-bold shadow-gold-glow uppercase tracking-wider">
              <span>🥩</span> 100% Boneless Pure Meat
            </span>
          ) : product.trustBadge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-reserve-obsidian/90 border border-reserve-gold/40 text-reserve-gold text-[11px] font-medium backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-reserve-gold" />
              {product.trustBadge}
            </span>
          ) : (
            <span />
          )}

          {/* Yoruba cultural tag */}
          {product.yorubaName && (
            <span className="px-2.5 py-0.5 rounded-full bg-black/70 backdrop-blur-sm text-[10px] text-reserve-cream-muted border border-white/10 font-semibold tracking-wide">
              {product.yorubaName.split("(")[0].trim()}
            </span>
          )}
        </div>

        {/* Floating In-Order Indicator if already chosen */}
        {totalOfThisProductInCart > 0 && (
          <div className="absolute top-12 left-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white border border-emerald-300/40 px-3 py-1 rounded-lg text-xs font-bold shadow-lg backdrop-blur-md flex items-center gap-1.5 animate-in fade-in">
            <CheckCircle2 className="w-3.5 h-3.5 text-white" />
            <span>{totalOfThisProductInCart} in Order</span>
          </div>
        )}

        {/* Floating Price Pill in bottom corner of image */}
        <div className="absolute bottom-3 right-3 bg-reserve-obsidian/95 border border-reserve-gold/70 px-3.5 py-1.5 rounded-xl shadow-luxury-md backdrop-blur-md">
          <div className="text-right">
            <span className="text-[10px] text-reserve-cream-muted uppercase tracking-wider block font-medium">
              {product.isSpecialty ? "Base Rate" : "Active Selection"}
            </span>
            <span className="font-serif text-lg sm:text-xl font-bold text-reserve-gold-bright">
              {product.isSpecialty && "From "}
              {formatNaira(currentPrice)}
            </span>
          </div>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Title & Yoruba translation */}
          <div className="space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-reserve-cream leading-snug group-hover:text-reserve-gold transition-colors">
              {product.name}
            </h3>
            {product.yorubaName && (
              <p className="text-xs text-reserve-gold font-medium italic">
                {product.yorubaName}
              </p>
            )}
          </div>

          {/* Editorial Description */}
          <p className="mt-2 text-xs sm:text-sm text-reserve-cream-muted font-light leading-relaxed">
            {product.description}
          </p>

          {/* Specialty Sizing Disclaimer */}
          {product.isSpecialty && (
            <div className="mt-3 p-2.5 rounded-xl bg-reserve-burgundy/35 border border-reserve-gold/30 flex items-start gap-2 text-[11px] text-reserve-gold-light leading-relaxed">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-reserve-gold" />
              <span>
                <strong>Starting rate notice:</strong> Final exact price depends on actual cow weight upon butchering and is confirmed with you via WhatsApp.
              </span>
            </div>
          )}
        </div>

        {/* Interactive Portion / Weight Selection */}
        <div className="space-y-3 pt-3 border-t border-white/10">
          {product.tiers && product.tiers.length > 0 && (
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <label className="text-[11px] uppercase tracking-wider text-reserve-cream-muted font-semibold truncate">
                  Choose Portion / Share:
                </label>
                <span className="text-xs text-reserve-gold-bright font-bold truncate text-right flex-shrink-0">
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
                  const qtyForThisTier = getItemQuantity(product.id, tier.weightLabel, selectedState);
                  return (
                    <button
                      key={tier.weightLabel}
                      type="button"
                      onClick={() => setSelectedTier(tier)}
                      className={`relative w-full min-w-0 px-1 py-2.5 rounded-xl text-center flex flex-col items-center justify-center transition-all border overflow-hidden ${
                        isSelected
                          ? "bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian border-reserve-gold shadow-gold-glow font-bold"
                          : "bg-reserve-obsidian/80 text-reserve-cream-muted border-white/10 hover:border-reserve-gold/40 hover:text-white"
                      }`}
                    >
                      <span className="block font-bold text-xs truncate max-w-full leading-tight">
                        {tier.shortLabel || tier.weightLabel}
                      </span>
                      {tier.subtitle && (
                        <span
                          className={`block text-[10px] truncate max-w-full leading-tight mt-0.5 ${
                            isSelected
                              ? "text-reserve-obsidian/85 font-medium"
                              : "text-reserve-cream-muted/70"
                          }`}
                        >
                          {tier.subtitle}
                        </span>
                      )}
                      <span
                        className={`block text-[10px] font-bold truncate max-w-full mt-1 ${
                          isSelected ? "text-reserve-obsidian" : "text-reserve-gold-bright"
                        }`}
                      >
                        {formatNaira(tier.price)}
                      </span>
                      {qtyForThisTier > 0 && (
                        <span className="absolute top-1 right-1 min-w-[17px] h-[17px] px-0.5 rounded-full bg-emerald-500 text-white text-[9px] font-bold flex items-center justify-center border border-reserve-obsidian shadow">
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
            <label className="text-[11px] uppercase tracking-wider text-reserve-cream-muted block mb-2 font-semibold">
              Meat State:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {product.availableStates.map((state) => {
                const isSelected = selectedState === state;
                return (
                  <button
                    key={state}
                    type="button"
                    onClick={() => setSelectedState(state)}
                    className={`min-h-[42px] flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-xl text-xs font-semibold border transition-all ${
                      isSelected
                        ? state === "Fresh"
                          ? "bg-amber-500/20 border-reserve-gold text-reserve-gold-bright shadow-sm"
                          : "bg-cyan-500/20 border-cyan-400 text-cyan-200 shadow-sm"
                        : "bg-reserve-obsidian/80 border-white/10 text-reserve-cream-muted hover:border-white/20"
                    }`}
                  >
                    {state === "Fresh" ? (
                      <Sun className="w-3.5 h-3.5 text-amber-400" />
                    ) : (
                      <Snowflake className="w-3.5 h-3.5 text-cyan-300" />
                    )}
                    <span className="truncate">{state === "Fresh" ? "Fresh (Friday)" : "Frozen (In-Store)"}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cutting Preference Selector */}
          {product.cutOptions && product.cutOptions.length > 0 && (
            <div>
              <label className="text-[11px] uppercase tracking-wider text-reserve-cream-muted block mb-1.5 font-semibold flex items-center gap-1">
                <Scissors className="w-3.5 h-3.5 text-reserve-gold" />
                <span>Custom Butcher Cut Style:</span>
              </label>
              <select
                value={selectedCut}
                onChange={(e) => setSelectedCut(e.target.value)}
                className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
              >
                {product.cutOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-reserve-obsidian text-white">
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Summary of what has been added for this product */}
          {selectedItemsOfThisProduct.length > 0 && (
            <div className="p-2.5 rounded-xl bg-reserve-obsidian/90 border border-reserve-gold/25 text-[11px] space-y-1">
              <span className="text-reserve-gold-bright font-bold block">Currently in your Order:</span>
              <div className="space-y-1 text-reserve-cream-muted">
                {selectedItemsOfThisProduct.map((item) => (
                  <div key={item.id} className="flex justify-between items-center text-[10px]">
                    <span>• {item.portionLabel} ({item.meatState}) x{item.quantity}</span>
                    <span className="text-white font-bold">{formatNaira(item.unitPrice * item.quantity)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Area: Either Add Button or Direct Quantity Controller */}
          <div className="pt-1">
            {currentItemQuantity > 0 ? (
              <div className="space-y-2">
                <div className="flex items-center justify-between p-1.5 rounded-xl bg-reserve-obsidian border-2 border-reserve-gold shadow-gold-glow">
                  <button
                    type="button"
                    onClick={handleRemoveOne}
                    className="w-10 h-10 rounded-lg bg-white/10 hover:bg-reserve-burgundy flex items-center justify-center text-white transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>

                  <div className="text-center px-2">
                    <span className="text-xs font-bold text-reserve-gold-bright block">
                      {currentItemQuantity} in Order ({formatNaira(currentPrice * currentItemQuantity)})
                    </span>
                    <span className="text-[10px] text-reserve-cream-muted">
                      {currentPortionLabel} • {selectedState}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleAddOne}
                    className="w-10 h-10 rounded-lg bg-gradient-to-r from-reserve-gold-bright to-reserve-gold text-reserve-obsidian font-bold flex items-center justify-center transition-colors shadow-sm"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4 stroke-[3]" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={openDrawer}
                  className="w-full min-h-[40px] py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-reserve-gold-bright text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-reserve-gold/30"
                >
                  <ShoppingBag className="w-3.5 h-3.5 text-reserve-gold" />
                  <span>Review Order Builder</span>
                </button>
              </div>
            ) : (
              <button
                onClick={handleAddOne}
                type="button"
                className="w-full min-h-[46px] py-3 px-4 rounded-xl bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark hover:brightness-110 text-reserve-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow active:scale-98 transition-all"
              >
                {toastMessage ? (
                  <>
                    <Check className="w-4 h-4 text-reserve-obsidian stroke-[3]" />
                    <span>{toastMessage}</span>
                  </>
                ) : (
                  <>
                    <Plus className="w-4 h-4 text-reserve-obsidian stroke-[3] flex-shrink-0" />
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
