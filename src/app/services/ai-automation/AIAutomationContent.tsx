"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Zap,
  CheckCircle,
  Clock,
  Shield,
  ChevronDown,
  Star,
  TrendingUp,
  FileText,
  Mail,
  GitBranch,
  Workflow,
  BarChart3,
  AlertTriangle,
  Repeat,
  DollarSign,
  Users,
  BadgeCheck,
  BrainCircuit,
  ScanLine,
  Bot,
  Database,
  Plug,
  Timer,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "20hrs", label: "Saved per employee per week" },
  { value: "85%", label: "Reduction in manual processing" },
  { value: "3x", label: "Faster operational throughput" },
  { value: "<1%", label: "Error rate on automated tasks" },
];

const painPoints = [
  {
    icon: Repeat,
    title: "Your Team Is Stuck on Repetitive Work",
    desc: "Talented people spending 60% of their day copying data between systems, formatting reports, and processing documents. They were hired to think, not to copy-paste. Morale is dropping and so is retention.",
  },
  {
    icon: AlertTriangle,
    title: "Manual Errors Are Costing You Money",
    desc: "A typo in an invoice. A missed follow-up email. A compliance form filed to the wrong folder. Human errors cost businesses 20-25% of total revenue. And they compound silently until they become crises.",
  },
  {
    icon: DollarSign,
    title: "Scaling Means Scaling Headcount",
    desc: "Every 2x in volume requires 2x in back-office staff. Your operational costs grow linearly while margins stay flat. You can't compete with companies that automated these processes years ago.",
  },
  {
    icon: Clock,
    title: "Your Systems Don't Talk to Each Other",
    desc: "Data lives in spreadsheets, CRMs, email inboxes, and legacy databases — none of them connected. Your team is the integration layer, manually moving information between tools that should talk to each other.",
  },
];

const capabilities = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "End-to-end automation of multi-step business processes. From lead intake to customer onboarding, invoice processing to compliance reporting — we design and build workflows that run themselves.",
    examples: [
      "Lead qualification & routing",
      "Employee onboarding flows",
      "Approval chains & escalations",
      "Cross-system data sync",
    ],
    color: "accent",
  },
  {
    icon: FileText,
    title: "Document Processing",
    desc: "AI-powered document extraction, classification, and processing. We turn unstructured documents — invoices, contracts, forms, IDs — into structured data that feeds your systems automatically.",
    examples: [
      "Invoice & receipt parsing",
      "Contract data extraction",
      "KYC document verification",
      "Automated form filling",
    ],
    color: "blue",
  },
  {
    icon: Mail,
    title: "Email Automation",
    desc: "Intelligent email processing that goes beyond simple auto-replies. AI reads, classifies, routes, and drafts responses for your inbox — handling the 80% so your team focuses on the 20% that needs a human.",
    examples: [
      "Email classification & routing",
      "AI-drafted responses",
      "Follow-up sequences",
      "Attachment processing",
    ],
    color: "emerald",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    desc: "Connect the tools your business depends on. We build custom integrations between CRMs, ERPs, accounting software, databases, and APIs — creating a unified data layer that eliminates manual bridging.",
    examples: [
      "CRM ↔ ERP sync",
      "Payment gateway hooks",
      "Legacy system bridges",
      "Custom API connectors",
    ],
    color: "amber",
  },
  {
    icon: BrainCircuit,
    title: "Intelligent Decision Engines",
    desc: "AI that doesn't just move data — it makes decisions. Credit scoring, fraud detection, risk assessment, and demand forecasting powered by ML models trained on your historical data.",
    examples: [
      "Credit risk scoring",
      "Fraud detection alerts",
      "Demand forecasting",
      "Dynamic pricing rules",
    ],
    color: "purple",
  },
  {
    icon: ScanLine,
    title: "Data Entry & Extraction",
    desc: "Eliminate manual data entry forever. Our AI reads handwritten forms, scans documents, extracts tables from PDFs, and populates your systems with 99%+ accuracy — at thousands of documents per hour.",
    examples: [
      "OCR & handwriting recognition",
      "PDF table extraction",
      "Image-to-data conversion",
      "Database population",
    ],
    color: "pink",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Audit & Map",
    desc: "We shadow your team for a week, mapping every manual process, data flow, and bottleneck. You get a prioritised automation opportunity map with ROI estimates for each workflow.",
    duration: "Week 1-2",
  },
  {
    num: "02",
    title: "Design & Architect",
    desc: "We design automation architecture that integrates with your existing tools — not replaces them. Every workflow is diagrammed, approved by your team, and tested against edge cases before build begins.",
    duration: "Week 2-3",
  },
  {
    num: "03",
    title: "Build & Test",
    desc: "Rapid development with daily testing against real data. We run automations in parallel with manual processes first — so you can verify accuracy before going fully automated. Zero risk to live operations.",
    duration: "Week 3-6",
  },
  {
    num: "04",
    title: "Deploy & Optimise",
    desc: "Go live with monitoring dashboards, error handling, and alerting. We track performance metrics, refine accuracy, and expand automation coverage. Monthly reports show exactly how much time and money you're saving.",
    duration: "Week 6+",
  },
];

const comparisonRows = [
  { feature: "Processing speed", us: "Thousands per hour", them: "20-30 per hour" },
  { feature: "Error rate", us: "<1%", them: "5-15%" },
  { feature: "Availability", us: "24/7/365", them: "Business hours" },
  { feature: "Cost per transaction", us: "$0.01-0.10", them: "$2-8 per task" },
  { feature: "Scaling capacity", us: "Instant, unlimited", them: "Hire → Train → Ramp" },
  { feature: "Audit trail", us: "Complete, automatic", them: "Inconsistent logs" },
];

const useCases = [
  {
    icon: BarChart3,
    title: "Finance & Accounting",
    desc: "Invoice processing, expense reconciliation, financial reporting, and compliance document management — fully automated with human oversight where regulations require it.",
    stat: "85% faster month-end close",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Users,
    title: "HR & Operations",
    desc: "Employee onboarding, leave management, payroll processing, and performance review workflows. Reduce HR admin overhead and let your people team focus on people.",
    stat: "70% reduction in admin time",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Bot,
    title: "Customer Operations",
    desc: "Order processing, returns management, ticket routing, and SLA tracking. Automate the back-office so your customer-facing team can focus on relationships, not paperwork.",
    stat: "60% faster order fulfilment",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Database,
    title: "Data Management",
    desc: "Data cleaning, deduplication, migration, enrichment, and reporting. Turn messy, siloed data into a clean, unified source of truth that updates automatically.",
    stat: "99.5% data accuracy",
    color: "bg-purple-500/10 text-purple-400",
  },
];

const testimonials = [
  {
    quote:
      "AdmireTech automated our entire loan processing pipeline — from application intake to KYC verification to credit scoring. What used to take 3 days now takes 2 hours. The accuracy improvement alone paid for the project in 2 months.",
    name: "Head of Digital",
    company: "EasyBuy VIP Loan Platform",
    stat: "95% reduction in processing time",
    caseStudySlug: "easybuy-vip-loan",
  },
  {
    quote:
      "We had 8 people doing nothing but moving data between spreadsheets and our ERP. AdmireTech built automations that handle 90% of that work. Those 8 people now do work that actually grows the business.",
    name: "Operations Director",
    company: "Warehouse Management Client",
    stat: "90% of data entry automated",
    caseStudySlug: "warehouse-management-pwa",
  },
];

const faqs = [
  {
    q: "What processes are best suited for AI automation?",
    a: "The highest-impact automations are repetitive, rule-based tasks with clear inputs and outputs — data entry, document processing, email handling, report generation, and cross-system data transfers. But with AI, we can also automate judgment-based tasks like classification, prioritisation, and even decision-making with human oversight.",
  },
  {
    q: "Will this replace our existing tools?",
    a: "No. We build automation ON TOP of your existing tools — not instead of them. We integrate with your CRM, ERP, email, accounting software, databases, and custom systems via APIs. The goal is to make your current stack work together seamlessly, not to add another platform to manage.",
  },
  {
    q: "How long until we see ROI?",
    a: "Most clients see measurable time savings within 2-3 weeks of deployment. Full ROI (cost of project recovered through savings) typically happens within 2-4 months. We track savings from day one and provide monthly reports showing hours saved, errors eliminated, and cost reductions.",
  },
  {
    q: "What happens when the automation encounters something unexpected?",
    a: "Every automation we build includes exception handling, fallback rules, and human escalation paths. If the AI encounters data it can't process confidently, it flags it for human review rather than guessing. You get alerts, dashboards, and audit trails for full visibility.",
  },
  {
    q: "Is our data secure?",
    a: "Absolutely. All automations run in your infrastructure or dedicated cloud environments. We follow enterprise security practices: encryption at rest and in transit, role-based access, audit logging, and compliance with GDPR, SOC 2, and industry-specific regulations. Your data never leaves your control.",
  },
  {
    q: "How much does AI automation cost?",
    a: "Starter automations (single workflow, 2-3 integrations) typically range from $5,000-$15,000. Comprehensive automation programs (multiple workflows, document processing, custom AI) range from $20,000-$60,000. Every project starts with a scoped estimate. Book a free consultation for a transparent quote in 48 hours.",
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

export function AIAutomationContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-amber-500/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-500/8 rounded-full blur-3xl" />
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
                <Zap size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  AI Automation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                Stop Doing Work{" "}
                <span className="gradient-text">a Machine Should Do.</span>
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
                Your team spends 60% of their time on tasks that AI can handle
                in seconds. AdmireTech builds intelligent automation that
                eliminates manual work, cuts errors to near-zero, and frees your
                people to focus on what actually grows the business.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CalBookingButton className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                  Get a Free Automation Audit
                  <ArrowRight size={16} />
                </CalBookingButton>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                >
                  See Automation Results
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
                      {["E", "W", "M", "F", "L"][i]}
                    </div>
                  ))}
                </div>
                <span>
                  Automating operations across{" "}
                  <span className="text-white font-medium">
                    London, Lagos &amp; Pune
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right — automation flow visual */}
            <motion.div {...fade(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/5">
                {/* Topbar */}
                <div className="bg-gradient-to-r from-accent to-accent-warm px-5 py-3.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white text-xs font-semibold ml-1">
                    Automation Pipeline — Live
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-400 ml-auto animate-pulse" />
                </div>

                {/* Flow body */}
                <div className="bg-card p-5 space-y-3 min-h-[320px]">
                  {[
                    {
                      step: "Trigger",
                      label: "New invoice received via email",
                      icon: Mail,
                      status: "complete",
                      time: "0.1s",
                    },
                    {
                      step: "Extract",
                      label: "AI reads invoice → vendor, amount, date, line items",
                      icon: ScanLine,
                      status: "complete",
                      time: "1.2s",
                    },
                    {
                      step: "Validate",
                      label: "Cross-check against PO database & approval rules",
                      icon: Shield,
                      status: "complete",
                      time: "0.8s",
                    },
                    {
                      step: "Route",
                      label: "Auto-approve (<$5K) or escalate to finance manager",
                      icon: GitBranch,
                      status: "complete",
                      time: "0.3s",
                    },
                    {
                      step: "Post",
                      label: "Create entry in ERP + update payment schedule",
                      icon: Database,
                      status: "processing",
                      time: "1.5s",
                    },
                    {
                      step: "Notify",
                      label: "Send confirmation to vendor & internal Slack",
                      icon: Zap,
                      status: "queued",
                      time: "—",
                    },
                  ].map((item, i) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06]"
                    >
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${
                          item.status === "complete"
                            ? "bg-green-500/15"
                            : item.status === "processing"
                              ? "bg-accent/15"
                              : "bg-white/[0.04]"
                        }`}
                      >
                        <item.icon
                          size={14}
                          className={
                            item.status === "complete"
                              ? "text-green-400"
                              : item.status === "processing"
                                ? "text-accent"
                                : "text-text-secondary/40"
                          }
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] font-bold tracking-wider uppercase text-text-secondary/40">
                            {item.step}
                          </span>
                          {item.status === "complete" && (
                            <CheckCircle size={10} className="text-green-400" />
                          )}
                          {item.status === "processing" && (
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full bg-accent"
                              animate={{ opacity: [1, 0.3] }}
                              transition={{ repeat: Infinity, duration: 0.8 }}
                            />
                          )}
                        </div>
                        <p className="text-[11px] text-text-secondary truncate">
                          {item.label}
                        </p>
                      </div>
                      <span className="text-[10px] text-text-secondary/30 font-mono shrink-0">
                        {item.time}
                      </span>
                    </motion.div>
                  ))}

                  {/* Total time */}
                  <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                    <span className="text-[10px] text-text-secondary/40 uppercase tracking-wider font-bold">
                      Total pipeline time
                    </span>
                    <span className="text-sm font-bold text-accent">3.9s</span>
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
              Manual processes are bleeding your business dry
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The average knowledge worker spends 60% of their time on tasks
              that could be automated. That&apos;s not productivity &mdash;
              that&apos;s waste.
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
                What if every repetitive task in your business ran itself
                &mdash; faster, cheaper, and with zero errors?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                AdmireTech builds intelligent automation systems that handle your
                most time-consuming operational work. Not simple macros &mdash;
                AI-powered pipelines that read documents, make decisions, move
                data, and learn from exceptions.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5">
                See What We Can Automate For You
                <ArrowRight size={16} />
              </CalBookingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              What We Automate
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Six automation capabilities. One goal: eliminate manual work.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every automation is custom-built for your specific workflows, your
              tools, and your data — not a generic template.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capabilities.map((cap, i) => {
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
                <motion.div key={cap.title} {...fade(i * 0.08)}>
                  <div
                    className={`rounded-2xl bg-card border border-white/5 p-7 h-full ${borderMap[cap.color]} hover:-translate-y-1 transition-all`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${colorMap[cap.color]}`}
                    >
                      <cap.icon size={20} />
                    </div>
                    <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                      {cap.title}
                    </h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                      {cap.desc}
                    </p>
                    <div className="space-y-1.5">
                      {cap.examples.map((ex) => (
                        <div
                          key={ex}
                          className="flex items-center gap-2 text-[12px] text-text-secondary"
                        >
                          <CheckCircle
                            size={12}
                            className="text-accent shrink-0"
                          />
                          {ex}
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
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From manual chaos to automated operations in 6 weeks
            </h2>
            <p className="text-text-secondary leading-relaxed">
              We don&apos;t automate blindly. Every workflow is mapped, tested,
              and validated before going live.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div key={step.num} {...fade(i * 0.1)} className="relative z-10">
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
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Why Automate
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              AI automation vs. manual processing
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="grid grid-cols-3 bg-card">
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50">
                  Metric
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-accent text-center">
                  AI Automation
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50 text-center">
                  Manual Process
                </div>
              </div>
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

      {/* ═══ USE CASES ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Automation across every department
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every automation is built for your specific tools, workflows, and
              data &mdash; not generic templates.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {useCases.map((uc, i) => (
              <motion.div key={uc.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${uc.color}`}
                  >
                    <uc.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {uc.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                    {uc.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                    <TrendingUp size={10} />
                    {uc.stat}
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
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Client Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Automation that pays for itself in weeks
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
                    <div className="flex gap-1 mb-4">
                      {[0, 1, 2, 3, 4].map((s) => (
                        <Star key={s} size={14} className="text-accent fill-accent" />
                      ))}
                    </div>
                    <p className="text-white text-[15px] leading-relaxed mb-6 italic">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-semibold text-sm">{t.name}</p>
                        <p className="text-text-secondary text-xs">{t.company}</p>
                      </div>
                      <Link
                        href={`/portfolio/${t.caseStudySlug}`}
                        className="inline-flex items-center gap-1 text-accent text-xs font-semibold hover:text-accent-warm transition-colors group"
                      >
                        Read Case Study
                        <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                    <div className="mt-5 pt-5 border-t border-white/5">
                      <span className="inline-flex items-center gap-2 text-sm">
                        <BadgeCheck size={14} className="text-green-400" />
                        <span className="text-white font-semibold">{t.stat}</span>
                        <span className="text-text-secondary text-xs">achieved</span>
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
            <motion.div {...fade()}>
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                FAQ
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Questions we get asked every week
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                Still have questions? Book a free 30-minute automation audit and
                we&apos;ll walk you through everything.
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

      {/* ═══ FINAL CTA ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <div className="rounded-3xl bg-gradient-to-br from-accent to-accent-warm p-10 sm:p-16 text-center relative overflow-hidden">
              <div className="absolute w-[600px] h-[600px] rounded-full bg-white/[0.06] -top-72 left-1/2 -translate-x-1/2" />
              <div className="absolute w-[300px] h-[300px] rounded-full bg-white/[0.04] bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                  <Timer size={14} className="text-white" />
                  <span className="text-white/80 text-xs font-semibold">
                    Free Automation Audit &middot; No Commitment
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Ready to stop doing work a machine should do?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Book a free 30-minute automation audit. We&apos;ll map your
                  biggest manual bottlenecks, estimate hours saved, and give you
                  a clear plan &mdash; whether you work with us or not.
                </p>
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Get Your Free Automation Audit
                    <ArrowRight size={14} />
                  </CalBookingButton>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/20 transition-colors"
                  >
                    Send Us a Message
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6 justify-center text-white/50 text-xs">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle size={12} />
                    No obligation
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    30-min audit call
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} />
                    Enterprise-grade security
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
