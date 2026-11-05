import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  highlightText?: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({
  subtitle,
  title,
  highlightText,
  description,
  centered = true,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 sm:mb-16",
        centered ? "text-center max-w-3xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      {subtitle && (
        <div
          className={cn(
            "inline-flex items-center gap-3 mb-3",
            centered ? "justify-center" : "justify-start"
          )}
        >
          <div className="w-8 h-[1px] bg-brand-gold" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-brand-gold uppercase">
            {subtitle}
          </span>
          <div className="w-8 h-[1px] bg-brand-gold" />
        </div>
      )}

      <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-100 leading-[1.15] tracking-tight">
        {title}{" "}
        {highlightText && (
          <span className="italic font-semibold text-gold-gradient block sm:inline">
            {highlightText}
          </span>
        )}
      </h2>

      {description && (
        <p className="text-neutral-400 text-xs sm:text-sm lg:text-base mt-3 leading-relaxed max-w-xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

