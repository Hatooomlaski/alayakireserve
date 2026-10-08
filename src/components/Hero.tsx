"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
  MessageCircle,
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
        targetLabel: isTodayFriday
          ? "Today's Collection (Opens 12 Noon)"
          : "Next Friday Batch (Opens 12 Noon)",
      });
    };

    calculateFridayCountdown();
    const interval = setInterval(calculateFridayCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-charcoal text-white pt-8 pb-16 sm:pt-14 sm:pb-24 lg:pt-16 lg:pb-28 border-b border-charcoal-border">
      {/* Subtle luxury ambient texture */}
      <div className="absolute inset-0 bg-heritage-pattern opacity-20 pointer-events-none" />
      <div className="absolute -top-32 -left-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-ruby/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-whatsapp/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Brand Typography & Value Proposition */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center lg:text-left">
            {/* Primary Trust Badges */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-charcoal-rich border border-ruby shadow-md">
                <span className="text-base sm:text-lg">🥩</span>
                <span className="font-extrabold text-[11px] sm:text-xs uppercase tracking-wider text-white">
                  Guaranteed 100% Boneless Pure Meat
                </span>
              </div>

              {/* Frozen Meat In-Store Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-charcoal-rich border border-cyan-500/50 text-cyan-300 text-[11px] sm:text-xs font-semibold shadow-sm">
                <Snowflake className="w-3.5 h-3.5 text-cyan-400" />
                <span>Frozen Meat Always Available In-Store</span>
              </div>
            </div>

            {/* Slogan & Editorial Header with Official Brand Crest */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full border-2 border-reserve-gold shadow-gold-glow bg-white overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/logo-crest.jpg"
                    alt="Alayaki Reserve Official Brand Crest"
                    fill
                    sizes="56px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="text-left">
                  <span className="inline-block text-reserve-gold-bright font-sans font-bold text-xs sm:text-sm uppercase tracking-[0.25em]">
                    Abeokuta’s Premier Bespoke Butchery
                  </span>
                  <span className="block text-[11px] text-steel-light font-medium">
                    Artisanal Precision & Pure Meat Standard
                  </span>
                </div>
              </div>

              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
                Carefully Packaged,{" "}
                <span className="text-reserve-gold-bright block mt-1">
                  Delivered Fresh.
                </span>
              </h1>
            </div>

            {/* Description tailored for Abeokuta residents and caterers */}
            <p className="text-steel-light text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Experience the pinnacle of beef precision in Ogun State. Fresh cattle slaughter takes place every{" "}
              <strong className="text-white underline decoration-ruby underline-offset-4">
                Friday
              </strong>{" "}
              (collection opens by 12:00 Noon), while certified cold-chain frozen cuts are{" "}
              <strong className="text-cyan-300">always available</strong> in-store at our Adigbe physical station throughout the week.
            </p>

            {/* Trust highlights checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-xs sm:text-sm text-white">
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-charcoal-rich py-2 px-3 rounded-xl border border-charcoal-border">
                <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <span className="font-medium">100% Pure Bone-Free</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-charcoal-rich py-2 px-3 rounded-xl border border-charcoal-border">
                <CheckCircle2 className="w-4 h-4 text-cyan-300 flex-shrink-0" />
                <span className="font-medium">Frozen Always Stocked</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start bg-charcoal-rich py-2 px-3 rounded-xl border border-charcoal-border col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <span className="font-medium">Friday Dawn Slaughter</span>
              </div>
            </div>

            {/* Action Buttons: High Contrast Ruby CTA */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 pt-2">
              <Link
                href="#catalog"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl sm:rounded-full bg-ruby hover:bg-ruby-hover text-white font-bold text-sm tracking-wide shadow-ruby-glow active:scale-95 transition-all text-center min-h-[46px]"
              >
                <span>Select Cuts & Order</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <button
                type="button"
                onClick={openDrawer}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-charcoal-rich border border-charcoal-border text-white hover:bg-charcoal-border text-sm font-semibold transition-all min-h-[46px]"
              >
                <ShoppingBag className="w-4 h-4 text-ruby" />
                <span>Open Order Builder</span>
              </button>

              <a
                href="#location"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs text-steel-light hover:text-white transition-colors min-h-[40px]"
              >
                <MapPin className="w-3.5 h-3.5 text-reserve-gold" />
                <span>Adigbe Walk-In Store</span>
              </a>
            </div>
          </div>

          {/* Right Column: Live Friday Butchering Schedule Countdown Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-5 sm:p-7 bg-charcoal-rich border border-charcoal-border shadow-luxury-lg">
              {/* Top Card Badge */}
              <div className="flex items-center justify-between pb-3.5 border-b border-charcoal-border">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-reserve-gold"></span>
                  </span>
                  <span className="text-xs uppercase tracking-wider font-bold text-reserve-gold-bright">
                    Friday Slaughter Cycle
                  </span>
                </div>
                <span className="text-[11px] font-bold bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full border border-amber-400/40">
                  Slots Filling Fast 🔥
                </span>
              </div>

              {/* Countdown Title */}
              <div className="mt-4 text-center">
                <p className="text-[11px] sm:text-xs text-steel-light uppercase tracking-widest font-semibold">
                  {timeLeft.targetLabel} In:
                </p>
                <div className="grid grid-cols-4 gap-2 sm:gap-2.5 mt-3">
                  <div className="bg-charcoal rounded-xl p-2 sm:p-3 border border-charcoal-border text-center shadow-inner">
                    <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white block leading-tight">
                      {String(timeLeft.days).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-steel-light tracking-wider block mt-0.5">
                      Days
                    </span>
                  </div>

                  <div className="bg-charcoal rounded-xl p-2 sm:p-3 border border-charcoal-border text-center shadow-inner">
                    <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white block leading-tight">
                      {String(timeLeft.hours).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-steel-light tracking-wider block mt-0.5">
                      Hours
                    </span>
                  </div>

                  <div className="bg-charcoal rounded-xl p-2 sm:p-3 border border-charcoal-border text-center shadow-inner">
                    <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white block leading-tight">
                      {String(timeLeft.minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-steel-light tracking-wider block mt-0.5">
                      Mins
                    </span>
                  </div>

                  <div className="bg-charcoal rounded-xl p-2 sm:p-3 border border-charcoal-border text-center shadow-inner">
                    <span className="font-sans text-2xl sm:text-3xl font-extrabold text-white block leading-tight">
                      {String(timeLeft.seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase text-steel-light tracking-wider block mt-0.5">
                      Secs
                    </span>
                  </div>
                </div>
              </div>

              {/* Demand Status and In-store details */}
              <div className="mt-5 pt-4 border-t border-charcoal-border space-y-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-steel-light">Slaughter Day:</span>
                  <span className="font-bold text-white">Every Friday (Collection by 12 Noon)</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-steel-light">Reservation Status:</span>
                  <span className="font-bold text-amber-300">Slots Filling Fast 🔥</span>
                </div>
                <div className="p-2.5 rounded-xl bg-charcoal border border-cyan-500/30 flex items-start gap-2 text-xs text-cyan-200">
                  <Snowflake className="w-4 h-4 flex-shrink-0 mt-0.5 text-cyan-300" />
                  <span>
                    <strong>Need meat today?</strong> Frozen boneless beef, offal & goat shares are <span className="underline decoration-cyan-300 font-bold">always in stock</span> for immediate walk-in purchase.
                  </span>
                </div>
              </div>

              {/* Physical Store Schedule Box */}
              <div className="mt-3.5 p-3 rounded-xl bg-charcoal border border-charcoal-border space-y-1 text-xs">
                <div className="flex items-center gap-1.5 text-white font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-reserve-gold flex-shrink-0" />
                  <span>God&apos;s Hope Hospital Car Park, Adigbe</span>
                </div>
                <div className="text-[11px] text-steel-light pl-5">
                  Mon – Sat: 8:00 AM – 7:00 PM | Sun: 1:00 PM – 7:00 PM
                </div>
              </div>

              {/* Direct WhatsApp Pre-order CTA in WhatsApp Green */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I would like to reserve my fresh cuts for this Friday's slaughter cycle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white font-bold text-xs uppercase tracking-wider active:scale-98 transition-all shadow-whatsapp-glow"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Reserve Friday Fresh Cuts on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
