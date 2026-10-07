"use client";

import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  ShieldCheck,
  Calendar,
  Clock,
  Sparkles,
  Award,
  Snowflake,
} from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="bg-reserve-obsidian text-reserve-cream border-t border-reserve-gold/30 relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-reserve-gold-bright to-transparent opacity-80" />

      {/* Trust Badges Strip */}
      <div className="border-b border-white/10 bg-card-gradient py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-reserve-burgundy via-reserve-burgundy-light to-reserve-burgundy border border-reserve-gold flex items-center justify-center text-reserve-gold-light flex-shrink-0 shadow-gold-glow">
                <span className="text-base">🥩</span>
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-reserve-gold-light">
                  100% Boneless Pure Meat
                </h4>
                <p className="text-[11px] text-reserve-cream-muted">
                  Guaranteed zero bones or waste in Prime Beef
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#06242B] border border-cyan-400/60 flex items-center justify-center text-cyan-300 flex-shrink-0 shadow-sm">
                <Snowflake className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-200">
                  Frozen Meat Always Available
                </h4>
                <p className="text-[11px] text-reserve-cream-muted">
                  Stocked daily at our Adigbe physical store counter
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-reserve-obsidian border border-reserve-gold/60 flex items-center justify-center text-reserve-gold flex-shrink-0 shadow-sm">
                <Calendar className="w-5 h-5 text-reserve-gold" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-reserve-gold-light">
                  Friday Dawn Slaughter
                </h4>
                <p className="text-[11px] text-reserve-cream-muted">
                  Fresh day-of-slaughter cuts every Friday (12 Noon)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border border-reserve-gold/60 bg-gradient-to-br from-reserve-gold-bright to-reserve-gold-dark flex items-center justify-center shadow-gold-glow">
                <span className="font-serif text-lg font-bold text-reserve-obsidian">
                  AR
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-gold-gradient-bright block">
                  ALAYAKI RESERVE
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-reserve-gold-bright block font-sans font-semibold">
                  Abeokuta’s Premier Bespoke Butchery
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-reserve-cream-muted font-light leading-relaxed max-w-sm">
              Crafting an unrivaled butchery experience in Abeokuta, Ogun State. Pure boneless beef cuts, pristine assorted offal, and celebratory goat meat delivered fresh or frozen directly to your kitchen.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-reserve-obsidian border border-reserve-gold/40 hover:border-reserve-gold flex items-center justify-center text-reserve-gold hover:text-white transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="https://instagram.com/alayaki.reserve"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-reserve-obsidian border border-reserve-gold/40 hover:border-reserve-gold flex items-center justify-center text-reserve-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={`tel:${WHATSAPP_PHONE_NUMBER}`}
                className="w-10 h-10 rounded-xl bg-reserve-obsidian border border-reserve-gold/40 hover:border-reserve-gold flex items-center justify-center text-reserve-gold hover:text-white transition-colors"
                aria-label="Call Store"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-reserve-gold-bright">
              Artisanal Portfolio
            </h4>
            <ul className="space-y-2 text-xs text-reserve-cream-muted">
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Prime Beef (100% Boneless)
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Assorted Intestines (Inu Eran)
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Whole / Split Cow Head (Ori Eran)
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Prime Cow Tail / Oxtail (Iru Eran)
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Cow Leg (Bokoto)
                </Link>
              </li>
              <li>
                <Link href="#catalog" className="hover:text-reserve-gold-bright transition-colors">
                  Goat Meat Shares (Ogufe)
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Walk-In Store Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-reserve-gold-bright">
              Walk-In Store & Contact
            </h4>
            <div className="space-y-3 text-xs text-reserve-cream-muted">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Physical Location:</strong>
                  God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State, Nigeria.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Opening Hours:</strong>
                  Mon – Sat: 8:00 AM – 7:00 PM<br />
                  Sundays: 1:00 PM – 7:00 PM
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Calendar className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Slaughter Schedule:</strong>
                  Every Friday (Fresh collection opens by 12:00 Noon). Frozen cuts always available.
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Direct Line / WhatsApp:</strong>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                    className="text-reserve-gold-bright hover:underline font-bold"
                  >
                    {DISPLAY_PHONE_NUMBER}
                  </a>
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Instagram className="w-4 h-4 text-reserve-gold flex-shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white block font-medium">Instagram:</strong>
                  <a
                    href="https://instagram.com/alayaki.reserve"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-reserve-gold-bright hover:underline font-bold"
                  >
                    @alayaki.reserve
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-reserve-cream-muted/70 gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} Alayaki Reserve. All Rights Reserved. Abeokuta, Ogun State.
          </p>
          <p className="flex items-center gap-1.5 text-reserve-gold-bright font-medium justify-center sm:justify-start">
            <span>Guaranteed 100% Boneless Pure Meat Standard</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
