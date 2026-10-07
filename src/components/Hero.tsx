"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useOrder } from "@/context/OrderContext";
import {
  Calendar,
  Clock,
  Sparkles,
  ShoppingBag,
  ArrowRight,
  MapPin,
  CheckCircle2,
  Snowflake,
  Flame,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function Hero() {
  const { openDrawer } = useOrder();

  // Dynamic countdown specifically for Friday Collection (Fridays by 12:00 Noon)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    targetLabel: "Friday Collection (12 Noon)",
  });

  useEffect(() => {
    const calculateFridayCountdown = () => {
      const now = new Date();
      const currentDay = now.getDay(); // 0 is Sunday, 5 is Friday
      let daysUntilFriday = 0;

      if (currentDay < 5) {
        daysUntilFriday = 5 - currentDay;
      } else if (currentDay === 5 && now.getHours() < 12) {
        daysUntilFriday = 0;
      } else {
        daysUntilFriday = 7 - currentDay + 5;
      }

      const targetDate = new Date(now);
      targetDate.setDate(now.getDate() + daysUntilFriday);
      targetDate.setHours(12, 0, 0, 0);

      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / 1000 / 60) % 60);
      const s = Math.floor((diff / 1000) % 60);

      const isTodayFriday = currentDay === 5 && now.getHours() < 12;

      setTimeLeft({
        days: d,
        hours: h,
        minutes: m,
        seconds: s,
        targetLabel: isTodayFriday ? "Today's Collection (Opens 12 Noon)" : "Next Friday Batch (Opens 12 Noon)",
      });
    };

    calculateFridayCountdown();
    const interval = setInterval(calculateFridayCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-radial-emerald pt-12 pb-20 md:pt-16 md:pb-28 border-b border-reserve-gold/20">
      {/* Decorative ambient background accents */}
      <div className="absolute inset-0 bg-heritage-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-reserve-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-96 h-96 rounded-full bg-reserve-emerald-light/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Brand Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Primary Trust Badge (Prompt requirement: displayed prominently) */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-reserve-burgundy border-2 border-reserve-gold shadow-gold-glow animate-pulse">
                <span className="text-lg">🥩</span>
                <span className="font-bold text-xs sm:text-sm uppercase tracking-wider text-reserve-gold-light">
                  Guaranteed 100% Boneless Pure Meat
                </span>
              </div>

              {/* Frozen Always Available Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-cyan-200 text-xs font-semibold backdrop-blur-sm">
                <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                <span>Frozen Meat Always Available In-Store</span>
              </div>
            </div>

            {/* Slogan & Main Editorial Heading */}
            <div className="space-y-3">
              <span className="block text-reserve-gold font-sans font-semibold text-xs sm:text-sm uppercase tracking-[0.25em]">
                Abeokuta’s Premier Bespoke Butchery
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-reserve-cream leading-[1.15]">
                Artisanal Prime Cuts.{" "}
                <span className="text-gold-gradient block mt-1">
                  Zero Bones. Pure Luxury.
                </span>
              </h1>
            </div>

            {/* Narrative description tailored for Abeokuta residents and B2B clients */}
            <p className="text-reserve-cream-muted text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Experience the pinnacle of beef precision in Ogun State. Fresh cattle slaughter happens every <span className="text-reserve-gold font-medium">Friday</span>, while premium cold-chain frozen cuts are <span className="text-white font-medium">always available</span> at our Adigbe physical store throughout the week.
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs sm:text-sm text-reserve-cream-warm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-reserve-gold flex-shrink-0" />
                <span>100% Pure Bone-Free</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-reserve-gold flex-shrink-0" />
                <span>Frozen Always Stocked</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <CheckCircle2 className="w-4 h-4 text-reserve-gold flex-shrink-0" />
                <span>Friday Dawn Slaughter</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="#catalog"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-reserve-gold via-reserve-gold-light to-reserve-gold-dark text-reserve-emerald font-bold text-sm tracking-wide shadow-gold-glow-lg hover:brightness-110 active:scale-95 transition-all"
              >
                <span>Select Cuts & Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                onClick={openDrawer}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-reserve-emerald-light/60 border border-reserve-gold/40 text-reserve-cream hover:bg-reserve-emerald-light hover:border-reserve-gold text-sm font-semibold transition-all"
              >
                <ShoppingBag className="w-4 h-4 text-reserve-gold" />
                <span>Open Order Builder</span>
              </button>

              <a
                href="#location"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-xs text-reserve-gold/90 hover:text-reserve-gold hover:underline"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Adigbe Walk-In Counter</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Friday Butchering Schedule Countdown Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-reserve-emerald-surface/90 to-reserve-emerald/90 border border-reserve-gold/30 shadow-luxury-lg backdrop-blur-md">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-reserve-gold"></span>
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-reserve-gold">
                    Friday Slaughter Cycle
                  </span>
                </div>
                <span className="text-[11px] font-semibold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/30">
                  Slots Filling Fast
                </span>
              </div>

              {/* Countdown Title */}
              <div className="mt-5 text-center">
                <p className="text-xs text-reserve-cream-muted uppercase tracking-widest">
                  Fresh Collection Opens By 12:00 Noon In:
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-4">
                  <div className="bg-reserve-emerald-dark/90 rounded-xl p-2.5 sm:p-3 border border-reserve-gold/20 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-reserve-gold block">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-reserve-cream-muted tracking-wider">
                      Days
                    </span>
                  </div>

                  <div className="bg-reserve-emerald-dark/90 rounded-xl p-2.5 sm:p-3 border border-reserve-gold/20 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-reserve-gold block">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-reserve-cream-muted tracking-wider">
                      Hours
                    </span>
                  </div>

                  <div className="bg-reserve-emerald-dark/90 rounded-xl p-2.5 sm:p-3 border border-reserve-gold/20 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-reserve-gold block">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-reserve-cream-muted tracking-wider">
                      Mins
                    </span>
                  </div>

                  <div className="bg-reserve-emerald-dark/90 rounded-xl p-2.5 sm:p-3 border border-reserve-gold/20 text-center">
                    <span className="font-serif text-2xl sm:text-3xl font-bold text-reserve-gold block">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-reserve-cream-muted tracking-wider">
                      Secs
                    </span>
                  </div>
                </div>
              </div>

              {/* Demand Status (No numerical slot count, indicates 'Filling Fast' per prompt) */}
              <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-reserve-cream-muted">Slaughter Day:</span>
                  <span className="font-bold text-reserve-gold">Every Friday (Collection by 12 Noon)</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-reserve-cream-muted">Reservation Status:</span>
                  <span className="font-bold text-amber-300">Slots Filling Fast 🔥</span>
                </div>
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-400/25 flex items-start gap-2 text-xs text-cyan-200">
                  <Snowflake className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-cyan-400" />
                  <span>
                    <strong>Need meat today?</strong> Frozen boneless beef, offal & goat shares are always available for immediate walk-in purchase.
                  </span>
                </div>
              </div>

              {/* Physical counter note with updated hours */}
              <div className="mt-4 p-3 rounded-lg bg-reserve-emerald/80 border border-reserve-gold/15 space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-reserve-gold flex-shrink-0" />
                  <span>God&apos;s Hope Hospital Car Park, Adigbe</span>
                </div>
                <div className="text-[11px] text-reserve-cream-muted pl-5">
                  Mon – Sat: 8:00 AM – 7:00 PM | Sun: 1:00 PM – 7:00 PM
                </div>
              </div>

              {/* Direct WhatsApp Pre-order CTA */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I would like to reserve my fresh cuts for this Friday's slaughter cycle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-reserve-emerald border border-reserve-gold/50 hover:border-reserve-gold text-reserve-gold font-bold text-xs uppercase tracking-wider hover:bg-reserve-gold/10 transition-colors shadow-sm"
              >
                <span>Reserve Friday Fresh Cuts via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
