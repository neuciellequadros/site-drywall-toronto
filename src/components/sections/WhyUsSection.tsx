import * as React from "react";
import Image from "next/image";
import { Award, Users, Clock, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhyUsSection() {
  const pillars = [
    {
      icon: Award,
      title: "Quality Workmanship",
      desc: "Multi-coat feathering and zero telegraphing seams under critical raking light.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      desc: "Dedicated trade craftsmen specialized in architect-designed GTA residences.",
    },
    {
      icon: Clock,
      title: "On Time Delivery",
      desc: "Punctual milestones aligned to General Contractor and homeowner critical paths.",
    },
    {
      icon: MapPin,
      title: "Serving Toronto & GTA",
      desc: "Yorkville, Forest Hill, Bridle Path, Oakville, Vaughan, Mississauga & Markham.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-28 bg-[#08080a] relative border-b border-brand-border/40 overflow-hidden"
    >
      {/* Background diagonal line */}
      <div className="gold-diagonal-line top-1/2 right-0 w-1/2 rotate-12 opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        {/* Left Column: Craftsman in Branded Action */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-2xl overflow-hidden border border-brand-borderGold bg-brand-charcoal shadow-2xl group">
            <div className="relative w-full h-[420px] sm:h-[500px] lg:h-[540px]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnlF0E-qjOJ8fm3LgkW2dTUz4gpnPe6GWiEQFCI3UByqQACnaGHi_ewzUyuV45AFtxCcG9iPFtev13zv0En20d9P9hCvkI-Ht9nWN4sjkCLzHGgtPArNNs-hKs3rQRwgCrGpg2eM3Lyy-5ECjdyxU560XB70S2jFkVkZmik2WOMusa2PitHopfYs_iPiPDZ3f5YqBDl-iGQ9RX-wLs2fJ6qgzxqYQrA6xkXJD7b-RfMfz0yPRXZYbi"
                alt="MS Drywall Finish master finisher troweling wall in Toronto"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left filter brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#08080a]/30 to-[#08080a]" />

            {/* Overlaid Badge */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-[#0c0c0f]/95 border border-brand-borderGold rounded-xl p-4 sm:p-5 backdrop-blur-md max-w-sm shadow-xl">
              <div className="text-[11px] uppercase tracking-widest text-brand-gold font-bold mb-1">
                Elite Taping Master
              </div>
              <p className="text-xs text-zinc-300 italic">
                &ldquo;True luxury is found in the unseen precision of the foundation walls.&rdquo;
              </p>
              <span className="block text-[10px] uppercase tracking-wider text-zinc-500 mt-2">
                — MS Drywall Finish Lead Craftsman
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Why Choose & Trust Pillars */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          {/* Section Subtitle */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold tracking-[0.24em] text-brand-gold uppercase">
              The MS Advantage
            </span>
            <div className="w-10 h-[1px] bg-brand-gold" />
          </div>

          {/* Section Heading */}
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-zinc-100 font-light leading-tight mb-6">
            Your Trusted Partner <br />
            <span className="italic font-semibold text-gold-gradient">
              for Perfect Finishes
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            We are committed to delivering exceptional drywall results with meticulous attention to detail, reliable scheduling, and clean job sites. Whether collaborating with discerning homeowners, boutique architects, or high-end custom home builders, we treat every drywall joint like fine art.
          </p>

          {/* 4 Core Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="flex items-start gap-3.5 bg-brand-card/70 border border-brand-border/60 p-4 rounded-xl hover:border-brand-borderGold transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-brand-black border border-brand-borderGold flex items-center justify-center text-brand-gold shrink-0">
                    <Icon className="w-5 h-5 stroke-[1.8]" />
                  </div>
                  <div>
                    <h3 className="text-xs tracking-wider uppercase font-bold text-zinc-100">
                      {pillar.title}
                    </h3>
                    <p className="text-[11px] text-zinc-400 mt-1 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Safety & Standards Verification Strip */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-zinc-400 pt-3 border-t border-brand-border/40">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              HEPA Dust Extractor Systems
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-gold" />
              <span className="text-zinc-400">
                WSIB Insured [{siteConfig.disclaimers.licensePlaceholder}]
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

