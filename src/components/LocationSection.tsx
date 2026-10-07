"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Snowflake, Calendar } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function LocationSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=God's+Hope+Hospital+Adigbe+Abeokuta+Ogun+State";

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 bg-obsidian-gradient relative border-t border-reserve-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Physical Store Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-reserve-gold/10 border border-reserve-gold/35 text-reserve-gold-bright text-xs font-bold uppercase tracking-widest shadow-gold-glow">
              <MapPin className="w-3.5 h-3.5" />
              <span>Flagship Walk-In Counter</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream leading-tight">
              Visit Our Butchery Counter in Adigbe
            </h2>

            <p className="text-reserve-cream-muted text-sm sm:text-base font-light leading-relaxed">
              Prefer to see your cuts weighed, trimmed, and portioned in person? Walk into our hygienic butcher station at Adigbe, Abeokuta. Frozen boneless pure beef and assorted offal are <strong className="text-white font-medium">always available</strong> in-store daily, with live slaughter processing every <strong className="text-reserve-gold-bright font-medium">Friday</strong> (collection opens by 12:00 Noon).
            </p>

            {/* Store Information Grid */}
            <div className="space-y-3.5 pt-1">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card-gradient border border-reserve-gold/30 shadow-luxury-sm">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">
                    Physical Store Address:
                  </strong>
                  <p className="text-reserve-cream-muted">
                    God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State, Nigeria.
                  </p>
                  <span className="inline-block mt-1 text-[11px] text-reserve-gold font-medium">
                    Easily accessible along the main Adigbe road with ample secure parking.
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card-gradient border border-reserve-gold/30 shadow-luxury-sm">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm space-y-1.5 w-full">
                  <strong className="text-white block font-bold text-sm sm:text-base">
                    Physical Store Opening Hours:
                  </strong>
                  <div className="flex justify-between gap-4 text-reserve-cream-muted">
                    <span>Mondays – Saturdays:</span>
                    <span className="font-bold text-reserve-gold-bright">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4 text-reserve-cream-muted">
                    <span>Sundays:</span>
                    <span className="font-bold text-reserve-gold-bright">1:00 PM – 7:00 PM</span>
                  </div>
                  <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[11px]">
                    <span className="flex items-center gap-1 text-cyan-300 font-medium">
                      <Snowflake className="w-3.5 h-3.5" />
                      Frozen Meat Available Daily
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5" />
                      Slaughter: Fridays (Collection 12 Noon)
                    </span>
                  </div>
                </div>
              </div>

              {/* Walk-in Guidelines */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-card-gradient border border-reserve-gold/30 shadow-luxury-sm">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block font-bold text-sm sm:text-base mb-0.5">
                    Walk-In Counter Transparency:
                  </strong>
                  <p className="text-reserve-cream-muted leading-relaxed">
                    Digital weight scales are positioned in direct customer view. Boneless beef is weighed strictly after complete bone removal so you never pay for bone waste.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons: Touch-Optimized */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 transition-all min-h-[46px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${WHATSAPP_PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl sm:rounded-full bg-reserve-obsidian border border-reserve-gold/50 text-reserve-cream hover:text-reserve-gold hover:border-reserve-gold text-xs font-bold uppercase tracking-wider transition-all min-h-[46px]"
              >
                <Phone className="w-4 h-4 text-reserve-gold" />
                <span>Call Store ({DISPLAY_PHONE_NUMBER})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps Iframe */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-reserve-gold/40 shadow-luxury-lg bg-reserve-obsidian">
              {/* Header bar of map */}
              <div className="bg-reserve-obsidian p-3.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-bold text-white">Adigbe Walk-In Counter Location</span>
                </div>
                <span className="text-[11px] text-reserve-gold-bright font-semibold">Abeokuta, Ogun State</span>
              </div>

              {/* Responsive Google Maps Iframe centered on Adigbe, Abeokuta */}
              <div className="relative w-full h-[320px] sm:h-[420px]">
                <iframe
                  title="Alayaki Reserve Store Location - God's Hope Hospital Car Park, Adigbe, Abeokuta"
                  src="https://maps.google.com/maps?q=Adigbe,+Abeokuta,+Ogun+State,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter brightness-95 contrast-105"
                />
              </div>

              {/* Bottom Caption */}
              <div className="p-3 bg-reserve-obsidian text-center text-xs text-reserve-cream-muted border-t border-white/10">
                <span>📍 Located within God&apos;s Hope Hospital Car Park • Secure, serene collection point</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
