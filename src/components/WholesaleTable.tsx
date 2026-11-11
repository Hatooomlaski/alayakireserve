"use client";

import React, { useEffect, useRef, useState } from "react";
import { useOrder } from "@/context/OrderContext";
import { formatNaira } from "@/lib/utils";
import {
  Building2,
  Plus,
  Minus,
  CheckCircle2,
  Truck,
  Scale,
  Sparkles,
  Sun,
  Snowflake,
  ShoppingBag,
} from "lucide-react";
import { MeatState, ProductItem, WholesaleItem } from "@/types/store";
import { PRODUCTS } from "@/config/products";
import { WHOLESALE_ITEMS } from "@/config/wholesale";
import { wholesaleTier } from "@/lib/pricing";

interface WholesaleRow extends WholesaleItem {
  product: ProductItem;
  isSpecialty: boolean;
  /** Weight shown in the table and batch total (net weight or estimate). */
  displayWeightKg: number;
  availableStates: MeatState[];
  state: MeatState;
  quantity: number;
}

function buildInitialRows(): WholesaleRow[] {
  return WHOLESALE_ITEMS.flatMap((item) => {
    const product = PRODUCTS.find((p) => p.id === item.productId);
    if (!product) return [];
    const availableStates = product.availableStates;
    return [
      {
        ...item,
        product,
        isSpecialty: product.isSpecialty,
        displayWeightKg: item.weightKg ?? item.estimatedWeightKg ?? 0,
        availableStates,
        state: availableStates.includes(item.defaultState)
          ? item.defaultState
          : availableStates[0],
        quantity: 0,
      },
    ];
  });
}

export default function WholesaleTable() {
  const { addItem, openDrawer } = useOrder();
  const [itemsState, setItemsState] = useState<WholesaleRow[]>(buildInitialRows);
  const [addedSuccess, setAddedSuccess] = useState(false);
  const successTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (successTimer.current) clearTimeout(successTimer.current);
    };
  }, []);

  const handleQtyChange = (index: number, delta: number) => {
    setItemsState((prev) =>
      prev.map((item, idx) => {
        if (idx !== index) return item;
        const newQty = Math.max(0, item.quantity + delta);
        return { ...item, quantity: newQty };
      })
    );
  };

  const handleStateToggle = (index: number, state: MeatState) => {
    setItemsState((prev) =>
      prev.map((item, idx) => (idx === index ? { ...item, state } : item))
    );
  };

  const totalSelectedUnits = itemsState.reduce((sum, i) => sum + i.quantity, 0);
  const totalWholesaleWeightKg = itemsState.reduce(
    (sum, i) => sum + i.displayWeightKg * i.quantity,
    0
  );
  const totalWholesaleSubtotal = itemsState.reduce(
    (sum, i) => sum + i.price * i.quantity,
    0
  );

  const handleAddAllToOrder = () => {
    const selected = itemsState.filter((i) => i.quantity > 0);
    if (selected.length === 0) return;

    selected.forEach((row) => {
      // The row's own pack price is used, specialty packs included.
      const tier = wholesaleTier(row);
      for (let q = 0; q < row.quantity; q++) {
        addItem(row.product, tier, row.state, "Wholesale Commercial Prep");
      }
    });

    // Clear the matrix so a second click can't add the same selection twice.
    setItemsState(buildInitialRows());

    setAddedSuccess(true);
    if (successTimer.current) clearTimeout(successTimer.current);
    successTimer.current = setTimeout(() => {
      setAddedSuccess(false);
      openDrawer();
    }, 800);
  };

  return (
    <div className="mt-8 bg-pristine border border-steel-border rounded-2xl shadow-pristine-md overflow-hidden">
      {/* Top Banner for Wholesale Spreadsheet */}
      <div className="bg-charcoal text-white p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-ruby text-white text-[10px] font-extrabold uppercase tracking-wider mb-1.5">
            <Building2 className="w-3 h-3" />
            <span>High-Density Commercial Matrix</span>
          </div>
          <h3 className="font-serif text-xl sm:text-2xl font-bold">
            Wholesale & Commercial Kitchen Order Matrix
          </h3>
          <p className="text-xs sm:text-sm text-steel-light font-normal">
            For Abeokuta restaurants, hotels, caterers, and bulk family freezers. Accurately weighed and packed in food-grade packaging.
          </p>
        </div>

        {/* Live Wholesale Matrix Summary Pill */}
        <div className="bg-charcoal-rich border border-charcoal-border rounded-xl p-3 flex items-center gap-4 text-xs">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-steel-light block">
              Est. Batch Weight
            </span>
            <span className="font-bold text-sm sm:text-base text-white flex items-center gap-1">
              <Scale className="w-4 h-4 text-ruby" />
              {totalWholesaleWeightKg.toFixed(1)} kg
            </span>
          </div>
          <div className="h-8 w-px bg-charcoal-border" />
          <div>
            <span className="text-[10px] uppercase tracking-wider text-steel-light block">
              Estimated Total
            </span>
            <span className="font-serif font-bold text-sm sm:text-base text-reserve-gold-bright">
              {formatNaira(totalWholesaleSubtotal)}
            </span>
          </div>
        </div>
      </div>

      {/* Spreadsheet Grid Table (Mobile-Responsive Card Table) */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-steel-surface border-b border-steel-border text-[11px] uppercase tracking-wider text-charcoal font-bold">
              <th className="py-3 px-4 sm:px-6">Wholesale Item & Specification</th>
              <th className="py-3 px-3 text-center">Weight</th>
              <th className="py-3 px-3 text-center">State</th>
              <th className="py-3 px-3 text-right">Unit Rate</th>
              <th className="py-3 px-4 sm:px-6 text-center min-w-[140px]">Quantity</th>
              <th className="py-3 px-4 text-right">Row Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-steel-border text-xs sm:text-sm">
            {itemsState.map((row, index) => {
              const rowTotal = row.price * row.quantity;
              const hasQty = row.quantity > 0;

              return (
                <tr
                  key={row.id}
                  className={`transition-colors ${
                    hasQty ? "bg-ruby-subtle/50" : "hover:bg-pristine-muted"
                  }`}
                >
                  {/* Name & Specification */}
                  <td className="py-3.5 px-4 sm:px-6">
                    <div className="font-bold text-charcoal">{row.name}</div>
                    <div className="text-[11px] text-steel font-normal mt-0.5 line-clamp-1">
                      {row.specification}
                    </div>
                    {row.isSpecialty && (
                      <span className="inline-block mt-1 text-[10px] font-bold text-ruby">
                        *Base rate (final sizing confirmed)
                      </span>
                    )}
                  </td>

                  {/* Weight */}
                  <td className="py-3.5 px-3 text-center font-bold text-charcoal whitespace-nowrap">
                    {row.slots ? (
                      <>
                        {row.slots} Slots
                        {row.estimatedWeightKg && (
                          <span className="block text-[10px] font-normal text-steel">
                            ~{row.estimatedWeightKg} kg
                          </span>
                        )}
                      </>
                    ) : row.weightKg ? (
                      `${row.weightKg} kg`
                    ) : (
                      `~${row.displayWeightKg} kg`
                    )}
                  </td>

                  {/* State Toggle (only states this product is actually sold in) */}
                  <td className="py-3.5 px-3 text-center whitespace-nowrap">
                    <div className="inline-flex rounded-lg border border-steel-border bg-pristine p-0.5">
                      {row.availableStates.map((state) => {
                        const isSelected = row.state === state;
                        const isFresh = state === "Fresh";
                        return (
                          <button
                            key={state}
                            type="button"
                            onClick={() => handleStateToggle(index, state)}
                            aria-pressed={isSelected}
                            className={`px-2 py-1 rounded text-[10px] font-bold transition-colors flex items-center gap-1 ${
                              isSelected
                                ? isFresh
                                  ? "bg-amber-100 text-amber-900 font-extrabold"
                                  : "bg-cyan-100 text-cyan-900 font-extrabold"
                                : "text-steel hover:text-charcoal"
                            }`}
                          >
                            {isFresh ? (
                              <Sun className="w-3 h-3 text-amber-600" />
                            ) : (
                              <Snowflake className="w-3 h-3 text-cyan-600" />
                            )}
                            <span>{state}</span>
                          </button>
                        );
                      })}
                    </div>
                  </td>

                  {/* Unit Rate */}
                  <td className="py-3.5 px-3 text-right font-bold text-charcoal whitespace-nowrap">
                    {formatNaira(row.price)}
                  </td>

                  {/* Quantity Stepper (Thumb-friendly mobile size) */}
                  <td className="py-3.5 px-4 sm:px-6 text-center whitespace-nowrap">
                    <div className="inline-flex items-center justify-center gap-2">
                      <button
                        type="button"
                        onClick={() => handleQtyChange(index, -1)}
                        disabled={row.quantity === 0}
                        className="w-8 h-8 rounded-lg border border-steel-border bg-pristine hover:bg-steel-surface disabled:opacity-40 text-charcoal flex items-center justify-center font-bold active:scale-95 transition-all"
                        aria-label={`Decrease ${row.name}`}
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center font-bold text-sm text-charcoal tabular-nums">
                        {row.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleQtyChange(index, 1)}
                        className="w-8 h-8 rounded-lg bg-ruby text-white hover:bg-ruby-hover flex items-center justify-center font-bold shadow-sm active:scale-95 transition-all"
                        aria-label={`Increase ${row.name}`}
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </td>

                  {/* Row Total */}
                  <td className="py-3.5 px-4 text-right font-bold text-charcoal whitespace-nowrap">
                    {rowTotal > 0 ? (
                      <span className="text-ruby font-extrabold">
                        {formatNaira(rowTotal)}
                      </span>
                    ) : (
                      <span className="text-steel-light">—</span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Wholesale Table Footer with Ruby Action Button */}
      <div className="p-4 sm:p-6 bg-pristine-muted border-t border-steel-border flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-steel text-center sm:text-left">
          <p className="font-semibold text-charcoal">
            Bulk delivery across Abeokuta, 12 noon – 7 PM.
          </p>
          <p>
            Orders are packed and sealed in food-grade packaging for delivery.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            type="button"
            disabled={totalSelectedUnits === 0}
            onClick={handleAddAllToOrder}
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-ruby hover:bg-ruby-hover disabled:bg-steel-border disabled:text-steel text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-ruby-glow transition-all active:scale-98"
          >
            {addedSuccess ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-white" />
                <span>Bulk Items Added to Order!</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4" />
                <span>
                  Add Wholesale Selection ({totalSelectedUnits} Units • {formatNaira(totalWholesaleSubtotal)})
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
