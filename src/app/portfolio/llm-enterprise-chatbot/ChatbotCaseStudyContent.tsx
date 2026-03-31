"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Brain,
  MessageCircle,
  BarChart3,
  Search,
  MonitorSmartphone,
  Ticket,
  Link2,
  Wrench,
  Bot,
  Send,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: Bot, label: "Generative AI \u00B7 LLM" },
  { icon: MonitorSmartphone, label: "Enterprise SaaS" },
  { icon: Ticket, label: "IT Helpdesk Automation" },
  { icon: Brain, label: "RAG Architecture" },
];

const stats = [
  { value: "60%", label: "Reduction in IT tickets" },
  { value: "24/7", label: "Autonomous resolution" },
  { value: "<3s", label: "Average response time" },
  { value: "92%", label: "Employee satisfaction" },
];

const requirementPoints = [
  "High ticket volume overwhelming support staff",
  "Long wait times degrading employee productivity",
  "Inconsistent answers from different support agents",
  "No integration with existing IT service management tools",
  "Support unavailable outside business hours",
];

const solutionPoints = [
  "RAG architecture grounded in verified internal documentation",
  "Native Microsoft Teams integration for seamless employee access",
  "Automatic ticket creation and ITSM system synchronisation",
  "Intelligent escalation with context summaries for human agents",
  "Continuous learning from resolved interactions",
];

const howItWorks = [
  {
    num: "01",
    title: "Query Intake",
    desc: "Employee types a question in Microsoft Teams or the web portal. The chatbot identifies intent using fine-tuned NLP classification.",
  },
  {
    num: "02",
    title: "Knowledge Retrieval",
    desc: "The RAG pipeline searches internal IT knowledge base, policy documents, and previous resolved tickets for relevant context.",
  },
  {
    num: "03",
    title: "Response Generation",
    desc: "The LLM generates a clear, step-by-step response grounded in retrieved documents \u2014 no hallucinations, no generic answers.",
  },
  {
    num: "04",
    title: "Resolution or Escalation",
    desc: "If resolved, the ticket is auto-closed. If not, an ITSM ticket is created and routed to the right agent with full context.",
  },
];

const features = [
  {
    icon: MonitorSmartphone,
    title: "User-Friendly Interface",
    desc: "Deployed directly in Microsoft Teams and as a web widget \u2014 where employees already work. No new tools to learn.",
  },
  {
    icon: Ticket,
    title: "Intelligent Ticket Creation",
    desc: "When an issue cannot be resolved autonomously, the chatbot auto-generates a structured ITSM ticket with full conversation context.",
  },
  {
    icon: Link2,
    title: "Microsoft Teams Integration",
    desc: "Fully embedded in the Teams environment, enabling collaborative troubleshooting and real-time IT admin monitoring.",
  },
  {
    icon: Search,
    title: "Contextual Knowledge Retrieval",
    desc: "Leveraging RAG, the chatbot retrieves contextually relevant information from verified internal sources \u2014 accurate, policy-aligned responses every time.",
  },
  {
    icon: Wrench,
    title: "Troubleshooting Capabilities",
    desc: "Walks employees through step-by-step solutions for common IT issues \u2014 VPN, software, hardware, and account access \u2014 using branched dialogue flows.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "IT managers access real-time insights on ticket categories, resolution rates, unhandled queries, and chatbot performance.",
  },
];

const outcomes = [
  {
    badge: "IT Workload",
    metric: "\u221260%",
    title: "Drop in Manual IT Support Tickets",
    desc: "The chatbot autonomously resolved the majority of incoming queries \u2014 password resets, access requests, software troubleshooting \u2014 eliminating the manual burden entirely for routine issues.",
    color: "green" as const,
  },
  {
    badge: "Query Resolution",
    metric: "<3s",
    title: "Instant, Accurate Answers at Scale",
    desc: "Employees receive consistent, policy-accurate responses in under 3 seconds \u2014 whether first query or hundredth. No more waiting in queue, no more inconsistent answers.",
    color: "orange" as const,
  },
  {
    badge: "Employee Experience",
    metric: "92%",
    title: "Employee Satisfaction Score",
    desc: "Efficient, always-available support transformed the employee service experience. 9 in 10 staff said it improved their daily productivity.",
    color: "green" as const,
  },
  {
    badge: "Availability",
    metric: "24/7",
    title: "Coverage Across All Time Zones",
    desc: "The chatbot operates continuously \u2014 delivering the same quality at 3am on Sunday as 9am Monday. Global teams finally had equal access to instant IT support.",
    color: "orange" as const,
  },
];

const techStack = [
  { label: "Frontend", items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript", "Bootstrap"] },
  { label: "Backend", items: ["FastAPI", "LangChain", "JavaScript", "Microsoft APIs"] },
  { label: "AI / LLM", items: ["GPT-4o", "RAG Pipeline", "Azure OpenAI", "Vector Embeddings", "Semantic Search"] },
  { label: "Cloud", items: ["AWS", "GCP", "Azure", "Google API Gateway"] },
  { label: "Storage", items: ["Google Cloud Storage", "Pinecone (Vector DB)", "Redis Cache"] },
  { label: "Auth", items: ["Azure AD / SSO", "OAuth 2.0", "MFA"] },
  { label: "Database", items: ["MongoDB", "PostgreSQL"] },
];

/* Chat demo messages */
const chatMessages = [
  { role: "user" as const, text: "How do I reset my VPN credentials?" },
  {
    role: "bot" as const,
    text: "Sure! Navigate to IT Portal \u2192 Account Settings \u2192 Reset VPN. You\u2019ll receive a confirmation email within 2 minutes.",
  },
  {
    role: "bot" as const,
    text: "I\u2019ve also logged ticket #INC-4821 for your records. Your IT team has been notified automatically.",
  },
  { role: "user" as const, text: "Can you check my software licence status?" },
  {
    role: "bot" as const,
    text: "\u2705 Your licences are active: Microsoft 365 (Dec 2025), Adobe CC (Mar 2026). No action needed.",
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

export function ChatbotCaseStudyContent() {
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left — copy */}
            <motion.div {...fade()}>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  Case Study &middot; AI &amp; Automation
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                An Advanced{" "}
                <span className="gradient-text">LLM-Powered</span>
                <br />
                Enterprise Chatbot
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-10">
                AdmireTech developed a production-grade LLM chatbot for a
                leading cloud solutions company &mdash; eliminating manual IT
                support queues, enabling instant query resolution, and
                transforming internal helpdesk operations at scale.
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

            {/* Right — chat preview widget */}
            <motion.div {...fade(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-accent/5">
                {/* Topbar */}
                <div className="bg-accent px-5 py-3.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white text-xs font-semibold ml-1">
                    AdmireTech AI Assistant
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-400 ml-auto animate-pulse" />
                </div>

                {/* Chat body */}
                <div className="bg-card p-5 flex flex-col gap-3 min-h-[280px]">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.35, duration: 0.4 }}
                      className={`max-w-[82%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-accent text-white self-end rounded-br-sm"
                          : "bg-white/[0.06] border border-white/[0.08] text-text-secondary self-start rounded-bl-sm"
                      }`}
                    >
                      {msg.role === "bot" && (
                        <div className="text-[10px] font-bold tracking-wider uppercase text-accent/60 mb-1">
                          AdmireTech AI
                        </div>
                      )}
                      {msg.text}
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-background border-t border-white/[0.06] px-4 py-3 flex items-center gap-3">
                  <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full h-9 flex items-center px-4 text-xs text-text-secondary/50">
                    Ask a question&hellip;
                  </div>
                  <div className="w-9 h-9 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Send size={14} className="text-white" />
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

      {/* ═══ REQUIREMENT + SOLUTION ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/5">
            {/* Requirement pane */}
            <motion.div {...fade()} className="bg-card p-8 sm:p-10">
              <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
                The Requirement
              </p>
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-tight mb-4">
                A struggling IT support operation that couldn&apos;t scale
              </h2>
              <p className="text-text-secondary text-sm leading-relaxed mb-2">
                Our client &mdash; a leading provider of multi-cloud solutions
                &mdash; faced a critical challenge: their internal IT support
                desk was overwhelmed. Employees submitted repetitive tickets
                for password resets, software access, VPN issues, and system
                troubleshooting.
              </p>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                The support team was spending the majority of their time on
                low-complexity, high-frequency queries &mdash; leaving no
                capacity for complex infrastructure work.
              </p>
              <ul className="space-y-3">
                {requirementPoints.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed"
                  >
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
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
                  An LLM-powered assistant built on AdmireTech&apos;s AI
                  framework
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-2">
                  AdmireTech designed and deployed a production-grade LLM
                  chatbot that integrates natively with the client&apos;s IT
                  knowledge base, ticketing system, and Microsoft Teams
                  environment.
                </p>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  Using Retrieval-Augmented Generation (RAG), the chatbot
                  retrieves contextually accurate answers from internal
                  documentation &mdash; not generic internet data.
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

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12">
              From employee query to resolved ticket &mdash; in seconds
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {howItWorks.map((step, i) => (
              <motion.div key={step.num} {...fade(i * 0.1)}>
                <div className="rounded-2xl bg-card border border-white/5 p-6 h-full hover:border-accent/20 transition-all group">
                  <span className="block text-[42px] font-bold text-white/[0.06] leading-none mb-4 group-hover:text-accent/20 transition-colors">
                    {step.num}
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
              Features
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Everything the enterprise IT team needed &mdash; and more
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

      {/* ═══ OUTCOMES ═══ */}
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
                The Outcome
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
                Measurable impact from day one of deployment
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {outcomes.map((o, i) => (
                  <motion.div
                    key={o.badge}
                    {...fade(i * 0.08)}
                    className="bg-white/[0.04] border border-white/[0.06] rounded-2xl p-6 hover:bg-white/[0.07] transition-colors"
                  >
                    <span
                      className={`inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3 ${
                        o.color === "green"
                          ? "bg-green-500/15 text-green-400"
                          : "bg-accent/15 text-accent"
                      }`}
                    >
                      {o.color === "green" ? "\u2191" : "\u2192"} {o.badge}
                    </span>
                    <div className="text-2xl font-bold text-white leading-none mb-2">
                      {o.metric}
                    </div>
                    <h4 className="text-white text-sm font-semibold mb-2">
                      {o.title}
                    </h4>
                    <p className="text-text-secondary/60 text-xs leading-relaxed">
                      {o.desc}
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

      {/* ═══ PRODUCT MOCKUP ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto text-center">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Final Product
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-12 max-w-lg mx-auto">
              A production-grade AI assistant, live in the enterprise
            </h2>
          </motion.div>

          <motion.div {...fade(0.15)}>
            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
              {/* Window bar */}
              <div className="bg-background px-5 py-3 flex items-center gap-2 border-b border-white/[0.06]">
                <span className="w-3 h-3 rounded-full bg-red-500/60" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
                <span className="w-3 h-3 rounded-full bg-green-500/60" />
                <span className="ml-3 px-4 py-1 rounded-md bg-white/[0.04] text-[11px] text-text-secondary/40 font-mono">
                  app.admiretech.ai/helpdesk
                </span>
              </div>

              {/* App body */}
              <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                {/* Sidebar */}
                <div className="hidden sm:block bg-background border-r border-white/[0.06] p-5">
                  <div className="text-white font-bold text-sm mb-6">
                    admire<span className="text-accent">.</span>ai
                  </div>
                  <div className="space-y-1">
                    {[
                      { icon: MessageCircle, label: "IT Assistant", active: true },
                      { icon: Ticket, label: "My Tickets", active: false },
                      { icon: Search, label: "Knowledge Base", active: false },
                      { icon: BarChart3, label: "Analytics", active: false },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs ${
                          item.active
                            ? "bg-accent/15 text-accent"
                            : "text-text-secondary/40"
                        }`}
                      >
                        <item.icon size={14} />
                        {item.label}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main panel */}
                <div className="bg-card p-6">
                  <div className="mb-1 text-white font-bold text-sm">
                    IT Support Assistant
                  </div>
                  <div className="text-[11px] text-text-secondary/40 mb-5">
                    Powered by AdmireTech &middot; 847 queries resolved today
                  </div>

                  <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-5 flex flex-col gap-3 min-h-[200px] mb-4 text-left">
                    <div className="max-w-[75%] bg-accent text-white self-end rounded-xl rounded-br-sm px-4 py-2.5 text-[12px] leading-relaxed">
                      My laptop won&apos;t connect to the company VPN after the
                      update.
                    </div>
                    <div className="max-w-[75%] bg-white/[0.06] text-text-secondary self-start rounded-xl rounded-bl-sm px-4 py-2.5 text-[12px] leading-relaxed">
                      I can help with that. This is a known issue after the
                      recent security patch. 1) Open Network Settings &rarr;
                      VPN &rarr; Delete existing profile. 2) Download updated
                      client from IT Portal. 3) Re-enter your credentials.
                    </div>
                    <div className="max-w-[75%] bg-accent text-white self-end rounded-xl rounded-br-sm px-4 py-2.5 text-[12px] leading-relaxed">
                      That worked! Thank you.
                    </div>
                    <div className="max-w-[75%] bg-white/[0.06] text-text-secondary self-start rounded-xl rounded-bl-sm px-4 py-2.5 text-[12px] leading-relaxed">
                      Great! I&apos;ve marked ticket #INC-5503 as resolved and
                      updated the knowledge base.
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-lg h-9 flex items-center px-4 text-[11px] text-text-secondary/30">
                      Ask the IT Assistant&hellip;
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center shrink-0">
                      <Send size={12} className="text-white" />
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

      {/* ═══ TECH STACK ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()}>
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Tech Stack
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight mb-10">
              Built on a modern, scalable AI architecture
            </h2>
          </motion.div>

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
                  Ready to automate your enterprise support operations?
                </h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-md mx-auto mb-8">
                  AdmireTech builds production-grade AI products that solve
                  real business problems &mdash; not demos that never ship.
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
