import * as React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowOnHover?: boolean;
}

export function Card({
  className,
  glowOnHover = true,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-brand-surface/80 border border-brand-border/60 transition-all duration-300",
        glowOnHover && "hover:border-brand-borderGold hover:shadow-gold-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

