"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";
import { MessageCircle, ShoppingBag, Menu, X, ShieldCheck, MapPin, Phone, Snowflake } from "lucide-react";
import { DISPLAY_PHONE_NUMBER, WHATSAPP_PHONE_NUMBER } from "@/lib/whatsapp";

export default function Navbar() {
  const { totalItemCount, openDrawer } = useOrder();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Announcement Bar - Heritage Trust Banner */}
      <div className="bg-gradient-to-r from-reserve-burgundy via-reserve-burgundy-light to-reserve-burgundy border-b border-reserve-gold/30 text-xs py-1.5 px-3 sm:px-4 text-center tracking-wide text-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1">
          <div className="flex items-center gap-1.5 sm:gap-2 justify-center flex-wrap text-[11px] sm:text-xs">
            <span className="inline-flex items-center justify-center bg-reserve-gold text-reserve-obsidian font-extrabold px-1.5 py-0.2 rounded text-[10px] uppercase tracking-wider shadow-sm">
              Guaranteed
            </span>
            <span className="font-bold text-reserve-gold-light">
              100% Boneless Pure Meat
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden lg:inline text-cyan-200">
              Frozen Always In-Store
            </span>
            <span className="hidden md:inline text-white/40">•</span>
            <span className="hidden md:inline text-white/90">
              Friday Dawn Slaughter
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] text-reserve-cream-warm justify-center">
            <div className="flex items-center gap-1">
              <MapPin className="w-3 h-3 text-reserve-gold flex-shrink-0" />
              <span className="truncate max-w-[260px] sm:max-w-none">Adigbe, Abeokuta (Mon–Sat 8am–7pm, Sun 1pm–7pm)</span>
            </div>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1 text-reserve-gold hover:text-white font-medium transition-colors"
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
            ? "bg-reserve-obsidian/95 backdrop-blur-md border-b border-reserve-gold/30 py-2.5 sm:py-3 shadow-luxury-md"
            : "bg-reserve-obsidian/85 backdrop-blur-sm border-b border-white/10 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Identity / Official Crest Logo */}
            <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-reserve-gold shadow-gold-glow overflow-hidden bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <Image
                  src="/images/logo-crest.jpg"
                  alt="Alayaki Reserve Official Brand Logo"
                  fill
                  sizes="48px"
                  className="object-cover"
                  priority
                />
              </div>
              <div>
                <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-gold-gradient-bright block leading-tight">
                  ALAYAKI RESERVE
                </span>
                <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-reserve-gold-bright block font-sans font-semibold">
                  Abeokuta’s Premier Bespoke Butchery
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium">
              <Link
                href="#catalog"
                className="text-reserve-cream hover:text-reserve-gold transition-colors font-medium"
              >
                Artisanal Cuts
              </Link>
              <Link
                href="#schedule"
                className="text-reserve-cream hover:text-reserve-gold transition-colors font-medium"
              >
                Friday Slaughter
              </Link>
              <Link
                href="#standards"
                className="text-reserve-cream hover:text-reserve-gold transition-colors font-medium"
              >
                100% Boneless Standard
              </Link>
              <Link
                href="#location"
                className="text-reserve-cream hover:text-reserve-gold transition-colors font-medium"
              >
                Walk-In Store
              </Link>
              <Link
                href="#corporate"
                className="text-reserve-cream hover:text-reserve-gold transition-colors font-medium"
              >
                B2B Bulk Supply
              </Link>
            </nav>

            {/* Quick Actions (WhatsApp Direct + Cart Drawer Trigger) */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* WhatsApp direct line quick button (desktop) */}
              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello Alayaki Reserve, I would like to make an inquiry about your bespoke butchery cuts.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-reserve-gold/40 text-reserve-gold bg-reserve-gold/10 hover:bg-reserve-gold hover:text-reserve-obsidian transition-all text-xs font-semibold"
                title="Chat with Alayaki Reserve on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>

              {/* Order Builder Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-reserve-gold via-reserve-gold-bright to-reserve-gold-dark text-reserve-obsidian font-bold text-xs sm:text-sm shadow-gold-glow hover:brightness-110 active:scale-95 transition-all"
                aria-label="View Order Builder"
              >
                <ShoppingBag className="w-4 h-4 text-reserve-obsidian stroke-[2.5]" />
                <span>Build Order</span>
                {totalItemCount > 0 && (
                  <span className="ml-1 px-1.5 py-0.2 bg-reserve-burgundy text-white text-[10px] sm:text-[11px] font-extrabold rounded-full border border-white/20 animate-pulse">
                    {totalItemCount}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl text-reserve-cream hover:text-reserve-gold bg-white/5 border border-white/10 active:scale-95 transition-all"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-reserve-gold" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-reserve-obsidian/98 border-b border-reserve-gold/30 px-5 pt-4 pb-6 mt-2.5 space-y-4 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-1 pb-3 border-b border-white/10 text-xs text-reserve-gold">
              <span className="font-semibold flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-reserve-gold" />
                God&apos;s Hope Hospital Car Park, Adigbe
              </span>
              <span className="text-[11px] text-reserve-cream-muted pl-5">
                Mon–Sat: 8am–7pm | Sun: 1pm–7pm (Frozen Always Available)
              </span>
            </div>
            <div className="flex flex-col space-y-2.5 text-sm font-medium">
              <Link
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-reserve-gold py-1.5 flex items-center justify-between border-b border-white/5"
              >
                <span>🥩 Artisanal Cuts & Prices</span>
                <span className="text-xs text-reserve-gold font-serif">View</span>
              </Link>
              <Link
                href="#schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-reserve-gold py-1.5 flex items-center justify-between border-b border-white/5"
              >
                <span>🗓️ Friday Slaughter Schedule</span>
                <span className="text-xs text-amber-300 font-serif">12 Noon</span>
              </Link>
              <Link
                href="#standards"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-reserve-gold py-1.5 flex items-center justify-between border-b border-white/5"
              >
                <span>✨ 100% Boneless Standard</span>
                <span className="text-xs text-reserve-gold font-serif">Pure Meat</span>
              </Link>
              <Link
                href="#location"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-reserve-gold py-1.5 flex items-center justify-between border-b border-white/5"
              >
                <span>🏪 Walk-In Store & Directions</span>
                <span className="text-xs text-reserve-gold font-serif">Adigbe</span>
              </Link>
              <Link
                href="#corporate"
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-reserve-gold py-1.5 flex items-center justify-between"
              >
                <span>🏢 Corporate & Bulk Supply</span>
                <span className="text-xs text-reserve-gold font-serif">B2B</span>
              </Link>
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openDrawer();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-reserve-gold via-reserve-gold-bright to-reserve-gold text-reserve-obsidian font-extrabold text-sm shadow-gold-glow"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Order Cart ({totalItemCount} items)</span>
              </button>

              <a
                href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/20 border border-emerald-500/50 text-emerald-300 hover:bg-emerald-600/30 text-sm font-semibold"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Chat on WhatsApp (+234 815 386 1887)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
