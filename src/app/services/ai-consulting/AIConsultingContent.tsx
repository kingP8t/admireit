"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Brain,
  Zap,
  CheckCircle,
  Clock,
  Shield,
  ChevronDown,
  Star,
  TrendingUp,
  Target,
  FileSearch,
  Map,
  GitCompare,
  Users,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  Compass,
  Layers,
  CircleDollarSign,
  Gauge,
  BadgeCheck,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "90-day", label: "Strategy-to-production timeline" },
  { value: "73%", label: "Of AI projects fail without strategy" },
  { value: "3x", label: "Higher ROI with guided adoption" },
  { value: "$2.3M", label: "Average waste from failed AI initiatives" },
];

const painPoints = [
  {
    icon: AlertTriangle,
    title: "AI Hype Is Costing You Real Money",
    desc: "Your team bought into the hype and launched AI pilots that went nowhere. Vendor demos looked incredible, but real-world results didn't follow. Now leadership is skeptical and your AI budget is under scrutiny.",
  },
  {
    icon: Compass,
    title: "No Clear AI Strategy or Roadmap",
    desc: "Everyone knows AI matters, but nobody knows where to start. You've got a dozen use cases on a whiteboard and zero prioritisation framework. Six months later, you're still in 'exploration mode'.",
  },
  {
    icon: Layers,
    title: "Vendor Lock-In and Wrong Technology Bets",
    desc: "You picked a platform based on a slick demo and now you're stuck with rigid contracts, limited customisation, and technology that doesn't scale. Switching costs keep climbing every quarter.",
  },
  {
    icon: Users,
    title: "Your Team Isn't Ready for AI",
    desc: "Even the best AI tools fail when the organisation isn't prepared. Resistance from staff, broken data pipelines, and lack of AI literacy means your investment never reaches its potential.",
  },
];

const services = [
  {
    icon: FileSearch,
    title: "AI Readiness Assessment",
    desc: "A comprehensive audit of your data infrastructure, technical capabilities, team skills, and organisational culture. We identify exactly where you stand and what gaps need closing before any AI investment.",
    deliverables: [
      "Data maturity scorecard",
      "Infrastructure gap analysis",
      "Team capability assessment",
      "Risk & compliance review",
    ],
    color: "accent",
  },
  {
    icon: Map,
    title: "AI Strategy Roadmap",
    desc: "A phased, prioritised plan that maps AI opportunities to your specific business objectives. Every initiative is ranked by impact, feasibility, and time-to-value — with clear milestones and resource estimates.",
    deliverables: [
      "Prioritised use-case matrix",
      "90-day quick-win plan",
      "12-month implementation timeline",
      "ROI projections per initiative",
    ],
    color: "blue",
  },
  {
    icon: GitCompare,
    title: "Vendor & Technology Evaluation",
    desc: "Unbiased, vendor-agnostic analysis of AI platforms, tools, and providers. We run proof-of-concept tests, benchmark performance, and negotiate on your behalf — so you buy what works, not what sells.",
    deliverables: [
      "Vendor comparison matrix",
      "PoC test results & benchmarks",
      "Total cost of ownership analysis",
      "Contract negotiation support",
    ],
    color: "emerald",
  },
  {
    icon: Users,
    title: "Change Management & AI Adoption",
    desc: "AI fails without people. We design change management programs that get buy-in from leadership, upskill your workforce, and embed AI into daily workflows — not just technology stacks.",
    deliverables: [
      "Stakeholder alignment playbook",
      "AI literacy training program",
      "Adoption metrics dashboard",
      "Organisational change plan",
    ],
    color: "amber",
  },
  {
    icon: Gauge,
    title: "AI Governance & Ethics Framework",
    desc: "Build trust with responsible AI. We help you establish governance policies, bias detection protocols, transparency standards, and compliance frameworks aligned with emerging regulations.",
    deliverables: [
      "AI governance charter",
      "Bias & fairness audit protocol",
      "Regulatory compliance checklist",
      "Model monitoring playbook",
    ],
    color: "purple",
  },
  {
    icon: CircleDollarSign,
    title: "AI Business Case Development",
    desc: "Struggling to get executive buy-in? We build bullet-proof business cases with hard numbers — ROI modelling, risk analysis, competitive benchmarks, and investment timelines that CFOs actually approve.",
    deliverables: [
      "Financial impact model",
      "Risk & mitigation framework",
      "Competitive intelligence brief",
      "Executive presentation deck",
    ],
    color: "pink",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discover & Diagnose",
    desc: "We spend a week embedded with your team — interviewing stakeholders, auditing data pipelines, reviewing existing tools, and mapping business processes. No assumptions, no shortcuts.",
    duration: "Week 1-2",
  },
  {
    num: "02",
    title: "Analyse & Prioritise",
    desc: "We map every AI opportunity against impact, feasibility, and risk. You get a scored matrix with clear recommendations — not a 100-page report that gathers dust.",
    duration: "Week 3-4",
  },
  {
    num: "03",
    title: "Design & Validate",
    desc: "For your top priorities, we design architecture, select technology, and run quick proof-of-concept tests. You see real results before committing real budget.",
    duration: "Week 5-8",
  },
  {
    num: "04",
    title: "Roadmap & Launch",
    desc: "We deliver a battle-tested implementation roadmap with milestones, budgets, team requirements, and success metrics. Then we help you execute — or hand off cleanly to your team.",
    duration: "Week 9-12",
  },
];

const comparisonRows = [
  {
    feature: "Approach",
    us: "Vendor-agnostic, data-driven",
    them: "Sells their own platform",
  },
  {
    feature: "Time to strategy",
    us: "4-6 weeks",
    them: "3-6 months",
  },
  {
    feature: "Deliverables",
    us: "Actionable roadmap with ROI",
    them: "Generic slide decks",
  },
  {
    feature: "Team involvement",
    us: "Embedded with your people",
    them: "Remote questionnaires",
  },
  {
    feature: "Post-strategy support",
    us: "Implementation guidance included",
    them: "Engagement ends at report",
  },
  {
    feature: "Pricing model",
    us: "Fixed-fee, outcome-linked",
    them: "Hourly billing, scope creep",
  },
];

const industries = [
  {
    icon: BarChart3,
    title: "Financial Services",
    desc: "Fraud detection, risk modelling, automated compliance, and customer personalisation strategies for banks, fintechs, and insurance providers.",
    stat: "40% faster compliance reviews",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Target,
    title: "Healthcare & Pharma",
    desc: "Clinical AI adoption, diagnostic support tools, patient data analytics, and regulatory pathway guidance for healthcare organisations.",
    stat: "3x faster diagnostic screening",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Lightbulb,
    title: "Manufacturing & Supply Chain",
    desc: "Predictive maintenance, demand forecasting, quality control automation, and supply chain optimisation through AI-powered analytics.",
    stat: "25% reduction in downtime",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Brain,
    title: "Professional Services",
    desc: "Document analysis, knowledge management, client insights, and workflow automation for consulting, legal, and accounting firms.",
    stat: "60% faster document review",
    color: "bg-amber-500/10 text-amber-400",
  },
];

const testimonials = [
  {
    quote:
      "AdmireTech didn't just give us a strategy — they gave us conviction. Within 90 days we had a clear roadmap, three quick wins in production, and full executive alignment on our AI investment.",
    name: "Chief Technology Officer",
    company: "National Microfinance Bank",
    stat: "3 AI initiatives live in 90 days",
    caseStudySlug: "mfb-ai-transformation",
  },
  {
    quote:
      "We'd wasted 8 months with another consultancy and had nothing to show for it. AdmireTech came in, diagnosed the real blockers in two weeks, and built a roadmap that actually moved. The difference was night and day.",
    name: "VP of Engineering",
    company: "Cloud Solutions Provider",
    stat: "AI adoption in under 60 days",
    caseStudySlug: "llm-enterprise-chatbot",
  },
];

const faqs = [
  {
    q: "We already have a data science team. Why do we need AI consulting?",
    a: "Having data scientists is great — but strategy isn't about code. It's about knowing WHICH problems to solve, in WHAT order, with WHAT technology, and HOW to get organisational buy-in. We complement your technical team with strategic clarity, vendor evaluation, and change management expertise they typically don't have time for.",
  },
  {
    q: "How is AdmireTech different from the big consulting firms?",
    a: "We're practitioners, not slide-deck factories. Our team has built and deployed AI systems in production — not just theorised about them. We're also vendor-agnostic (we don't sell platforms), faster (weeks not months), and more affordable (fixed-fee, not hourly billing with scope creep).",
  },
  {
    q: "What if we're not sure AI is right for our business?",
    a: "That's exactly when consulting is most valuable. Our AI Readiness Assessment will tell you — honestly — whether AI makes sense for your specific situation. If it doesn't, we'll say so. We'd rather build a long-term relationship based on trust than sell you something you don't need.",
  },
  {
    q: "How long does a typical AI consulting engagement last?",
    a: "A focused AI Readiness Assessment takes 2-3 weeks. A full AI Strategy Roadmap typically runs 6-8 weeks. End-to-end engagements (strategy through to implementation oversight) can extend to 12-16 weeks. Every engagement has a clear scope and timeline agreed upfront.",
  },
  {
    q: "Do you also help with implementation, or just strategy?",
    a: "Both. We can hand off the roadmap to your team with full documentation, or we can lead implementation through our engineering practice — AI chatbots, automation, custom ML models, and full-stack development. Many clients start with consulting and then engage us for build.",
  },
  {
    q: "What does AI consulting cost?",
    a: "Our AI Readiness Assessment starts from $5,000. Full AI Strategy Roadmap engagements typically range from $15,000-$40,000 depending on scope and complexity. All pricing is fixed-fee and agreed before we start. Book a free consultation and we'll scope it in 48 hours.",
  },
];

/* ── FAQ Item ──────────────────────────────────────── */
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-white/[0.06] rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-white font-semibold text-[15px] leading-snug pr-4">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`text-accent shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-5 text-text-secondary text-sm leading-relaxed">
          {a}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ── Fade animation helper ──────────────────────────── */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5 },
});

/* ── Component ──────────────────────────────────────── */

export function AIConsultingContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-blue-500/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,107,43,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.3) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <motion.div {...fade()}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Brain size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  AI Consulting &amp; Strategy
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                Stop Guessing.{" "}
                <span className="gradient-text">Start Shipping</span>
                <br />
                AI That Actually Works.
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
                73% of AI initiatives fail. Not because the technology
                doesn&apos;t work &mdash; but because companies skip the
                strategy. AdmireTech gives you a clear, actionable AI roadmap
                that turns ambition into production-grade results in 90 days.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CalBookingButton className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                  Get Your Free AI Assessment
                  <ArrowRight size={16} />
                </CalBookingButton>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                >
                  See Client Results
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-4 text-xs text-text-secondary">
                <div className="flex -space-x-2">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-card border-2 border-background flex items-center justify-center text-[10px] font-bold text-accent"
                    >
                      {["C", "T", "V", "D", "R"][i]}
                    </div>
                  ))}
                </div>
                <span>
                  Trusted by CTOs and VPs across{" "}
                  <span className="text-white font-medium">
                    London, Lagos &amp; Pune
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right — strategy visual */}
            <motion.div {...fade(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-blue-500/5">
                {/* Topbar */}
                <div className="bg-gradient-to-r from-accent to-accent-warm px-5 py-3.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white text-xs font-semibold ml-1">
                    AI Strategy Dashboard
                  </span>
                </div>

                {/* Dashboard body */}
                <div className="bg-card p-6 space-y-4">
                  {/* Readiness Score */}
                  <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <div>
                      <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider font-bold mb-1">
                        AI Readiness Score
                      </p>
                      <p className="text-2xl font-bold text-white">
                        72<span className="text-accent">/100</span>
                      </p>
                    </div>
                    <div className="w-16 h-16 rounded-full border-4 border-accent/30 flex items-center justify-center relative">
                      <svg className="absolute inset-0 w-full h-full -rotate-90">
                        <circle
                          cx="32"
                          cy="32"
                          r="28"
                          fill="none"
                          stroke="rgba(255,107,43,0.8)"
                          strokeWidth="4"
                          strokeDasharray={`${0.72 * 176} ${0.28 * 176}`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <Gauge size={20} className="text-accent" />
                    </div>
                  </div>

                  {/* Priority Matrix */}
                  <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                    <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider font-bold mb-3">
                      Priority Matrix
                    </p>
                    <div className="space-y-2">
                      {[
                        {
                          name: "Customer Service AI",
                          impact: "High",
                          feasibility: 90,
                          color: "bg-green-400",
                        },
                        {
                          name: "Predictive Analytics",
                          impact: "High",
                          feasibility: 72,
                          color: "bg-accent",
                        },
                        {
                          name: "Document Processing",
                          impact: "Medium",
                          feasibility: 85,
                          color: "bg-blue-400",
                        },
                        {
                          name: "Demand Forecasting",
                          impact: "Medium",
                          feasibility: 60,
                          color: "bg-amber-400",
                        },
                      ].map((item) => (
                        <div key={item.name} className="flex items-center gap-3">
                          <span className="text-[11px] text-text-secondary w-32 truncate">
                            {item.name}
                          </span>
                          <div className="flex-1 h-2 bg-white/[0.04] rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full rounded-full ${item.color}`}
                              initial={{ width: 0 }}
                              whileInView={{
                                width: `${item.feasibility}%`,
                              }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                          <span className="text-[10px] text-text-secondary/60 w-8 text-right">
                            {item.feasibility}%
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { label: "Use Cases", value: "12", icon: Lightbulb },
                      { label: "Quick Wins", value: "4", icon: Zap },
                      { label: "Est. ROI", value: "340%", icon: TrendingUp },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center"
                      >
                        <s.icon
                          size={14}
                          className="text-accent mx-auto mb-1"
                        />
                        <p className="text-lg font-bold text-white leading-none">
                          {s.value}
                        </p>
                        <p className="text-[9px] text-text-secondary/50 uppercase tracking-wider mt-1">
                          {s.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="bg-accent">
        <div className="container-wide mx-auto grid grid-cols-2 lg:grid-cols-4">
          {heroStats.map((stat, i) => (
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

      {/* ═══ PAIN POINTS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              The Problem
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              AI without strategy is just expensive experimentation
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Most companies don&apos;t have an AI problem. They have a strategy
              problem. Here&apos;s what happens when you skip the roadmap and
              jump straight to implementation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <motion.div key={point.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-red-500/20 transition-colors group">
                  <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center mb-5 group-hover:bg-red-500/15 transition-colors">
                    <point.icon size={20} className="text-red-400" />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {point.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION INTRO ═══ */}
      <section className="py-16 sm:py-20">
        <div className="container-wide mx-auto">
          <motion.div
            {...fade()}
            className="rounded-3xl bg-gradient-to-br from-accent/15 via-accent/5 to-transparent border border-accent/20 p-10 sm:p-14 text-center relative overflow-hidden"
          >
            <div className="absolute w-[500px] h-[500px] rounded-full bg-accent/5 -top-64 left-1/2 -translate-x-1/2 blur-3xl" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <p className="text-accent text-xs font-bold tracking-widest uppercase mb-4">
                The Solution
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                What if you had a clear, proven AI roadmap &mdash; built by
                people who&apos;ve actually deployed AI in production?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                AdmireTech&apos;s AI Consulting practice has guided enterprises
                across 3 continents from &ldquo;we know AI is important&rdquo;
                to &ldquo;we have 3 AI systems in production generating
                ROI.&rdquo; We don&apos;t just advise. We architect, validate,
                and help you execute.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5">
                Book Your Free AI Strategy Session
                <ArrowRight size={16} />
              </CalBookingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CONSULTING SERVICES ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              What We Deliver
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Six consulting services. One clear outcome: AI that works.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every engagement is tailored to your stage, your industry, and
              your specific goals. No cookie-cutter frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((svc, i) => {
              const colorMap: Record<string, string> = {
                accent: "bg-accent/10 text-accent",
                blue: "bg-blue-500/10 text-blue-400",
                emerald: "bg-emerald-500/10 text-emerald-400",
                amber: "bg-amber-500/10 text-amber-400",
                purple: "bg-purple-500/10 text-purple-400",
                pink: "bg-pink-500/10 text-pink-400",
              };
              const borderMap: Record<string, string> = {
                accent: "hover:border-accent/20",
                blue: "hover:border-blue-500/20",
                emerald: "hover:border-emerald-500/20",
                amber: "hover:border-amber-500/20",
                purple: "hover:border-purple-500/20",
                pink: "hover:border-pink-500/20",
              };
              return (
                <motion.div key={svc.title} {...fade(i * 0.08)}>
                  <div
                    className={`rounded-2xl bg-card border border-white/5 p-7 h-full ${borderMap[svc.color]} hover:-translate-y-1 transition-all`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${colorMap[svc.color]}`}
                    >
                      <svc.icon size={20} />
                    </div>
                    <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                      {svc.title}
                    </h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                    <div className="space-y-1.5">
                      {svc.deliverables.map((d) => (
                        <div
                          key={d}
                          className="flex items-center gap-2 text-[12px] text-text-secondary"
                        >
                          <CheckCircle
                            size={12}
                            className="text-accent shrink-0"
                          />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From ambiguity to action in 12 weeks
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Our battle-tested 4-phase methodology has guided organisations
              across 3 continents from AI curiosity to production-grade
              deployments.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...fade(i * 0.1)}
                  className="relative z-10"
                >
                  <div className="rounded-2xl bg-card border border-white/5 p-6 h-full hover:border-accent/20 transition-all group">
                    <span className="block text-[42px] font-bold text-white/[0.06] leading-none mb-4 group-hover:text-accent/20 transition-colors">
                      {step.num}
                    </span>
                    <span className="inline-block px-2.5 py-1 rounded-full bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase mb-3">
                      {step.duration}
                    </span>
                    <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
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

      {/* ═══ COMPARISON TABLE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Why AdmireTech
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Not all AI consulting is created equal
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-card">
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50">
                  Criteria
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-accent text-center">
                  AdmireTech
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50 text-center">
                  Traditional Firms
                </div>
              </div>

              {/* Rows */}
              {comparisonRows.map((row, i) => (
                <div
                  key={row.feature}
                  className={`grid grid-cols-3 ${
                    i % 2 === 0 ? "bg-white/[0.02]" : "bg-transparent"
                  } border-t border-white/[0.04]`}
                >
                  <div className="px-6 py-4 text-sm text-white font-medium">
                    {row.feature}
                  </div>
                  <div className="px-6 py-4 text-sm text-accent font-semibold text-center">
                    {row.us}
                  </div>
                  <div className="px-6 py-4 text-sm text-text-secondary/50 text-center">
                    {row.them}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ INDUSTRY EXPERTISE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Industry Expertise
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              AI strategy shaped by deep industry knowledge
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We don&apos;t give generic advice. Our consultants bring hands-on
              experience across regulated industries, fast-growth startups, and
              enterprise environments.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${ind.color}`}
                  >
                    <ind.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {ind.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                    {ind.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                    <TrendingUp size={10} />
                    {ind.stat}
                  </span>
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

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Client Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              From strategy to measurable impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={t.company} {...fade(i * 0.15)}>
                <div className="rounded-2xl bg-card border border-white/5 p-8 h-full relative overflow-hidden">
                  <div className="absolute top-4 right-6 text-accent/10 text-6xl font-serif leading-none">
                    &ldquo;
                  </div>
                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star
                          key={s}
                          size={14}
                          className="text-accent fill-accent"
                        />
                      ))}
                    </div>

                    <p className="text-white text-[15px] leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-sm">
                          {t.name}
                        </p>
                        <p className="text-text-secondary text-xs">
                          {t.company}
                        </p>
                      </div>
                      <Link
                        href={`/portfolio/${t.caseStudySlug}`}
                        className="inline-flex items-center gap-1 text-accent text-xs font-semibold hover:text-accent-warm transition-colors group"
                      >
                        Read Case Study
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </Link>
                    </div>

                    {/* Stat pill */}
                    <div className="mt-5 pt-5 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <BadgeCheck size={14} className="text-green-400" />
                        <span className="text-white font-semibold">
                          {t.stat}
                        </span>
                        <span className="text-text-secondary text-xs">
                          achieved
                        </span>
                      </span>
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

      {/* ═══ FAQ ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12">
            {/* Left — heading */}
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Questions we get asked every week
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Still have questions? Book a free 30-minute AI strategy call and
                we&apos;ll walk you through everything &mdash; no obligation.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent-warm transition-colors">
                Book a Free Call
                <ArrowRight size={14} />
              </CalBookingButton>
            </motion.div>

            {/* Right — accordion */}
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <div className="rounded-3xl bg-gradient-to-br from-accent to-accent-warm p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.06] -top-72 left-1/2 -translate-x-1/2" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.04] bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Brain size={14} className="text-white" />
                  <span className="text-white/80 text-xs font-semibold">
                    Free AI Strategy Session &middot; No Commitment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Ready to stop experimenting and start deploying AI that
                  delivers?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Book a free 30-minute AI strategy call. We&apos;ll assess your
                  current position, identify the highest-impact opportunities,
                  and give you a clear roadmap &mdash; whether you work with us
                  or not.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Get Your Free AI Strategy Assessment
                    <ArrowRight size={14} />
                  </CalBookingButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                  >
                    Send Us a Message
                  </Link>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-6 justify-center text-white/50 text-xs">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={12} />
                    No obligation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    30-min strategy call
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} />
                    Vendor-agnostic advice
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
