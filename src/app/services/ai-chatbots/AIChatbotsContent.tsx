"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  Zap,
  BarChart3,
  Users,
  Clock,
  CheckCircle,
  Shield,
  Globe,
  Headphones,
  ShoppingCart,
  Building2,
  GraduationCap,
  Heart,
  ChevronDown,
  Send,
  Star,
  TrendingUp,
  DollarSign,
  Sparkles,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "60%", label: "Reduction in support tickets" },
  { value: "<3s", label: "Average response time" },
  { value: "24/7", label: "Always-on availability" },
  { value: "92%", label: "Customer satisfaction" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Customers Wait, Competitors Win",
    desc: "Every minute a lead waits for a response, conversion probability drops by 10%. Your support team can't keep up, and prospects are going to competitors who respond instantly.",
  },
  {
    icon: DollarSign,
    title: "Support Costs Are Spiralling",
    desc: "Hiring, training, and managing support agents is expensive. Staff turnover makes it worse. You're spending more every quarter but customer satisfaction stays flat.",
  },
  {
    icon: Globe,
    title: "You Can't Be Everywhere at Once",
    desc: "Customers reach out on WhatsApp, your website, email, Instagram, and Slack. Your team juggles 5 platforms and still drops conversations.",
  },
  {
    icon: TrendingUp,
    title: "Scaling Means Scaling Headcount",
    desc: "Every 20% increase in customers requires another hire. Your support cost grows linearly while revenue doesn't always follow.",
  },
];

const capabilities = [
  {
    icon: MessageCircle,
    title: "Natural Language Understanding",
    desc: "Powered by the latest LLMs, our chatbots understand context, intent, and nuance — not just keywords. They handle complex, multi-turn conversations the way a senior agent would.",
    color: "accent",
  },
  {
    icon: Globe,
    title: "Multi-Channel Deployment",
    desc: "One chatbot, every channel. Deploy simultaneously on your website, WhatsApp, Instagram, Facebook Messenger, Slack, Microsoft Teams, and more — with unified conversation history.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    desc: "Real-time insights into customer queries, resolution rates, sentiment trends, and conversion metrics. Know exactly what your customers are asking and where your bot excels.",
    color: "emerald",
  },
  {
    icon: Users,
    title: "Intelligent Human Handoff",
    desc: "When conversations require a human touch, the bot seamlessly transfers to your team with full context — no customer repeating themselves, no lost information.",
    color: "amber",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    desc: "SOC 2 compliant architecture. End-to-end encryption. Role-based access controls. Your customer data stays private and protected, always.",
    color: "purple",
  },
  {
    icon: Sparkles,
    title: "Self-Learning & Improving",
    desc: "Our bots get smarter with every conversation. Continuous learning from resolved interactions, feedback loops, and knowledge base updates — without manual retraining.",
    color: "pink",
  },
];

const howItWorks = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We audit your current support workflows, map customer journeys, and identify the highest-impact automation opportunities. You get a clear AI chatbot strategy in 5 business days.",
  },
  {
    num: "02",
    title: "Build & Train",
    desc: "Our engineers build your custom chatbot using your knowledge base, FAQs, product docs, and past support tickets. The bot learns YOUR language, YOUR tone, YOUR policies.",
  },
  {
    num: "03",
    title: "Deploy & Integrate",
    desc: "We deploy across all your channels and integrate with your CRM, helpdesk (Zendesk, Freshdesk, Intercom), and internal tools. Zero disruption to existing workflows.",
  },
  {
    num: "04",
    title: "Optimise & Scale",
    desc: "Post-launch, we monitor performance, refine responses, expand capabilities, and scale as your business grows. Monthly reports show exactly how much time and money you're saving.",
  },
];

const useCases = [
  {
    icon: Headphones,
    title: "Customer Support",
    desc: "Resolve 60-80% of incoming queries instantly. Handle FAQs, order status, account issues, troubleshooting, and returns — without human intervention.",
    stat: "60% ticket reduction",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: ShoppingCart,
    title: "Sales & Lead Generation",
    desc: "Qualify leads 24/7, book demos, recommend products, and guide prospects through your funnel. Never miss a lead because it came in at 2am.",
    stat: "3x more qualified leads",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Building2,
    title: "Internal Operations",
    desc: "IT helpdesks, HR onboarding, policy lookups, knowledge base search. Give employees instant answers instead of waiting for tickets to be resolved.",
    stat: "92% employee satisfaction",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: GraduationCap,
    title: "Education & Onboarding",
    desc: "Guide new users through product features, walk customers through onboarding steps, and deliver interactive training — all through natural conversation.",
    stat: "40% faster onboarding",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: Heart,
    title: "Healthcare & Wellness",
    desc: "Appointment scheduling, symptom pre-screening, medication reminders, and patient FAQs. HIPAA-compliant and designed for sensitive conversations.",
    stat: "50% fewer missed appointments",
    color: "bg-pink-500/10 text-pink-400",
  },
  {
    icon: DollarSign,
    title: "Financial Services",
    desc: "Account inquiries, loan applications, KYC verification, and transaction support. Regulatory-compliant AI for banks, fintechs, and insurance companies.",
    stat: "2-hour loan approvals",
    color: "bg-purple-500/10 text-purple-400",
  },
];

const testimonials = [
  {
    quote:
      "The chatbot AdmireTech built resolved 60% of our IT support tickets from day one. Response time went from hours to under 3 seconds. Our employees love it.",
    name: "VP of Technology",
    company: "Cloud Solutions Provider",
    stat: "60% ticket reduction",
    caseStudySlug: "llm-enterprise-chatbot",
  },
  {
    quote:
      "We went from losing leads after hours to qualifying them 24/7. The WhatsApp bot handles initial conversations so well that most prospects don't realise it's AI until we tell them.",
    name: "Head of Digital",
    company: "National Microfinance Bank",
    stat: "50% inquiries automated",
    caseStudySlug: "mfb-ai-transformation",
  },
];

const faqs = [
  {
    q: "How long does it take to build and deploy a custom AI chatbot?",
    a: "Most projects go live in 4-6 weeks. Simple FAQ bots can launch in as little as 2 weeks. Complex enterprise chatbots with deep integrations typically take 6-8 weeks. We always start with a pilot so you see results fast.",
  },
  {
    q: "Will the chatbot sound robotic or generic?",
    a: "No. We train every chatbot on YOUR content, YOUR brand voice, and YOUR customer data. The bot speaks your language — literally. We fine-tune tone, vocabulary, and response style to match your brand perfectly.",
  },
  {
    q: "What happens when the bot can't answer a question?",
    a: "Intelligent escalation. The bot detects when it's out of its depth and seamlessly hands off to a human agent — with full conversation context. No customer has to repeat themselves. You set the escalation rules.",
  },
  {
    q: "Can it integrate with our existing tools (CRM, helpdesk, etc.)?",
    a: "Yes. We integrate with Zendesk, Freshdesk, Intercom, HubSpot, Salesforce, Slack, Microsoft Teams, WhatsApp Business API, and custom APIs. If your tool has an API, we can connect it.",
  },
  {
    q: "How much does an AI chatbot cost?",
    a: "Pricing depends on complexity, channels, and volume. Most projects start between $3,000-$8,000 for initial build, with ongoing optimisation plans available. Book a free consultation and we'll give you a transparent quote within 48 hours.",
  },
  {
    q: "Is my customer data safe?",
    a: "Absolutely. We build with enterprise-grade security: end-to-end encryption, SOC 2 compliant infrastructure, role-based access, and data residency options. Your data never trains third-party models without explicit consent.",
  },
];

const comparisonRows = [
  { feature: "Response time", us: "Under 3 seconds", them: "2-24 hours" },
  { feature: "Availability", us: "24/7/365", them: "Business hours only" },
  { feature: "Cost per interaction", us: "$0.05-0.15", them: "$5-12 per ticket" },
  { feature: "Consistency", us: "100% consistent", them: "Agent-dependent" },
  { feature: "Scale capacity", us: "Unlimited concurrent", them: "1 agent = 3-5 chats" },
  { feature: "Languages", us: "50+ languages", them: "Hire per language" },
];

/* ── Chat demo messages ──────────────────────────── */
const chatMessages = [
  { role: "user" as const, text: "Hi, I'm interested in your enterprise plan. What's included?" },
  {
    role: "bot" as const,
    text: "Great question! Our Enterprise plan includes unlimited seats, priority support, custom integrations, and a dedicated account manager. Would you like me to schedule a demo with our team?",
  },
  { role: "user" as const, text: "Yes please, I'm free Thursday afternoon" },
  {
    role: "bot" as const,
    text: "Perfect! I've booked you for Thursday at 2pm with Sarah, our Enterprise Solutions lead. You'll receive a calendar invite at your email shortly. Anything else I can help with?",
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

export function AIChatbotsContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-accent-warm/5 rounded-full blur-3xl" />
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
                <Bot size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  AI Chatbot Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                AI Chatbots That{" "}
                <span className="gradient-text">Convert, Support</span>
                <br />
                &amp; Scale 24/7
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
                Stop losing leads after hours. Stop drowning in support tickets.
                AdmireTech builds custom AI chatbots that handle customer support,
                lead generation, and internal operations &mdash; so your team can
                focus on what actually grows revenue.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CalBookingButton className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                  Get Your Free AI Chatbot Strategy
                  <ArrowRight size={16} />
                </CalBookingButton>
                <Link
                  href="/portfolio/llm-enterprise-chatbot"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                >
                  See It in Action
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
                      {["A", "M", "J", "S", "K"][i]}
                    </div>
                  ))}
                </div>
                <span>
                  Trusted by companies across{" "}
                  <span className="text-white font-medium">London, Lagos &amp; Pune</span>
                </span>
              </div>
            </motion.div>

            {/* Right — interactive chat widget */}
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
                    AdmireTech AI Sales Assistant
                  </span>
                  <span className="w-2 h-2 rounded-full bg-green-400 ml-auto animate-pulse" />
                </div>

                {/* Chat body */}
                <div className="bg-card p-5 flex flex-col gap-3 min-h-[300px]">
                  {chatMessages.map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.4, duration: 0.4 }}
                      className={`max-w-[82%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                        msg.role === "user"
                          ? "bg-accent text-white self-end rounded-br-sm"
                          : "bg-white/[0.06] border border-white/[0.08] text-text-secondary self-start rounded-bl-sm"
                      }`}
                    >
                      {msg.role === "bot" && (
                        <div className="text-[10px] font-bold tracking-wider uppercase text-accent/60 mb-1">
                          AI Assistant
                        </div>
                      )}
                      {msg.text}
                    </motion.div>
                  ))}
                </div>

                {/* Input bar */}
                <div className="bg-background border-t border-white/[0.06] px-4 py-3 flex items-center gap-3">
                  <div className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full h-9 flex items-center px-4 text-xs text-text-secondary/50">
                    Type your message&hellip;
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
              Your customer support is costing you more than you think
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every missed message is a missed opportunity. Every slow response
              pushes a customer toward a competitor. Here&apos;s what we see in
              companies before they deploy AI chatbots.
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
                What if your best customer support agent never slept, never
                called in sick, and could handle 1,000 conversations at once?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                That&apos;s what AdmireTech builds. Custom AI chatbots trained on
                YOUR data, deployed on YOUR channels, and designed to solve YOUR
                specific business problems &mdash; not generic templates.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5">
                See How It Works for Your Business
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
              Capabilities
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Not another template bot. A production-grade AI assistant.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every chatbot we build is engineered for performance, security, and
              genuine business impact.
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
                    <p className="text-text-secondary text-[13px] leading-relaxed">
                      {cap.desc}
                    </p>
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
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From kickoff to live chatbot in 4&ndash;6 weeks
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Our battle-tested process has delivered production-grade AI chatbots
              for enterprises across 3 continents. Here&apos;s exactly how it works.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((step, i) => (
                <motion.div key={step.num} {...fade(i * 0.1)} className="relative z-10">
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
              Why AI Chatbots Win
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              AI chatbot vs. traditional support
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-card">
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50">
                  Metric
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-accent text-center">
                  AdmireTech AI
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50 text-center">
                  Traditional
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

      {/* ═══ USE CASES ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              One platform, endless applications
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Our chatbots aren&apos;t one-size-fits-all. Each is custom-built for
              your industry, your customers, and your specific workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              Real results from real companies
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
                        <CheckCircle size={14} className="text-green-400" />
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
                Still have questions? Book a free 30-minute strategy call and
                we&apos;ll walk you through everything.
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
                  <Zap size={14} className="text-white" />
                  <span className="text-white/80 text-xs font-semibold">
                    Free Strategy Session &middot; No Commitment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Ready to deploy an AI chatbot that actually delivers ROI?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Book a free 30-minute strategy call. We&apos;ll audit your
                  current support operation, identify automation opportunities,
                  and give you a clear roadmap &mdash; whether you work with us
                  or not.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Get Your Free AI Chatbot Strategy
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
