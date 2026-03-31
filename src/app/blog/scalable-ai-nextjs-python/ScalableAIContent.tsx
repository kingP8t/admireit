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
  Layers,
  Server,
  Globe,
  Gauge,
  Shield,
  Code,
  Database,
  MonitorSmartphone,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

const architectureLayers = [
  {
    label: "Frontend",
    tech: "Next.js 14 \u00b7 React \u00b7 TypeScript",
    color: "bg-blue-400",
    items: [
      "Server Components for fast initial loads",
      "Streaming UI for real-time AI responses",
      "API Routes as a secure proxy layer",
    ],
  },
  {
    label: "API Gateway",
    tech: "Next.js API Routes \u00b7 tRPC \u00b7 REST",
    color: "bg-accent",
    items: [
      "Authentication and rate limiting",
      "Request validation with Zod",
      "Response caching with Redis",
    ],
  },
  {
    label: "ML Backend",
    tech: "Python \u00b7 FastAPI \u00b7 LangChain",
    color: "bg-emerald-400",
    items: [
      "Model serving via FastAPI or gRPC",
      "Task queue for heavy inference jobs",
      "Vector stores for RAG pipelines",
    ],
  },
  {
    label: "Infrastructure",
    tech: "Docker \u00b7 Vercel \u00b7 AWS / GCP",
    color: "bg-purple-400",
    items: [
      "Containerised Python services",
      "Edge deployment for Next.js",
      "Auto-scaling based on GPU demand",
    ],
  },
];

const bestPractices = [
  {
    icon: Gauge,
    title: "Stream, Don\u2019t Block",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    description:
      "Never make users wait for a full AI response. Use Server-Sent Events or WebSockets to stream tokens from your Python backend through Next.js to the browser. Users see output as it generates \u2014 just like ChatGPT.",
  },
  {
    icon: Shield,
    title: "Proxy Through API Routes",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    description:
      "Never expose your Python service URL or API keys to the client. Next.js API routes act as a secure middleware layer \u2014 handling auth, rate limiting, and input sanitisation before forwarding requests to your ML backend.",
  },
  {
    icon: Database,
    title: "Cache Aggressively",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    description:
      "AI inference is expensive. Cache frequent predictions with Redis, use Next.js ISR for pages with AI-generated content, and implement request deduplication so identical prompts don\u2019t trigger duplicate GPU workloads.",
  },
  {
    icon: Layers,
    title: "Separate Concerns Cleanly",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    description:
      "Keep your Next.js frontend, API gateway, and Python ML service as independent deployable units. This lets you scale each layer independently \u2014 add more GPU nodes for inference without touching your frontend deployment.",
  },
  {
    icon: MonitorSmartphone,
    title: "Design for Failure",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    description:
      "AI models can be slow or unavailable. Build graceful degradation into your UI \u2014 loading skeletons, timeout handling, fallback responses, and retry logic. A good user experience survives backend hiccups.",
  },
];

const techStack = [
  { category: "Frontend", tools: "Next.js 14, React 18, TypeScript, Tailwind CSS, Framer Motion" },
  { category: "API Layer", tools: "Next.js API Routes, tRPC, Zod validation, NextAuth.js" },
  { category: "ML Backend", tools: "Python 3.12, FastAPI, LangChain, PyTorch, scikit-learn" },
  { category: "Data & Storage", tools: "PostgreSQL, Redis, Pinecone / Weaviate, S3" },
  { category: "DevOps", tools: "Docker, GitHub Actions, Vercel, AWS ECS / Cloud Run" },
  { category: "Monitoring", tools: "Sentry, PostHog, LangSmith, Prometheus + Grafana" },
];

const faqs = [
  {
    q: "Why use Next.js with Python for AI applications?",
    a: "Next.js provides SSR, API routes, and an optimised React framework for fast UIs, while Python offers the richest ML ecosystem (PyTorch, TensorFlow, LangChain). Together they let you build responsive frontends backed by powerful ML services \u2014 the best of both worlds.",
  },
  {
    q: "How do you connect a Next.js frontend to a Python AI backend?",
    a: "Expose your Python ML models through a FastAPI REST API, then call those endpoints from Next.js API routes or Server Components. For real-time features like streaming chat, use Server-Sent Events. Next.js API routes act as a secure proxy, keeping your Python service URL and keys hidden from the client.",
  },
  {
    q: "What is the best architecture for a scalable AI web app?",
    a: "Separate into three layers: a Next.js frontend on Vercel (edge), a Python API on containerised infrastructure (AWS ECS, Cloud Run), and a task queue (Celery, Redis Queue) for long-running inference. Add Redis caching for frequent predictions and a message broker for async processing.",
  },
  {
    q: "How do you handle long-running AI model inference in a web app?",
    a: "Never block the main thread with heavy inference. Use a task queue like Celery to offload jobs. The frontend gets a job ID and polls or subscribes via WebSocket for results. For LLMs, stream tokens with Server-Sent Events so users see output as it generates.",
  },
  {
    q: "How long does it take to build an AI-powered web application?",
    a: "An MVP with a single AI feature (chatbot, document analyser) takes 4\u20138 weeks. A full production app with multiple AI capabilities, auth, analytics, and integrations takes 3\u20136 months. Pre-trained models and managed services like OpenAI or AWS Bedrock cut dev time significantly.",
  },
];

export function ScalableAIContent() {
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
            Development
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            28 February 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            6 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Building Scalable AI Applications with Next.js and Python
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img src="/images/team/peter-king.webp" alt="Peter King" className="w-10 h-10 rounded-full object-cover" />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">CEO &amp; CTO, AdmireTech · Published 28 February 2026</p>
          </div>
        </div>

        <p className="mt-6 text-lg sm:text-xl text-text-secondary leading-relaxed">
          Next.js handles the frontend beautifully. Python dominates AI and ML.
          Combine them and you get production-ready AI applications that are fast,
          scalable, and a joy to develop. Here is how we do it at AdmireTech.
        </p>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Why This Stack */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Why Next.js + Python Is the Winning Combo
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Most AI teams face a dilemma: Python is unbeatable for machine
            learning, but building modern web interfaces with it is painful.
            JavaScript frameworks excel at UI but lack mature ML libraries.
            The answer is not choosing one &mdash; it is using both, each where
            it shines.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Next.js gives you server-side rendering, React Server Components,
            streaming, and edge deployment out of the box. Python gives you
            PyTorch, LangChain, FastAPI, and the entire Hugging Face ecosystem.
            By cleanly separating your frontend from your ML backend, you get a
            system where each layer scales independently and teams work in
            parallel.
          </p>
        </motion.section>

        {/* Architecture Visual */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Server size={22} className="inline mr-2 text-accent" />
            The Reference Architecture
          </h2>
          <div className="space-y-3">
            {architectureLayers.map((layer, idx) => (
              <motion.div
                key={layer.label}
                {...fade(idx * 0.08)}
                className="bg-card border border-white/5 rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-3 h-3 rounded-full ${layer.color}`} />
                  <h3 className="text-white font-semibold">{layer.label}</h3>
                  <span className="text-text-secondary text-xs ml-auto hidden sm:block">
                    {layer.tech}
                  </span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-text-secondary text-sm"
                    >
                      <span className="w-1 h-1 rounded-full bg-text-secondary mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Best Practices */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            5 Best Practices for Production AI Apps
          </h2>
          <div className="space-y-4">
            {bestPractices.map((practice, idx) => (
              <motion.div
                key={practice.title}
                {...fade(idx * 0.06)}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-4"
              >
                <div
                  className={`w-10 h-10 rounded-lg ${practice.bg} flex items-center justify-center shrink-0`}
                >
                  <practice.icon size={20} className={practice.color} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">
                    {practice.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tech Stack Table */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            <Code size={22} className="inline mr-2 text-accent" />
            Our Go-To Tech Stack
          </h2>
          <div className="bg-card border border-white/5 rounded-xl overflow-hidden">
            <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]">
              {techStack.map((row, idx) => (
                <div key={row.category} className="contents">
                  <div
                    className={`p-4 text-white font-medium text-sm border-b border-white/5 ${
                      idx % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    {row.category}
                  </div>
                  <div
                    className={`p-4 text-text-secondary text-sm border-b border-white/5 ${
                      idx % 2 === 0 ? "bg-white/[0.02]" : ""
                    }`}
                  >
                    {row.tools}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Real-World Application */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            <Globe size={22} className="inline mr-2 text-accent" />
            Putting It Into Practice
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            At AdmireTech, we have used this exact architecture to build
            AI-powered products across industries &mdash; from enterprise chatbots
            that serve thousands of concurrent users to document processing
            pipelines that extract structured data from unstructured files in
            seconds.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The key insight is starting simple. You do not need a microservices
            architecture on day one. Begin with a Next.js monolith calling a
            single FastAPI service. As load grows, split out inference workers
            behind a task queue. Add caching. Scale horizontally. The clean
            separation between frontend and ML backend makes each evolution
            straightforward.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The result is an application that feels instant to users, handles
            spikes gracefully, and gives your data science team the freedom to
            iterate on models without touching the frontend.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Need Help Building Your AI Application?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            Our team has shipped Next.js + Python AI products for startups and
            enterprises across London, Lagos, and Pune. Let&apos;s talk
            architecture.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book a Technical Deep-Dive
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
              href="/services/custom-development"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Code size={16} />
              Custom Development Service
            </Link>
            <Link
              href="/services/fractional-ai-developers"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Globe size={16} />
              Hire Fractional AI Developers
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
