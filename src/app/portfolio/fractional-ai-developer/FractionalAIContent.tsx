"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Users,
  CheckCircle,
  Zap,
  Clock,
  Brain,
  Building2,
  Layers,
  ChevronDown,
  Cpu,
  MessageCircle,
  LineChart,
  Wrench,
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
  "SaaS Marketplace",
  "Series A \u00B7 $8M Raised",
  "AI/ML Strategy",
  "Team Scaling",
  "LLM Integration",
  "12-Month Engagement",
];

const heroMetrics = [
  { value: "8 \u2192 35", label: "Engineers Scaled", color: "text-accent" },
  { value: "3", label: "AI Products Launched", color: "text-emerald-400" },
  { value: "12", label: "Months Engagement", color: "text-amber-400" },
  { value: "40%", label: "Cost vs Full-Time CTO", color: "text-pink-400" },
];

const stripStats = [
  { icon: Users, text: "27 Engineers Hired & Onboarded" },
  { icon: CheckCircle, text: "100% Engineering Team Retention" },
  { icon: Zap, text: "3\u00D7 Developer Productivity via Internal AI Tools" },
  { icon: Clock, text: "Series B Ready in 12 Months" },
];

const challengePoints = [
  "No AI strategy or roadmap \u2014 competitors were pulling ahead",
  "Engineering team directionless \u2014 morale and velocity declining",
  "No hiring process, engineering ladder, or culture framework",
  "Technical debt accumulating while investors expected new features",
  "Board needed credible technical leadership for Series B preparation",
];

const solutionPoints = [
  "Immediate AI-first technical direction and architecture decisions",
  "Structured hiring \u2014 27 engineers onboarded with zero mis-hires",
  "Three AI products scoped, built, and shipped to production",
  "Engineering ladder, culture, and CI/CD built from scratch",
  "Series B pitch deck technical narrative written and board-presented",
];

const tracks = [
  {
    icon: Users,
    title: "Team Building",
    desc: "Recruited, interviewed, and onboarded 27 engineers across frontend, backend, and ML. Built engineering ladder, performance review frameworks, and career development paths from scratch.",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Layers,
    title: "Process & Culture",
    desc: "Implemented agile practices, code review standards, CI/CD pipelines, and technical documentation. Instilled an AI-first engineering mindset that outlasted the engagement.",
    color: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
  },
  {
    icon: Brain,
    title: "AI/ML Strategy",
    desc: "Defined the complete AI product roadmap, evaluated LLM integrations, built ML infrastructure on AWS, and guided three AI-powered features from first prototype to production launch.",
    color: "bg-amber-500/10",
    iconColor: "text-amber-400",
  },
  {
    icon: Building2,
    title: "Technical Leadership",
    desc: "Architected scalable distributed systems, managed vendor relationships, presented technical roadmaps to investors and the board, and mentored internal tech leads for long-term succession.",
    color: "bg-pink-500/10",
    iconColor: "text-pink-400",
  },
];

const timeline = [
  {
    label: "Phase 1 \u00B7 Months 1\u20133",
    period: "Foundation",
    items: [
      "Full technical audit \u2014 code, infrastructure, debt",
      "First 8 engineers hired and onboarded",
      "Core engineering processes established",
      "AI product vision and roadmap defined",
    ],
  },
  {
    label: "Phase 2 \u00B7 Months 4\u20136",
    period: "Scale Up",
    items: [
      "Team grows to 20 engineers",
      "CI/CD pipelines and ML infrastructure live",
      "AI Recommendation Engine shipped (Product #1)",
      "Engineering culture fully established",
    ],
  },
  {
    label: "Phase 3 \u00B7 Months 7\u20139",
    period: "Accelerate",
    items: [
      "Team reaches 30 engineers",
      "AI Support Chatbot launched (Product #2)",
      "Predictive analytics in active development",
      "Internal AI dev tools deployed \u2014 3\u00D7 productivity",
    ],
  },
  {
    label: "Phase 4 \u00B7 Months 10\u201312",
    period: "Handoff",
    items: [
      "Full team at 35 engineers",
      "Predictive Analytics live (Product #3)",
      "Internal tech leads promoted \u2014 full succession",
      "All processes documented for independence",
    ],
  },
];

const resultCards = [
  { value: "35", label: "Engineers Hired & Onboarded", color: "text-accent" },
  {
    value: "3",
    label: "AI Products Shipped to Production",
    color: "text-emerald-400",
  },
  { value: "40%", label: "Cost vs. Full-Time CTO Hire", color: "text-amber-400" },
  {
    value: "100%",
    label: "Engineering Team Retention",
    color: "text-pink-400",
  },
];

const products = [
  {
    tag: "Product 1 \u00B7 Month 6",
    icon: Cpu,
    title: "AI Recommendation Engine",
    desc: "Personalised product recommendations built on collaborative filtering and LLM-based semantic matching. Surfaces the most relevant marketplace listings based on user intent and behaviour.",
    stat: "\u2191 34% Conversion Increase",
    accent: "border-accent/20 bg-accent/[0.04]",
    tagColor: "text-accent",
    statBg: "bg-accent/15 text-accent",
  },
  {
    tag: "Product 2 \u00B7 Month 9",
    icon: MessageCircle,
    title: "AI Support Chatbot",
    desc: "24/7 intelligent support chatbot trained on product documentation and historical tickets. Integrated with Zendesk for seamless human escalation, resolving 60% of inquiries without agent involvement.",
    stat: "60% Inquiries Automated",
    accent: "border-emerald-500/20 bg-emerald-500/[0.04]",
    tagColor: "text-emerald-400",
    statBg: "bg-emerald-500/15 text-emerald-400",
  },
  {
    tag: "Product 3 \u00B7 Month 12",
    icon: LineChart,
    title: "Predictive Analytics Dashboard",
    desc: "ML-powered dashboard predicting customer churn, revenue forecasting, and inventory optimisation signals. Became a flagship feature in enterprise sales pitches and Series B conversations.",
    stat: "Key Series B Differentiator",
    accent: "border-amber-500/20 bg-amber-500/[0.04]",
    tagColor: "text-amber-400",
    statBg: "bg-amber-500/15 text-amber-400",
  },
  {
    tag: "Internal Tools \u00B7 Ongoing",
    icon: Wrench,
    title: "AI-Assisted Developer Tooling",
    desc: "AI-assisted code review, automated testing pipeline, and documentation generation. Reduced code review time by 60% and tripled overall developer throughput across the engineering team.",
    stat: "3\u00D7 Developer Productivity",
    accent: "border-white/[0.08] bg-white/[0.02]",
    tagColor: "text-text-secondary",
    statBg: "bg-white/[0.06] text-text-secondary",
  },
];

const techCategories = [
  {
    label: "AI / ML",
    highlight: true,
    items: ["Python", "TypeScript", "OpenAI API", "LangChain"],
  },
  {
    label: "App",
    highlight: false,
    items: ["React", "Node.js", "PostgreSQL", "Redis"],
  },
  {
    label: "Infra",
    highlight: false,
    items: ["AWS", "Kubernetes", "Terraform", "GitHub Actions"],
  },
  {
    label: "Data",
    highlight: false,
    items: ["Datadog", "Vector Embeddings", "ML Pipelines"],
  },
];

const faqs = [
  {
    q: "What does a Fractional AI/ML Developer from AdmireTech actually do?",
    a: "Our Fractional AI/ML Developers provide part-time senior technical leadership \u2014 typically 15\u201320 hours per week. They define AI/ML strategy, architect production-grade systems, hire and mentor engineers, manage architecture decisions, and present to investors and boards. You get the same calibre of technical execution as a full-time senior hire at a fraction of the cost and commitment.",
  },
  {
    q: "How much does a Fractional AI/ML Developer cost?",
    a: "AdmireTech\u2019s Fractional AI/ML Developer engagements start from $1,500/month depending on time commitment and scope. Compare this to a full-time senior AI/ML hire at $200K\u2013$350K/year plus equity. You get the same calibre of leadership at 30\u201350% of the cost \u2014 with no long-term hiring commitment and no equity dilution.",
  },
  {
    q: "When should a company hire a Fractional AI/ML Developer vs. a full-time hire?",
    a: "A Fractional AI/ML Developer is the right choice when you: (1) Need AI/ML expertise but can\u2019t justify a $250K+ salary, (2) Are scaling an engineering team rapidly and need experienced leadership, (3) Want to define and execute an AI strategy without permanent overhead, or (4) Need someone to build the team, processes, and products before hiring a full-time technical leader.",
  },
  {
    q: "How does AdmireTech ensure continuity after the engagement ends?",
    a: "We build for independence from day one. Every engagement includes promoting and mentoring internal tech leads, fully documenting all processes and architecture decisions, and establishing engineering playbooks that allow the team to operate autonomously. The goal is always to work ourselves out of a job \u2014 and hand over a team that\u2019s stronger and more self-sufficient than when we found it.",
  },
];

/* ── FAQ Component ───────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-card border border-white/5 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-white/[0.02] transition-colors"
      >
        <span className="text-[15px] font-bold text-white">{q}</span>
        <span
          className={`w-7 h-7 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={14} className="text-accent" />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-350 ${
          open ? "max-h-60 pb-5 px-6" : "max-h-0"
        }`}
      >
        <p className="text-text-secondary text-sm leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

/* ── Component ───────────────────────────────────── */

export function FractionalAIContent() {
  return (
    <div className="pt-20">
      {/* ═══ HERO ═══ */}
      <section className="section-padding relative overflow-hidden">
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-14 items-start">
            {/* Copy */}
            <motion.div {...fade()}>
              <span className="inline-flex items-center gap-2 text-accent text-[10px] font-bold tracking-[0.15em] uppercase px-3 py-1 rounded-full border border-accent/25 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                Case Study &middot; AI/ML Leadership
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-white tracking-tight leading-[1.05] mb-6">
                Fractional
                <br />
                <span className="text-accent italic">AI/ML Developer:</span>
                <br />
                Scaling Engineering &amp;
                <br />
                Launching 3 AI Products
              </h1>

              <p className="text-text-secondary text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
                How AdmireTech&apos;s Fractional AI/ML Developer helped a Series
                A SaaS startup scale from 8 to 35 engineers, define a complete
                AI strategy, and ship three production AI products &mdash; all in
                12 months at 40% of a full-time hire cost.
              </p>

              <div className="flex flex-wrap gap-2">
                {metaChips.map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/[0.04] border border-white/[0.08] rounded-lg px-3 py-1.5 text-xs font-semibold text-text-secondary"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Metric Card */}
            <motion.div {...fade(0.15)}>
              <div className="bg-card border border-white/[0.08] rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute w-72 h-72 rounded-full bg-accent/[0.08] -top-24 -right-20 blur-3xl" />
                <p className="text-[11px] font-bold tracking-[0.12em] uppercase text-text-secondary/40 mb-6 relative z-10">
                  Engagement Outcomes
                </p>
                <div className="space-y-5 relative z-10">
                  {heroMetrics.map((m) => (
                    <div
                      key={m.label}
                      className="border-b border-white/[0.06] pb-5 last:border-b-0 last:pb-0"
                    >
                      <div
                        className={`text-3xl sm:text-[40px] font-extrabold tracking-tight leading-none mb-1 ${m.color}`}
                      >
                        {m.value}
                      </div>
                      <div className="text-[11px] font-bold tracking-[0.1em] uppercase text-text-secondary/40">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STATS STRIP ═══ */}
      <section className="bg-accent">
        <div className="container-wide mx-auto flex flex-wrap items-center justify-center">
          {stripStats.map((stat, i) => (
            <motion.div
              key={stat.text}
              {...fade(i * 0.08)}
              className="flex items-center gap-2.5 px-6 sm:px-8 py-4 text-[13px] font-semibold text-white/90 border-r border-white/15 last:border-r-0 max-sm:border-r-0 max-sm:w-full max-sm:justify-center"
            >
              <stat.icon size={15} className="shrink-0" />
              {stat.text}
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ CHALLENGE + SOLUTION ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="mb-10">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              The Project
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              A $8M Series A startup &mdash; funded but leaderless
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
            {/* Challenge */}
            <motion.div {...fade()} className="bg-card p-8 sm:p-10">
              <p className="text-pink-400 text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                The Challenge
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                CTO departure left a critical leadership vacuum at the worst
                time
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                A Series A SaaS marketplace had raised $8M and was under
                enormous pressure to ship, scale, and demonstrate AI
                differentiation. Their founding CTO had departed, leaving an
                8-person team without technical direction during the most
                critical growth phase.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                The board couldn&apos;t justify a $300K+ full-time CTO salary at
                this stage &mdash; but they desperately needed the leadership.
              </p>
              <ul className="space-y-3">
                {challengePoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pink-400 shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Solution */}
            <motion.div
              {...fade(0.15)}
              className="bg-background p-8 sm:p-10 relative overflow-hidden"
            >
              <div className="absolute w-72 h-72 rounded-full bg-accent/10 -top-20 -right-20 blur-3xl" />
              <div className="relative z-10">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  The AdmireTech Solution
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                  A Fractional AI/ML Developer &mdash; 20 hours/week, full
                  CTO-level impact
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-3">
                  AdmireTech deployed a senior Fractional AI/ML Developer with
                  15+ years of engineering leadership and deep production AI
                  expertise. Operating 20 hours per week across three
                  simultaneous workstreams.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  This wasn&apos;t advisory &mdash; our developer shipped code,
                  made architecture decisions, conducted interviews, presented to
                  the board, and mentored internal tech leads.
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

      {/* ═══ ENGAGEMENT TRACKS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Engagement Structure
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
              Four parallel tracks running simultaneously
            </h2>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xl mb-10">
              Rather than tackling problems one at a time, AdmireTech ran four
              workstreams in parallel &mdash; ensuring no part of the business
              fell behind while another was being strengthened.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {tracks.map((track, i) => (
              <motion.div key={track.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div
                    className={`w-10 h-10 rounded-xl ${track.color} flex items-center justify-center mb-5`}
                  >
                    <track.icon size={20} className={track.iconColor} />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {track.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {track.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ═══ */}
      <section className="bg-card">
        <div className="section-padding">
          <div className="container-wide mx-auto">
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                Implementation Timeline
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12">
                12 months. Four phases. Zero disruption.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
              {timeline.map((phase, i) => (
                <motion.div key={phase.period} {...fade(i * 0.08)}>
                  <div
                    className={`bg-white/[0.03] border border-white/[0.06] p-7 h-full hover:bg-white/[0.06] transition-colors ${
                      i === 0
                        ? "rounded-t-2xl sm:rounded-l-2xl sm:rounded-tr-none"
                        : i === timeline.length - 1
                        ? "rounded-b-2xl sm:rounded-r-2xl sm:rounded-bl-none"
                        : ""
                    }`}
                  >
                    <p className="text-accent text-[10px] font-bold tracking-[0.12em] uppercase mb-3">
                      {phase.label}
                    </p>
                    <div className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-none mb-5">
                      {phase.period}
                    </div>
                    <ul className="space-y-2.5">
                      {phase.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-[13px] text-text-secondary/60 leading-relaxed"
                        >
                          <span className="mt-[7px] w-[5px] h-[5px] rounded-full bg-accent/60 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Results Delivered
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Every metric moved in the right direction
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {resultCards.map((r, i) => (
              <motion.div key={r.label} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 text-center h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div
                    className={`text-4xl sm:text-5xl font-extrabold tracking-tight leading-none mb-2 ${r.color}`}
                  >
                    {r.value}
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.1em] uppercase text-text-secondary/50">
                    {r.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <motion.div {...fade(0.2)} className="mt-10">
            <div className="rounded-2xl bg-gradient-to-br from-accent to-accent-warm p-10 sm:p-12 relative overflow-hidden">
              <span className="absolute top-2 left-8 text-[140px] leading-none text-white/[0.06] font-serif pointer-events-none select-none">
                &ldquo;
              </span>
              <div className="relative z-10">
                <p className="text-white text-lg sm:text-xl leading-relaxed italic max-w-3xl mb-6 font-serif">
                  Our Fractional AI/ML Developer from AdmireTech didn&apos;t
                  just fill a seat &mdash; he transformed our entire engineering
                  organisation. He built a team that could function without him,
                  which was exactly what we needed. The AI products launched
                  under his guidance became our key differentiator in Series B
                  discussions.
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-sm font-extrabold text-white">
                    JM
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">
                      Jordan M.
                    </div>
                    <div className="text-white/60 text-xs">
                      CEO, SaaS Marketplace Platform
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ AI PRODUCTS LAUNCHED ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              AI Products Launched
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Three production AI features &mdash; shipped in 12 months
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {products.map((prod, i) => (
              <motion.div key={prod.title} {...fade(i * 0.08)}>
                <div
                  className={`rounded-2xl border p-7 h-full transition-all hover:-translate-y-1 ${prod.accent}`}
                >
                  <p
                    className={`text-[10px] font-bold tracking-[0.12em] uppercase mb-3 ${prod.tagColor}`}
                  >
                    {prod.tag}
                  </p>
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-white/[0.06] flex items-center justify-center shrink-0">
                      <prod.icon size={16} className={prod.tagColor} />
                    </div>
                    <h4 className="text-lg font-bold text-white tracking-tight">
                      {prod.title}
                    </h4>
                  </div>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                    {prod.desc}
                  </p>
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-3 py-1 rounded-full ${prod.statBg}`}
                  >
                    {prod.stat}
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

      {/* ═══ TECH STACK ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Technology Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Modern AI-first architecture from day one
            </h2>
          </motion.div>

          <div className="space-y-3">
            {techCategories.map((cat, i) => (
              <motion.div key={cat.label} {...fade(i * 0.06)}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 bg-card border border-white/5 rounded-xl px-6 py-4">
                  <span className="text-[11px] font-bold tracking-wider uppercase text-text-secondary/50 w-16 shrink-0">
                    {cat.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className={`px-3 py-1 rounded-lg text-xs transition-colors ${
                          cat.highlight
                            ? "bg-accent/10 border border-accent/20 text-accent font-semibold"
                            : "bg-white/[0.04] border border-white/[0.08] text-text-secondary hover:border-accent/30 hover:text-accent"
                        }`}
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

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Frequently Asked Questions
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Everything you need to know about
              <br className="hidden sm:block" />
              Fractional AI/ML Developers
            </h2>
          </motion.div>

          <div className="space-y-2 max-w-3xl">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
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
                <p className="text-white/50 text-[10px] font-bold tracking-[0.15em] uppercase mb-4">
                  Hire a Fractional AI/ML Developer
                </p>
                <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight max-w-lg mx-auto mb-3">
                  Senior AI/ML leadership without the full-time price tag
                </h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-6">
                  AdmireTech&apos;s Fractional AI/ML Developers bring
                  production-grade AI expertise, engineering leadership, and
                  hands-on execution &mdash; exactly when and where you need it.
                </p>

                {/* Pricing pill */}
                <div className="inline-flex items-center gap-4 bg-white/[0.08] border border-white/15 rounded-xl px-6 py-4 mb-6">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    From $1,500
                    <span className="text-base font-medium">/mo</span>
                  </span>
                  <span className="text-xs text-white/50 text-left leading-relaxed">
                    vs $250K&ndash;$400K/year
                    <br />
                    for a full-time hire
                  </span>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-6 py-3 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Book a Free Strategy Call
                    <ArrowRight size={14} />
                  </CalBookingButton>
                  <Link
                    href="/portfolio"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-6 py-3 rounded-full hover:bg-white/20 transition-colors"
                  >
                    View All Case Studies
                  </Link>
                </div>

                <p className="text-white/30 text-xs mt-4">
                  1-week risk-free trial &middot; Start in 1&ndash;2 weeks
                  &middot; Cancel anytime
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
