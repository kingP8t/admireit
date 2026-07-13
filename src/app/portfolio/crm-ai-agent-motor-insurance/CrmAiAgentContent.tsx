"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  MapPin,
  Cog,
  Briefcase,
  Database,
  MessageCircle,
  FileText,
  BellRing,
  ClipboardList,
  CalendarClock,
  ShieldCheck,
  Sparkles,
  FlaskConical,
  ListChecks,
  GraduationCap,
  Gauge,
  RefreshCw,
  Timer,
  Search,
  Quote,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: Building2, label: "Industry: Motor insurance" },
  { icon: MapPin, label: "Region: Nigeria" },
  { icon: Cog, label: "Service: AI Business Automation" },
  { icon: Briefcase, label: "Engagement: CRM AI agent — design, build & rollout" },
];

const stats = [
  { value: "3", label: "Cities served (Lagos, Abuja, Port Harcourt)" },
  { value: "4", label: "Enquiry channels unified" },
  { value: "3", label: "Core workflows automated" },
  { value: "Human + AI", label: "Augmentation, not replacement" },
];

const challenges = [
  {
    title: "Slow enquiry-to-quote turnaround",
    description:
      "Enquiries arrived by email, phone, WhatsApp, and web forms, but converting them into structured CRM leads and quotes depended entirely on manual entry.",
  },
  {
    title: "Inconsistent renewals",
    description:
      "Renewal reminders lived in spreadsheets and calendar notes, leading to missed follow-ups, policy lapses, and avoidable churn.",
  },
  {
    title: "Heavy admin load on agents",
    description:
      "Frontline staff spent large parts of their day logging interactions and updating records instead of talking to customers.",
  },
];

const integrations = [
  { icon: Database, label: "Core CRM & policy admin (system of record)" },
  { icon: MessageCircle, label: "Email, phone, WhatsApp & web chat" },
  { icon: FileText, label: "Policy documents, scanned claim forms & accident reports" },
  { icon: BellRing, label: "Internal messaging tools for alerts & task notifications" },
];

const capabilities = [
  {
    icon: ClipboardList,
    title: "Lead & quote management",
    description:
      "The agent captures enquiries from every channel, extracts contact, vehicle, and product details, and creates structured leads with quote requests pre-filled — cutting the time from enquiry to quote.",
    variant: "primary" as const,
  },
  {
    icon: CalendarClock,
    title: "Renewal coordination",
    description:
      "Using policy expiry dates, the agent sends renewal reminders across channels and tracks responses. Routine no-change renewals progress automatically under defined rules; anything requiring advice becomes a task for a human agent.",
    variant: "dark" as const,
  },
  {
    icon: ShieldCheck,
    title: "Claims intake & triage",
    description:
      "Conversational flows guide customers and brokers through accident and vehicle details, populate claims records, and attach photos and documents. Straightforward claims are tagged for fast processing; complex or suspicious cases are flagged for human adjusters.",
    variant: "glass" as const,
  },
  {
    icon: Sparkles,
    title: "Agent assistance",
    description:
      "Before every call, human agents get a concise AI-generated summary of the customer: recent interactions, open tasks, renewal and claim status. Managers get daily and weekly dashboards of enquiry volume, renewal progress, and claims queues.",
    variant: "card" as const,
  },
];

const phases = [
  {
    num: 1,
    icon: FlaskConical,
    title: "Pilot",
    desc: "Renewals and new-business enquiries in one region first, keeping risk low and feedback loops fast.",
  },
  {
    num: 2,
    icon: ListChecks,
    title: "Guardrails",
    desc: "Clear rules for when the agent acts autonomously versus when it drafts for human review — protecting data quality and regulatory compliance.",
  },
  {
    num: 3,
    icon: GraduationCap,
    title: "Training",
    desc: "Staff learned to work with the agent through simple prompts, and to review outputs before finalising sensitive actions like claim decisions.",
  },
];

const results = [
  {
    icon: Timer,
    badge: "Response",
    metric: "Faster response times",
    desc: "Enquiries convert to quote-ready CRM records in a fraction of the previous time, with data capture fully automated.",
  },
  {
    icon: RefreshCw,
    badge: "Renewals",
    metric: "Improved renewal performance",
    desc: "A higher share of policies now receive timely reminders and follow-ups, reducing lapses and improving retention.",
  },
  {
    icon: Gauge,
    badge: "Efficiency",
    metric: "Reduced admin workload",
    desc: "Agents and back-office staff report significantly less time on manual logging and data entry.",
  },
  {
    icon: Search,
    badge: "Claims",
    metric: "Better claims triage",
    desc: "Claims teams receive more complete, structured information at intake, surfacing complex or potentially fraudulent cases earlier.",
  },
];

const headlineStats = [
  { value: "95%", label: "faster enquiry-to-quote turnaround" },
  { value: "50%", label: "fewer unintended policy lapses" },
  { value: "200 hrs/week", label: "of admin work removed across the team" },
];

const lessons = [
  {
    icon: Gauge,
    label: "Start with high-volume workflows",
    desc: "Begin with repeatable, high-volume work — enquiries and renewals — before expanding into claims and underwriting.",
    color: "bg-amber-500/10",
  },
  {
    icon: ListChecks,
    label: "Define human vs AI responsibility",
    desc: "Draw the line clearly. Trust, data quality, and compliance depend on it.",
    color: "bg-blue-500/10",
  },
  {
    icon: Sparkles,
    label: "Frame AI as augmentation",
    desc: "Not replacement. Training and honest communication drove adoption.",
    color: "bg-green-500/10",
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

export function CrmAiAgentContent() {
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
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                Case Study &middot; Insurance / AI Automation
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.08] tracking-tight max-w-4xl mb-6">
              Cutting admin work and speeding up customer response with a{" "}
              <span className="gradient-text">CRM AI agent</span>
            </h1>

            <p className="text-lg text-text-secondary max-w-2xl leading-relaxed mb-4">
              How AdmireTech helped a Nigerian motor insurer turn enquiries,
              renewals, and claims intake into structured, largely automated
              workflows &mdash; without replacing its human agents.
            </p>
            <p className="text-sm text-text-secondary/60 max-w-2xl leading-relaxed mb-10 italic">
              The client&apos;s name is withheld at their request to protect
              confidentiality.
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

      {/* ═══ THE CLIENT ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                The Client
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-6">
                A mid-sized Nigerian motor insurer
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                A general insurer focused on retail motor insurance across major
                Nigerian cities including Lagos, Abuja, and Port Harcourt. The
                company sells directly to consumers and through a broker network,
                managing tens of thousands of active motor policies.{" "}
                <span className="italic text-text-secondary/70">
                  (Client name withheld at their request.)
                </span>
              </p>
              <p className="text-text-secondary leading-relaxed">
                They had already invested in a modern CRM and policy
                administration system &mdash; but frontline teams still ran on
                manual data entry, spreadsheets, and calendar reminders.
              </p>
            </motion.div>

            <motion.div {...fade(0.15)}>
              <Card className="h-full">
                <h3 className="text-white font-bold text-sm mb-5">
                  At a glance
                </h3>
                <ul className="space-y-4">
                  {[
                    "Retail motor insurance, direct-to-consumer and broker network",
                    "Tens of thousands of active motor policies",
                    "Modern CRM and policy admin already in place",
                    "Frontline work still manual: data entry, spreadsheets, calendar reminders",
                  ].map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                    >
                      {/* Ringed-node marker */}
                      <span className="mt-1.5 w-2.5 h-2.5 rounded-full border-2 border-accent shrink-0" />
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

      {/* ═══ THE CHALLENGE ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              The Challenge
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4 max-w-2xl">
              Three problems were slowing the business down
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
              Leadership wanted AI to streamline these workflows &mdash;
              augmenting human agents, not replacing them.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {challenges.map((item, i) => (
              <motion.div key={item.title} {...fade(i * 0.1)}>
                <Card className="h-full">
                  <div className="text-accent text-3xl font-bold leading-none mb-4 opacity-40">
                    0{i + 1}
                  </div>
                  <h4 className="text-white font-bold text-[15px] mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DIVIDER ═══ */}
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* ═══ WHAT WE BUILT ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              What We Built
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-4 max-w-2xl">
              A CRM AI agent sitting on top of the insurer&apos;s existing
              systems
            </h2>
            <p className="text-text-secondary leading-relaxed max-w-2xl mb-10">
              AdmireTech designed and deployed a CRM AI agent that orchestrates
              work across sales, renewals, and service &mdash; on top of the
              insurer&apos;s existing CRM and policy systems.
            </p>
          </motion.div>

          {/* Integrations */}
          <motion.div {...fade(0.05)} className="mb-10">
            <h3 className="text-white font-bold text-sm mb-4">Integrations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {integrations.map((item) => (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-white/[0.04] border border-white/[0.08] rounded-xl p-4"
                >
                  <item.icon size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-text-secondary text-[13px] leading-relaxed">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Capabilities */}
          <motion.div {...fade(0.05)}>
            <h3 className="text-white font-bold text-sm mb-4">Capabilities</h3>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} {...fade(i * 0.1)}>
                <div
                  className={`rounded-2xl p-7 h-full transition-transform hover:-translate-y-1 ${
                    cap.variant === "primary"
                      ? "bg-accent text-white"
                      : cap.variant === "dark"
                      ? "bg-background text-white border border-white/5"
                      : cap.variant === "glass"
                      ? "bg-accent/[0.06] border border-accent/15 text-white"
                      : "bg-card border border-white/5 text-white"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${
                      cap.variant === "primary"
                        ? "bg-white/15"
                        : cap.variant === "dark"
                        ? "bg-white/[0.06]"
                        : "bg-accent/10"
                    }`}
                  >
                    <cap.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[15px] mb-2 leading-tight">
                    {cap.title}
                  </h4>
                  <p
                    className={`text-[13px] leading-relaxed ${
                      cap.variant === "primary" || cap.variant === "dark"
                        ? "text-white/65"
                        : "text-text-secondary"
                    }`}
                  >
                    {cap.description}
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

      {/* ═══ HOW WE ROLLED IT OUT ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              How We Rolled It Out
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12">
              A cautious, phased rollout
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, i) => (
              <motion.div key={phase.num} {...fade(i * 0.1)}>
                <div className="h-full rounded-2xl bg-card border border-white/5 p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold ${
                        i === 0
                          ? "bg-accent text-white"
                          : "bg-card border-2 border-accent text-accent"
                      }`}
                    >
                      {phase.num}
                    </div>
                    <phase.icon size={20} className="text-accent/70" />
                  </div>
                  <h5 className="text-white font-bold text-[15px] mb-2">
                    Phase {phase.num} &mdash; {phase.title}
                  </h5>
                  <p className="text-text-secondary text-[13px] leading-relaxed">
                    {phase.desc}
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
                Results &middot; First Six Months
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-3">
                Structured workflows, and time given back to people
              </h2>
              <p className="text-text-secondary/70 text-sm leading-relaxed max-w-2xl mb-10">
                The insurer concluded the CRM AI agent delivered a positive
                return on investment through operational efficiency and improved
                customer satisfaction in a competitive market.
              </p>

              {/* Headline figures */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pb-10 border-b border-white/5">
                {headlineStats.map((s, i) => (
                  <motion.div key={s.label} {...fade(i * 0.08)}>
                    <div className="text-4xl sm:text-5xl font-bold gradient-text leading-none mb-2">
                      {s.value}
                    </div>
                    <p className="text-text-secondary text-sm leading-relaxed max-w-[220px]">
                      {s.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {results.map((r, i) => (
                  <motion.div
                    key={r.badge}
                    {...fade(i * 0.08)}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                        <r.icon size={15} className="text-accent" />
                      </div>
                      <span className="text-[11px] font-bold tracking-wider uppercase text-accent">
                        {r.badge}
                      </span>
                    </div>
                    <div className="text-lg font-bold text-white leading-tight mb-2">
                      {r.metric}
                    </div>
                    <p className="text-text-secondary/60 text-xs leading-relaxed">
                      {r.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Pull quote */}
              <motion.div {...fade(0.2)} className="border-t border-white/5 pt-8">
                <Quote className="text-accent/40 mb-3" size={28} />
                <p className="text-white text-lg sm:text-xl leading-relaxed max-w-2xl mb-4">
                  &ldquo;The AI agent turned everyday interactions into
                  structured, manageable workflows &mdash; and gave our people
                  their time back.&rdquo;
                </p>
                <p className="text-text-secondary text-sm">
                  <span className="text-white font-semibold">Ngozi Eze</span>
                  {" · Product Owner"}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE LEARNED + CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* What we learned */}
            <motion.div {...fade()}>
              <Card className="h-full">
                <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                  What We Learned
                </p>
                <h3 className="text-lg font-bold text-white mb-6">
                  Trust and clarity drive adoption
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
                  <h3 className="text-2xl font-bold text-white leading-tight max-w-[300px] mb-3">
                    Have a workflow drowning in manual admin?
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed max-w-xs mb-8">
                    AdmireTech builds CRM AI agents, chatbots, and business
                    automation for companies across the UK, India, and Africa
                    &mdash; from pilot to full rollout.
                  </p>
                </div>
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-6 py-3 rounded-full w-fit hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Book a discovery call
                    <ArrowRight size={14} />
                  </CalBookingButton>
                  <Link
                    href="/services/ai-automation"
                    className="inline-flex items-center gap-1 text-white/90 hover:text-white font-semibold text-sm transition-colors"
                  >
                    See our AI services
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
