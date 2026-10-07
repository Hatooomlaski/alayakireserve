"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useOrder } from "@/context/OrderContext";
import { MessageCircle, ShoppingBag, Menu, X, ShieldCheck, MapPin, Phone, Snowflake, Calendar } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function Navbar() {
  const { totalItemCount, openDrawer } = useOrder();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - Heritage Trust Banner */}
      <div className="bg-reserve-burgundy border-b border-reserve-gold/30 text-xs py-2 px-4 text-center tracking-wide text-reserve-cream">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-2 justify-center flex-wrap">
            <span className="inline-flex items-center justify-center bg-reserve-gold text-reserve-emerald font-bold px-1.5 py-0.5 rounded text-[10px] uppercase tracking-wider">
              Guaranteed
            </span>
            <span className="font-semibold text-reserve-gold-light">
              100% Boneless Pure Meat
            </span>
            <span className="hidden md:inline text-white/50">•</span>
            <span className="hidden lg:inline text-cyan-200">
              Frozen Meat Always Available In-Store
            </span>
            <span className="hidden md:inline text-white/50">•</span>
            <span className="hidden md:inline text-white/80">
              Slaughter Day: Fridays
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-reserve-cream/90 justify-center">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-reserve-gold" />
              <span>Adigbe, Abeokuta (Mon–Sat 8am–7pm, Sun 1pm–7pm)</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-reserve-gold hover:underline font-medium"
            >
              <Phone className="w-3 h-3" />
              <span>{DISPLAY_PHONE_NUMBER}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Luxury Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-reserve-emerald/95 backdrop-blur-md border-b border-reserve-gold/25 py-3 shadow-luxury-md"
            : "bg-reserve-emerald/80 backdrop-blur-sm border-b border-white/10 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Identity / Crest Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full border border-reserve-gold/60 bg-reserve-emerald-light/60 flex items-center justify-center shadow-gold-glow group-hover:border-reserve-gold transition-colors">
                <span className="font-serif text-lg font-bold text-reserve-gold">
                  AR
                </span>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-gold-gradient block leading-tight">
                  ALAYAKI RESERVE
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-reserve-gold/80 block font-sans font-medium">
                  Abeokuta’s Premier Bespoke Butchery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 text-sm font-medium">
              <Link
                href="#catalog"
                className="text-reserve-cream/90 hover:text-reserve-gold transition-colors"
              >
                Artisanal Cuts
              </Link>
              <Link
                href="#schedule"
                className="text-reserve-cream/90 hover:text-reserve-gold transition-colors"
              >
                Friday Slaughter & Schedule
              </Link>
              <Link
                href="#standards"
                className="text-reserve-cream/90 hover:text-reserve-gold transition-colors"
              >
                100% Boneless Standard
              </Link>
              <Link
                href="#location"
                className="text-reserve-cream/90 hover:text-reserve-gold transition-colors"
              >
                Walk-In Store
              </Link>
              <Link
                href="#corporate"
                className="text-reserve-cream/90 hover:text-reserve-gold transition-colors"
              >
                B2B & Bulk Supply
              </Link>
            </nav>

            {/* Quick Actions (WhatsApp Direct + Cart Drawer Trigger) */}
            <div className="flex items-center gap-3">
              {/* WhatsApp direct line quick button */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I would like to make an inquiry about this Friday's slaughter cycle.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-reserve-gold/40 text-reserve-gold bg-reserve-gold/10 hover:bg-reserve-gold hover:text-reserve-emerald transition-all text-xs font-semibold"
                title="Chat with Alayaki Reserve on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Line</span>
              </a>

              {/* Order Builder Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-reserve-gold to-reserve-gold-dark text-reserve-emerald font-semibold text-xs sm:text-sm shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                aria-label="View Order Builder"
              >
                <ShoppingBag className="w-4 h-4 text-reserve-emerald" />
                <span className="font-bold">Build Order</span>
                {totalItemCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-reserve-burgundy text-white text-[11px] font-bold rounded-full border border-white/20">
                    {totalItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-reserve-cream hover:text-reserve-gold hover:bg-white/5 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-reserve-emerald-surface/98 border-b border-reserve-gold/30 px-5 pt-4 pb-6 mt-3 space-y-4 shadow-luxury-lg">
            <div className="flex flex-col gap-1 pb-3 border-b border-white/10 text-xs text-reserve-gold">
              <span className="font-medium">📍 God&apos;s Hope Hospital Car Park, Adigbe</span>
              <span className="text-[11px] text-reserve-cream-muted">
                Mon–Sat: 8am–7pm | Sun: 1pm–7pm (Frozen Always Available)
              </span>
            </div>
            <div className="flex flex-col space-y-3 text-sm font-medium">
              <Link
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-reserve-cream hover:text-reserve-gold py-1"
              >
                🥩 Artisanal Cuts & Prices
              </Link>
              <Link
                href="#schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="text-reserve-cream hover:text-reserve-gold py-1"
              >
                🗓️ Friday Slaughter Schedule
              </Link>
              <Link
                href="#standards"
                onClick={() => setMobileMenuOpen(false)}
                className="text-reserve-cream hover:text-reserve-gold py-1"
              >
                ✨ 100% Boneless Standard
              </Link>
              <Link
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-reserve-cream hover:text-reserve-gold py-1"
              >
                🏪 Walk-In Store & Directions
              </Link>
              <Link
                href="#corporate"
                onClick={() => setMobileMenuOpen(false)}
                className="text-reserve-cream hover:text-reserve-gold py-1"
              >
                🏢 Corporate & Bulk Supply
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-reserve-gold text-reserve-emerald font-bold text-sm shadow-gold-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Order Cart ({totalItemCount} items)</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-reserve-gold/40 text-reserve-gold hover:bg-reserve-gold/10 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+234 815 386 1887)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
