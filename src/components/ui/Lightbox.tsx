"use client";

import * as React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { ProjectItem } from "@/types";

interface LightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function Lightbox({ project, onClose }: LightboxProps) {
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }

    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project preview: ${project.title}`}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-black/95 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-brand-card border border-brand-borderGold rounded-2xl overflow-hidden shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close image preview"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-brand-black/80 border border-brand-borderGold text-neutral-300 hover:text-brand-gold flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Large Image Frame */}
        <div className="relative w-full h-[50vh] sm:h-[60vh] bg-brand-black">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 896px"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent opacity-80" />
        </div>

        {/* Details Caption */}
        <div className="p-6 sm:p-8 bg-brand-card">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
              {project.categoryLabel} • {project.location}
            </span>
            <span className="text-[11px] px-3 py-1 rounded-full bg-brand-surface border border-brand-border text-neutral-300">
              {project.specs}
            </span>
          </div>
          <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-100 font-semibold mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}

