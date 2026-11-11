"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  MessageCircle,
  Instagram,
  Clock,
} from "lucide-react";
import { BUSINESS } from "@/config/business";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";
import { useOrder } from "@/context/OrderContext";

export default function Footer() {
  const { totalItemCount } = useOrder();

  return (
    <footer className="bg-charcoal text-white border-t border-charcoal-border relative overflow-hidden">
      {/* Decorative top gold hairline */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-reserve-gold/40 to-transparent" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Brand Column with Official Crest */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full border border-reserve-gold/70 shadow-gold-glow overflow-hidden bg-white flex-shrink-0">
                <Image
                  src="/images/logo-crest.jpg"
                  alt="Alayaki Reserve Official Brand Logo"
                  fill
                  sizes="44px"
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
              Pioneering pure edible yield butchery in Ogun State. Artisanal boneless beef, meticulously sanitized offal, and prime goat meat prepared to order with verified scale precision.
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
                href={BUSINESS.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-charcoal-rich border border-charcoal-border text-steel-light hover:text-white text-xs transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@{BUSINESS.instagramHandle}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-reserve-gold-bright">
              Directory
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-steel-light">
              <li>
                <Link href="#catalog" className="hover:text-white transition-colors">
                  Artisanal Cuts Catalog
                </Link>
              </li>
              <li>
                <Link href="#schedule" className="hover:text-white transition-colors">
                  Slaughter & Store Schedule
                </Link>
              </li>
              <li>
                <Link href="#standards" className="hover:text-white transition-colors">
                  The 100% Boneless Standard
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-white transition-colors">
                  Walk-In Store (Adigbe)
                </Link>
              </li>
              <li>
                <Link href="#corporate" className="hover:text-white transition-colors">
                  B2B Commercial Supply
                </Link>
              </li>
            </ul>
          </div>

          {/* Physical Walk-In Station Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-reserve-gold-bright">
              Adigbe Butchery Counter
            </h4>
            <div className="space-y-2.5 text-xs text-steel-light">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-ruby flex-shrink-0 mt-0.5" />
                <span>
                  {BUSINESS.fullAddress}.
                </span>
              </div>

              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-steel flex-shrink-0 mt-0.5" />
                <div>
                  <p>{BUSINESS.hours.weekdays.label}: {BUSINESS.hours.weekdays.display}</p>
                  <p>{BUSINESS.hours.sunday.label}: {BUSINESS.hours.sunday.display}</p>
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
      {/* Extra bottom padding while the fixed FloatingOrderBar is visible, so it never covers this row */}
      <div
        className={`border-t border-charcoal-border pt-6 bg-charcoal-rich text-[11px] text-steel-light ${
          totalItemCount > 0 ? "pb-36 sm:pb-24" : "pb-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">Alayaki Reserve</strong>. All Rights Reserved. Abeokuta, Ogun State.
          </p>
          <div className="flex items-center gap-3 text-[10px] text-steel">
            <span>Guaranteed 100% Boneless Beef</span>
            <span>•</span>
            <span>Digital Weight Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
