"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  CheckCircle,
  Clock,
  Shield,
  ChevronDown,
  Star,
  Brain,
  Code,
  Cpu,
  Eye,
  MessageSquare,
  BarChart3,
  BadgeCheck,
  Scaling,
  XCircle,
  Handshake,
  GraduationCap,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "48hr", label: "Engineer matched & ready to start" },
  { value: "Sr+", label: "All engineers are senior-level" },
  { value: "3", label: "Continents of talent coverage" },
  { value: "0", label: "Recruitment fees or overhead" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Hiring AI Talent Takes 6+ Months",
    desc: "AI and ML engineers are the hardest roles to fill. The average time to hire is 6-9 months — and the best candidates get snatched up in weeks. By the time you close a hire, your AI roadmap is already behind.",
  },
  {
    icon: Scaling,
    title: "Full-Time Hires Don't Scale Both Ways",
    desc: "You need 3 ML engineers this quarter and 1 next quarter. But full-time hires come with 12-month contracts, benefits, and notice periods. Your AI team size can't flex with your actual project demands.",
  },
  {
    icon: XCircle,
    title: "Freelancers Are Unreliable",
    desc: "You tried Upwork and Toptal. The first engineer disappeared mid-project. The second couldn't handle production-grade systems. The third delivered code nobody on your team could maintain. You're done gambling.",
  },
  {
    icon: GraduationCap,
    title: "Your Team Lacks Specialised AI Skills",
    desc: "Your developers are strong — but LLM fine-tuning, vector databases, MLOps pipelines, and computer vision aren't skills you pick up from a weekend tutorial. You need depth that only comes from years of production AI work.",
  },
];

const engineerProfiles = [
  {
    icon: Brain,
    title: "LLM & NLP Engineers",
    desc: "Fine-tuning, RAG architectures, prompt engineering, and production LLM systems. Experienced with OpenAI, Anthropic, LLaMA, LangChain, and vector databases like Pinecone and Weaviate.",
    skills: ["LLM fine-tuning", "RAG systems", "Prompt engineering", "Embeddings & vector search"],
    color: "accent",
  },
  {
    icon: Eye,
    title: "Computer Vision Engineers",
    desc: "Object detection, image classification, OCR, video analysis, and real-time visual processing. Production experience with PyTorch, TensorFlow, YOLO, and custom model training.",
    skills: ["Object detection", "Image classification", "OCR & document analysis", "Video analytics"],
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Data & ML Engineers",
    desc: "Feature engineering, model training, A/B testing, and ML pipeline architecture. From data ingestion to model serving — building the infrastructure that makes AI work at scale.",
    skills: ["ML pipelines & MLOps", "Feature engineering", "Model training & evaluation", "Data architecture"],
    color: "emerald",
  },
  {
    icon: Cpu,
    title: "MLOps & AI Infrastructure",
    desc: "Model deployment, monitoring, versioning, and scaling. CI/CD for ML, containerised model serving, GPU cluster management, and cost optimisation for AI workloads.",
    skills: ["Model deployment & serving", "ML monitoring & drift detection", "GPU infrastructure", "Cost optimisation"],
    color: "amber",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI Engineers",
    desc: "Chatbots, voice assistants, and multi-modal AI interfaces. Specialists in dialogue systems, intent recognition, multi-turn conversations, and human-AI interaction design.",
    skills: ["Chatbot architecture", "Voice interfaces", "Intent recognition", "Multi-modal AI"],
    color: "purple",
  },
  {
    icon: Code,
    title: "Full-Stack AI Engineers",
    desc: "End-to-end product engineers who build AI-native applications. From React frontends to Python ML backends — developers who ship complete, production-ready AI features, not just notebooks.",
    skills: ["AI-native web apps", "API + ML integration", "Production deployment", "End-to-end delivery"],
    color: "pink",
  },
];

const engagementModels = [
  {
    title: "Part-Time Embedded",
    hours: "20 hrs/week",
    desc: "A senior AI engineer joins your team part-time — attending standups, using your repos, and shipping alongside your developers. Perfect for ongoing AI feature development without a full-time hire.",
    best: "Continuous AI feature work",
    color: "border-blue-500/20",
  },
  {
    title: "Full-Time Embedded",
    hours: "40 hrs/week",
    desc: "A dedicated AI engineer works full-time as part of your team for a defined period. Same commitment as a hire, without the recruitment timeline, benefits overhead, or notice period.",
    best: "Major AI initiatives",
    color: "border-accent/20",
  },
  {
    title: "Project-Based",
    hours: "Fixed scope",
    desc: "An AI engineer (or team) delivers a defined scope — model training, pipeline build, PoC, or integration. Clear deliverables, fixed timeline, and transparent pricing agreed upfront.",
    best: "Specific AI deliverables",
    color: "border-emerald-500/20",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Brief & Match",
    desc: "Tell us what you need — skills, domain experience, engagement model, and timeline. We match you with pre-vetted senior engineers from our talent network within 48 hours.",
    duration: "Day 1-2",
  },
  {
    num: "02",
    title: "Interview & Validate",
    desc: "You interview your matched engineer(s) — technical deep-dive, culture fit, and project discussion. If it's not a perfect match, we send alternatives. No pressure, no fees until you're satisfied.",
    duration: "Day 3-5",
  },
  {
    num: "03",
    title: "Onboard & Embed",
    desc: "Your engineer gets access to repos, joins standups, and starts contributing from week one. We handle contracts, payments, and admin. You get productive AI talent with zero overhead.",
    duration: "Week 1",
  },
  {
    num: "04",
    title: "Deliver & Support",
    desc: "Ongoing delivery management, performance tracking, and account support. Need to scale up or down? Change engagement model? We flex with you — no lock-in contracts.",
    duration: "Ongoing",
  },
];

const comparisonRows = [
  { feature: "Time to start", us: "48 hours", them: "6-9 months" },
  { feature: "Commitment", us: "Flexible, no lock-in", them: "12-month+ contracts" },
  { feature: "Cost", us: "Pay only for hours used", them: "Salary + benefits + overhead" },
  { feature: "Quality", us: "Pre-vetted senior engineers", them: "Months of interviews" },
  { feature: "Scaling", us: "Scale up/down instantly", them: "Hiring/firing cycles" },
  { feature: "Risk", us: "Replace in days if needed", them: "Notice periods, severance" },
];

const testimonials = [
  {
    quote:
      "We needed an LLM engineer who understood RAG architecture and could integrate with our existing Python backend. AdmireTech matched us with a senior engineer in 3 days. He was shipping code by the end of week one. It would have taken us 6 months to hire that skillset.",
    name: "VP of Engineering",
    company: "Cloud Solutions Provider",
    stat: "Shipping code in 5 days",
    caseStudySlug: "llm-enterprise-chatbot",
  },
  {
    quote:
      "We scaled from 1 fractional AI developer to a team of 3 as our project scope grew — then back to 1 for maintenance. That flexibility is impossible with full-time hires. AdmireTech's engineers felt like part of our team from day one.",
    name: "CTO",
    company: "National Microfinance Bank",
    stat: "Team scaled 3x in 2 weeks",
    caseStudySlug: "mfb-ai-transformation",
  },
];

const faqs = [
  {
    q: "How quickly can you match an AI engineer to our project?",
    a: "Typically within 48 hours. We maintain a pre-vetted network of senior AI and ML engineers across LLMs, computer vision, NLP, MLOps, and full-stack AI development. For niche specialisations, matching may take 3-5 business days.",
  },
  {
    q: "What seniority level are your engineers?",
    a: "All of our fractional engineers are senior-level (5+ years experience) or above. We don't place junior developers. Every engineer has production AI experience — not just Kaggle competitions or academic research. They've built and deployed AI systems that serve real users.",
  },
  {
    q: "How is this different from hiring through Toptal or Upwork?",
    a: "Three differences: (1) We specialise in AI and ML — our vetting process tests production AI skills, not generic coding. (2) We provide ongoing account management, not just a marketplace transaction. (3) Our engineers are used to embedding in teams — they understand standups, code reviews, and production deployment, not just solo freelancing.",
  },
  {
    q: "What if the engineer isn't a good fit?",
    a: "We replace them within days — no questions asked, no additional fees for the replacement search. It rarely happens because our matching process is thorough, but we never lock you in with an engineer who isn't delivering. You have zero risk.",
  },
  {
    q: "Can the engineer work in our timezone?",
    a: "Yes. Our talent network spans London, Pune, and Lagos — covering GMT, GMT+5:30, and GMT+1. For US-timezone clients, we have engineers who overlap with EST and PST working hours. We always match timezone compatibility as part of the brief.",
  },
  {
    q: "How much does a fractional AI developer cost?",
    a: "Rates vary by specialisation and engagement model. Senior AI engineers typically range from $60-$120/hour depending on skills and domain expertise. Part-time embedded (20hrs/week) starts from around $5,000/month. All pricing is transparent and agreed before engagement begins.",
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

export function FractionalAIContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-500/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl" />
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
                <Users size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  Fractional AI &amp; ML Developers
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                Senior AI Engineers.
                <br />
                <span className="gradient-text">On Demand.</span>
                <br />
                Zero Overhead.
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
                Stop waiting 6 months to hire AI talent. AdmireTech gives you
                pre-vetted senior AI and ML engineers who embed in your team,
                ship production code, and scale with your project &mdash; in 48
                hours, not 6 months.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CalBookingButton className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                  Hire an AI Engineer Now
                  <ArrowRight size={16} />
                </CalBookingButton>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                >
                  See What Our Engineers Build
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
                      {["P", "A", "S", "R", "K"][i]}
                    </div>
                  ))}
                </div>
                <span>
                  Engineers across{" "}
                  <span className="text-white font-medium">
                    London, Lagos &amp; Pune
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right — engineer profiles visual */}
            <motion.div {...fade(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-purple-500/5">
                <div className="bg-gradient-to-r from-accent to-accent-warm px-5 py-3.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  </div>
                  <span className="text-white text-xs font-semibold ml-1">
                    Available AI Engineers
                  </span>
                  <span className="ml-auto text-[10px] text-white/60 font-medium">
                    3 matched
                  </span>
                </div>

                <div className="bg-card p-5 space-y-3 min-h-[320px]">
                  {[
                    {
                      initials: "AK",
                      name: "Senior LLM Engineer",
                      location: "London, UK",
                      skills: ["LangChain", "RAG", "OpenAI", "Python"],
                      exp: "8 years",
                      avail: "Available now",
                      color: "bg-accent",
                    },
                    {
                      initials: "PR",
                      name: "ML / MLOps Engineer",
                      location: "Pune, India",
                      skills: ["PyTorch", "MLflow", "Kubernetes", "AWS"],
                      exp: "6 years",
                      avail: "Available now",
                      color: "bg-blue-500",
                    },
                    {
                      initials: "OA",
                      name: "Full-Stack AI Engineer",
                      location: "Lagos, Nigeria",
                      skills: ["Next.js", "FastAPI", "Pinecone", "React"],
                      exp: "7 years",
                      avail: "Available in 1 week",
                      color: "bg-emerald-500",
                    },
                  ].map((eng, i) => (
                    <motion.div
                      key={eng.initials}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.2, duration: 0.4 }}
                      className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-accent/20 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-10 h-10 rounded-full ${eng.color} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                        >
                          {eng.initials}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="text-white text-sm font-semibold">
                              {eng.name}
                            </h4>
                            <span className="text-[10px] text-text-secondary/50">
                              {eng.exp}
                            </span>
                          </div>
                          <p className="text-[11px] text-text-secondary/60 mb-2">
                            {eng.location}
                          </p>
                          <div className="flex flex-wrap gap-1.5 mb-2">
                            {eng.skills.map((s) => (
                              <span
                                key={s}
                                className="px-2 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.06] text-[10px] text-text-secondary"
                              >
                                {s}
                              </span>
                            ))}
                          </div>
                          <span
                            className={`text-[10px] font-bold tracking-wider uppercase ${
                              eng.avail === "Available now"
                                ? "text-green-400"
                                : "text-amber-400"
                            }`}
                          >
                            {eng.avail}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
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
              AI talent is the hardest hire in tech. And the most expensive to get wrong.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              The demand for AI engineers has outstripped supply by 10x. Here&apos;s
              what happens when you try to build an AI team the traditional way.
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
                What if you could add a senior AI engineer to your team this
                week &mdash; without a single interview loop?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                AdmireTech maintains a curated network of senior AI and ML
                engineers who are pre-vetted, production-tested, and ready to
                embed in your team. You get the talent of a full-time hire with
                the flexibility of a contractor &mdash; and none of the overhead.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5">
                Match Me With an AI Engineer
                <ArrowRight size={16} />
              </CalBookingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══ ENGINEER PROFILES ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Who You Get
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Six specialisations. All senior. All production-tested.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every engineer in our network has 5+ years of experience and has
              shipped AI systems to production &mdash; not just trained models
              in notebooks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {engineerProfiles.map((prof, i) => {
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
                <motion.div key={prof.title} {...fade(i * 0.08)}>
                  <div
                    className={`rounded-2xl bg-card border border-white/5 p-7 h-full ${borderMap[prof.color]} hover:-translate-y-1 transition-all`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${colorMap[prof.color]}`}
                    >
                      <prof.icon size={20} />
                    </div>
                    <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                      {prof.title}
                    </h4>
                    <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                      {prof.desc}
                    </p>
                    <div className="space-y-1.5">
                      {prof.skills.map((s) => (
                        <div
                          key={s}
                          className="flex items-center gap-2 text-[12px] text-text-secondary"
                        >
                          <CheckCircle size={12} className="text-accent shrink-0" />
                          {s}
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

      {/* ═══ ENGAGEMENT MODELS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Flexible Engagement
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Three models. Your choice. No lock-in.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {engagementModels.map((model, i) => (
              <motion.div key={model.title} {...fade(i * 0.1)}>
                <div
                  className={`rounded-2xl bg-card border ${model.color} p-7 h-full hover:-translate-y-1 transition-all`}
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-[11px] font-bold tracking-wider uppercase mb-4">
                    {model.hours}
                  </span>
                  <h4 className="font-bold text-lg text-white mb-3">
                    {model.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                    {model.desc}
                  </p>
                  <div className="pt-4 border-t border-white/5">
                    <span className="text-[11px] text-text-secondary/50 uppercase tracking-wider font-bold">
                      Best for:
                    </span>
                    <p className="text-white text-sm font-semibold mt-1">
                      {model.best}
                    </p>
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

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              How It Works
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From brief to shipping code in under a week
            </h2>
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
              Why Fractional
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Fractional AI hire vs. traditional hiring
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              <div className="grid grid-cols-3 bg-card">
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50">
                  Factor
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-accent text-center">
                  Fractional via AdmireTech
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50 text-center">
                  Full-Time Hire
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

      {/* ═══ TESTIMONIALS ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Client Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Teams that scaled with fractional AI talent
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
                Still have questions? Book a free call and we&apos;ll match you
                with the right AI engineer for your project.
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
                  <Handshake size={14} className="text-white" />
                  <span className="text-white/80 text-xs font-semibold">
                    48-Hour Matching &middot; No Commitment
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Ready to add senior AI talent to your team this week?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Book a free call. Tell us what you need. We&apos;ll match you
                  with a pre-vetted senior AI engineer in 48 hours &mdash; no
                  recruitment fees, no long-term lock-in.
                </p>
                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Hire an AI Engineer Now
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
                    No recruitment fees
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} />
                    48-hour matching
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} />
                    Replace guarantee
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
