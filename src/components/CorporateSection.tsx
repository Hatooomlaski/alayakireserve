"use client";

import React, { useState } from "react";
import { Building2, Utensils, Briefcase, Truck, ShieldCheck, MessageCircle, CheckCircle2, ChevronRight } from "lucide-react";
import { generateCorporateWhatsAppUrl } from "@/lib/whatsapp";

export default function CorporateSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    phone: "",
    supplyType: "Fine Dining Restaurant / Lounge",
    estimatedVolume: "20kg - 50kg Weekly",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = generateCorporateWhatsAppUrl(formData);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="corporate" className="py-14 sm:py-20 lg:py-24 bg-reserve-obsidian relative overflow-hidden border-t border-reserve-gold/20">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-reserve-gold/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-reserve-burgundy via-reserve-burgundy-light to-reserve-burgundy border border-reserve-gold/60 text-reserve-gold-light text-xs font-bold uppercase tracking-widest shadow-gold-glow">
              <Briefcase className="w-3.5 h-3.5" />
              <span>B2B Commercial & Hospitality Supply</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-reserve-cream leading-tight">
              Institutional Precision for Abeokuta Hospitality & Caterers
            </h2>

            <p className="text-reserve-cream-muted text-sm sm:text-base font-light leading-relaxed">
              Eliminate fluctuating open-market beef quality, inconsistent weights, and poor kitchen yield. Alayaki Reserve partners with premier Abeokuta hotels, fine dining restaurants, corporate canteens, and event caterers.
            </p>

            {/* B2B Pillars */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-card-gradient border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-reserve-cream">
                    Strict Portion Precision & Kitchen Cost Control
                  </h4>
                  <p className="text-xs text-reserve-cream-muted leading-relaxed mt-0.5">
                    100% boneless yield means your chef calculates food costs with 100% precision. Zero bone trimming loss in your prep kitchen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-card-gradient border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <Truck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-reserve-cream">
                    Scheduled Temperature-Controlled Supply Runs
                  </h4>
                  <p className="text-xs text-reserve-cream-muted leading-relaxed mt-0.5">
                    Automated weekly or bi-weekly standing dispatches directly to your commercial kitchen across Abeokuta (Ibara, Oke-Mosan, Kuto, Idi-Aba).
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-card-gradient border border-white/10">
                <div className="w-9 h-9 rounded-xl bg-reserve-gold/15 border border-reserve-gold/40 flex items-center justify-center text-reserve-gold flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-reserve-cream">
                    Contracted Volume Slabs & Invoicing
                  </h4>
                  <p className="text-xs text-reserve-cream-muted leading-relaxed mt-0.5">
                    Discounted wholesale tiers for recurring standing orders exceeding 25kg, 50kg, and whole-cattle arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive B2B WhatsApp Form */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl p-5 sm:p-8 bg-card-gradient border border-reserve-gold/35 shadow-luxury-lg backdrop-blur-md">
              <div className="border-b border-white/10 pb-4 mb-5">
                <span className="text-[11px] uppercase tracking-widest text-reserve-gold-bright font-bold block">
                  Wholesale Procurement Desk
                </span>
                <h3 className="font-serif text-2xl font-bold text-reserve-cream mt-0.5">
                  Request B2B Supply Agreement
                </h3>
                <p className="text-xs text-reserve-cream-muted mt-1">
                  Fill in your commercial requirements below to generate a tailored corporate WhatsApp brief.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                    Business / Establishment Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Grand Heritage Hotel, Ibara"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-3 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                      Contact Person:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chef Babatunde / GM"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-3 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                      Official Phone / WhatsApp:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="080... or +234..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3.5 py-3 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                      Establishment Type:
                    </label>
                    <select
                      value={formData.supplyType}
                      onChange={(e) => setFormData({ ...formData, supplyType: e.target.value })}
                      className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
                    >
                      <option value="Fine Dining Restaurant / Lounge">Fine Dining / Lounge</option>
                      <option value="Hotel & Hospitality Facility">Hotel & Hospitality</option>
                      <option value="Event Caterer (Wedding / Ariya)">Event Caterer</option>
                      <option value="Corporate / Bank Staff Canteen">Corporate Canteen</option>
                      <option value="Boarding School / Institutional">Institutional</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                      Estimated Volume:
                    </label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                      className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl px-3 py-2.5 border border-white/15 focus:border-reserve-gold focus:outline-none min-h-[42px]"
                    >
                      <option value="20kg - 50kg Weekly">20kg – 50kg Weekly</option>
                      <option value="50kg - 100kg Weekly">50kg – 100kg Weekly</option>
                      <option value="100kg+ Weekly / Scheduled Run">100kg+ Weekly</option>
                      <option value="1 - 2 Whole Cattle Monthly">1 – 2 Whole Cattle Monthly</option>
                      <option value="One-off Ariya / Banquet Event">One-off Large Event</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-reserve-cream-muted block mb-1 font-semibold">
                    Specific Cuts or Custom Butchering Notes:
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Suya thin-slices, diced stew beef, clean honeycomb tripe only..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-reserve-obsidian text-reserve-cream text-xs rounded-xl p-3 border border-white/15 focus:border-reserve-gold focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[46px] py-3.5 px-4 rounded-xl bg-gradient-to-r from-reserve-gold-bright via-reserve-gold to-reserve-gold-dark text-reserve-obsidian font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-gold-glow hover:brightness-110 active:scale-98 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Corporate WhatsApp Inquiry</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
