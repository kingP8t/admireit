"use client";

import { Sparkles, FileText, FolderOpen } from "lucide-react";

type Variant = "blog" | "portfolio" | "team";

const variants = {
  blog: { icon: FileText, gradient: "from-accent/20 via-accent-warm/10 to-background-secondary" },
  portfolio: { icon: FolderOpen, gradient: "from-accent-warm/20 via-accent/10 to-background-secondary" },
  team: { icon: Sparkles, gradient: "from-accent/15 via-background-secondary to-accent-warm/10" },
};

export function PlaceholderImage({
  variant = "blog",
  className = "w-full h-48",
  alt = "",
}: {
  variant?: Variant;
  className?: string;
  alt?: string;
}) {
  const { icon: Icon, gradient } = variants[variant];

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center relative overflow-hidden`}
    >
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
        backgroundSize: "32px 32px",
      }} />
      <Icon size={32} className="text-accent/30" />
    </div>
  );
}
