"use client";

import * as React from "react";
import Link from "next/link";
import { X, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
      className="fixed inset-0 z-50 md:hidden bg-brand-black/98 backdrop-blur-xl flex flex-col justify-between p-6 overflow-y-auto animate-fadeIn"
    >
      {/* Top Header Row with Logo and Close Button */}
      <div className="flex items-center justify-between pb-6 border-b border-brand-border/60">
        <Link
          href="#home"
          onClick={onClose}
          className="flex items-center gap-3"
          aria-label="MS Drywall Finish Home"
        >
          <div className="w-10 h-10 rounded border border-brand-gold/40 bg-gradient-to-br from-[#1c1b17] to-[#0e0e11] flex items-center justify-center">
            <span className="font-serif-luxury font-bold text-lg text-gold-gradient">
              MS
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif-luxury tracking-[0.2em] text-base font-bold text-gold-gradient uppercase leading-none">
              MS
            </span>
            <span className="text-[8px] tracking-[0.28em] font-semibold text-zinc-300 uppercase mt-1 leading-none">
              Drywall Finish
            </span>
          </div>
        </Link>

        <button
          onClick={onClose}
          aria-label="Close menu"
          className="w-10 h-10 rounded-full border border-brand-border text-neutral-300 hover:text-brand-gold flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="py-8 flex flex-col space-y-5" aria-label="Mobile Navigation">
        {siteConfig.navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="text-2xl font-serif-luxury font-medium text-neutral-200 hover:text-brand-gold transition-colors flex items-center justify-between group"
          >
            <span>{item.label}</span>
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 text-brand-gold transition-all" />
          </Link>
        ))}
      </nav>

      {/* Bottom Quick Contact Section */}
      <div className="pt-6 border-t border-brand-border/60 space-y-4">
        <div className="flex items-center gap-2 text-xs text-brand-gold font-medium uppercase tracking-widest">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Toronto & GTA Direct Line
        </div>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="flex items-center gap-3 p-3 rounded-xl bg-brand-surface border border-brand-border text-white hover:border-brand-gold transition-colors"
        >
          <div className="w-9 h-9 rounded-full bg-brand-card flex items-center justify-center text-brand-gold">
            <Phone className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs text-neutral-400 block">Call Directly</span>
            <span className="text-sm font-semibold">{siteConfig.contact.phone}</span>
          </div>
        </a>

        <a
          href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
            siteConfig.contact.whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs uppercase tracking-wider transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Chat on WhatsApp
        </a>

        <Link
          href="#contact"
          onClick={onClose}
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-gold-gradient text-brand-black font-bold text-xs uppercase tracking-widest shadow-gold-sm transition-all"
        >
          <span>Get a Free Quote</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

