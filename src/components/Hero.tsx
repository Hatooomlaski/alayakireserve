"use client";

import React from "react";
import Link from "next/link";
import { useOrder } from "@/context/OrderContext";
import { ArrowRight, ShoppingBag, Sparkles, MapPin } from "lucide-react";

export default function Hero() {
  const { openDrawer, totalItemCount } = useOrder();

  return (
    <section className="relative overflow-hidden bg-charcoal text-white pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-charcoal-border">
      {/* Subtle luxury ambient glow */}
      <div className="absolute inset-0 bg-heritage-pattern opacity-15 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 rounded-full bg-ruby/10 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        {/* Subtle Hallmark Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-rich border border-charcoal-border text-steel-light text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-reserve-gold" />
          <span>Abeokuta’s Premier Bespoke Butchery</span>
        </div>

        {/* Confident Editorial Headline */}
        <div className="space-y-2 max-w-3xl mx-auto">
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
            Pure Edible Yield.{" "}
            <span className="text-reserve-gold-bright block mt-1">
              Guaranteed 100% Boneless.
            </span>
          </h1>
        </div>

        {/* Refined Single Description */}
        <p className="text-steel-light text-sm sm:text-base lg:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
          Artisanal hand-trimmed beef, meticulously sanitized offal, and prime goat meat prepared with clinical scale precision. Live slaughter every Friday, with certified cold-chain cuts always in-store.
        </p>

        {/* Compact Live Operational Status Badge */}
        <div className="inline-flex items-center flex-wrap justify-center gap-2 sm:gap-3 px-4 py-2 rounded-full bg-charcoal-rich border border-charcoal-border text-xs text-steel-light shadow-sm">
          <div className="flex items-center gap-1.5">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-bold text-white">Friday Dawn Slaughter:</span>
            <span>Opens 12:00 Noon</span>
          </div>
          <span className="hidden sm:inline text-charcoal-border">•</span>
          <div className="flex items-center gap-1.5 text-cyan-300">
            <span>Daily Frozen Cuts In-Store (Adigbe)</span>
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="#catalog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-ruby hover:bg-ruby-hover text-white font-bold text-xs sm:text-sm tracking-wide shadow-ruby-glow active:scale-95 transition-all text-center min-h-[46px]"
          >
            <span>Explore Artisanal Cuts</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={openDrawer}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-charcoal-rich border border-charcoal-border text-white hover:bg-charcoal-surface text-xs sm:text-sm font-semibold transition-all min-h-[46px]"
          >
            <ShoppingBag className="w-4 h-4 text-reserve-gold" />
            <span>
              {totalItemCount > 0
                ? `Review Order (${totalItemCount})`
                : "Build Order"}
            </span>
          </button>
        </div>

        {/* Minimalist 3-Pillar Hallmark Strip */}
        <div className="pt-6 sm:pt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-3xl mx-auto text-left border-t border-charcoal-border/70">
          <div className="p-3.5 rounded-2xl bg-charcoal-rich/60 border border-charcoal-border/50">
            <div className="text-reserve-gold-bright font-serif text-lg sm:text-xl font-bold">
              100% Pure Yield
            </div>
            <div className="text-xs text-steel-light mt-0.5">
              Zero bone, zero gristle trimming loss in your pot.
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-rich/60 border border-charcoal-border/50">
            <div className="text-white font-serif text-lg sm:text-xl font-bold">
              Friday Dawns
            </div>
            <div className="text-xs text-steel-light mt-0.5">
              Live weekly cattle slaughter with same-day dispatch.
            </div>
          </div>

          <div className="p-3.5 rounded-2xl bg-charcoal-rich/60 border border-charcoal-border/50">
            <div className="text-cyan-300 font-serif text-lg sm:text-xl font-bold">
              Adigbe Counter
            </div>
            <div className="text-xs text-steel-light mt-0.5">
              Frozen pure cuts ready for walk-in pickup 7 days.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
