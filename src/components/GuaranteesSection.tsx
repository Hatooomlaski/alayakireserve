import React from "react";
import { Award, HeartPulse, CheckCircle2, Scale } from "lucide-react";

export default function GuaranteesSection() {
  return (
    <section id="standards" className="py-14 sm:py-20 lg:py-24 bg-steel-surface/40 relative overflow-hidden border-t border-steel-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-14">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ruby">
            The Quality Benchmark
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            The 100% Boneless Standard
          </h2>
          <p className="text-steel text-sm sm:text-base font-normal leading-relaxed">
            In standard open markets, up to 40% of the weight you pay for is bone and trim loss. With Alayaki Prime Beef, you pay for pure, raw edible meat.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: 100% Pure Yield */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-sm hover:shadow-pristine-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5">
                <Award className="w-5 h-5 text-ruby" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                100% Raw Edible Yield
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                No leg bones, no gristle, no trimming waste. Every kilogram of Alayaki Prime Beef is a full kilogram of raw edible meat. Brisket portions may include brisket bone.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Pure Raw Yield</span>
            </div>
          </div>

          {/* Card 2: Accurate Weigh-In */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-sm hover:shadow-pristine-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5">
                <Scale className="w-5 h-5 text-ruby" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                Digital Scale Accuracy
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                Weighed on calibrated electronic scales to the exact gram. Complete transparency so home cooks and wholesale chefs pay strictly for net weight.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Calibrated To The Gram</span>
            </div>
          </div>

          {/* Card 3: Clinical Cold-Chain Hygiene */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-sm hover:shadow-pristine-md transition-all flex flex-col justify-between">
            <div>
              <div className="w-11 h-11 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal mb-5">
                <HeartPulse className="w-5 h-5 text-ruby" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-charcoal mb-2">
                Clean Handling
              </h3>
              <p className="text-xs sm:text-sm text-steel font-normal leading-relaxed">
                Processed in a clean, hygienic butchery and packed in food-grade packaging, with frozen cuts kept in our in-store freezers to protect freshness.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-steel-border flex items-center gap-2 text-xs font-bold text-charcoal">
              <CheckCircle2 className="w-4 h-4 text-whatsapp" />
              <span>Clean, Food-Grade Packaging</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
