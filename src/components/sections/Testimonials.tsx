import * as React from "react";
import { Star } from "lucide-react";
import { testimonialsData } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-20 lg:py-24 bg-[#0a0a0d] relative border-b border-brand-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase block mb-2">
              Client Endorsements
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl text-zinc-100 font-light">
              Trusted by GTA Builders &amp; Homeowners
            </h2>
          </div>
          <div className="mt-4 md:mt-0 flex items-center gap-2 text-brand-gold text-sm font-medium">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
              ))}
            </div>
            <span className="text-zinc-400 text-xs sm:text-sm ml-2">
              5.0 Star Rating Across 80+ GTA Projects
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((test) => {
            const initials = test.author
              .split(" ")
              .map((n) => n[0])
              .join("");

            return (
              <div
                key={test.id}
                className="bg-brand-charcoal/70 border border-brand-border/60 hover:border-brand-borderGold p-6 sm:p-7 rounded-2xl flex flex-col justify-between transition-colors relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-brand-gold gap-1">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-brand-gold text-brand-gold" />
                      ))}
                    </div>
                    {test.isPlaceholder && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded bg-brand-surface border border-zinc-800 text-zinc-500 font-mono">
                        [Depoimento Ilustrativo]
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic mb-6">
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-zinc-800/80">
                  <div className="w-10 h-10 rounded-full bg-brand-gold/15 border border-brand-borderGold flex items-center justify-center text-xs font-serif-luxury font-bold text-brand-gold shrink-0">
                    {initials}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-zinc-200">
                      {test.author}
                    </h3>
                    <p className="text-[11px] text-zinc-400">
                      {test.role} • {test.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

