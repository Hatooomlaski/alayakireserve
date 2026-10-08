"use client";

import React, { useState } from "react";
import { Building2, Utensils, Briefcase, Truck, CheckCircle2, MessageCircle } from "lucide-react";
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
    <section id="corporate" className="py-14 sm:py-20 lg:py-24 bg-pristine relative overflow-hidden border-t border-steel-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: B2B Value Proposition */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-steel-surface border border-steel-border text-charcoal text-xs font-bold uppercase tracking-wider shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-ruby" />
              <span>B2B Commercial & Hospitality Supply</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Institutional Precision for Abeokuta Hospitality & Caterers
            </h2>

            <p className="text-steel text-sm sm:text-base font-normal leading-relaxed">
              Eliminate fluctuating open-market beef quality, inconsistent weights, and poor kitchen yield. Alayaki Reserve partners with premier Abeokuta hotels, fine dining restaurants, corporate canteens, and event caterers.
            </p>

            {/* B2B Pillars */}
            <div className="space-y-4 pt-1">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-steel-surface border border-steel-border shadow-pristine-sm">
                <div className="w-9 h-9 rounded-xl bg-white border border-steel-border flex items-center justify-center text-ruby flex-shrink-0 mt-0.5">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Strict Portion Precision & Kitchen Cost Control
                  </h4>
                  <p className="text-xs text-steel leading-relaxed mt-0.5">
                    100% boneless yield means your executive chef calculates food costs with 100% precision. Zero bone trimming loss in your prep kitchen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-steel-surface border border-steel-border shadow-pristine-sm">
                <div className="w-9 h-9 rounded-xl bg-white border border-steel-border flex items-center justify-center text-charcoal flex-shrink-0 mt-0.5">
                  <Truck className="w-4 h-4 text-whatsapp" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Scheduled Commercial Delivery Runs
                  </h4>
                  <p className="text-xs text-steel leading-relaxed mt-0.5">
                    Guaranteed priority delivery windows across Abeokuta (Ibara, Oke-Mosan, Adigbe, Kuto, Camp) in temperature-controlled packaging.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: B2B WhatsApp Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-steel-border shadow-pristine-md">
              <div className="space-y-1 mb-6 pb-4 border-b border-steel-border">
                <h3 className="font-serif text-2xl font-bold text-charcoal">
                  Direct B2B Supply Desk
                </h3>
                <p className="text-xs text-steel">
                  Complete this brief profile to receive bulk pricing tier schedules and sample allocations via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-1">
                      Establishment Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Park Inn, Ibara Lounge"
                      value={formData.companyName}
                      onChange={(e) =>
                        setFormData({ ...formData, companyName: e.target.value })
                      }
                      className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none min-h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-1">
                      Lead Contact / Chef *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Chef Emmanuel"
                      value={formData.contactPerson}
                      onChange={(e) =>
                        setFormData({ ...formData, contactPerson: e.target.value })
                      }
                      className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none min-h-[42px]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-1">
                      WhatsApp Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0803 123 4567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none min-h-[42px]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-1">
                      Estimated Volume
                    </label>
                    <select
                      value={formData.estimatedVolume}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedVolume: e.target.value })
                      }
                      className="w-full bg-steel-surface text-charcoal text-xs rounded-xl px-3 py-2.5 border border-steel-border focus:border-charcoal focus:outline-none min-h-[42px]"
                    >
                      <option>10kg - 25kg Weekly</option>
                      <option>25kg - 50kg Weekly</option>
                      <option>50kg - 100kg Weekly</option>
                      <option>Over 100kg+ Weekly (Full Cow Contract)</option>
                      <option>One-Time Large Event / Party Supply</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-charcoal uppercase tracking-wider block mb-1">
                    Specific Cut Specifications or Delivery Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Need weekly 30kg boneless beef cut into 40g stew cubes, delivered every Friday morning by 10am."
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData({ ...formData, notes: e.target.value })
                    }
                    className="w-full bg-steel-surface text-charcoal text-xs rounded-xl p-3 border border-steel-border focus:border-charcoal focus:outline-none"
                  />
                </div>

                {/* Submit Action in Ruby Crimson */}
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 px-6 rounded-xl bg-ruby hover:bg-ruby-hover text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-ruby-glow transition-all active:scale-98"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Submit Corporate Inquiry to WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
