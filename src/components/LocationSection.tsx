"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, ShieldCheck, Snowflake, Calendar } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function LocationSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=God's+Hope+Hospital+Adigbe+Abeokuta+Ogun+State";

  return (
    <section id="location" className="py-16 md:py-24 bg-reserve-emerald relative border-t border-reserve-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Physical Store Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-reserve-gold/10 border border-reserve-gold/30 text-reserve-gold text-xs font-semibold uppercase tracking-widest">
              <MapPin className="w-3.5 h-3.5" />
              <span>Flagship Walk-In Counter</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream leading-tight">
              Visit Our Butchery Counter in Adigbe
            </h2>

            <p className="text-reserve-cream-muted text-sm sm:text-base font-light leading-relaxed">
              Prefer to see your cuts weighed, trimmed, and portioned in person? Walk into our hygienic butcher station at Adigbe, Abeokuta. Frozen boneless pure beef and assorted offal are <strong className="text-white font-medium">always available</strong> in-store daily, with live slaughter processing every <strong className="text-reserve-gold font-medium">Friday</strong>.
            </p>

            {/* Store Information Grid */}
            <div className="space-y-4 pt-2">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-reserve-emerald-surface/90 border border-reserve-gold/25">
                <MapPin className="w-5 h-5 text-reserve-gold flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block font-semibold text-sm sm:text-base mb-0.5">
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

              {/* Operating Hours (Mondays-Saturdays 8am to 7pm, Sundays 1pm to 7pm) */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-reserve-emerald-surface/90 border border-reserve-gold/25">
                <Clock className="w-5 h-5 text-reserve-gold flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm space-y-1.5 w-full">
                  <strong className="text-white block font-semibold text-sm sm:text-base">
                    Physical Store Opening Hours:
                  </strong>
                  <div className="flex justify-between gap-4 text-reserve-cream-muted">
                    <span>Mondays – Saturdays:</span>
                    <span className="font-semibold text-reserve-gold">8:00 AM – 7:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-4 text-reserve-cream-muted">
                    <span>Sundays:</span>
                    <span className="font-semibold text-reserve-gold">1:00 PM – 7:00 PM</span>
                  </div>
                  <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1 text-cyan-300">
                      <Snowflake className="w-3 h-3" />
                      Frozen Meat Available Daily
                    </span>
                    <span className="flex items-center gap-1 text-amber-300 font-medium">
                      <Calendar className="w-3 h-3" />
                      Slaughter: Fridays (Collection by 12 Noon)
                    </span>
                  </div>
                </div>
              </div>

              {/* Walk-in Guidelines */}
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-reserve-emerald-surface/90 border border-reserve-gold/25">
                <ShieldCheck className="w-5 h-5 text-reserve-gold flex-shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm">
                  <strong className="text-white block font-semibold text-sm sm:text-base mb-0.5">
                    Walk-In Counter Guidelines:
                  </strong>
                  <p className="text-reserve-cream-muted leading-relaxed">
                    Digital weight scales are positioned in direct customer view. Boneless beef is weighed after complete bone removal so you never pay for bone waste.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-reserve-gold to-reserve-gold-dark text-reserve-emerald font-bold text-xs uppercase tracking-wider shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${WHATSAPP_PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-reserve-emerald-surface border border-reserve-gold/40 text-reserve-cream hover:text-reserve-gold hover:border-reserve-gold text-xs font-semibold uppercase tracking-wider transition-all"
              >
                <Phone className="w-4 h-4 text-reserve-gold" />
                <span>Call Store ({DISPLAY_PHONE_NUMBER})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Embedded Google Maps Iframe */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border-2 border-reserve-gold/40 shadow-luxury-lg bg-reserve-emerald-dark">
              {/* Header bar of map */}
              <div className="bg-reserve-emerald-surface p-3.5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-white">Adigbe Walk-In Counter Location</span>
                </div>
                <span className="text-[11px] text-reserve-gold">Abeokuta, Ogun State</span>
              </div>

              {/* Responsive Google Maps Iframe centered on Adigbe, Abeokuta */}
              <div className="relative w-full h-[360px] sm:h-[420px]">
                <iframe
                  title="Alayaki Reserve Store Location - God's Hope Hospital Car Park, Adigbe, Abeokuta"
                  src="https://maps.google.com/maps?q=Adigbe,+Abeokuta,+Ogun+State,+Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full filter brightness-90 contrast-105"
                />
              </div>

              {/* Bottom Caption */}
              <div className="p-3 bg-reserve-emerald-dark text-center text-xs text-reserve-cream-muted border-t border-white/10">
                <span>📍 Located within God&apos;s Hope Hospital Car Park • Secure, serene collection point</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
