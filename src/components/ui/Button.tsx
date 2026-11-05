import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-semibold uppercase tracking-wider rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-brand-black disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]";

    const variants = {
      primary:
        "bg-gold-gradient text-brand-black shadow-[0_4px_25px_rgba(203,168,100,0.35)] hover:shadow-[0_4px_30px_rgba(203,168,100,0.55)] hover:brightness-105",
      secondary:
        "bg-brand-surface text-neutral-100 border border-brand-border hover:border-brand-gold hover:text-brand-gold hover:bg-brand-card",
      outline:
        "border border-brand-borderGold text-neutral-200 hover:text-brand-gold hover:border-brand-gold bg-transparent",
      ghost:
        "text-neutral-400 hover:text-brand-gold hover:bg-brand-surface/50",
    };

    const sizes = {
      sm: "text-[11px] px-4 py-2",
      md: "text-xs px-6 py-3",
      lg: "text-xs sm:text-sm px-8 py-3.5 sm:py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

