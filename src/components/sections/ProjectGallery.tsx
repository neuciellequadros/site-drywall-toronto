"use client";

import * as React from "react";
import Image from "next/image";
import { Maximize2, MapPin } from "lucide-react";
import { projectItems } from "@/config/services";
import { ProjectItem } from "@/types";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";

type CategoryFilter = "all" | "residential" | "ceilings" | "commercial";

export function ProjectGallery() {
  const [activeCategory, setActiveCategory] = React.useState<CategoryFilter>("all");
  const [selectedProject, setSelectedProject] = React.useState<ProjectItem | null>(null);

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return projectItems;
    return projectItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const categories: { label: string; value: CategoryFilter }[] = [
    { label: "All Works", value: "all" },
    { label: "Residential Luxury", value: "residential" },
    { label: "Custom Ceilings", value: "ceilings" },
    { label: "Commercial Fit-Outs", value: "commercial" },
  ];

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-[#0a0a0d] relative border-b border-brand-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Recent"
          highlightText="Projects"
          description="Explore our completed drywall installations, custom coffered ceilings, and Level 5 finishes across Toronto, Oakville, Vaughan, and the GTA."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-gold-gradient text-brand-black shadow-gold-sm"
                  : "bg-brand-surface/70 text-zinc-400 hover:text-white border border-brand-border/60 hover:border-brand-borderGold"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 4-Card Portfolio Showcase Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl overflow-hidden border border-brand-border/60 hover:border-brand-gold bg-brand-charcoal transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="h-64 sm:h-72 w-full overflow-hidden relative bg-brand-surface">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-transparent opacity-80" />

                {/* Inspect Overlay Trigger */}
                <div className="absolute inset-0 bg-brand-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="w-10 h-10 rounded-full bg-brand-black/80 border border-brand-borderGold flex items-center justify-center text-brand-gold shadow-lg transform group-hover:scale-110 transition-transform">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                {/* Location Badge */}
                <div className="absolute top-3 left-3 bg-brand-black/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-brand-borderGold/60 text-[10px] uppercase font-bold tracking-wider text-brand-gold flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-brand-gold" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="p-5 bg-brand-charcoal flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-goldLight font-semibold">
                    {project.categoryLabel}
                  </div>
                  <h3 className="font-serif-luxury text-lg font-bold text-zinc-100 group-hover:text-brand-gold transition-colors mt-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 font-normal leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-brand-border/40 text-[11px] text-zinc-400 font-medium">
                  {project.specs}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <Lightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

