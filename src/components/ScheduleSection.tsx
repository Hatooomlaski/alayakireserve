import React from "react";
import { Calendar, Clock, CheckCircle2, Snowflake, ArrowRight, Store } from "lucide-react";
import { WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function ScheduleSection() {
  return (
    <section id="schedule" className="py-14 sm:py-20 lg:py-24 bg-pristine relative overflow-hidden border-t border-steel-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10 sm:mb-12">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-ruby">
            Operations & Schedule
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal">
            Weekly Butchering & Store Hours
          </h2>
          <p className="text-steel text-sm sm:text-base font-normal">
            Choose between fresh day-of-slaughter cuts every Friday or frozen cuts available in-store daily.
          </p>
        </div>

        {/* Schedule Cards: Two Clear Offerings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: Friday Fresh Slaughter Cycle */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine-muted border border-steel-border shadow-pristine-sm hover:shadow-pristine-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal">
                  Weekly Fresh Slaughter
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 text-[11px] font-bold border border-amber-200">
                  Slots Filling Fast
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                Friday Dawn Batch
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal pt-1">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-ruby flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Walk-In Collection:</strong> From 3:00 PM on Friday (Adigbe Store).
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Doorstep Delivery:</strong> Across Abeokuta from 12:00 Noon to 7:00 PM.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Pre-Order Cutoff:</strong> Thursday 9:00 PM to reserve guaranteed share.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-steel-border flex items-center justify-between gap-3">
              <span className="text-xs text-steel font-medium">Fresh Day-of-Cut</span>
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                  "Hello Alayaki Reserve, I would like to reserve my fresh cuts for this Friday's slaughter cycle."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-ruby hover:bg-ruby-hover text-white text-xs font-bold uppercase tracking-wider active:scale-95 transition-all shadow-ruby-glow"
              >
                <span>Reserve Friday Batch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Daily Walk-In Frozen Counter */}
          <div className="rounded-2xl p-6 sm:p-8 bg-pristine-muted border border-steel-border shadow-pristine-sm hover:shadow-pristine-md transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal flex items-center gap-1.5">
                  <Snowflake className="w-3.5 h-3.5 text-cyan-600" />
                  Daily In-Store Station
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-900 text-[11px] font-bold border border-cyan-200">
                  Always In-Stock
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-charcoal">
                Walk-In Cold Counter
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
                    <strong>Location:</strong> God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-steel-border flex items-center justify-between gap-3">
              <span className="text-xs text-steel font-medium">No Pre-Order Needed</span>
              <a
                href="#location"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-charcoal hover:bg-charcoal-rich text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Store Location</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
