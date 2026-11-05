"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#08080a]/95 backdrop-blur-md border-b border-brand-border/80 shadow-[0_4px_25px_rgba(0,0,0,0.6)]"
            : "bg-[#08080a]/80 backdrop-blur-sm border-b border-brand-border/40"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-20 sm:h-24 flex items-center justify-between">
          {/* Brand Monogram & Logo */}
          <Link
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="MS Drywall Finish Home"
          >
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded border border-brand-borderGold bg-gradient-to-br from-[#1c1b17] to-[#0e0e11] flex items-center justify-center p-1.5 shadow-sm group-hover:border-brand-gold transition-colors">
              <span className="font-serif-luxury font-bold text-xl text-gold-gradient tracking-tighter">
                MS
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury tracking-[0.2em] text-lg font-bold text-gold-gradient leading-none uppercase">
                MS
              </span>
              <span className="text-[9px] tracking-[0.28em] font-semibold text-zinc-300 uppercase mt-1 leading-none">
                Drywall Finish
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center space-x-8 text-xs font-medium tracking-wider uppercase"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 hover:text-brand-gold transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[1.5px] after:bg-brand-gold after:transition-all after:duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Direct Phone Indicator (visible on medium+ screens) */}
            <a
              href={`tel:${siteConfig.contact.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-zinc-300 hover:text-brand-gold transition-colors py-2 px-3 rounded-full hover:bg-brand-surface border border-transparent hover:border-brand-border"
              aria-label={`Call direct: ${siteConfig.contact.phone}`}
            >
              <Phone className="w-3.5 h-3.5 text-brand-gold" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            {/* Quote CTA Button */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs uppercase tracking-widest font-semibold text-brand-black bg-gold-gradient hover:opacity-95 hover:shadow-[0_0_20px_rgba(203,168,100,0.45)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2 stroke-[2.5]" />
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden w-10 h-10 rounded-full border border-brand-border text-zinc-300 hover:text-brand-gold hover:border-brand-gold flex items-center justify-center transition-colors"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <MobileNav
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}

