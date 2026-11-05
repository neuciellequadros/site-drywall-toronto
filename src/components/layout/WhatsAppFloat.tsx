"use client";

import * as React from "react";
import Link from "next/link";
import { MessageSquare, Phone, ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppFloat() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  React.useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.contact.whatsappMessage
  )}`;

  return (
    <>
      {/* Floating WhatsApp Action Pill (Desktop & Tablet) */}
      <aside
        aria-label="Quick WhatsApp Contact"
        className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3"
      >
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with MS Drywall Finish on WhatsApp"
          className="flex items-center gap-3 px-4 py-3 rounded-full bg-brand-charcoal/95 border border-brand-borderGold text-neutral-100 shadow-[0_8px_30px_rgba(0,0,0,0.8)] hover:border-brand-gold hover:text-brand-gold hover:shadow-[0_0_25px_rgba(203,168,100,0.3)] transition-all transform hover:-translate-y-1 group"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform">
            <MessageSquare className="w-4 h-4 fill-white" />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-[10px] uppercase font-semibold text-emerald-400 tracking-wider flex items-center gap-1.5 leading-none">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              WhatsApp Direct
            </span>
            <span className="text-xs font-bold text-white tracking-wide mt-1">
              (437) 998-2003
            </span>
          </div>
        </a>
      </aside>

      {/* Floating Bottom Sticky Bar (Mobile Only - Matching Stitch Mobile Viewport) */}
      <aside
        aria-label="Direct Quick Phone & Quote Actions"
        className="sm:hidden fixed bottom-3 left-3 right-3 z-40 flex items-center gap-2 p-1.5 rounded-full bg-brand-black/95 backdrop-blur-md border border-brand-borderGold shadow-2xl"
      >
        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          aria-label="Direct call MS Drywall Finish"
          className="flex-1 py-3 px-3 rounded-full bg-brand-surface text-center text-xs font-semibold text-white flex items-center justify-center gap-1.5 border border-brand-border active:bg-brand-card"
        >
          <Phone className="w-3.5 h-3.5 text-brand-gold" />
          <span>Call Now</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp MS Drywall Finish"
          className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-sm"
        >
          <MessageSquare className="w-4 h-4 fill-white" />
        </a>

        <Link
          href="#contact"
          className="flex-1 py-3 px-3 rounded-full bg-gold-gradient text-center text-xs font-bold text-brand-black flex items-center justify-center gap-1 shadow-gold-sm active:brightness-95"
        >
          <span>Free Quote</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </Link>
      </aside>
    </>
  );
}

