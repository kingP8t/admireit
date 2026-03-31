"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  Target,
  TrendingUp,
  Database,
  Users,
  ShieldCheck,
  Rocket,
  XCircle,
  CheckCircle,
  Brain,
  Bot,
  Zap,
  BarChart3,
  Lightbulb,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const whyNow = [
  {
    icon: TrendingUp,
    title: "Competitors Are Moving",
    description: "72% of enterprises have AI in production. Waiting means falling behind on efficiency, customer experience, and speed to market.",
  },
  {
    icon: Database,
    title: "Data Is Your Moat",
    description: "Every month you delay, competitors collect more training data and refine their models. The data advantage compounds over time.",
  },
  {
    icon: BarChart3,
    title: "AI Costs Are Dropping",
    description: "Inference costs have fallen 90% since 2023. Cloud-based AI services make enterprise-grade capabilities accessible to businesses of any size.",
  },
  {
    icon: ShieldCheck,
    title: "Regulation Is Here",
    description: "The EU AI Act, UK sector rules, and emerging frameworks in Africa require governance. A strategy ensures compliance from day one.",
  },
];

const roadmapSteps = [
  {
    phase: "Phase 1",
    title: "Assess & Align",
    duration: "Weeks 1\u20132",
    color: "bg-blue-400",
    tasks: [
      "Audit existing data assets and infrastructure",
      "Interview stakeholders to map business pain points",
      "Benchmark current processes against AI-ready alternatives",
      "Define strategic objectives tied to revenue, cost, or experience",
    ],
  },
  {
    phase: "Phase 2",
    title: "Identify & Prioritise",
    duration: "Weeks 3\u20134",
    color: "bg-emerald-400",
    tasks: [
      "Map all potential AI use cases across departments",
      "Score each by impact, feasibility, and data readiness",
      "Select 2\u20133 high-impact quick wins for Phase 1 deployment",
      "Build a business case with projected ROI for each",
    ],
  },
  {
    phase: "Phase 3",
    title: "Architect & Govern",
    duration: "Weeks 5\u20136",
    color: "bg-amber-400",
    tasks: [
      "Design the data pipeline and infrastructure blueprint",
      "Define the AI governance and ethics framework",
      "Plan talent needs \u2014 hire, upskill, or partner",
      "Set KPIs, success metrics, and review cadence",
    ],
  },
  {
    phase: "Phase 4",
    title: "Build & Scale",
    duration: "Weeks 7+",
    color: "bg-accent",
    tasks: [
      "Launch quick-win AI projects with measurable targets",
      "Iterate based on real performance data",
      "Expand to secondary use cases as confidence grows",
      "Embed AI capability as an ongoing organisational muscle",
    ],
  },
];

const mistakes = [
  {
    icon: XCircle,
    mistake: "Starting with technology, not problems",
    fix: "Always begin with a business problem worth solving, then find the AI solution that fits.",
  },
  {
    icon: XCircle,
    mistake: "Underestimating data quality needs",
    fix: "Budget 40\u201360% of your AI project time for data cleaning, labelling, and pipeline work.",
  },
  {
    icon: XCircle,
    mistake: "Skipping strategy, jumping to pilots",
    fix: "Pilots without strategy create one-off tools that never scale. Strategy first, always.",
  },
  {
    icon: XCircle,
    mistake: "No executive buy-in or cross-team alignment",
    fix: "AI touches every function. Secure C-suite sponsorship and involve stakeholders early.",
  },
  {
    icon: XCircle,
    mistake: "Treating AI as a one-off project",
    fix: "AI is an ongoing capability, not a feature launch. Build for continuous improvement.",
  },
];

const useCasesBySize = [
  {
    size: "Startups",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    cases: ["AI chatbot for customer support", "Automated email and lead scoring", "AI-assisted content generation"],
  },
  {
    size: "SMEs",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    cases: ["Document processing automation", "Predictive inventory management", "Customer churn prediction"],
  },
  {
    size: "Enterprises",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    cases: ["Enterprise-wide knowledge search (RAG)", "AI-powered fraud detection", "Predictive maintenance for operations"],
  },
];

const faqs = [
  {
    q: "What is an AI strategy and why do I need one?",
    a: "An AI strategy is a structured plan defining how your business will adopt, deploy, and scale AI to achieve specific goals. Without one, you get wasted budgets, tool sprawl, and pilots that never reach production. A clear strategy aligns AI investments with business outcomes and creates a roadmap for data, talent, and governance.",
  },
  {
    q: "How much does it cost to develop an AI strategy?",
    a: "A focused strategy workshop typically ranges from \u00a35,000\u2013\u00a325,000 and delivers a prioritised roadmap in 2\u20134 weeks. A comprehensive enterprise strategy covering multiple units, data architecture, and governance ranges from \u00a325,000\u2013\u00a3100,000 over 2\u20133 months. The investment pays for itself by preventing costly missteps.",
  },
  {
    q: "What should an AI strategy include?",
    a: "A practical AI strategy includes: a vision tying AI to business goals, a data and tech readiness audit, prioritised use cases ranked by impact and feasibility, a data infrastructure plan, a talent assessment, a governance and ethics framework, a phased implementation roadmap, and defined KPIs for measuring ROI.",
  },
  {
    q: "Can small businesses benefit from an AI strategy?",
    a: "Absolutely. Small businesses often benefit most because they move faster. A small e-commerce brand can deploy AI chatbots, a logistics company can optimise routes, and a services firm can automate document processing. Start with one high-impact use case \u2014 cloud AI tools make entry costs much lower than even two years ago.",
  },
  {
    q: "What are the biggest mistakes businesses make with AI adoption?",
    a: "The top five: starting with technology instead of business problems, underestimating data quality needs, skipping strategy to jump to pilots, failing to get executive buy-in, and treating AI as a one-off project. A solid strategy addresses all five before any code is written.",
  },
];

export function AIStrategyContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="pt-20">
      {/* Back link */}
      <div className="container-wide mx-auto px-6 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors text-sm"
        >
          <ArrowLeft size={16} />
          Back to Blog
        </Link>
      </div>

      {/* Article Header */}
      <motion.header
        {...fade()}
        className="container-wide mx-auto px-6 pt-8 pb-12 max-w-4xl"
      >
        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
            <Tag size={12} />
            Business Strategy
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            5 March 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Why Every Business Needs an AI Strategy in 2026
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img src="/images/team/peter-king.webp" alt="Peter King" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 5 March 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          From startups to enterprises, an AI strategy is no longer optional.
          Here is how to build one that delivers real results &mdash; not just
          impressive demos.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Intro */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Problem with &ldquo;Just Try AI&rdquo;
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most businesses approach AI the same way: a team discovers a shiny
            new tool, runs a proof of concept, gets excited by the demo, and
            then&hellip; nothing. The pilot never reaches production. The budget
            gets questioned. Leadership loses confidence. Sound familiar?
          </p>
          <p className="text-text-secondary leading-relaxed">
            The issue is not the technology &mdash; it is the absence of
            strategy. Without a clear plan connecting AI initiatives to business
            outcomes, every project is an expensive experiment. An AI strategy
            transforms scattered experiments into a coherent capability that
            compounds over time.
          </p>
        </motion.section>

        {/* Why Now */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Lightbulb size={22} className="inline mr-2 text-accent" />
            Why 2026 Is the Inflection Point
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyNow.map((item) => (
              <div
                key={item.title}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Roadmap */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Target size={22} className="inline mr-2 text-accent" />
            The 4-Phase AI Strategy Roadmap
          </h2>
          <div className="space-y-4">
            {roadmapSteps.map((step) => (
              <motion.div
                key={step.phase}
                {...fade()}
                className="bg-card border border-white/5 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${step.color}`} />
                  <h3 className="text-white font-bold">
                    {step.phase}: {step.title}
                  </h3>
                  <span className="ml-auto text-text-secondary text-xs bg-white/[0.04] px-3 py-1 rounded-full">
                    {step.duration}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {step.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <CheckCircle
                        size={14}
                        className="text-accent shrink-0 mt-0.5"
                      />
                      {task}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use Cases by Company Size */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Rocket size={22} className="inline mr-2 text-accent" />
            Quick-Win Use Cases by Company Size
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {useCasesBySize.map((group) => (
              <div
                key={group.size}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <h3
                  className={`${group.color} font-bold text-sm mb-3 flex items-center gap-2`}
                >
                  <span
                    className={`w-7 h-7 rounded-lg ${group.bg} flex items-center justify-center`}
                  >
                    <Users size={14} className={group.color} />
                  </span>
                  {group.size}
                </h3>
                <ul className="space-y-2">
                  {group.cases.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-text-secondary text-xs"
                    >
                      <span className="w-1 h-1 rounded-full bg-text-secondary mt-1.5 shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Common Mistakes */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            5 Mistakes That Kill AI Initiatives
          </h2>
          <div className="space-y-3">
            {mistakes.map((item) => (
              <div
                key={item.mistake}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-4"
              >
                <item.icon
                  size={18}
                  className="text-red-400 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-white font-medium text-sm mb-1">
                    {item.mistake}
                  </p>
                  <p className="text-text-secondary text-xs leading-relaxed flex items-start gap-2">
                    <CheckCircle
                      size={12}
                      className="text-emerald-400 shrink-0 mt-0.5"
                    />
                    {item.fix}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* The AdmireTech Approach */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Strategy Without Execution Is Just a Slide Deck
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The best AI strategy is one that ships. At AdmireTech, we do not
            just hand you a roadmap and walk away. We help you execute &mdash;
            building the AI solutions, integrating them into your workflows, and
            measuring the results against the KPIs we defined together.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Whether you are a 10-person startup in Lagos exploring your first
            chatbot, or a 500-person enterprise in London planning a
            company-wide AI transformation, the principles are the same: start
            with the problem, prove value fast, and scale what works.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Your AI Strategy?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Book a free 30-minute call. We will assess where you are today,
            identify your highest-impact AI opportunities, and outline a
            practical path forward.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free Strategy Call
            <Calendar size={18} />
          </CalBookingButton>
        </motion.div>
      </article>

      {/* FAQ Section */}
      <section className="container-wide mx-auto px-6 max-w-4xl pb-20">
        <motion.h2
          {...fade()}
          className="text-2xl sm:text-3xl font-bold text-white mb-8"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              {...fade(i * 0.05)}
              className="bg-card border border-white/5 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
              >
                <span className="text-white font-medium text-sm sm:text-base">
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-text-secondary shrink-0 transition-transform duration-300 ${
                    openFaq === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openFaq === i ? "auto" : 0,
                  opacity: openFaq === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Related Services */}
        <motion.div {...fade()} className="mt-12 pt-8 border-t border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">Explore Our AI Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Brain size={16} />
              AI Consulting Service
            </Link>
            <Link
              href="/services/ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI Automation Service
            </Link>
            <Link
              href="/blog/ai-ethics-business"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Bot size={16} />
              The Ethics of AI in Business
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
