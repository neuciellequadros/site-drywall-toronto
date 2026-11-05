import * as React from "react";
import { Award, Clock, Building2, Wind } from "lucide-react";

export function TrustBar() {
  const trustItems = [
    {
      icon: Award,
      title: "High Quality Finishes",
      desc: "Flawless Level 4 & Level 5 paint-ready surfaces",
    },
    {
      icon: Clock,
      title: "On Time & Reliable",
      desc: "Strict project schedules, no trades left waiting",
    },
    {
      icon: Building2,
      title: "Residential & Commercial",
      desc: "Custom estates, condos, offices, retail spaces",
    },
    {
      icon: Wind,
      title: "HEPA Dustless Sanding",
      desc: "Vacuum-assisted tools protecting finished floors",
    },
  ];

  return (
    <div className="w-full border-b border-brand-border/60 bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left divide-y sm:divide-y-0 sm:divide-x divide-brand-border/40">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`flex items-center gap-4 ${
                  idx > 0 ? "pt-4 sm:pt-0 sm:pl-6" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-full border border-brand-borderGold bg-brand-charcoal/80 flex items-center justify-center text-brand-gold shrink-0">
                  <Icon className="w-6 h-6 stroke-[1.5]" />
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.16em] font-bold text-zinc-100 uppercase">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-zinc-400 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

