"use client";

import {
  Landmark,
  Smartphone,
  MessageSquareCode,
  PackageSearch,
  Users,
  MapPin,
  Zap,
  type LucideIcon,
} from "lucide-react";

export interface PortfolioCoverConfig {
  icon: LucideIcon;
  gradient: string;
  accentColor: string;
  label: string;
  metric?: string;
}

const coverConfigs: Record<string, PortfolioCoverConfig> = {
  "mfb-ai-transformation": {
    icon: Landmark,
    gradient: "from-emerald-600/30 via-emerald-500/10 to-transparent",
    accentColor: "text-emerald-400",
    label: "Fintech AI",
    metric: "2hr approvals",
  },
  "easybuy-vip-loan": {
    icon: Smartphone,
    gradient: "from-blue-600/30 via-blue-400/10 to-transparent",
    accentColor: "text-blue-400",
    label: "Digital Lending",
    metric: "Millions served",
  },
  "llm-enterprise-chatbot": {
    icon: MessageSquareCode,
    gradient: "from-violet-600/30 via-violet-400/10 to-transparent",
    accentColor: "text-violet-400",
    label: "Enterprise LLM",
    metric: "60% fewer tickets",
  },
  "warehouse-management-pwa": {
    icon: PackageSearch,
    gradient: "from-amber-600/30 via-amber-400/10 to-transparent",
    accentColor: "text-amber-400",
    label: "Logistics PWA",
    metric: "37% faster",
  },
  "fractional-ai-developer": {
    icon: Users,
    gradient: "from-rose-600/30 via-rose-400/10 to-transparent",
    accentColor: "text-rose-400",
    label: "Fractional CTO",
    metric: "8 → 35 engineers",
  },
  "land-registry-ai-modernisation": {
    icon: MapPin,
    gradient: "from-cyan-600/30 via-cyan-400/10 to-transparent",
    accentColor: "text-cyan-400",
    label: "GovTech AI",
    metric: "Modernised",
  },
  "rural-energy-ai-platform": {
    icon: Zap,
    gradient: "from-yellow-600/30 via-yellow-400/10 to-transparent",
    accentColor: "text-yellow-400",
    label: "Energy AI",
    metric: "Rural access",
  },
};

const defaultConfig: PortfolioCoverConfig = {
  icon: MessageSquareCode,
  gradient: "from-accent/20 via-accent-warm/10 to-transparent",
  accentColor: "text-accent",
  label: "Case Study",
};

export function PortfolioCover({
  slug,
  className = "w-full h-48",
  alt = "",
}: {
  slug: string;
  className?: string;
  alt?: string;
}) {
  const config = coverConfigs[slug] || defaultConfig;
  const Icon = config.icon;

  return (
    <div
      role="img"
      aria-label={alt}
      className={`${className} rounded-lg bg-gradient-to-br ${config.gradient} flex flex-col items-start justify-end p-5 relative overflow-hidden group`}
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Large background icon */}
      <Icon
        size={80}
        strokeWidth={1}
        className={`absolute top-3 right-3 ${config.accentColor} opacity-[0.08]`}
      />

      {/* Label pill */}
      <span
        className={`text-[10px] font-semibold uppercase tracking-widest ${config.accentColor} mb-1.5 relative z-10`}
      >
        {config.label}
      </span>

      {/* Metric */}
      {config.metric && (
        <span className="text-white/80 text-sm font-medium relative z-10">
          {config.metric}
        </span>
      )}
    </div>
  );
}
