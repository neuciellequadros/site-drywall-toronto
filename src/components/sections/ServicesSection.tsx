import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Layers,
  PenTool,
  Sparkles,
  Compass,
  Wrench,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import { servicesData } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

const iconMap = {
  Layers,
  PenTool,
  Sparkles,
  Compass,
  Wrench,
  Building2,
};

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-20 lg:py-28 bg-[#0a0a0d] relative border-b border-brand-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          subtitle="Our Craftsmanship"
          title="Complete Drywall"
          highlightText="Solutions"
          description="From precision framing boarding to immaculate Level 5 drywall finishing, tailored for custom luxury builds and commercial fit-outs in the GTA."
        />

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Layers;

            return (
              <div
                key={service.id}
                className="bg-brand-charcoal/80 rounded-2xl overflow-hidden card-border-gold flex flex-col group transition-all duration-300"
              >
                {/* Thumbnail Graphic / Photo */}
                <div className="h-48 sm:h-52 w-full overflow-hidden relative bg-brand-surface">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center filter brightness-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent" />

                  {/* Tag Chip */}
                  <div className="absolute top-4 left-4 bg-brand-black/85 backdrop-blur-md px-3 py-1 rounded-full border border-brand-borderGold text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                    {service.tag}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Icon Badge */}
                    <div className="w-11 h-11 rounded-xl bg-brand-black border border-brand-borderGold flex items-center justify-center text-brand-gold mb-4 group-hover:border-brand-gold group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5 stroke-[1.8]" />
                    </div>

                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-zinc-100 group-hover:text-brand-gold transition-colors mb-2.5">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2 pt-3 border-t border-zinc-800/80 mb-6 text-xs text-zinc-300">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Bottom CTA Link */}
                  <Link
                    href={`#contact`}
                    className="inline-flex items-center text-xs font-semibold tracking-wider text-brand-gold group-hover:translate-x-1 transition-transform"
                  >
                    <span>Request Service Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

