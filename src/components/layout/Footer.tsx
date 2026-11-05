import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-brand-border/50 text-zinc-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Top Footer Row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-zinc-900">
          {/* Logo and Brand Identity */}
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded border border-brand-borderGold bg-zinc-900 flex items-center justify-center">
              <span className="font-serif-luxury font-bold text-lg text-gold-gradient">
                MS
              </span>
            </div>
            <div className="text-left">
              <span className="text-base font-serif-luxury font-bold tracking-wider text-zinc-200 block uppercase leading-none">
                {siteConfig.name}
              </span>
              <span className="text-[10px] text-brand-gold tracking-widest uppercase mt-1 block">
                Toronto • Oakville • Vaughan • Mississauga • GTA
              </span>
            </div>
          </div>

          {/* Footer Quick Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-wider text-zinc-400"
          >
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-brand-gold transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Coverage Badges */}
        <div className="py-6 border-b border-zinc-900/60">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3 font-semibold">
            Service Coverage Area:
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-zinc-400">
            {siteConfig.location.serviceAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-full bg-brand-surface/60 border border-brand-border/40 text-[11px]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Credits & Legal Disclaimers */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-500 gap-4">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.{" "}
            <span className="text-zinc-400">
              [{siteConfig.disclaimers.licensePlaceholder}]
            </span>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span>
              Created by{" "}
              <span className="text-brand-gold font-medium">
                {siteConfig.developer.name}
              </span>{" "}
              — {siteConfig.developer.role}
            </span>
            <span className="text-brand-gold">•</span>
            <span>Crafted for Toronto &amp; GTA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

