import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[720px] lg:min-h-[820px] flex items-center bg-[#09090b] overflow-hidden border-b border-brand-border/40"
    >
      {/* Gold Diagonal Decorative Lines */}
      <div className="gold-diagonal-line top-28 left-0 w-3/4 -rotate-12 opacity-30" />
      <div className="gold-diagonal-line bottom-20 left-10 w-2/5 -rotate-6 opacity-20" />

      {/* Ambient Golden Radial Glow */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full py-16 sm:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Editorial Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col justify-center space-y-6 pt-2">
          {/* Location Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-brand-surface/90 border border-brand-borderGold/60 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-brand-goldLight">
              Toronto, ON & GTA • Licensed & Insured
            </span>
          </div>

          {/* Main Serif Headline */}
          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light text-zinc-100 leading-[1.08] tracking-tight">
            Professional <br />
            <span className="font-semibold text-gold-gradient italic">
              Drywall
            </span>{" "}
            <br />
            &amp; Finishing Services
          </h1>

          {/* Quality Tagline with Decorative Dash */}
          <div className="flex items-center gap-3 pt-1">
            <p className="text-xs sm:text-sm font-medium tracking-wider text-zinc-300 uppercase">
              Quality. Precision. Perfect Finishes.
            </p>
            <div className="w-12 h-[1px] bg-brand-gold" />
          </div>

          {/* Narrative Body Description */}
          <p className="text-zinc-400 text-sm sm:text-base lg:text-lg max-w-xl font-normal leading-relaxed">
            {siteConfig.description}
          </p>

          {/* Action CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-semibold text-brand-black bg-gold-gradient hover:opacity-95 shadow-[0_4px_25px_rgba(203,168,100,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-4 h-4 ml-2.5 stroke-[2]" />
            </Link>

            <Link
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium text-zinc-200 border border-zinc-700 bg-brand-charcoal/60 hover:bg-brand-charcoal hover:border-brand-gold transition-all"
            >
              <span>Explore Services</span>
            </Link>
          </div>

          {/* Quick Trust Stats Micro-bar */}
          <div className="pt-6 sm:pt-8 border-t border-brand-border/40 grid grid-cols-3 gap-4 max-w-lg text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury text-brand-gold font-semibold">
                12+
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                Years Craft
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury text-brand-gold font-semibold">
                100%
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                Dustless Sand
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif-luxury text-brand-gold font-semibold">
                Level 5
              </div>
              <div className="text-[10px] sm:text-xs text-zinc-400 uppercase tracking-wider mt-0.5">
                Smooth Spec
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Luxury Architectural Composition */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[580px] rounded-2xl overflow-hidden border border-brand-borderGold bg-brand-charcoal shadow-2xl group">
            <Image
              src="/images/IMG_5641.jpeg"
              alt="Luxury cove ceiling drywall and architectural finishing in Toronto custom home by MS Drywall Finish"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
              className="object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
            />

            {/* Depth Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-transparent to-transparent opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08080a]/60 via-transparent to-transparent" />

            {/* Geometric Gold Border Highlights */}
            <div className="absolute top-4 right-4 border-t-2 border-r-2 border-brand-gold/60 w-12 h-12 pointer-events-none" />
            <div className="absolute bottom-4 left-4 border-b-2 border-l-2 border-brand-gold/60 w-12 h-12 pointer-events-none" />

            {/* Floating Architectural Tag */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-brand-black/90 backdrop-blur-md px-4 py-3 rounded-xl border border-brand-borderGold flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-pulse shrink-0" />
              <div className="text-xs">
                <span className="font-semibold text-zinc-100 uppercase tracking-wider block">
                  Custom Cove Lighting &amp; Taping
                </span>
                <span className="text-zinc-400 text-[10px]">
                  Bridle Path Residence • Post-Drywall Architectural QC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

