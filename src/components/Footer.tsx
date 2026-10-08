"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ShieldCheck,
  Calendar,
  Clock,
  Award,
  Snowflake,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white border-t border-charcoal-border relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-reserve-gold to-transparent opacity-60" />

      {/* Trust Badges Strip */}
      <div className="border-b border-charcoal-border bg-charcoal-rich py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-ruby border border-white/20 flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                <span className="text-base">🥩</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  100% Boneless Pure Meat
                </h4>
                <p className="text-[11px] text-steel-light">
                  Guaranteed zero bones or trim waste in Prime Beef
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0 shadow-sm">
                <Snowflake className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                  Frozen Meat Always Available
                </h4>
                <p className="text-[11px] text-steel-light">
                  Stocked daily at our Adigbe physical station counter
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-charcoal border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 shadow-sm">
                <Calendar className="w-5 h-5 text-reserve-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-reserve-gold-bright">
                  Friday Dawn Slaughter
                </h4>
                <p className="text-[11px] text-steel-light">
                  Fresh day-of-butchering pickup opens 12:00 Noon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column with Official Crest */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-reserve-gold shadow-gold-glow overflow-hidden bg-white flex-shrink-0">
                <Image
                  src="/images/logo-crest.jpg"
                  alt="Alayaki Reserve Official Brand Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white block leading-tight">
                  ALAYAKI RESERVE
                </span>
                <span className="text-[10px] uppercase tracking-[0.22em] text-reserve-gold-bright block font-sans font-semibold">
                  Abeokuta’s Premier Bespoke Butchery
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-steel-light font-normal max-w-sm leading-relaxed">
              Pioneering pure edible yield butchery in Ogun State. Artisanal boneless beef, meticulously cleaned offal, and pristine goat shares with zero compromise on food safety.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-xs font-bold shadow-whatsapp-glow transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="https://instagram.com/alayaki.reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-charcoal-rich border border-charcoal-border text-steel-light hover:text-white text-xs transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@alayaki.reserve</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-reserve-gold-bright">
              Artisanal Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-steel-light">
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors">
                  🥩 Artisanal Cuts Catalog
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  🗓️ Friday Slaughter Schedule
                </Link>
              </li>
              <li>
                <Link href="#standards" className="hover:text-white transition-colors">
                  ✨ The 100% Boneless Standard
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  🏪 Walk-In Store (Adigbe)
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="hover:text-white transition-colors">
                  🏢 B2B Commercial Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Walk-In Station Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-reserve-gold-bright">
              Flagship Counter
            </h4>
            <div className="space-y-2.5 text-xs text-steel-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ruby flex-shrink-0 mt-0.5" />
                <span>
                  God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State, Nigeria.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mondays – Saturdays: 8:00 AM – 7:00 PM</p>
                  <p>Sundays: 1:00 PM – 7:00 PM</p>
                  <p className="text-[11px] text-reserve-gold font-semibold mt-0.5">
                    Friday Fresh Batch: Counter opens 12 Noon
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-whatsapp flex-shrink-0" />
                <a
                  href={`tel:${WHATSAPP_PHONE_NUMBER}`}
                  className="hover:text-white transition-colors font-bold text-white"
                >
                  {DISPLAY_PHONE_NUMBER}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Disclaimer */}
      <div className="border-t border-charcoal-border py-6 bg-charcoal-rich text-[11px] text-steel-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Alayaki Reserve</strong>. All Rights Reserved. Abeokuta, Ogun State.
          </p>
          <div className="flex items-center gap-4 text-[10px] text-steel">
            <span>Guaranteed 100% Boneless Pure Meat</span>
            <span>•</span>
            <span>Digital Weight Verification</span>
            <span>•</span>
            <span>Cold-Chain Protection</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
