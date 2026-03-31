"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Package,
  Smartphone,
  Clock,
  CheckCircle,
  QrCode,
  Truck,
  BarChart3,
  RefreshCw,
  Layers,
  Ban,
  Timer,
  Printer,
  AlertTriangle,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Helpers ─────────────────────────────────────── */

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 } as const,
  whileInView: { opacity: 1, y: 0 } as const,
  viewport: { once: true } as const,
  transition: { duration: 0.5, delay } as const,
});

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: Package, label: "E-commerce · Fashion Retail" },
  { icon: Smartphone, label: "Progressive Web App" },
  { icon: Clock, label: "March 2025" },
  { icon: CheckCircle, label: "Live · Production" },
];

const stats = [
  { value: "37%", label: "Faster order processing" },
  { value: "0%", label: "Duplicate orders" },
  { value: "95%", label: "Label time saved" },
  { value: "0", label: "Pickup disputes" },
];

const challengePoints = [
  {
    icon: Ban,
    text: "Workers duplicating orders — no visibility into who was handling what",
  },
  {
    icon: Printer,
    text: "Manual shipping label entry taking 3–4 minutes per order with full A4 pages printed",
  },
  {
    icon: AlertTriangle,
    text: "No real-time status visibility — 15–30 minute lag between order states",
  },
  {
    icon: Timer,
    text: "Customer disputes over self-pickups with no proof of collection (2–3 per week)",
  },
];

const solutionPoints = [
  "Real-time sync across all devices using Convex database",
  "Smart order assignment preventing duplicate processing",
  "One-click CARGO shipping integration with automatic label generation",
  "Self-pickup flow with QR codes and digital signature capture",
  "Productivity dashboard with worker performance tracking",
  "Mobile-first Hebrew RTL interface optimised for warehouse use",
];

const features = [
  {
    icon: RefreshCw,
    title: "Real-Time Order Sync",
    desc: "Every device sees every change instantly. Convex reactive queries ensure zero stale data across the entire warehouse floor.",
  },
  {
    icon: Layers,
    title: "Smart Order Assignment",
    desc: "Automatic locking mechanism prevents two workers from processing the same order — eliminating duplication entirely.",
  },
  {
    icon: Truck,
    title: "One-Click Shipping Labels",
    desc: "CARGO API integration generates shipping labels in 10 seconds with a single tap — replacing 3–4 minutes of manual data entry.",
  },
  {
    icon: QrCode,
    title: "QR + Digital Signatures",
    desc: "Self-pickup customers scan a QR code and sign digitally. Timestamped proof eliminates disputes and chargebacks.",
  },
  {
    icon: BarChart3,
    title: "Productivity Dashboard",
    desc: "Real-time worker performance tracking: orders processed, average handling time, and daily throughput per team member.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First PWA",
    desc: "Installable on any device. Optimised for one-handed warehouse use with Hebrew RTL support and offline capabilities.",
  },
];

const results = [
  {
    before: "~8 min",
    after: "~5 min",
    metric: "Order Processing",
    borderColor: "border-t-blue-500",
    textColor: "text-blue-500",
  },
  {
    before: "3–5%",
    after: "0%",
    metric: "Duplicate Orders",
    borderColor: "border-t-emerald-500",
    textColor: "text-emerald-500",
  },
  {
    before: "3–4 min",
    after: "10 sec",
    metric: "Label Printing",
    borderColor: "border-t-violet-500",
    textColor: "text-violet-500",
  },
  {
    before: "2–3/week",
    after: "0",
    metric: "Pickup Disputes",
    borderColor: "border-t-pink-500",
    textColor: "text-pink-500",
  },
  {
    before: "15–30 min",
    after: "Instant",
    metric: "Status Updates",
    borderColor: "border-t-amber-500",
    textColor: "text-amber-500",
  },
];

const techStack = [
  { label: "Frontend", items: ["React 18", "TypeScript", "Tailwind CSS"] },
  { label: "Real-Time DB", items: ["Convex"] },
  { label: "E-commerce", items: ["WooCommerce REST API"] },
  { label: "Shipping", items: ["CARGO Shipping API"] },
  { label: "Hosting", items: ["Vercel"] },
  { label: "App Type", items: ["Progressive Web App (PWA)"] },
];

/* ── Architecture Flow Data ────────────────────────── */

const archFlow = [
  { label: "WooCommerce", sub: "Orders Database" },
  { label: "Jack Pick Pack", sub: "PWA Application", highlight: true },
  { label: "CARGO", sub: "Shipping Labels" },
];

/* ── Component ───────────────────────────────────── */

export function WarehousePWAContent() {
  return (
    <div className="pt-20">
      {/* ═══ HERO ═══ */}
      <section className="section-padding relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full bg-accent/[0.07] -top-48 -left-48 blur-3xl" />
        <div className="absolute w-[400px] h-[400px] rounded-full bg-accent-warm/[0.05] bottom-0 right-0 blur-3xl" />

        <div className="container-wide mx-auto relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-text-secondary text-sm hover:text-accent transition-colors mb-10"
          >
            <ArrowLeft size={14} />
            All Case Studies
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Copy */}
            <motion.div {...fade()}>
              <span className="inline-block text-accent text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-accent/25 mb-6">
                Case Study
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-[1.12] mb-5">
                Real-Time Warehouse
                <br />
                Management PWA
              </h1>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
                Custom mobile app that eliminated order chaos for an e-commerce
                fashion retailer — cutting processing time by 37% and removing
                duplicate orders entirely.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {metaChips.map((chip) => (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5 text-xs text-text-secondary"
                  >
                    <chip.icon size={12} className="text-accent" />
                    {chip.label}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Stats Panel */}
            <motion.div {...fade(0.15)}>
              <div className="bg-card border border-white/[0.08] rounded-2xl p-8 space-y-6">
                {[
                  { value: "37%", label: "Faster Processing", color: "text-accent" },
                  { value: "0%", label: "Duplicate Orders", color: "text-green-400" },
                  { value: "95%", label: "Label Time Saved", color: "text-accent" },
                ].map((item) => (
                  <div key={item.label} className="flex items-baseline justify-between border-b border-white/[0.06] pb-5 last:border-b-0 last:pb-0">
                    <span className="text-text-secondary text-sm">
                      {item.label}
                    </span>
                    <span className={`text-3xl sm:text-4xl font-bold ${item.color}`}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="bg-accent">
        <div className="container-wide mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              {...fade(i * 0.1)}
              className="px-6 sm:px-8 py-7 border-r border-white/15 last:border-r-0 max-lg:[&:nth-child(2)]:border-r-0"
            >
              <div className="text-2xl sm:text-3xl font-bold text-white leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/65 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CHALLENGE + SOLUTION ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
            {/* Challenge pane */}
            <motion.div {...fade()} className="bg-card p-8 sm:p-10">
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                The Challenge
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                A warehouse drowning in manual chaos
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                A growing fashion e-commerce retailer struggled with warehouse
                chaos — workers duplicating orders, manual shipping label entry,
                no real-time visibility, and customer disputes over self-pickups.
              </p>
              <div className="space-y-4">
                {challengePoints.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                  >
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center shrink-0 mt-0.5">
                      <point.icon size={14} className="text-accent" />
                    </div>
                    {point.text}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution pane */}
            <motion.div
              {...fade(0.15)}
              className="bg-background p-8 sm:p-10 relative overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute w-72 h-72 rounded-full bg-accent/10 -top-20 -right-20 blur-3xl" />
              <div className="relative z-10">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  The Solution
                </p>
                <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                  A custom real-time PWA that transformed operations
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  AdmireTech built a purpose-made Progressive Web App with
                  real-time synchronisation, smart order assignment, and
                  integrated shipping — turning warehouse chaos into a
                  streamlined digital workflow.
                </p>
                <ul className="space-y-3">
                  {solutionPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                    >
                      <ArrowRight
                        size={14}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ FEATURES ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Key Features
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Built for the warehouse floor — not the boardroom
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feat, i) => (
              <motion.div key={feat.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <feat.icon size={20} className="text-accent" />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {feat.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ RESULTS — Before → After ═══ */}
      <section className="overflow-hidden">
        {/* Dark header area */}
        <div className="bg-card pt-16 pb-28 sm:pb-32">
          <div className="container-wide mx-auto">
            <motion.div {...fade()}>
              <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase bg-accent text-white px-3 py-1.5 rounded mb-5">
                Results
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                Before → After Implementation
              </h2>
            </motion.div>
          </div>
        </div>

        {/* Light card area — overlaps the dark header */}
        <div className="bg-[#F5F5F5] pt-0 pb-16">
          <div className="container-wide mx-auto -mt-16 sm:-mt-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {results.map((r, i) => (
                <motion.div key={r.metric} {...fade(i * 0.08)}>
                  <div
                    className={`rounded-xl bg-white border-t-[3px] ${r.borderColor} shadow-md p-5 sm:p-6 text-center h-full`}
                  >
                    <p className="text-gray-400 text-xs line-through mb-2">
                      {r.before}
                    </p>
                    <div
                      className={`text-2xl sm:text-3xl lg:text-4xl font-bold leading-none mb-2 ${r.textColor}`}
                    >
                      {r.after}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-gray-500 tracking-[0.1em] uppercase font-semibold">
                      {r.metric}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Client Testimonial */}
          <div className="container-wide mx-auto mt-10">
            <motion.div {...fade(0.2)}>
              <div className="bg-card rounded-2xl border-l-4 border-l-accent px-8 sm:px-10 py-8 sm:py-10 flex gap-5 items-start">
                <span className="text-accent/60 text-5xl leading-none font-serif shrink-0 hidden sm:block">
                  &ldquo;
                </span>
                <div>
                  <blockquote className="text-text-secondary text-sm sm:text-base leading-relaxed italic mb-4">
                    The app changed how our warehouse operates. Workers no longer
                    waste time checking if someone else is handling an order. The
                    self-pickup signature feature alone saved us from customer
                    disputes.
                  </blockquote>
                  <cite className="text-accent text-sm not-italic font-medium">
                    — Warehouse Operations Manager
                  </cite>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ TECH STACK ARCHITECTURE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Modern full-stack architecture
            </h2>
          </motion.div>

          {/* Architecture Flow */}
          <motion.div {...fade(0.1)} className="mb-10">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-3">
              {archFlow.map((node, i) => (
                <div key={node.label} className="flex items-center gap-3">
                  <div
                    className={`rounded-xl border px-6 py-4 text-center min-w-[160px] ${
                      node.highlight
                        ? "bg-accent/10 border-accent/30"
                        : "bg-card border-white/[0.08]"
                    }`}
                  >
                    <div className={`text-sm font-bold ${node.highlight ? "text-accent" : "text-white"}`}>
                      {node.label}
                    </div>
                    <div className="text-[11px] text-text-secondary/50 mt-0.5">
                      {node.sub}
                    </div>
                  </div>
                  {i < archFlow.length - 1 && (
                    <ArrowRight size={16} className="text-accent/50 hidden sm:block" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tech Rows */}
          <div className="space-y-3">
            {techStack.map((row, i) => (
              <motion.div key={row.label} {...fade(i * 0.06)}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-card border border-white/5 rounded-xl px-6 py-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-text-secondary/50 w-24 shrink-0">
                    {row.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {row.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-white/[0.04] border border-white/[0.08] rounded-lg text-xs text-text-secondary hover:border-accent/30 hover:text-accent transition-colors"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-warm p-10 sm:p-14 text-center relative overflow-hidden">
              <div className="absolute w-[500px] h-[500px] rounded-full bg-white/[0.06] -top-52 left-1/2 -translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-lg mx-auto mb-3">
                  Need a custom operations app for your business?
                </h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-8">
                  AdmireTech builds production-grade PWAs and real-time
                  applications that transform messy manual processes into
                  streamlined digital workflows.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Book a Free Consultation
                    <ArrowRight size={14} />
                  </CalBookingButton>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    View All Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
