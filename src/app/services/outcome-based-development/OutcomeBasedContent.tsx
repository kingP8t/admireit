"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Target,
  CheckCircle,
  XCircle,
  Clock,
  Shield,
  Zap,
  TrendingUp,
  ChevronDown,
  DollarSign,
  Handshake,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const socialProof = [
  { value: "100+", label: "Projects Delivered" },
  { value: "0", label: "Surprise Invoices" },
  { value: "7-Day", label: "Risk-Free Start" },
  { value: "Day 1", label: "Cost Clarity" },
];

const steps = [
  {
    num: "01",
    title: "Share Your Project",
    desc: "Tell us what you're building. Paste your idea, feature list, AI concept, or a rough PRD. Full spec or rough notes — we work with both. No deck required, no sales calls needed to get started.",
  },
  {
    num: "02",
    title: "Get an Instant Estimate",
    desc: "We break your project into story points — standardised, scored units of deliverable work. You see the full scope and cost on Day 1. No surprises later, no scope creep hidden in vague hour estimates.",
  },
  {
    num: "03",
    title: "We Build. You Pay on Delivery.",
    desc: "Senior engineers drop into your workflow and start shipping. You get live progress visibility throughout. Payment is triggered only when agreed features are marked complete — not when hours are logged.",
  },
];

const compGood = [
  {
    strong: "Pay only for shipped work",
    rest: "— billed when agreed features and deliverables are confirmed complete, not when a timer stops.",
  },
  {
    strong: "Perfectly aligned incentives",
    rest: "— the faster our engineers deliver quality work, the more everyone wins. No motivation to stretch timelines.",
  },
  {
    strong: "Full live visibility",
    rest: "— see exactly what's done, what's in progress, and what's blocked at any moment. No black boxes.",
  },
  {
    strong: "Predictable cost from Day 1",
    rest: "— work is scoped and priced before it starts. Budgets don't drift. Invoices don't surprise.",
  },
  {
    strong: "Senior engineers only",
    rest: "— every developer on your project is battle-tested with production experience. No juniors hidden in a team.",
  },
];

const compBad = [
  {
    strong: "Pay for time, not output",
    rest: "— you're charged regardless of what actually gets built. Slow week? Same invoice.",
  },
  {
    strong: "Misaligned incentives",
    rest: "— more hours billed equals more revenue for the agency. There's no reward for shipping fast.",
  },
  {
    strong: "Limited transparency",
    rest: "— hard to tell whether hours logged equal real progress, or whether the work is actually moving forward.",
  },
  {
    strong: "Budget creep",
    rest: "— estimates slip. Timelines extend. Hours accumulate. The original quote becomes a distant memory.",
  },
  {
    strong: "Quality unknown upfront",
    rest: "— you often don't know the seniority or calibre of who's actually working on your project.",
  },
];

const storyPoints = [
  {
    pts: "1 pt",
    complexity: "Simple · Minimal effort",
    title: "Quick, well-defined tasks",
    examples: [
      "Update error message text in an auth flow",
      "Add a new field to an existing API response",
      "Update environment variables in a deploy config",
      "Add a new option to a config-based dropdown",
    ],
    color: "accent",
  },
  {
    pts: "3 pts",
    complexity: "Straightforward · Real work",
    title: "Clear tasks with defined scope",
    examples: [
      "Implement client-side form validation with a library",
      "Add CSV export to an existing data table UI",
      "New email notification template using existing service",
      "Add a Filter by Status UI + backend logic to a report",
    ],
    color: "blue",
  },
  {
    pts: "5 pts",
    complexity: "Moderate · Some complexity",
    title: "Multi-part features with moving pieces",
    examples: [
      "Implement a new REST API for team member management",
      "Real-time webhook with retry logic for status events",
      "Usage dashboard showing monthly active users",
      "Settings page with email preference toggles: UI + backend",
    ],
    color: "purple",
  },
];

const whyCards = [
  {
    icon: Target,
    title: "Top-Tier AI/ML Talent",
    desc: "Experts from high-growth startups and production AI teams. You get senior engineers who've shipped real products, not candidates still learning the tools.",
    color: "accent",
  },
  {
    icon: Zap,
    title: "Plug-and-Play from Day 1",
    desc: "No hiring cycles, no sourcing delays, no onboarding marathons. We drop senior engineers directly into your workflow and start delivering within days.",
    color: "blue",
  },
  {
    icon: TrendingUp,
    title: "Scale Up or Down Anytime",
    desc: "Sprint-phase? Bring in extra bandwidth. Quieter period? Scale back. AdmireTech flexes with your roadmap — no fixed contracts, no penalty clauses.",
    color: "amber",
  },
  {
    icon: Handshake,
    title: "Aligned from the Start",
    desc: "We match each engagement carefully to your team, goals, tools, and workflow. The first week is risk-free — if it's not the right fit, you pay nothing.",
    color: "purple",
  },
];

const testimonials = [
  {
    quote:
      "AdmireTech solved in 2 weeks what an offshore team estimated would take two engineers four months. The outcome-based model meant they were motivated to move fast — and they delivered exactly what we needed.",
    stat: "8×",
    statLabel: "Faster than offshore estimate",
    name: "Bryan G.",
    role: "Partner, Investment Group",
    initials: "BG",
  },
  {
    quote:
      "I stopped managing tickets and started shipping again. AdmireTech gave us focus, speed, and real engineering firepower. The story-point model made it completely clear what we were paying for — and why.",
    stat: "3×",
    statLabel: "Faster feature delivery",
    name: "Max F.",
    role: "CTO & Co-founder, SaaS Platform",
    initials: "MF",
  },
  {
    quote:
      "Our MVP was scoped, designed, and built in just 6 weeks — one engineer, one PM. The transparency was unlike anything I'd experienced with an agency. We knew the cost on Day 1 and it held.",
    stat: "$300K",
    statLabel: "Saved vs. agency quote",
    name: "April B.",
    role: "Chief Product Officer, Tech Startup",
    initials: "AB",
  },
];

const faqs = [
  {
    q: "Why outcome-based pricing instead of hourly rates?",
    a: "Hourly billing rewards time, not productivity. A slow or inefficient engineer bills the same as a fast, expert one. Our outcome-based model flips this — we're compensated for what ships, so every incentive points toward delivering quality work quickly. Better engineers thrive, clients get more for their money, and nobody is gaming the clock.",
  },
  {
    q: "How are story points scored — can I trust the estimates?",
    a: "Story points are scored using a standardised, AI-assisted evaluation process that removes bias from individual engineers or managers. Each task is assessed for complexity, dependencies, and effort using consistent criteria — so estimates are comparable, repeatable, and tied to real deliverables. You'll see the full breakdown before any work begins.",
  },
  {
    q: "What if I want to change scope mid-project?",
    a: "Unlike fixed-bid projects, scope changes are welcome. New features or changes are simply scoped as new story points and added transparently. You see the cost impact immediately and can decide whether to proceed — no change request drama, no inflated surprises.",
  },
  {
    q: "What kind of projects does AdmireTech handle?",
    a: "Full-stack web and mobile applications, AI/ML integrations, LLM-powered products, API development, dashboard and analytics builds, e-commerce platforms, PWAs, legacy system modernisation, and more. If it involves shipping software, we can scope and price it under the outcome-based model.",
  },
  {
    q: 'What does "7-day risk-free" actually mean?',
    a: "We send a proposal, match you with the right engineers, and they start work. If within the first 7 days you decide it's not the right fit — for any reason — you pay nothing. No invoices, no awkward conversations, no obligation. We're confident enough in our process to offer this on every engagement.",
  },
  {
    q: "Who are the engineers working on my project?",
    a: "Every engineer at AdmireTech is senior-level with production experience in their stack. We carefully match talent to your project based on your specific technology, industry, and team culture. You'll know exactly who is working on your project before work starts — no bait-and-switch, no offshore handoffs, no juniors buried in a team.",
  },
];

/* Tech stack for marquee */
const techTags = [
  { label: "React", cat: "fe" },
  { label: "Next.js", cat: "fe" },
  { label: "Vue.js", cat: "fe" },
  { label: "Angular", cat: "fe" },
  { label: "Tailwind CSS", cat: "fe" },
  { label: "TypeScript", cat: "fe" },
  { label: "Node.js", cat: "be" },
  { label: "Python / FastAPI", cat: "be" },
  { label: "Django", cat: "be" },
  { label: "Express.js", cat: "be" },
  { label: "GraphQL", cat: "be" },
  { label: "REST APIs", cat: "be" },
  { label: "OpenAI API", cat: "ai" },
  { label: "LangChain", cat: "ai" },
  { label: "LlamaIndex", cat: "ai" },
  { label: "RAG Pipelines", cat: "ai" },
  { label: "Hugging Face", cat: "ai" },
  { label: "Claude API", cat: "ai" },
  { label: "Vector DBs", cat: "ai" },
  { label: "Pinecone", cat: "ai" },
  { label: "AWS", cat: "inf" },
  { label: "Google Cloud", cat: "inf" },
  { label: "Azure", cat: "inf" },
  { label: "Vercel", cat: "inf" },
  { label: "Docker", cat: "inf" },
  { label: "Kubernetes", cat: "inf" },
  { label: "Terraform", cat: "inf" },
  { label: "CI/CD · GitHub Actions", cat: "inf" },
  { label: "PostgreSQL", cat: "db" },
  { label: "MongoDB", cat: "db" },
  { label: "Supabase", cat: "db" },
  { label: "Redis", cat: "db" },
  { label: "Firebase", cat: "db" },
  { label: "React Native", cat: "mob" },
  { label: "Flutter", cat: "mob" },
  { label: "PWA", cat: "mob" },
  { label: "Shopify", cat: "mob" },
  { label: "Stripe", cat: "mob" },
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

/* ── Marquee ───────────────────────────────────────── */
function TechMarquee() {
  const catColors: Record<string, { bg: string; border: string; text: string; dot: string }> = {
    fe:  { bg: "bg-blue-500/[0.08]", border: "border-blue-500/20", text: "text-blue-400", dot: "bg-blue-400" },
    be:  { bg: "bg-accent/[0.08]", border: "border-accent/20", text: "text-accent", dot: "bg-accent" },
    ai:  { bg: "bg-purple-500/[0.08]", border: "border-purple-500/20", text: "text-purple-400", dot: "bg-purple-400" },
    inf: { bg: "bg-amber-500/[0.08]", border: "border-amber-500/20", text: "text-amber-400", dot: "bg-amber-400" },
    db:  { bg: "bg-pink-500/[0.08]", border: "border-pink-500/20", text: "text-pink-400", dot: "bg-pink-400" },
    mob: { bg: "bg-white/[0.05]", border: "border-white/10", text: "text-text-secondary", dot: "bg-text-secondary" },
  };

  const doubled = [...techTags, ...techTags];

  return (
    <div className="border-t border-b border-white/[0.06] py-6 overflow-hidden relative">
      <p className="text-center text-[10px] font-bold tracking-[0.18em] uppercase text-text-secondary/50 mb-5">
        Built for teams using
      </p>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      <div className="flex gap-2.5 animate-marquee hover:[animation-play-state:paused] w-max">
        {doubled.map((tag, i) => {
          const c = catColors[tag.cat];
          return (
            <span
              key={`${tag.label}-${i}`}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap border ${c.bg} ${c.border} ${c.text}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
              {tag.label}
            </span>
          );
        })}
      </div>
    </div>
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

export function OutcomeBasedContent() {
  /* Marquee keyframes injected once */
  const styleRef = useRef(false);
  useEffect(() => {
    if (styleRef.current) return;
    styleRef.current = true;
    const style = document.createElement("style");
    style.textContent = `
      @keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      .animate-marquee { animation: marquee 45s linear infinite; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.06] rounded-full blur-[120px] pointer-events-none" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,107,43,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,107,43,0.3) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 80%)",
          }}
        />

        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div {...fade()} className="flex flex-col items-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-bold tracking-[0.14em] uppercase">
                Outcome-Based Development
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[4.5rem] font-bold text-white leading-[1.0] tracking-tight max-w-4xl mb-7">
              Only pay for what
              <br />
              actually{" "}
              <span className="gradient-text">gets built.</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-10">
              No hourly billing. No vague retainers. No paying for{" "}
              <strong className="text-white font-semibold">&ldquo;busy work.&rdquo;</strong>
              <br />
              AdmireTech charges per delivered feature — so our incentives are
              perfectly aligned with yours.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 justify-center mb-14">
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-full hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                Get a Free Project Plan
                <ArrowRight size={16} />
              </CalBookingButton>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                See How It Works
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 sm:gap-8 flex-wrap justify-center">
              {socialProof.map((sp, i) => (
                <div key={sp.label} className="flex items-center gap-2">
                  {i > 0 && (
                    <span className="w-1 h-1 rounded-full bg-white/10 mr-4 hidden sm:block" />
                  )}
                  <span className="text-accent font-bold text-sm">
                    {sp.value}
                  </span>
                  <span className="text-text-secondary text-xs font-medium">
                    {sp.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ TECH MARQUEE ═══ */}
      <TechMarquee />

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-padding" id="how-it-works">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-xl mb-14">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From idea to shipped feature
              <br />
              in three steps.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Drop in what you need built. We scope it, price it, and ship it —
              and you only pay when it&apos;s done.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden bg-white/[0.06]">
            {steps.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.1)}>
                <div className="bg-card p-8 sm:p-10 h-full relative overflow-hidden group hover:bg-[#282828] transition-colors">
                  <span className="absolute top-4 right-5 text-[80px] font-bold text-white/[0.03] leading-none tracking-tight group-hover:text-accent/[0.06] transition-colors pointer-events-none">
                    {step.num}
                  </span>
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold tracking-[0.1em] uppercase mb-5">
                      Step {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COMPARISON ═══ */}
      <section className="bg-card border-t border-b border-white/[0.06]">
        <div className="container-wide mx-auto section-padding">
          <motion.div {...fade()} className="max-w-xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              The Difference
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Outcome-Based vs.
              <br />
              Hourly Billing.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Traditional agencies bill you for time. We bill you for results.
              The difference compounds fast.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Good — Outcome-based */}
            <motion.div {...fade(0.05)}>
              <div className="rounded-2xl p-8 sm:p-10 h-full relative overflow-hidden bg-gradient-to-br from-accent/[0.06] via-accent/[0.02] to-transparent border border-accent/15">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,43,0.06)_0%,transparent_60%)] pointer-events-none" />
                <div className="relative z-10">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[11px] font-bold tracking-[0.1em] uppercase mb-7">
                    <CheckCircle size={12} />
                    AdmireTech · Outcome-Based
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-7">
                    Pay for completed
                    <br />
                    features. Full stop.
                  </h3>
                  <ul className="space-y-4">
                    {compGood.map((item) => (
                      <li
                        key={item.strong}
                        className="flex items-start gap-3 text-sm leading-relaxed"
                      >
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle size={11} className="text-accent" />
                        </div>
                        <span className="text-text-secondary">
                          <strong className="text-white font-semibold">
                            {item.strong}
                          </strong>{" "}
                          {item.rest}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Bad — Hourly */}
            <motion.div {...fade(0.15)}>
              <div className="rounded-2xl p-8 sm:p-10 h-full bg-background border border-red-500/10">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/15 text-red-400 text-[11px] font-bold tracking-[0.1em] uppercase mb-7">
                  <XCircle size={12} />
                  Traditional Hourly Billing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-7">
                  Pay for time.
                  <br />
                  Hope something ships.
                </h3>
                <ul className="space-y-4">
                  {compBad.map((item) => (
                    <li
                      key={item.strong}
                      className="flex items-start gap-3 text-sm leading-relaxed"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-500/15 flex items-center justify-center shrink-0 mt-0.5">
                        <XCircle size={11} className="text-red-400" />
                      </div>
                      <span className="text-text-secondary/60">
                        <strong className="text-text-secondary font-semibold">
                          {item.strong}
                        </strong>{" "}
                        {item.rest}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ STORY POINTS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Transparent Pricing Model
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Every task has a score.
              <br />
              Every score has a price.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We break every project into story points — standardised units of
              deliverable work scored by complexity. No ambiguity. No padding.
              No surprises.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {storyPoints.map((sp, i) => {
              const colorMap: Record<string, { pts: string; complexity: string; border: string }> = {
                accent: { pts: "text-accent", complexity: "text-accent/60", border: "hover:border-accent/30" },
                blue: { pts: "text-blue-400", complexity: "text-blue-400/60", border: "hover:border-blue-500/30" },
                purple: { pts: "text-purple-400", complexity: "text-purple-400/60", border: "hover:border-purple-500/30" },
              };
              const c = colorMap[sp.color];
              return (
                <motion.div key={sp.pts} {...fade(i * 0.1)}>
                  <div
                    className={`rounded-2xl bg-card border border-white/[0.08] p-8 h-full ${c.border} hover:-translate-y-1 transition-all`}
                  >
                    <div className={`text-5xl font-bold tracking-tight leading-none mb-1 ${c.pts}`}>
                      {sp.pts}
                    </div>
                    <p className={`text-[11px] font-bold tracking-[0.1em] uppercase mb-5 ${c.complexity}`}>
                      {sp.complexity}
                    </p>
                    <h4 className="text-white font-bold text-[15px] mb-4 tracking-tight">
                      {sp.title}
                    </h4>
                    <ul className="space-y-2">
                      {sp.examples.map((ex) => (
                        <li
                          key={ex}
                          className="flex items-start gap-2 text-text-secondary text-[13px] leading-relaxed"
                        >
                          <ArrowRight
                            size={12}
                            className="text-accent shrink-0 mt-1"
                          />
                          {ex}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Note */}
          <motion.div {...fade(0.2)} className="mt-6">
            <div className="rounded-xl bg-accent/[0.06] border border-accent/15 p-5 flex items-start gap-3">
              <span className="text-accent text-lg shrink-0 mt-0.5">💡</span>
              <p className="text-accent/90 text-sm leading-relaxed">
                Tasks scored at{" "}
                <strong className="text-accent font-bold">
                  5 points or larger
                </strong>{" "}
                are always broken down into smaller sub-tasks before work begins
                — exposing hidden complexity and keeping your cost tracking
                accurate and granular throughout the project.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ WHY TEAMS CHOOSE US ═══ */}
      <section className="bg-card border-t border-b border-white/[0.06]">
        <div className="container-wide mx-auto section-padding">
          <motion.div {...fade()} className="max-w-xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Why Teams Choose AdmireTech
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Senior talent. No overhead.
              <br />
              Full velocity from day one.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden bg-white/[0.06]">
            {whyCards.map((card, i) => {
              const iconBg: Record<string, string> = {
                accent: "bg-accent/10",
                blue: "bg-blue-500/10",
                amber: "bg-amber-500/10",
                purple: "bg-purple-500/10",
              };
              const iconColor: Record<string, string> = {
                accent: "text-accent",
                blue: "text-blue-400",
                amber: "text-amber-400",
                purple: "text-purple-400",
              };
              return (
                <motion.div key={card.title} {...fade(i * 0.08)}>
                  <div className="bg-background p-7 h-full hover:bg-[#141414] transition-colors">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${iconBg[card.color]}`}
                    >
                      <card.icon
                        size={20}
                        className={iconColor[card.color]}
                      />
                    </div>
                    <h4 className="text-white font-bold text-[14px] mb-2.5 tracking-tight leading-tight">
                      {card.title}
                    </h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Client Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Real outcomes from real teams.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <motion.div key={t.name} {...fade(i * 0.1)}>
                <div className="rounded-2xl bg-card border border-white/[0.08] p-8 h-full hover:border-accent/20 hover:-translate-y-1 transition-all relative">
                  {/* Large quote mark */}
                  <div className="text-accent/10 text-6xl font-bold leading-none mb-4 font-serif">
                    &ldquo;
                  </div>
                  <p className="text-white/90 text-[15px] leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Stat */}
                  <div className="text-3xl font-bold text-accent tracking-tight leading-none mb-1">
                    {t.stat}
                  </div>
                  <p className="text-text-secondary/50 text-[11px] font-bold tracking-[0.08em] uppercase mb-5">
                    {t.statLabel}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-5 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-card border border-accent/20 flex items-center justify-center text-xs font-bold text-accent">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold">
                        {t.name}
                      </p>
                      <p className="text-text-secondary text-xs">{t.role}</p>
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
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                Common Questions
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Everything you need to know before starting.
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Still unsure? Book a free 30-minute call and we&apos;ll walk you
                through the outcome-based model in detail.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-bold text-sm rounded-lg hover:bg-accent-warm transition-colors">
                Book a Free Call
                <ArrowRight size={14} />
              </CalBookingButton>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RISK-FREE BAND ═══ */}
      <section className="relative overflow-hidden border-t border-b border-accent/15">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/[0.04] via-accent/[0.08] to-accent/[0.04]" />
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between flex-wrap gap-6 relative z-10">
          <div>
            <h3 className="text-xl font-bold text-white tracking-tight mb-1">
              7-Day Risk-Free Trial. Seriously.
            </h3>
            <p className="text-text-secondary text-sm">
              Start with us. If it&apos;s not right within the first week,{" "}
              <strong className="text-accent font-semibold">
                you pay absolutely nothing.
              </strong>
            </p>
          </div>
          <CalBookingButton className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-bold rounded-full hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20 shrink-0">
            Start Risk-Free
            <ArrowRight size={14} />
          </CalBookingButton>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <div className="rounded-3xl bg-gradient-to-br from-accent to-accent-warm p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.06] -top-72 left-1/2 -translate-x-1/2" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.04] bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

              <div className="relative z-10">
                <p className="text-white/70 text-xs font-bold tracking-widest uppercase mb-4">
                  Get Started Today
                </p>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Describe your project.
                  <br />
                  Get a free plan in 48 hours.
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Drop in what you need built — rough idea, feature list, or
                  full PRD. We&apos;ll break it into story points with effort
                  and cost estimates before you commit to anything.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Get Your Free Project Plan
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
                    7-day risk-free trial
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    Start in 24–48 hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} />
                    No long-term contracts
                  </span>
                  <span className="flex items-center gap-1.5">
                    <DollarSign size={12} />
                    Pay only on delivery
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
