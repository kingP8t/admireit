"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  MessageSquare,
  FileText,
  Mail,
  TrendingUp,
  PiggyBank,
  Rocket,
  Zap,
  BarChart3,
  ShoppingCart,
  Wrench,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const stats = [
  { value: "20hrs", label: "Average weekly time saved per team" },
  { value: "45%", label: "Cost reduction on automated tasks" },
  { value: "3\u00d7", label: "Faster response to customer queries" },
  { value: "2\u20134mo", label: "Typical time to ROI" },
];

const automationAreas = [
  {
    icon: MessageSquare,
    title: "Customer Support",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    before: "Staff manually answer repetitive questions via email, phone, and chat. Response times measured in hours.",
    after: "AI chatbot handles 70\u201385% of queries instantly, 24/7. Humans focus on complex cases with full context.",
    savings: "\u00a31,500\u2013\u00a34,000/month in support costs",
  },
  {
    icon: FileText,
    title: "Invoice & Document Processing",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    before: "Manual data entry from invoices, receipts, and contracts into spreadsheets or accounting software.",
    after: "AI extracts data automatically, validates against rules, and feeds directly into your accounting system.",
    savings: "10\u201315 hours/week of admin time eliminated",
  },
  {
    icon: Mail,
    title: "Email Management",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    before: "Team spends 2+ hours daily reading, sorting, and responding to emails. Important messages get buried.",
    after: "AI sorts, prioritises, drafts replies, and flags urgent items. You review and send with one click.",
    savings: "8\u201312 hours/week reclaimed per person",
  },
  {
    icon: TrendingUp,
    title: "Lead Qualification & Follow-Up",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    before: "Sales team manually reviews every enquiry, wasting time on unqualified leads.",
    after: "AI scores leads by intent and fit, sends personalised follow-ups, and books calls for hot prospects.",
    savings: "35% increase in qualified pipeline",
  },
  {
    icon: ShoppingCart,
    title: "Inventory & Order Management",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    before: "Stock counts done manually. Over-ordering ties up cash; under-ordering loses sales.",
    after: "AI predicts demand, auto-triggers reorders at optimal levels, and flags anomalies before they become problems.",
    savings: "20\u201330% reduction in carrying costs",
  },
  {
    icon: BarChart3,
    title: "Reporting & Analytics",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    before: "Hours spent pulling data from different tools, building spreadsheets, and creating weekly reports.",
    after: "AI auto-generates dashboards and insights from your connected tools. Ask questions in plain English.",
    savings: "5\u20138 hours/week on reporting tasks",
  },
];

const implementationSteps = [
  {
    step: "1",
    title: "Audit Your Time Drains",
    description: "List every repetitive task your team does weekly. Estimate the hours spent on each. The biggest time sinks are your best automation candidates.",
  },
  {
    step: "2",
    title: "Pick One High-Impact Process",
    description: "Choose the task with the highest time cost and clearest pattern. Customer support and invoice processing are the most common starting points.",
  },
  {
    step: "3",
    title: "Choose Build vs Buy",
    description: "Off-the-shelf tools work for common tasks. Custom solutions make sense when your workflow is unique or needs deep integration with existing systems.",
  },
  {
    step: "4",
    title: "Start Small, Measure Everything",
    description: "Deploy to a subset of your workflow first. Track time saved, error rates, and customer satisfaction. Use real data to justify scaling up.",
  },
  {
    step: "5",
    title: "Expand to the Next Process",
    description: "Once your first automation proves ROI, apply the same approach to the next time drain. Each new automation compounds your efficiency gains.",
  },
];

const costComparison = [
  { task: "Customer Support Chatbot", diy: "\u00a330\u2013\u00a3200/mo", custom: "\u00a32,000\u2013\u00a38,000 build", roi: "2\u20133 months" },
  { task: "Invoice Processing", diy: "\u00a350\u2013\u00a3150/mo", custom: "\u00a33,000\u2013\u00a310,000 build", roi: "2\u20134 months" },
  { task: "Email Automation", diy: "\u00a320\u2013\u00a3100/mo", custom: "\u00a31,500\u2013\u00a35,000 build", roi: "1\u20132 months" },
  { task: "Lead Scoring", diy: "\u00a350\u2013\u00a3300/mo", custom: "\u00a34,000\u2013\u00a312,000 build", roi: "3\u20134 months" },
  { task: "Inventory Forecasting", diy: "\u00a3100\u2013\u00a3400/mo", custom: "\u00a35,000\u2013\u00a315,000 build", roi: "3\u20136 months" },
];

const faqs = [
  {
    q: "What is AI automation for small businesses?",
    a: "AI automation uses artificial intelligence to handle repetitive, time-consuming tasks \u2014 responding to customer enquiries, extracting invoice data, sorting emails, qualifying leads, and generating reports. Unlike rigid rule-based automation, AI understands context, learns from patterns, and handles exceptions intelligently.",
  },
  {
    q: "How much does AI automation cost for a small business?",
    a: "Off-the-shelf AI tools start from \u00a330\u2013\u00a3200/month. Custom automations for your specific workflows typically cost \u00a32,000\u2013\u00a315,000 for the initial build plus monthly maintenance. Most small businesses start with one affordable tool and expand as they see ROI, which typically arrives within 2\u20134 months.",
  },
  {
    q: "What are the best AI automation tools for small businesses in 2026?",
    a: "It depends on your needs: AI chatbot platforms for customer support, document extraction tools for invoices, AI email assistants for inbox management, content tools for marketing, and workflow platforms for connecting your existing tools with AI-powered logic. The key is choosing tools that integrate with your current stack.",
  },
  {
    q: "Where should a small business start with AI automation?",
    a: "Start with the task that eats the most time and follows a repeatable pattern. For most, this is customer support (chatbot), invoice processing (document extraction), or email management (AI sorting). Automate one process well, measure savings, then expand. Avoid trying to automate everything at once.",
  },
  {
    q: "Do I need technical skills to implement AI automation?",
    a: "Many modern AI tools have drag-and-drop interfaces and pre-built templates for non-technical users. You can set up a basic chatbot or email automation without code. For custom automations integrating deeply with your CRM, accounting, or inventory systems, partnering with an implementation specialist ensures reliable results.",
  },
];

export function AIAutomationSBContent() {
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
            Automation
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            10 March 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            7 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          The Complete Guide to AI Automation for Small Businesses
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <Image src="/images/team/peter-king.webp" alt="Peter King" width={40} height={40} className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 10 March 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          A practical guide to implementing AI automation without breaking the
          bank. Save 20+ hours a week, cut costs by 45%, and scale operations
          &mdash; starting with a single process.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Intro */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Small Team, Big Workload &mdash; Sound Familiar?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Running a small business means wearing multiple hats. You are the
            CEO, the support team, the sales force, and the bookkeeper &mdash;
            sometimes all before lunch. Every hour spent on repetitive admin is
            an hour not spent on growth, strategy, or the work that actually
            moves the needle.
          </p>
          <p className="text-text-secondary leading-relaxed">
            AI automation is not about replacing your team. It is about
            giving everyone back 20+ hours a week by handling the tasks that
            do not need a human brain &mdash; sorting emails, answering the same
            questions, chasing invoices, pulling reports. The best part? You
            do not need a six-figure budget or an engineering team to get
            started.
          </p>
        </motion.section>

        {/* Stats */}
        <motion.div
          {...fade()}
          className="mb-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card border border-white/5 rounded-xl p-5 text-center"
            >
              <div className="text-2xl sm:text-3xl font-bold text-accent mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* 6 Automation Areas */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Zap size={22} className="inline mr-2 text-accent" />
            6 Areas Where AI Saves Small Businesses the Most Time
          </h2>
          <div className="space-y-4">
            {automationAreas.map((area) => (
              <motion.div
                key={area.title}
                {...fade()}
                className="bg-card border border-white/5 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-10 h-10 rounded-lg ${area.bg} flex items-center justify-center shrink-0`}
                  >
                    <area.icon size={20} className={area.color} />
                  </div>
                  <h3 className="text-white font-bold">{area.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                  <div className="bg-white/[0.02] rounded-lg p-3">
                    <span className="text-red-400 text-[10px] font-bold tracking-wider block mb-1">
                      BEFORE AI
                    </span>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {area.before}
                    </p>
                  </div>
                  <div className="bg-white/[0.02] rounded-lg p-3">
                    <span className="text-emerald-400 text-[10px] font-bold tracking-wider block mb-1">
                      AFTER AI
                    </span>
                    <p className="text-text-secondary text-xs leading-relaxed">
                      {area.after}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <PiggyBank size={14} className="text-accent shrink-0" />
                  <span className="text-accent text-xs font-medium">
                    {area.savings}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Cost Comparison Table */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Wrench size={22} className="inline mr-2 text-accent" />
            What Does It Actually Cost?
          </h2>
          <div className="bg-card border border-white/5 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[1fr_100px_120px_90px] sm:grid-cols-[1fr_130px_150px_110px] bg-white/[0.04] text-xs text-text-secondary font-medium p-3 border-b border-white/5">
              <span>Automation</span>
              <span>DIY Tools</span>
              <span>Custom Build</span>
              <span>Time to ROI</span>
            </div>
            {costComparison.map((row, idx) => (
              <div
                key={row.task}
                className={`grid grid-cols-[1fr_100px_120px_90px] sm:grid-cols-[1fr_130px_150px_110px] p-3 text-xs border-b border-white/5 last:border-0 ${
                  idx % 2 === 0 ? "bg-white/[0.02]" : ""
                }`}
              >
                <span className="text-white font-medium">{row.task}</span>
                <span className="text-text-secondary">{row.diy}</span>
                <span className="text-text-secondary">{row.custom}</span>
                <span className="text-accent font-medium">{row.roi}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Implementation Steps */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Rocket size={22} className="inline mr-2 text-accent" />
            How to Get Started in 5 Steps
          </h2>
          <div className="space-y-3">
            {implementationSteps.map((item) => (
              <div
                key={item.step}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-4"
              >
                <span className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm font-bold flex items-center justify-center shrink-0">
                  {item.step}
                </span>
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

        {/* Build vs Buy */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Build vs Buy: Which Route Is Right for You?
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Off-the-shelf AI tools are perfect for standard workflows &mdash;
            customer support chatbots, email sorting, basic document extraction.
            They are fast to deploy, low cost, and require minimal technical
            knowledge.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Custom-built automation makes sense when your process is unique,
            involves multiple integrated systems, or needs to handle edge cases
            specific to your industry. At AdmireTech, we often start clients on
            off-the-shelf tools for quick wins, then build custom solutions for
            the processes where generic tools fall short. The hybrid approach
            maximises ROI while keeping upfront costs manageable.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Automate Your First Process?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Book a free 30-minute call. We will identify your biggest time drains
            and recommend the fastest path to automation &mdash; whether that is
            an off-the-shelf tool or a custom build.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free Automation Audit
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
              href="/services/ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI Automation Service
            </Link>
            <Link
              href="/services/outcome-based-development"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <TrendingUp size={16} />
              Outcome Based Development
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
