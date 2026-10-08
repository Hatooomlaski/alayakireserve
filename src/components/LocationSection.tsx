"use client";

import React from "react";
import { MapPin, Phone, Clock, Navigation, Snowflake, Calendar } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function LocationSection() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=God's+Hope+Hospital+Adigbe+Abeokuta+Ogun+State";

  return (
    <section id="location" className="py-14 sm:py-20 lg:py-24 bg-steel-surface/50 relative border-t border-steel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Physical Store Details */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pristine border border-steel-border text-charcoal text-xs font-bold uppercase tracking-wider shadow-sm">
              <MapPin className="w-3.5 h-3.5 text-ruby" />
              <span>Flagship Walk-In Butchery Counter</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Visit Our Walk-In Station in Adigbe
            </h2>

            <p className="text-steel text-sm sm:text-base font-normal leading-relaxed">
              Prefer to see your cuts weighed, trimmed, and packaged in person? Walk into our hygienic butcher station at Adigbe, Abeokuta. Frozen boneless pure beef, offal, and goat shares are <strong className="text-charcoal font-bold">always available</strong> in-store daily, with live slaughter processing every <strong className="text-charcoal font-bold">Friday</strong> (collection opens by 12:00 Noon).
            </p>

            {/* Store Information Grid */}
            <div className="space-y-3.5 pt-1">
              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-pristine border border-steel-border shadow-pristine-sm">
                <div className="w-9 h-9 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-ruby flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-xs sm:text-sm">
                  <strong className="text-charcoal block font-bold text-sm sm:text-base mb-0.5">
                    Physical Store Address:
                  </strong>
                  <p className="text-steel">
                    God&apos;s Hope Hospital Car Park, Adigbe, Abeokuta, Ogun State, Nigeria.
                  </p>
                  <span className="inline-block mt-1 text-[11px] text-charcoal font-semibold">
                    Easily accessible along main Adigbe road with ample secure parking.
                  </span>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-pristine border border-steel-border shadow-pristine-sm">
                <div className="w-9 h-9 rounded-xl bg-steel-surface border border-steel-border flex items-center justify-center text-charcoal flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-steel" />
                </div>
                <div className="text-xs sm:text-sm space-y-1.5 w-full">
                  <strong className="text-charcoal block font-bold text-sm sm:text-base">
                    Physical Store Opening Hours:
                  </strong>
                  <div className="flex justify-between gap-4 text-steel">
                    <span>Mondays – Saturdays:</span>
                    <strong className="text-charcoal font-bold">8:00 AM – 7:00 PM</strong>
                  </div>
                  <div className="flex justify-between gap-4 text-steel">
                    <span>Sundays:</span>
                    <strong className="text-charcoal font-bold">1:00 PM – 7:00 PM</strong>
                  </div>
                  <div className="pt-1 text-[11px] text-ruby font-bold border-t border-steel-border flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Friday Fresh Collection: Opens 12:00 Noon onwards</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-charcoal hover:bg-charcoal-rich text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center min-h-[46px]"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>

              <a
                href={`tel:${WHATSAPP_PHONE_NUMBER}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pristine border border-steel-border text-charcoal hover:bg-steel-surface font-bold text-xs uppercase tracking-wider shadow-sm transition-all text-center min-h-[46px]"
              >
                <Phone className="w-4 h-4 text-whatsapp" />
                <span>Call Store ({DISPLAY_PHONE_NUMBER})</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Frame */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-steel-border shadow-pristine-md bg-white p-2">
              <div className="relative w-full h-[360px] sm:h-[440px] rounded-xl overflow-hidden bg-steel-surface">
                <iframe
                  title="Alayaki Reserve Walk-In Butchery Location Map"
                  src="https://maps.google.com/maps?q=God's+Hope+Hospital+Adigbe+Abeokuta&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>

              {/* Map Footer Helper */}
              <div className="p-3 bg-pristine text-[11px] text-steel flex items-center justify-between">
                <span>📍 Adigbe Commercial Zone, Abeokuta</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ruby hover:underline font-bold"
                >
                  Direct Driving Navigation →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
