"use client";

import React from "react";
import { Sparkles, Scale, PackageCheck, Store, ShieldCheck } from "lucide-react";

export default function TrustBar() {
  const trustPoints = [
    {
      icon: "🧼",
      title: "Hygienically Processed",
      desc: "State-of-the-art clean facilities",
    },
    {
      icon: "⚖️",
      title: "Accurately Weighed",
      desc: "You pay for exactly what you get",
    },
    {
      icon: "📦",
      title: "Carefully Packaged",
      desc: "Temperature-controlled delivery",
    },
    {
      icon: "🏪",
      title: "Walk-In or Delivery",
      desc: "Shop in-store or to your door",
    },
  ];

  return (
    <div className="w-full bg-pristine border-b border-steel-border shadow-pristine-sm relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-steel-border/70 py-2.5 sm:py-3 text-charcoal">
          {trustPoints.map((point, idx) => (
            <div
              key={point.title}
              className={`flex items-center gap-2.5 px-2 sm:px-4 ${
                idx % 2 === 0 ? "pr-2" : "pl-2"
              } ${idx >= 2 ? "pt-2 md:pt-0" : "pb-2 md:pb-0"}`}
            >
              <span className="text-lg sm:text-xl flex-shrink-0 select-none">
                {point.icon}
              </span>
              <div className="min-w-0">
                <div className="text-xs sm:text-[13px] font-bold text-charcoal tracking-tight truncate leading-tight">
                  {point.title}
                </div>
                <div className="text-[10px] sm:text-[11px] text-steel font-normal truncate leading-tight">
                  {point.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
