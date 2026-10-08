"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useOrder } from "@/context/OrderContext";
import { MessageCircle, ShoppingBag, Menu, X, MapPin } from "lucide-react";
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
          ? "bg-charcoal/95 backdrop-blur-md border-b border-charcoal-border py-3 shadow-luxury-md"
          : "bg-charcoal border-b border-charcoal-border py-4"
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
              className="text-white hover:text-reserve-gold transition-colors font-medium"
            >
              Artisanal Cuts
            </Link>
            <Link
              href="#schedule"
              className="text-white hover:text-reserve-gold transition-colors font-medium"
            >
              Friday Slaughter
            </Link>
            <Link
              href="#standards"
              className="text-white hover:text-reserve-gold transition-colors font-medium"
            >
              100% Boneless Standard
            </Link>
            <Link
              href="#location"
              className="text-white hover:text-reserve-gold transition-colors font-medium"
            >
              Walk-In Store
            </Link>
            <Link
              href="#corporate"
              className="text-white hover:text-reserve-gold transition-colors font-medium"
            >
              B2B Bulk Supply
            </Link>
          </nav>

          {/* Quick Actions (WhatsApp Direct + Cart Drawer Trigger) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* WhatsApp direct line quick button (desktop) */}
            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(
                "Hello Alayaki Reserve, I would like to make an inquiry about your bespoke butchery cuts."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-whatsapp hover:bg-whatsapp-hover text-white transition-all text-xs font-bold shadow-whatsapp-glow"
              title="Chat with Alayaki Reserve on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Order Builder Drawer Trigger */}
            <button
              onClick={openDrawer}
              className="relative inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-4 py-2 rounded-full bg-ruby hover:bg-ruby-hover text-white font-bold text-xs sm:text-sm shadow-ruby-glow active:scale-95 transition-all"
              aria-label="View Order Builder"
            >
              <ShoppingBag className="w-4 h-4 text-white stroke-[2.5]" />
              <span>Build Order</span>
              {totalItemCount > 0 && (
                <span className="ml-1 px-1.5 py-0.2 bg-white text-ruby text-[10px] sm:text-[11px] font-extrabold rounded-full shadow-sm animate-pulse">
                  {totalItemCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-white hover:text-reserve-gold bg-white/10 border border-white/15 active:scale-95 transition-all"
              aria-label="Toggle menu"
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

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-charcoal border-b border-charcoal-border px-5 pt-4 pb-6 mt-2.5 space-y-4 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-1 pb-3 border-b border-white/10 text-xs text-reserve-gold">
            <span className="font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-reserve-gold" />
              God&apos;s Hope Hospital Car Park, Adigbe
            </span>
            <span className="text-[11px] text-steel-light pl-5">
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
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-ruby hover:bg-ruby-hover text-white font-extrabold text-sm shadow-ruby-glow transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>View Order Cart ({totalItemCount} items)</span>
            </button>

            <a
              href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-whatsapp hover:bg-whatsapp-hover text-white text-sm font-bold shadow-whatsapp-glow transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-white" />
              <span>Chat on WhatsApp (+234 815 386 1887)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
