"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Clock,
  CheckCircle,
  Smartphone,
  Brain,
  Zap,
  Shield,
  BarChart3,
  TrendingUp,
  AlertTriangle,
  Scale,
  Lock,
  Users,
  Megaphone,
  Target,
  RefreshCw,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: MapPin, label: "Nigeria \u00B7 Mass-Market BNPL" },
  { icon: Smartphone, label: "Device Finance \u00B7 Digital Lending" },
  { icon: Clock, label: "12-Month Engagement" },
  { icon: CheckCircle, label: "Live \u00B7 Scaling Nationally" },
];

const stats = [
  { value: "5M+", label: "Potential customers reached" },
  { value: "<60s", label: "Credit decision time" },
  { value: "40%", label: "Default reduction" },
  { value: "3 Phases", label: "12-month rollout" },
];

const painPoints = [
  "Manual credit checks causing 48-hour delays and lost sales at point of purchase",
  "High default rates on device loans due to rudimentary scoring that ignored behavioural signals",
  "No real-time fraud detection — synthetic identities and repeat defaulters slipped through",
  "Collections dependent on call-centre agents with no prioritisation or automation",
  "Retail partners churning due to slow approvals and poor post-sale customer experience",
];

const solutions = [
  {
    num: "01",
    icon: Brain,
    title: "AI Credit Scoring Engine",
    description:
      "Real-time ML model ingesting telco data, device metadata, BVN history, and repayment behaviour to approve or decline in under 60 seconds — even for first-time borrowers with no formal credit history.",
  },
  {
    num: "02",
    icon: Zap,
    title: "Automated Loan Origination",
    description:
      "End-to-end digital workflow from retailer tablet to disbursement. KYC verification, e-signature, and device-lock activation happen in a single session — zero paper, zero branch visits.",
  },
  {
    num: "03",
    icon: Shield,
    title: "Real-Time Fraud Detection",
    description:
      "Behavioural biometrics, device fingerprinting, and graph-based anomaly detection flag synthetic IDs, collusion rings, and repeat defaulters before funds are released.",
  },
  {
    num: "04",
    icon: RefreshCw,
    title: "Smart Collections & Recovery",
    description:
      "ML-prioritised outreach via SMS, WhatsApp, and USSD with dynamic payment plans. Remote device-lock escalation for non-responsive accounts. Recovery rates up 35%.",
  },
  {
    num: "05",
    icon: BarChart3,
    title: "Portfolio Analytics Dashboard",
    description:
      "Live dashboards tracking PAR, vintage curves, channel performance, and cohort analysis. Auto-alerts for risk threshold breaches give management real-time visibility.",
  },
];

const results = [
  {
    badge: "Speed",
    metric: "<60s",
    desc: "Credit decisions at point of sale — from 48 hours to under one minute",
    color: "green" as const,
  },
  {
    badge: "Defaults",
    metric: "\u221240%",
    desc: "Default rate reduced through behavioural scoring and early-warning models",
    color: "green" as const,
  },
  {
    badge: "Fraud",
    metric: "95%",
    desc: "Synthetic identity fraud caught before disbursement with ML detection",
    color: "orange" as const,
  },
  {
    badge: "Recovery",
    metric: "+35%",
    desc: "Collections recovery improved through smart prioritisation and automation",
    color: "green" as const,
  },
];

const marketingFeatures = [
  {
    icon: Target,
    title: "Predictive Lead Scoring",
    desc: "ML models identify high-conversion prospects from telco and retail data, focusing marketing spend where it matters.",
  },
  {
    icon: Megaphone,
    title: "Automated Campaign Engine",
    desc: "Personalised SMS and WhatsApp campaigns triggered by repayment milestones, upgrade eligibility, and seasonal demand.",
  },
  {
    icon: TrendingUp,
    title: "Referral & Loyalty AI",
    desc: "Dynamic referral incentives and loyalty tiers driven by customer lifetime value predictions, boosting organic growth.",
  },
];

const phases = [
  {
    num: 1,
    title: "Foundation",
    timeline: "Months 1\u20134",
    desc: "Core scoring engine, loan origination, and device-lock integration deployed with pilot retail partners.",
  },
  {
    num: 2,
    title: "Scale & Optimise",
    timeline: "Months 5\u20138",
    desc: "Fraud detection, smart collections, and portfolio dashboards live. Model retraining on production data.",
  },
  {
    num: 3,
    title: "Growth Engine",
    timeline: "Months 9\u201312",
    desc: "Marketing AI, referral system, and national retail rollout. Continuous A/B testing on scoring and campaigns.",
  },
];

const risks = [
  {
    icon: AlertTriangle,
    label: "Data Quality",
    desc: "Automated validation pipelines flag incomplete BVN, telco, or device records before they enter scoring models.",
    color: "bg-amber-500/10",
  },
  {
    icon: Scale,
    label: "Fairness & Inclusion",
    desc: "Regular bias audits ensure scoring doesn\u2019t discriminate by geography, gender, or device type. Human override always available.",
    color: "bg-blue-500/10",
  },
  {
    icon: Lock,
    label: "Data Privacy",
    desc: "NDPA-compliant data handling with end-to-end encryption, purpose limitation, and transparent consent flows.",
    color: "bg-green-500/10",
  },
  {
    icon: Users,
    label: "Responsible Collections",
    desc: "Contact frequency caps, hardship detection, and escalation protocols prevent aggressive recovery practices.",
    color: "bg-red-500/10",
  },
];

/* ── Fade animation helper ──────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

/* ── Component ──────────────────────────────────────── */

export function EasyBuyContent() {
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
                Case Study &middot; Digital Lending &middot; BNPL
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mb-6">
              EasyBuy VIP Loan &mdash;
              <br />
              AI That Scales{" "}
              <span className="gradient-text">Digital Lending</span>
              <br />
              for Mass Markets
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-10">
              AdmireTech designed and deployed an AI-powered BNPL and device
              financing platform &mdash; enabling instant credit decisions,
              automated collections, and fraud prevention for millions of
              underserved Nigerians.
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
                Scaling device finance without drowning in defaults
              </h2>
              <p className="text-text-secondary leading-relaxed">
                A fast-growing Nigerian BNPL provider offering smartphone and
                device financing to low-income consumers was hitting a ceiling.
                Manual credit checks delayed sales, rudimentary scoring missed
                both good borrowers and bad actors, and collections relied on
                costly call-centre operations with no intelligent
                prioritisation.
              </p>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <Card className="h-full">
                <h3 className="text-white font-bold text-sm mb-5">
                  Pain Points
                </h3>
                <ul className="space-y-3.5">
                  {painPoints.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                    >
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
              Five AI capabilities powering end-to-end lending
            </h2>
          </motion.div>

          <div className="space-y-4">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title} {...fade(i * 0.08)}>
                <div className="group rounded-2xl bg-card border border-white/5 hover:border-accent/20 p-6 sm:p-7 transition-all hover:-translate-y-0.5">
                  <div className="flex items-start gap-5">
                    {/* Number + Icon */}
                    <div className="shrink-0 flex flex-col items-center gap-2">
                      <span className="text-accent/40 text-xs font-bold tracking-widest">
                        {sol.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                        <sol.icon size={20} className="text-accent" />
                      </div>
                    </div>
                    {/* Content */}
                    <div>
                      <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                        {sol.title}
                      </h4>
                      <p className="text-text-secondary text-[13px] leading-relaxed">
                        {sol.description}
                      </p>
                    </div>
                  </div>
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
                Measurable impact at scale
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ MARKETING GROWTH ENGINE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Growth Engine
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4">
              AI-powered marketing that compounds growth
            </h2>
            <p className="text-text-secondary max-w-2xl leading-relaxed mb-10">
              Beyond lending operations, AdmireTech built an integrated
              marketing intelligence layer that turns customer data into
              acquisition and retention fuel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {marketingFeatures.map((feat, i) => (
              <motion.div key={feat.title} {...fade(i * 0.1)}>
                <div className="rounded-2xl bg-accent/[0.06] border border-accent/15 p-7 h-full hover:-translate-y-1 transition-transform">
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

      {/* ═══ IMPLEMENTATION ROADMAP ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Implementation
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12">
              12-month phased roadmap
            </h2>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-[17%] right-[17%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
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
                  <h5 className="text-white font-bold text-[13px] mb-1">
                    {phase.title}
                  </h5>
                  <span className="text-accent text-[11px] font-semibold block mb-2">
                    {phase.timeline}
                  </span>
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

      {/* ═══ COMPLIANCE + CTA ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Responsible AI */}
            <motion.div {...fade()}>
              <Card className="h-full">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  Compliance &amp; Responsible AI
                </p>
                <h3 className="text-lg font-bold text-white mb-6">
                  Built for trust at every layer
                </h3>
                <ul className="space-y-5">
                  {risks.map((risk) => (
                    <li key={risk.label} className="flex items-start gap-3">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${risk.color}`}
                      >
                        <risk.icon
                          size={14}
                          className="text-text-secondary"
                        />
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
                  <h3 className="text-2xl font-bold text-white leading-tight max-w-[320px] mb-3">
                    Ready to scale your lending platform with AI?
                  </h3>
                  <p className="text-white/65 text-sm leading-relaxed max-w-xs mb-8">
                    AdmireTech builds intelligent, responsible lending
                    infrastructure that grows with your business &mdash; from
                    pilot to millions of customers.
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
