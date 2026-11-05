import * as React from "react";
import { processSteps } from "@/config/services";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-20 lg:py-28 bg-[#08080a] relative border-b border-brand-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          subtitle="Methodology"
          title="Our 4-Step"
          highlightText="Precision Workflow"
          description="From blueprint verification to final critical raking light check, we maintain rigorous quality standards at every stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className="bg-brand-charcoal/60 border border-brand-border/70 rounded-2xl p-6 sm:p-7 relative card-border-gold flex flex-col justify-between"
            >
              <div>
                <span className="text-4xl sm:text-5xl font-serif-luxury text-brand-gold/40 font-bold block mb-4">
                  {step.step}
                </span>

                <h3 className="font-serif-luxury text-lg sm:text-xl font-bold uppercase tracking-wider text-zinc-100 mb-3">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] uppercase font-semibold text-brand-gold tracking-widest">
                <span>Phase {step.step}</span>
                <span>• • •</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

