"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Monitor,
  Clock,
  ShieldCheck,
  Brain,
  MessageCircle,
  Target,
  Lock,
  Database,
  HeartHandshake,
  Smartphone,
  Quote,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: MapPin, label: "Nigeria · Anonymised MFI" },
  { icon: Monitor, label: "Savings · Budgeting · AI Nudges" },
  { icon: Clock, label: "Phased Pilot Rollout" },
  { icon: ShieldCheck, label: "Consent-First Data Handling" },
];

const stats = [
  { value: "3", label: "Behavioural segments modelled" },
  { value: "4+", label: "Goal-based savings pots" },
  { value: "SMS + App", label: "Nudge delivery channels" },
  { value: "Consent-first", label: "Data handling design" },
];

const painPoints = [
  "Irregular cash flow among salaried workers, traders, and micro-entrepreneurs",
  "Customers saved only when they had surplus income, or withdrew too early",
  "Manual staff outreach was too slow and too generic to change behaviour at scale",
  "Weak savings consistency put deposit mobilisation and retention at risk",
  "Growing competition from informal cooperative and decentralised savings models",
];

const solutions = [
  {
    icon: Brain,
    title: "Transaction-Pattern Analysis",
    description:
      "AI analysed deposit frequency, repayment behaviour, and seasonal income patterns to understand each customer's real cash-flow rhythm — not a generic assumption of steady income.",
    variant: "primary" as const,
  },
  {
    icon: MessageCircle,
    title: "Personalised Savings Nudges",
    description:
      "SMS and mobile prompts timed to each customer's own cash-flow cycle, replacing generic blanket reminders with messages that matched when people actually had money to save.",
    variant: "dark" as const,
  },
  {
    icon: Target,
    title: "Goal-Based Savings Pots",
    description:
      "Customers could save toward school fees, inventory restocking, emergency funds, or family and religious obligations — giving every deposit a clear, motivating purpose.",
    variant: "glass" as const,
  },
  {
    icon: Lock,
    title: "Consent-First Data Handling",
    description:
      "Every behavioural signal used for nudging was collected and processed under explicit customer consent, balancing innovation with privacy and trust.",
    variant: "card" as const,
  },
];

const results = [
  { badge: "Engagement", metric: "Stronger", desc: "Customer engagement with savings products improved noticeably after launch", color: "green" as const },
  { badge: "Relevance", metric: "Better fit", desc: "Nudges matched each customer's income cycle and spending behaviour far more closely than generic reminders", color: "green" as const },
  { badge: "Efficiency", metric: "Less manual work", desc: "Staff spent less time manually following up on inactive accounts", color: "orange" as const },
  { badge: "Visibility", metric: "Clearer insight", desc: "Institution gained much better visibility into customer saving habits", color: "green" as const },
];

const phases = [
  { num: 1, title: "Pilot & Segment", desc: "Small pilot group of active depositors grouped into behavioural segments: regular savers, salary earners, seasonal traders." },
  { num: 2, title: "Model & Recommend", desc: "AI recommended save amounts, timing, and triggered nudges when behaviour signalled a likely lapse." },
  { num: 3, title: "Consent & Trust", desc: "Consent-based data handling introduced across the pilot to balance personalisation with privacy." },
  { num: 4, title: "Support & Scale", desc: "Rollout extended with human support retained alongside digital nudges for customers who needed it." },
];

const lessons = [
  { icon: Database, label: "Clean Data", desc: "Reliable transaction data was the foundation — without it, personalisation breaks down quickly.", color: "bg-amber-500/10" },
  { icon: Lock, label: "Consent & Privacy", desc: "Clear, explicit customer consent was treated as a requirement, not an afterthought.", color: "bg-blue-500/10" },
  { icon: Smartphone, label: "Simple UX", desc: "Messaging worked best on channels customers already trusted — SMS and mobile, not new apps.", color: "bg-green-500/10" },
  { icon: HeartHandshake, label: "Human Support", desc: "Over-automation was avoided — many low-income customers still needed human support alongside digital tools.", color: "bg-red-500/10" },
];

/* ── Fade animation helper ──────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

/* ── Component ──────────────────────────────────────── */

export function SavingsBudgetingContent() {
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
                Case Study &middot; Financial Inclusion
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-3xl mb-6">
              AI-Driven Savings & Budgeting
              <br />
              for a Nigerian{" "}
              <span className="gradient-text">Microfinance Institution</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-4">
              AdmireTech helped a mid-sized Nigerian microfinance institution
              turn raw transaction data into personalised savings nudges and
              goal-based savings pots &mdash; helping customers with irregular
              income save more consistently.
            </p>
            <p className="text-sm text-text-secondary/60 max-w-2xl leading-relaxed mb-10 italic">
              The institution&apos;s name is withheld at its request to protect
              client confidentiality.
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
                Functional savings products, inconsistent customer behaviour
              </h2>
              <p className="text-text-secondary leading-relaxed">
                The institution serves salaried workers, informal traders, and
                micro-entrepreneurs whose income doesn&apos;t arrive on a fixed
                schedule. Savings products existed, but usage was uneven &mdash;
                many customers deposited only when they had surplus, others
                withdrew too early, and manual staff outreach couldn&apos;t
                shift behaviour at the scale the institution needed.
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
              A custom AI budgeting engine, built around real behaviour
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
              A cautious, pilot-first rollout
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
                Personalisation that customers actually responded to
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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
                      {r.color === "green" ? "↑" : "→"} {r.badge}
                    </span>
                    <div className="text-xl font-bold text-white leading-none mb-2">
                      {r.metric}
                    </div>
                    <p className="text-text-secondary/60 text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Quote */}
              <motion.div {...fade(0.2)} className="border-t border-white/5 pt-8">
                <Quote className="text-accent/40 mb-3" size={28} />
                <p className="text-white text-lg leading-relaxed max-w-2xl mb-4">
                  &ldquo;I&apos;ll admit I was skeptical at first &mdash; could
                  an algorithm really understand our customers the way our
                  field officers do? What changed my mind was watching it
                  work: traders who used to save only when they had extra
                  cash finally building a rhythm, savings pots opened for
                  school fees, emergencies, family obligations. The AI
                  didn&apos;t replace how we serve people &mdash; it helped us
                  finally see them clearly, and respond in a way that felt
                  personal instead of generic. For an institution built on
                  trust, that matters more than any efficiency number, and
                  it&apos;s exactly the kind of step financial inclusion in
                  Nigeria needs.&rdquo;
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="text-white font-semibold">Morayo Brown</span>
                  {" · Lead IT Manager"}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LESSONS + CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Lessons Learned */}
            <motion.div {...fade()}>
              <Card className="h-full">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  Lessons Learned
                </p>
                <h3 className="text-lg font-bold text-white mb-6">
                  AI works best when it stays practical
                </h3>
                <ul className="space-y-5">
                  {lessons.map((lesson) => (
                    <li key={lesson.label} className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${lesson.color}`}
                      >
                        <lesson.icon size={14} className="text-text-secondary" />
                      </div>
                      <div>
                        <span className="text-white text-sm font-semibold">
                          {lesson.label}
                        </span>
                        <span className="text-text-secondary text-sm">
                          {" — "}
                          {lesson.desc}
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
                    Ready to help your customers save more consistently?
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-8">
                    AdmireTech builds explainable, consent-first AI tools that
                    respect how African customers actually manage money.
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
