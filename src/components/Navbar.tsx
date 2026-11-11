"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";
import { MessageCircle, ShoppingBag, Menu, X } from "lucide-react";
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
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-charcoal/95 backdrop-blur-md border-b border-charcoal-border py-2.5 sm:py-3 shadow-luxury-md"
          : "bg-charcoal border-b border-charcoal-border py-3 sm:py-3.5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Identity / Official Crest Logo */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-reserve-gold/80 shadow-gold-glow overflow-hidden bg-white flex-shrink-0 group-hover:scale-105 transition-transform">
              <Image
                src="/images/logo-crest.jpg"
                alt="Alayaki Reserve Official Brand Logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-[0.12em] text-white block leading-tight">
                ALAYAKI RESERVE
              </span>
              <span className="hidden sm:block text-[9px] uppercase tracking-[0.25em] text-reserve-gold-bright font-sans font-semibold">
                Bespoke Butchery • Abeokuta
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Understated Editorial Luxury) */}
          <nav className="hidden lg:flex items-center space-x-7 text-xs sm:text-sm font-medium tracking-wide">
            <Link
              href="#catalog"
              className="text-steel-light hover:text-white transition-colors"
            >
              Artisanal Cuts
            </Link>
            <Link
              href="#schedule"
              className="text-steel-light hover:text-white transition-colors"
            >
              Slaughter Schedule
            </Link>
            <Link
              href="#standards"
              className="text-steel-light hover:text-white transition-colors"
            >
              The Standard
            </Link>
            <Link
              href="#location"
              className="text-steel-light hover:text-white transition-colors"
            >
              Store Location
            </Link>
            <Link
              href="#corporate"
              className="text-steel-light hover:text-white transition-colors"
            >
              B2B Supply
            </Link>
          </nav>

          {/* Actions: Desktop & Mobile Responsive */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp direct inquiry (desktop) */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello Alayaki Reserve, I would like to make an inquiry about your bespoke butchery cuts."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-charcoal-border hover:border-whatsapp text-steel-light hover:text-white transition-all text-xs font-semibold"
              title="Chat with Alayaki Reserve on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-whatsapp" />
              <span>Inquire</span>
            </a>

            {/* Desktop Order Builder Trigger */}
            <button
              onClick={openDrawer}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ruby hover:bg-ruby-hover text-white font-bold text-xs uppercase tracking-wider shadow-ruby-glow active:scale-95 transition-all"
              aria-label="View Order Builder"
            >
              <ShoppingBag className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Build Order</span>
              {totalItemCount > 0 && (
                <span className="ml-0.5 px-1.5 py-px bg-white text-ruby text-[10px] font-extrabold rounded-full">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Minimalist Cart Icon Button */}
            <button
              onClick={openDrawer}
              className="sm:hidden relative p-2 rounded-xl text-white hover:text-reserve-gold bg-white/5 border border-white/10 active:scale-95 transition-all"
              aria-label="View Order Builder"
            >
              <ShoppingBag className="w-5 h-5" />
              {totalItemCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 bg-ruby text-white text-[10px] font-extrabold rounded-full flex items-center justify-center shadow-md">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white hover:text-reserve-gold bg-white/5 border border-white/10 active:scale-95 transition-all"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-reserve-gold" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu (Clean, Minimalist Luxury) */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-charcoal border-b border-charcoal-border px-6 pt-4 pb-6 mt-2 space-y-4 shadow-2xl backdrop-blur-xl duration-200">
          <nav className="flex flex-col divide-y divide-white/5 text-sm font-medium">
            <Link
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-reserve-gold py-3 flex items-center justify-between"
            >
              <span>Artisanal Cuts & Prices</span>
              <span className="text-xs text-steel-light font-serif">Catalog</span>
            </Link>
            <Link
              href="#schedule"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-reserve-gold py-3 flex items-center justify-between"
            >
              <span>Slaughter Schedule</span>
              <span className="text-xs text-reserve-gold font-serif">Fridays at Dawn</span>
            </Link>
            <Link
              href="#standards"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-reserve-gold py-3 flex items-center justify-between"
            >
              <span>The Boneless Beef Standard</span>
              <span className="text-xs text-steel-light font-serif">Pure Yield</span>
            </Link>
            <Link
              href="#location"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-reserve-gold py-3 flex items-center justify-between"
            >
              <span>Walk-In Store (Adigbe)</span>
              <span className="text-xs text-steel-light font-serif">Location</span>
            </Link>
            <Link
              href="#corporate"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white hover:text-reserve-gold py-3 flex items-center justify-between"
            >
              <span>B2B Commercial Supply</span>
              <span className="text-xs text-steel-light font-serif">Wholesale</span>
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openDrawer();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-ruby hover:bg-ruby-hover text-white font-bold text-xs uppercase tracking-wider shadow-ruby-glow transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Review Order ({totalItemCount} items)</span>
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello Alayaki Reserve, I would like to make an inquiry about your bespoke butchery cuts."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-charcoal-rich border border-charcoal-border hover:border-whatsapp text-white text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-whatsapp" />
              <span>Chat on WhatsApp ({DISPLAY_PHONE_NUMBER})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
