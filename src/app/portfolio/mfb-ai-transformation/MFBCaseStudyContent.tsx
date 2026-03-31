"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Monitor,
  Clock,
  CheckCircle,
  Brain,
  Zap,
  Shield,
  MessageCircle,
  AlertTriangle,
  Scale,
  Lock,
  Users,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: MapPin, label: "Nigeria \u00B7 National MFB" },
  { icon: Monitor, label: "Credit \u00B7 Fraud \u00B7 CX \u00B7 Compliance" },
  { icon: Clock, label: "12-Month Engagement" },
  { icon: CheckCircle, label: "CBN Compliant Deployment" },
];

const stats = [
  { value: "<2hrs", label: "Loan approval time" },
  { value: "50%", label: "Inquiries automated" },
  { value: "Real-time", label: "Fraud monitoring" },
  { value: "4 Phases", label: "Structured rollout" },
];

const painPoints = [
  "Paper-based loan origination causing multi-day turnaround and data errors",
  "Rule-based credit scoring excluded most informal sector applicants",
  "No real-time fraud detection across digital channels and agent networks",
  "Customer service limited to branches and call centres \u2014 no 24/7 coverage",
  "CBN national licence upgrade raising expectations for risk & technology controls",
];

const solutions = [
  {
    icon: Brain,
    title: "AI-Enhanced Credit Scoring",
    description:
      "ML models trained on repayment patterns, mobile money flows, POS data, and bank statements \u2014 with explainable outputs for CBN audits and credit committees. Thin-file customers finally get a fair score.",
    variant: "primary" as const,
  },
  {
    icon: Zap,
    title: "Intelligent Loan Management",
    description:
      "End-to-end digital workflows for field officers. Predictive models flag at-risk accounts early. Automated renewals for low-risk customers bring processing to under one hour.",
    variant: "dark" as const,
  },
  {
    icon: Shield,
    title: "Real-Time Fraud Detection",
    description:
      "Anomaly detection across card, transfer, USSD, and mobile channels. Risk-based step-up authentication reduces false positives. Live dashboards give compliance teams full visibility.",
    variant: "glass" as const,
  },
  {
    icon: MessageCircle,
    title: "AI-Powered Customer Service",
    description:
      "NLP chatbots and voicebots on WhatsApp, USSD, and mobile app handle FAQs, balances, and loan applications 24/7. Sentiment analysis flags product pain points in real time.",
    variant: "card" as const,
  },
];

const results = [
  { badge: "Speed", metric: "Days \u2192 2hrs", desc: "Standard microloan approval time reduced from several days to under 2 hours", color: "green" as const },
  { badge: "Efficiency", metric: "<30 min", desc: "Loan renewals for eligible customers processed in under 30\u201360 minutes", color: "green" as const },
  { badge: "Automated", metric: "30\u201350%", desc: "Routine customer inquiries handled entirely by AI-powered channels", color: "orange" as const },
  { badge: "Inclusion", metric: "More approvals", desc: "Thin-file customers previously excluded now safely scored and served", color: "green" as const },
  { badge: "Risk", metric: "Lower PAR", desc: "Better risk segmentation reduces defaults while expanding the credit pool", color: "green" as const },
  { badge: "Compliant", metric: "CBN-ready", desc: "Audit trails, model governance, and reporting aligned to national licence requirements", color: "orange" as const },
];

const phases = [
  { num: 1, title: "Digitise & Connect", desc: "Mobile forms integrated to core banking. Eliminated paper and double data entry." },
  { num: 2, title: "Shadow Scoring", desc: "AI runs in parallel with existing rules. Live validation before any decisioning handoff." },
  { num: 3, title: "Fraud & CX Bots", desc: "Real-time monitoring and customer bots deployed across selected products and channels." },
  { num: 4, title: "Optimise & Scale", desc: "Models refined, renewals automated, AI scoring extended to SME and nano-loan products." },
];

const risks = [
  { icon: AlertTriangle, label: "Data Quality", desc: "Automated cleaning pipelines and validation rules prevent model degradation from poor inputs.", color: "bg-amber-500/10" },
  { icon: Scale, label: "Fairness & Bias", desc: "Regular demographic fairness checks across all scoring models, with human override capability.", color: "bg-blue-500/10" },
  { icon: Lock, label: "Cybersecurity", desc: "End-to-end encryption and access controls aligned to the Nigeria Data Protection Act.", color: "bg-green-500/10" },
  { icon: Users, label: "Change Management", desc: "Staff training, participatory design, and role redesign ensure genuine adoption.", color: "bg-red-500/10" },
];

/* ── Fade animation helper ──────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

/* ── Component ──────────────────────────────────────── */

export function MFBCaseStudyContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-16 pt-32">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,107,43,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <motion.div {...fade()}>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                Case Study &middot; Financial Technology
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl mb-6">
              AI-Driven Transformation
              <br />
              for a Nigerian{" "}
              <span className="gradient-text">Microfinance Bank</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
              AdmireTech partnered with a mid-sized MFB to redesign credit
              scoring, loan management, fraud detection, and customer service
              using production-grade AI &mdash; cutting approval times from days
              to under 2 hours.
            </p>

            {/* Meta chips */}
            <div className="flex flex-wrap gap-3">
              {metaChips.map((chip) => (
                <div
                  key={chip.label}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] border border-white/[0.08] rounded-lg text-sm text-text-secondary"
                >
                  <chip.icon size={14} className="opacity-60 shrink-0" />
                  {chip.label}
                </div>
              ))}
            </div>
          </motion.div>
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

      {/* ═══ CHALLENGE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-0">
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                The Challenge
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-6">
                Serving informal customers in a tightening regulatory
                environment
              </h2>
              <p className="text-text-secondary leading-relaxed">
                A mid-sized Nigerian microfinance bank &mdash; serving traders,
                artisans, and micro-entrepreneurs with loans from &#8358;100K to
                &#8358;5M &mdash; was losing ground to operational inefficiency,
                rising fraud, and the exclusion of thin-file customers that
                traditional scoring systems couldn&apos;t reach.
              </p>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <Card className="h-full">
                <h3 className="text-white font-bold text-sm mb-5">
                  Pain Points
                </h3>
                <ul className="space-y-3.5">
                  {painPoints.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-text-secondary/40 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ SOLUTIONS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              What We Built
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Four integrated AI capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title} {...fade(i * 0.1)}>
                <div
                  className={`rounded-2xl p-7 h-full transition-transform hover:-translate-y-1 ${
                    sol.variant === "primary"
                      ? "bg-accent text-white"
                      : sol.variant === "dark"
                      ? "bg-background text-white border border-white/5"
                      : sol.variant === "glass"
                      ? "bg-accent/[0.06] border border-accent/15 text-white"
                      : "bg-card border border-white/5 text-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                      sol.variant === "primary"
                        ? "bg-white/15"
                        : sol.variant === "dark"
                        ? "bg-white/[0.06]"
                        : "bg-accent/10"
                    }`}
                  >
                    <sol.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[15px] mb-2 leading-tight">
                    {sol.title}
                  </h4>
                  <p
                    className={`text-[13px] leading-relaxed ${
                      sol.variant === "primary" || sol.variant === "dark"
                        ? "text-white/65"
                        : "text-text-secondary"
                    }`}
                  >
                    {sol.description}
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

      {/* ═══ IMPLEMENTATION PHASES ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Implementation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12">
              Phased rollout built for confidence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, i) => (
                <motion.div
                  key={phase.num}
                  {...fade(i * 0.1)}
                  className="relative z-10 text-center"
                >
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold ${
                      i === 0
                        ? "bg-accent text-white"
                        : "bg-card border-2 border-accent text-accent"
                    }`}
                  >
                    {phase.num}
                  </div>
                  <h5 className="text-white font-bold text-[13px] mb-1.5">
                    {phase.title}
                  </h5>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {phase.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ RESULTS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="bg-background rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-white/5">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />

            <div className="relative z-10">
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                Outcomes
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
                Measurable impact across every dimension
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.map((r, i) => (
                  <motion.div
                    key={r.badge}
                    {...fade(i * 0.08)}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${
                        r.color === "green"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      {r.color === "green" ? "\u2191" : "\u2192"} {r.badge}
                    </span>
                    <div className="text-2xl font-bold text-white leading-none mb-2">
                      {r.metric}
                    </div>
                    <p className="text-text-secondary/60 text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RISK + CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Risk Management */}
            <motion.div {...fade()}>
              <Card className="h-full">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  Risk Management
                </p>
                <h3 className="text-lg font-bold text-white mb-6">
                  Responsible AI by design
                </h3>
                <ul className="space-y-5">
                  {risks.map((risk) => (
                    <li key={risk.label} className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${risk.color}`}
                      >
                        <risk.icon size={14} className="text-text-secondary" />
                      </div>
                      <div>
                        <span className="text-white text-sm font-semibold">
                          {risk.label}
                        </span>
                        <span className="text-text-secondary text-sm">
                          {" \u2014 "}
                          {risk.desc}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div {...fade(0.15)}>
              <div className="h-full rounded-2xl bg-gradient-to-br from-accent to-accent-warm p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute w-72 h-72 rounded-full bg-white/[0.06] -bottom-20 -right-16" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white leading-tight max-w-[280px] mb-3">
                    Ready to transform your financial institution?
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-8">
                    AdmireTech delivers intelligent, responsible, and measurable
                    AI solutions built for the unique realities of African
                    financial services.
                  </p>
                </div>
                <CalBookingButton className="relative z-10 inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-6 py-3 rounded-full w-fit hover:-translate-y-0.5 hover:shadow-xl transition-all">
                  Book a Free Consultation
                  <ArrowRight size={14} />
                </CalBookingButton>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
