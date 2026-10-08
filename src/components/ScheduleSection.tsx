"use client";

import React from "react";
import { Calendar, Clock, CheckCircle2, Snowflake, ArrowRight, ShieldAlert, Store } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-14 sm:py-20 lg:py-24 bg-steel-surface/50 relative overflow-hidden border-t border-steel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pristine border border-steel-border text-charcoal text-xs font-bold uppercase tracking-wider shadow-sm">
            <Calendar className="w-3.5 h-3.5 text-ruby" />
            <span>Farm-To-Table Operational Schedule</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Weekly Butchering & Store Broadcast
          </h2>
          <p className="text-steel text-sm sm:text-base font-normal">
            Live slaughter processing occurs every <strong className="text-charcoal font-bold">Friday</strong> morning for maximum freshness (collection opens by 12:00 Noon). Meanwhile, certified cold-chain <strong className="text-charcoal font-bold">frozen cuts are always available</strong> in-store all week long.
          </p>
        </div>

        {/* Schedule Cards: Friday Slaughter Batch & Daily In-Store Frozen Supply */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Friday Fresh Slaughter Cycle */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal">
                  Weekly Fresh Slaughter Cycle
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold border border-amber-300">
                  Slots Filling Fast 🔥
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                Friday Dawn Batch
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal pt-1">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-ruby flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Walk-in Collection:</strong> Opens Friday by 12:00 Noon at Adigbe store.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Abeokuta Doorstep Dispatch:</strong> Friday 12:00 Noon – 5:00 PM.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pre-Order Cutoff:</strong> Thursday 9:00 PM for guaranteed slaughter portions.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-steel-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-steel">
                Status: <span className="text-charcoal font-bold">High Demand</span>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I want to reserve fresh cuts for this Friday's slaughter cycle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-ruby hover:bg-ruby-hover text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all shadow-ruby-glow"
              >
                <span>Reserve Friday Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Daily Walk-In Frozen Counter */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine border border-steel-border shadow-pristine-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-600" />
                  In-Store Daily Availability
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-100 text-cyan-900 text-xs font-bold border border-cyan-300">
                  Always Available
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                Walk-In Frozen Meat Counter
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal pt-1">
                <div className="flex items-start gap-2.5">
                  <Store className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mondays – Saturdays:</strong> 8:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sundays:</strong> 1:00 PM – 7:00 PM
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Inventory:</strong> Boneless pure beef, washed offal, and goat meat vacuum-sealed in certified cold chain.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-steel-border flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-steel">
                Walk-in: <span className="text-charcoal font-bold">No Pre-Order Needed</span>
              </div>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-charcoal hover:bg-charcoal-rich text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>View Store Location</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Operational protocol notice */}
        <div className="mt-10 max-w-4xl mx-auto rounded-2xl p-4 sm:p-5 bg-pristine border border-steel-border text-xs text-steel flex items-start gap-3 shadow-pristine-sm">
          <ShieldAlert className="w-5 h-5 text-ruby flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-charcoal">Butchery Transparency:</strong> For fresh day-of-slaughter cuts, pre-orders lock in your reservation ahead of Friday morning. For frozen pure boneless meat and assorted offal, visit our Adigbe walk-in station anytime during operational hours (Mondays–Saturdays 8am–7pm, Sundays 1pm–7pm).
          </p>
        </div>
      </div>
    </section>
  );
}
