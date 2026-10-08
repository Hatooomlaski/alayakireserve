"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, HeartPulse, CheckCircle2, Scale } from "lucide-react";

export default function GuaranteesSection() {
  return (
    <section id="standards" className="py-14 sm:py-20 lg:py-24 bg-pristine relative overflow-hidden border-t border-steel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Official Brand Crest Seal */}
        <div className="flex justify-center mb-4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-reserve-gold shadow-gold-glow bg-white overflow-hidden">
            <Image
              src="/images/logo-crest.jpg"
              alt="Alayaki Reserve Official Guarantee Seal"
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Banner Pill */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-steel-surface border border-steel-border text-charcoal text-xs font-bold uppercase tracking-wider shadow-sm">
            <span>🥩</span>
            <span>The Alayaki Standard of Precision</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            The 100% Boneless Pure Meat Standard
          </h2>

          <p className="text-steel text-sm sm:text-base font-normal max-w-2xl mx-auto leading-relaxed">
            When you purchase beef in standard open markets, up to 40% of the weight you pay for is bone, gristle, and unusable trim. At Alayaki Reserve, we redefine butchery with clinical accuracy.
          </p>
        </div>

        {/* Comparison Pillar Cards */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: 100% Yield */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-md relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5 shadow-sm">
                <Award className="w-6 h-6 text-ruby" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                100% Pure Edible Yield
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                Every single gram of our Prime Beef is edible, prime lean muscle. No hidden femur bones, no tough gristle. 1kg of Alayaki Prime Beef yields 1kg of pure cooked meat in your pot.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Zero Grams Wasted</span>
            </div>
          </div>

          {/* Card 2: Accurate Weigh-In */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-md relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5 shadow-sm">
                <Scale className="w-6 h-6 text-ruby" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Accurately Weighed Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                Calibrated digital scales ensure complete transparency. You never pay for bone bulk or water weight. Home cooks and commercial chefs receive verified precision to the exact gram.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Calibrated Digital Scales</span>
            </div>
          </div>

          {/* Card 3: Clinical Cold-Chain Hygiene */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-md relative flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5 shadow-sm">
                <HeartPulse className="w-6 h-6 text-ruby" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal mb-2">
                Clinical Cold-Chain Safety
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                Processed in spotless, sanitary conditions far removed from open-air dust and flies. Immediately packed into food-grade, temperature-controlled containers for total peace of mind.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Sanitary Food-Grade Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
