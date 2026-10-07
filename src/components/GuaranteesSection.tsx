"use client";

import React from "react";
import { ShieldCheck, Award, HeartPulse, Sparkles, CheckCircle2 } from "lucide-react";

export default function GuaranteesSection() {
  return (
    <section id="standards" className="py-16 md:py-24 bg-reserve-emerald relative overflow-hidden border-t border-reserve-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Banner Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-reserve-burgundy border border-reserve-gold text-reserve-gold-light text-xs font-bold uppercase tracking-wider shadow-gold-glow">
            <span>🥩</span>
            <span>The Alayaki Guarantee</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream">
            The 100% Boneless Pure Meat Standard
          </h2>

          <p className="text-reserve-cream-muted text-sm sm:text-base font-light">
            When you purchase beef in standard Abeokuta open markets, up to 40% of the weight you pay for is bone, gristle, and unusable trim. At Alayaki Reserve, we redefine butchery.
          </p>
        </div>

        {/* Comparison Pillar Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: 100% Yield */}
          <div className="rounded-2xl p-6 sm:p-8 bg-reserve-emerald-surface border border-reserve-gold/30 shadow-luxury-md relative">
            <div className="w-12 h-12 rounded-xl bg-reserve-gold/15 border border-reserve-gold flex items-center justify-center text-reserve-gold mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-reserve-cream mb-3">
              100% Pure Edible Yield
            </h3>
            <p className="text-xs sm:text-sm text-reserve-cream-muted font-light leading-relaxed">
              Every single gram of our Prime Beef is edible, prime lean muscle. No hidden femur bones, no tough gristle. 1kg of Alayaki Prime Beef yields 1kg of pure cooked meat in your pot.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-reserve-gold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Zero Grams Wasted</span>
            </div>
          </div>

          {/* Card 2: Triple-Sanitized Offal */}
          <div className="rounded-2xl p-6 sm:p-8 bg-reserve-emerald-surface border border-reserve-gold/30 shadow-luxury-md relative">
            <div className="w-12 h-12 rounded-xl bg-reserve-gold/15 border border-reserve-gold flex items-center justify-center text-reserve-gold mb-6">
              <HeartPulse className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-reserve-cream mb-3">
              Sanitized Inu Eran
            </h3>
            <p className="text-xs sm:text-sm text-reserve-cream-muted font-light leading-relaxed">
              Our assorted intestines (shaki, liver, abodi, towel) undergo a meticulous multi-stage cleansing process. Completely free of sand, odors, and contaminants. Ready straight for cooking.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-reserve-gold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Pristine Hygiene Protocol</span>
            </div>
          </div>

          {/* Card 3: Cold-Chain Integrity */}
          <div className="rounded-2xl p-6 sm:p-8 bg-reserve-emerald-surface border border-reserve-gold/30 shadow-luxury-md relative">
            <div className="w-12 h-12 rounded-xl bg-reserve-gold/15 border border-reserve-gold flex items-center justify-center text-reserve-gold mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-reserve-cream mb-3">
              Inspected & Cold-Chain
            </h3>
            <p className="text-xs sm:text-sm text-reserve-cream-muted font-light leading-relaxed">
              Sourced exclusively from verified grass-fed cattle checked by veterinary officers. Chilled immediately post-butchering and delivered across Abeokuta in temperature-controlled cooler boxes.
            </p>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-reserve-gold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Veterinary Approved</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
