"use client";

import React from "react";
import { Calendar, Clock, CheckCircle2, Snowflake, ArrowRight, ShieldAlert, Store } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-14 sm:py-20 lg:py-24 bg-reserve-obsidian relative overflow-hidden border-t border-reserve-gold/20">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-reserve-gold/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-reserve-burgundy via-reserve-burgundy-light to-reserve-burgundy border border-reserve-gold/60 text-reserve-gold-light text-xs font-bold uppercase tracking-widest shadow-gold-glow">
            <Calendar className="w-3.5 h-3.5 text-reserve-gold" />
            <span>Farm-To-Table Transparency</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream">
            Weekly Butchering & Store Broadcast
          </h2>
          <p className="text-reserve-cream-muted text-sm sm:text-base font-light">
            We slaughter cattle live every <strong className="text-white">Friday</strong> morning for maximum freshness. Meanwhile, our certified cold-chain <strong className="text-cyan-300">frozen cuts are always available</strong> in-store all week long.
          </p>
        </div>

        {/* Schedule Cards: Friday Slaughter Batch & Daily In-Store Frozen Supply */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Friday Fresh Slaughter Cycle */}
          <div className="rounded-2xl p-5 sm:p-8 bg-card-gradient border border-reserve-gold/35 shadow-luxury-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-reserve-gold-bright">
                  Weekly Fresh Slaughter Cycle
                </span>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/40">
                  Slots Filling Fast 🔥
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-reserve-cream">
                Friday Dawn Batch
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-reserve-cream-warm pt-1">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Walk-in Collection:</strong> Opens Friday by 12:00 Noon at Adigbe store.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Abeokuta Doorstep Dispatch:</strong> Friday 12:00 Noon – 5:00 PM.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pre-Order Cutoff:</strong> Thursday 9:00 PM for guaranteed reservations.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-reserve-cream-muted">
                Status: <span className="text-amber-300 font-bold">High Demand</span>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I want to reserve fresh cuts for this Friday's slaughter cycle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian border border-reserve-gold text-xs font-bold uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-gold-glow"
              >
                <span>Reserve Friday Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Daily Walk-In Frozen Counter */}
          <div className="rounded-2xl p-5 sm:p-8 bg-card-gradient border border-cyan-400/35 shadow-luxury-md relative overflow-hidden flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-300 flex items-center gap-1.5">
                  <Snowflake className="w-3.5 h-3.5" />
                  In-Store Daily Availability
                </span>
                <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-200 text-xs font-bold border border-cyan-400/40">
                  Always Available
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-reserve-cream">
                Walk-In Frozen Meat Counter
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-reserve-cream-warm pt-1">
                <div className="flex items-start gap-2.5">
                  <Store className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Mondays – Saturdays:</strong> 8:00 AM – 7:00 PM
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Sundays:</strong> 1:00 PM – 7:00 PM
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Inventory:</strong> Boneless beef, washed intestines, and goat shares vacuum-chilled and ready to carry.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="text-xs text-reserve-cream-muted">
                Walk-in: <span className="text-emerald-400 font-bold">No Pre-Order Needed</span>
              </div>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-cyan-950/80 hover:bg-cyan-900/90 text-cyan-200 border border-cyan-400/50 text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>View Store Location</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Operational protocol notice */}
        <div className="mt-10 max-w-4xl mx-auto rounded-xl p-4 bg-reserve-obsidian/90 border border-white/10 text-xs text-reserve-cream-muted flex items-start gap-3">
          <ShieldAlert className="w-5 h-5 text-reserve-gold-bright flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-white">Butchery Transparency:</strong> For fresh day-of-slaughter cuts, pre-orders lock in your reservation ahead of Friday morning. For frozen pure boneless meat and assorted offal, visit our Adigbe walk-in store anytime during operational hours (Mondays–Saturdays 8am–7pm, Sundays 1pm–7pm).
          </p>
        </div>
      </div>
    </section>
  );
}
