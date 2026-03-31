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
  Bot,
  Zap,
  Users,
  BarChart3,
  MessageSquare,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const faqs = [
  {
    q: "How much does an AI chatbot cost for customer support?",
    a: "AI chatbot costs vary based on complexity. Basic rule-based bots start from a few hundred pounds per month, while custom AI-powered solutions with NLP, integrations, and analytics typically range from \u00a32,000\u2013\u00a310,000 for the initial build plus a monthly maintenance fee. Most businesses see ROI within 3\u20136 months through reduced support costs.",
  },
  {
    q: "Can AI chatbots handle complex customer queries?",
    a: "Modern AI chatbots powered by large language models can handle nuanced, multi-turn conversations with high accuracy. They understand context, sentiment, and intent. For truly complex or sensitive issues, smart chatbots seamlessly hand off to human agents with full conversation history \u2014 so customers never repeat themselves.",
  },
  {
    q: "How long does it take to deploy an AI chatbot?",
    a: "A basic AI chatbot can be deployed in 2\u20134 weeks. A fully custom solution with CRM integrations, multi-channel deployment, analytics dashboards, and trained on your knowledge base typically takes 6\u201312 weeks. At AdmireTech, we follow a phased rollout so you start seeing value from week one.",
  },
  {
    q: "Will an AI chatbot replace my customer support team?",
    a: "AI chatbots augment your team \u2014 they don\u2019t replace it. They handle repetitive tier-1 queries (order status, FAQs, password resets), freeing your human agents for complex issues requiring empathy and creative problem-solving. Most companies see agent satisfaction increase after chatbot deployment.",
  },
  {
    q: "What channels can AI chatbots be deployed on?",
    a: "AI chatbots deploy across your website, WhatsApp, Facebook Messenger, Instagram DMs, Slack, Microsoft Teams, SMS, and mobile apps. The best approach is an omnichannel strategy where conversations sync seamlessly across all platforms for a consistent customer experience.",
  },
];

const stats = [
  { value: "60%", label: "Average cost reduction" },
  { value: "24/7", label: "Always-on availability" },
  { value: "<2s", label: "Average response time" },
  { value: "85%", label: "Queries resolved without human" },
];

const industries = [
  { icon: MessageSquare, name: "E-Commerce & Retail", desc: "Order tracking, returns, product recommendations" },
  { icon: BarChart3, name: "Financial Services", desc: "Account queries, fraud alerts, onboarding" },
  { icon: Users, name: "Healthcare", desc: "Appointment scheduling, symptom triage, patient FAQs" },
  { icon: Zap, name: "SaaS & Technology", desc: "Technical support, onboarding, feature guidance" },
  { icon: Bot, name: "Travel & Hospitality", desc: "Booking changes, local recommendations, concierge" },
];

export function AIChatbotsCSBlogContent() {
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
      <motion.header {...fade()} className="container-wide mx-auto px-6 pt-8 pb-12 max-w-4xl">
        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-text-secondary">
          <span className="inline-flex items-center gap-1 bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
            <Tag size={12} />
            AI Chatbots
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            15 March 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            5 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          How AI Chatbots Are Revolutionising Customer Support in 2026
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img src="/images/team/peter-king.webp" alt="Peter King" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 15 March 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          Your customers expect instant answers. AI chatbots deliver them around the clock
          while slashing support costs by up to 60%. Here is everything you need to know.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Section 1 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Traditional Customer Support Is Failing
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Long hold times. Inconsistent answers. Limited hours. Traditional support
            models were built for a different era. Today, customers interact with brands
            across websites, WhatsApp, social media, and mobile apps &mdash; often outside
            business hours. When a customer waits more than a minute for a response,
            satisfaction plummets and churn accelerates.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Scaling a human-only team to match this demand is expensive and slow. That is
            why forward-thinking businesses from London to Lagos are turning to AI-powered
            chatbots as the backbone of their support strategy.
          </p>
        </motion.section>

        {/* Section 2 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What Modern AI Chatbots Actually Do
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Forget the clunky, scripted bots of the past. In 2026, AI chatbots are powered by
            large language models (LLMs) that understand natural language, detect sentiment,
            and hold context across multi-turn conversations.
          </p>
          <ul className="space-y-3 text-text-secondary">
            {[
              "Answer FAQs instantly by drawing from your knowledge base",
              "Process orders, returns, and bookings end-to-end",
              "Route complex issues to the right human agent with full context",
              "Analyse conversations to surface trends and pain points",
              "Operate 24/7 across every channel your customers use",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </motion.section>

        {/* Stats Callout */}
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
              <div className="text-xs sm:text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Section 3 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Business Impact: Numbers That Matter
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            AI chatbots are not just a tech upgrade &mdash; they move the needle on revenue
            and retention. Businesses that deploy conversational AI typically see a 60% reduction
            in first-response costs, a 35% lift in customer satisfaction scores, and up to 3x
            more queries handled without adding headcount.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The always-on nature of chatbots also means you never lose a lead outside office
            hours. For e-commerce brands, that after-hours coverage alone can drive a measurable
            uplift in conversions.
          </p>
        </motion.section>

        {/* Section 4 — Industries */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Five Industries Benefiting Most
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {industries.map((ind) => (
              <div
                key={ind.name}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <ind.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">{ind.name}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{ind.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Section 5 — Getting Started */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            How to Get Started with AI Chatbots
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Implementing an AI chatbot does not require a six-month IT project. Here is a
            practical roadmap:
          </p>
          <ol className="space-y-3 text-text-secondary list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">Audit your support data</span> &mdash;
              Identify the top queries eating up agent time.
            </li>
            <li>
              <span className="font-semibold text-white">Define success metrics</span> &mdash;
              Choose KPIs such as first-response time, resolution rate, and CSAT.
            </li>
            <li>
              <span className="font-semibold text-white">Start small, scale fast</span> &mdash;
              Launch with FAQs and order tracking, then expand to complex workflows.
            </li>
            <li>
              <span className="font-semibold text-white">Integrate with your stack</span> &mdash;
              Connect to your CRM, help desk, and e-commerce platform for seamless data flow.
            </li>
            <li>
              <span className="font-semibold text-white">Measure and iterate</span> &mdash;
              Use analytics to continuously improve bot accuracy and coverage.
            </li>
          </ol>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Transform Your Customer Support?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Book a free 30-minute strategy call. We will audit your current support
            flow and show you exactly where AI can save you time and money.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free AI Audit
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
              href="/services/ai-chatbots"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Bot size={16} />
              AI Chatbot Service
            </Link>
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Users size={16} />
              AI Consulting
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
