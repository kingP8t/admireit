"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Code,
  CheckCircle,
  Clock,
  Shield,
  ChevronDown,
  Star,
  TrendingUp,
  Smartphone,
  Globe,
  Database,
  Brain,
  Layers,
  GitBranch,
  Rocket,
  BarChart3,
  Server,
  Lock,
  RefreshCw,
  Terminal,
  Monitor,
  Cpu,
  BadgeCheck,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Tech Stack Marquee ──────────────────────────── */

const techStack = [
  { name: "Next.js", cat: "fe" },
  { name: "React", cat: "fe" },
  { name: "React Native", cat: "mob" },
  { name: "TypeScript", cat: "fe" },
  { name: "Tailwind CSS", cat: "fe" },
  { name: "Node.js", cat: "be" },
  { name: "Python", cat: "be" },
  { name: "FastAPI", cat: "be" },
  { name: "Django", cat: "be" },
  { name: "Express", cat: "be" },
  { name: "PostgreSQL", cat: "db" },
  { name: "MongoDB", cat: "db" },
  { name: "Redis", cat: "db" },
  { name: "Supabase", cat: "db" },
  { name: "Firebase", cat: "db" },
  { name: "AWS", cat: "inf" },
  { name: "Vercel", cat: "inf" },
  { name: "Docker", cat: "inf" },
  { name: "Kubernetes", cat: "inf" },
  { name: "Terraform", cat: "inf" },
  { name: "OpenAI", cat: "ai" },
  { name: "LangChain", cat: "ai" },
  { name: "Pinecone", cat: "ai" },
  { name: "Hugging Face", cat: "ai" },
  { name: "TensorFlow", cat: "ai" },
  { name: "Stripe", cat: "be" },
  { name: "GraphQL", cat: "be" },
  { name: "tRPC", cat: "be" },
  { name: "Prisma", cat: "db" },
  { name: "Flutter", cat: "mob" },
  { name: "Expo", cat: "mob" },
  { name: "Swift", cat: "mob" },
  { name: "Kotlin", cat: "mob" },
  { name: "CI/CD", cat: "inf" },
  { name: "GitHub Actions", cat: "inf" },
];

const catColor: Record<string, string> = {
  fe: "border-blue-500/30 text-blue-400",
  be: "border-accent/30 text-accent",
  ai: "border-purple-500/30 text-purple-400",
  inf: "border-amber-500/30 text-amber-400",
  db: "border-pink-500/30 text-pink-400",
  mob: "border-emerald-500/30 text-emerald-400",
};

function TechMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const id = "tech-marquee-css";
    if (document.getElementById(id)) return;
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`;
    document.head.appendChild(style);
  }, []);

  const doubled = [...techStack, ...techStack];
  return (
    <div ref={ref} className="overflow-hidden py-6 -mx-4 sm:-mx-6 lg:-mx-8">
      <div
        className="flex gap-3 w-max"
        style={{ animation: "marquee 40s linear infinite" }}
      >
        {doubled.map((t, i) => (
          <span
            key={`${t.name}-${i}`}
            className={`shrink-0 px-4 py-2 rounded-full border text-xs font-semibold tracking-wide whitespace-nowrap ${catColor[t.cat]}`}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Data ─────────────────────────────────────────── */

const heroStats = [
  { value: "50+", label: "Applications shipped to production" },
  { value: "4-8wk", label: "Average MVP delivery time" },
  { value: "99.9%", label: "Uptime across client platforms" },
  { value: "3", label: "Continents our engineers span" },
];

const painPoints = [
  {
    icon: Clock,
    title: "Your Development Is Too Slow",
    desc: "Features that should take weeks take months. Your internal team is stretched thin across maintenance, bug fixes, and new features. Roadmap promises keep slipping and competitors are shipping faster.",
  },
  {
    icon: RefreshCw,
    title: "You've Been Burned by Agencies Before",
    desc: "Missed deadlines. Over-budget projects. Code so messy your own engineers refuse to touch it. You've hired agencies that delivered demos that looked great but fell apart in production.",
  },
  {
    icon: Layers,
    title: "Your Tech Stack Is Holding You Back",
    desc: "Legacy systems, spaghetti code, and no-code platforms that hit a ceiling. What got you to 1,000 users won't get you to 100,000. You need a rebuild but can't afford to start from scratch.",
  },
  {
    icon: Brain,
    title: "You Need AI but Don't Know How to Integrate It",
    desc: "You see what AI can do for your product — but your team doesn't have ML experience. Bolting on ChatGPT isn't a strategy. You need AI woven into the core of your application architecture.",
  },
];

const capabilities = [
  {
    icon: Globe,
    title: "Web Applications",
    desc: "Production-grade web platforms built with Next.js, React, and modern frameworks. From SaaS dashboards to marketplace platforms — responsive, fast, and built to handle real traffic.",
    examples: ["SaaS platforms", "Admin dashboards", "Marketplace apps", "Customer portals"],
    color: "accent",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    desc: "Native and cross-platform mobile apps that users actually love. React Native and Flutter for speed-to-market, Swift and Kotlin when native performance matters.",
    examples: ["iOS & Android apps", "Cross-platform (React Native)", "PWAs", "Offline-first apps"],
    color: "blue",
  },
  {
    icon: Server,
    title: "API Development",
    desc: "Scalable, well-documented APIs that power your product ecosystem. REST, GraphQL, and real-time WebSocket architectures — built for performance and developer experience.",
    examples: ["REST & GraphQL APIs", "Real-time WebSockets", "Third-party integrations", "Microservices"],
    color: "emerald",
  },
  {
    icon: Brain,
    title: "AI/ML Integration",
    desc: "Deep AI integration that goes beyond a chatbot widget. We build intelligent features into the core of your product — from recommendation engines to natural language search to computer vision.",
    examples: ["LLM-powered features", "Recommendation engines", "NLP search", "Computer vision"],
    color: "purple",
  },
  {
    icon: Database,
    title: "Data & Infrastructure",
    desc: "Robust backends, optimised databases, and cloud infrastructure that scales automatically. We design systems that handle growth without rewriting everything every 6 months.",
    examples: ["Database architecture", "Cloud infrastructure", "CI/CD pipelines", "Performance tuning"],
    color: "amber",
  },
  {
    icon: Lock,
    title: "Security & Compliance",
    desc: "Enterprise-grade security baked in from day one. Authentication, authorisation, encryption, GDPR compliance, and audit logging — not bolted on as an afterthought.",
    examples: ["Auth & access control", "Data encryption", "GDPR compliance", "Security audits"],
    color: "pink",
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Scoping",
    desc: "We map your business goals, user needs, and technical requirements into a clear, prioritised scope. You get a detailed spec document, architecture diagram, and realistic timeline — before any code is written.",
    duration: "Week 1",
  },
  {
    num: "02",
    title: "Design & Prototype",
    desc: "Interactive wireframes and UI prototypes you can click through. We validate the UX with real user flows before committing to development — so we build the right thing, not just build something right.",
    duration: "Week 2-3",
  },
  {
    num: "03",
    title: "Build & Iterate",
    desc: "Agile sprints with weekly demos. You see working software every Friday, give feedback, and we adjust. No black-box development. No surprises at launch. Continuous deployment to staging environments.",
    duration: "Week 3-8",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Production deployment with monitoring, error tracking, and performance dashboards. Post-launch support included. We stay on until your metrics confirm success — then hand off cleanly or continue as your engineering partner.",
    duration: "Week 8+",
  },
];

const projectTypes = [
  {
    icon: Rocket,
    title: "MVPs & Startups",
    desc: "Validate your idea fast. We build MVPs in 4-8 weeks with the right tech stack from day one — so you don't have to rebuild when you find product-market fit.",
    stat: "4-8 weeks to launch",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BarChart3,
    title: "SaaS Platforms",
    desc: "Multi-tenant architecture, subscription billing, user management, analytics, and API access. We've built SaaS platforms from seed stage to millions in ARR.",
    stat: "Built for scale from Day 1",
    color: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Monitor,
    title: "Enterprise Applications",
    desc: "Internal tools, ERPs, CRMs, and operations platforms for organisations that need reliability, security, and integration with existing enterprise systems.",
    stat: "99.9% uptime SLA",
    color: "bg-emerald-500/10 text-emerald-400",
  },
  {
    icon: Cpu,
    title: "AI-Native Products",
    desc: "Applications with AI at their core — not bolted on. LLM-powered search, intelligent document processing, predictive analytics, and conversational interfaces built into the product DNA.",
    stat: "AI in the architecture",
    color: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-Platform",
    desc: "Consumer and enterprise mobile apps for iOS and Android. React Native for speed-to-market, native Swift/Kotlin when performance is critical, PWAs for maximum reach.",
    stat: "Ship to both platforms",
    color: "bg-amber-500/10 text-amber-400",
  },
  {
    icon: GitBranch,
    title: "Legacy Modernisation",
    desc: "Migrate from monoliths to microservices. Rebuild no-code platforms into real code. Upgrade tech stacks without losing business continuity. We modernise incrementally so you never go dark.",
    stat: "Zero-downtime migration",
    color: "bg-pink-500/10 text-pink-400",
  },
];

const comparisonRows = [
  { feature: "Tech stack", us: "Modern, production-grade", them: "Whatever's cheapest" },
  { feature: "AI capabilities", us: "Deep integration built-in", them: "ChatGPT wrapper (if any)" },
  { feature: "Code quality", us: "Clean, tested, documented", them: "Works on demo day" },
  { feature: "Communication", us: "Weekly demos, async daily", them: "Monthly status calls" },
  { feature: "Post-launch", us: "Monitoring + support included", them: "Invoice and disappear" },
  { feature: "Scaling", us: "Architected from Day 1", them: "Rewrite at 10K users" },
];

const testimonials = [
  {
    quote:
      "AdmireTech built our entire warehouse management platform from scratch — PWA, real-time inventory, barcode scanning. The system handles thousands of transactions daily with zero downtime. They delivered exactly what they promised, on time.",
    name: "Operations Director",
    company: "Warehouse Management Client",
    stat: "70% faster inventory processing",
    caseStudySlug: "warehouse-management-pwa",
  },
  {
    quote:
      "We needed an AI-powered lending platform that could handle 50K+ applications. AdmireTech delivered a full-stack solution with ML credit scoring, automated KYC, and a mobile-first interface. Time to disbursement dropped from 3 days to 2 hours.",
    name: "Head of Digital",
    company: "EasyBuy VIP Loan Platform",
    stat: "2-hour loan disbursement",
    caseStudySlug: "easybuy-vip-loan",
  },
];

const faqs = [
  {
    q: "What tech stack do you use?",
    a: "We're stack-agnostic but opinionated. For most projects we use Next.js/React for web, React Native/Flutter for mobile, Node.js or Python for backends, PostgreSQL or MongoDB for databases, and AWS/Vercel for infrastructure. For AI features, we integrate OpenAI, LangChain, Pinecone, and custom ML models. We choose the right tool for the job, not the one we're most comfortable with.",
  },
  {
    q: "How long does a typical project take?",
    a: "MVPs: 4-8 weeks. Mid-complexity applications (SaaS dashboards, internal tools): 8-12 weeks. Enterprise platforms with deep integrations: 12-20 weeks. We scope every project in detail before writing a line of code, so timelines are realistic and commitments are met.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We integrate seamlessly as an extension of your team — attending standups, using your repos, following your processes. Many clients embed our engineers alongside their in-house developers for hybrid teams that move faster without sacrificing code quality.",
  },
  {
    q: "How much does custom development cost?",
    a: "MVPs typically range from $15,000-$40,000. Full-scale applications range from $40,000-$150,000+ depending on complexity. We offer fixed-price, time-and-materials, and outcome-based pricing. Book a free consultation and we'll scope your project with a transparent estimate in 48 hours.",
  },
  {
    q: "What happens after launch?",
    a: "We don't disappear. Every project includes 30 days of post-launch support with monitoring, bug fixes, and performance optimisation. For ongoing development, we offer retainer packages with dedicated engineers. Many clients continue working with us for years as their fractional CTO or development partner.",
  },
  {
    q: "Do you own the code, or do we?",
    a: "You own 100% of the code, designs, documentation, and intellectual property from day one. Everything is built in YOUR repositories with YOUR accounts. There's zero vendor lock-in. If you want to part ways, you walk away with everything.",
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

export function CustomDevelopmentContent() {
  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-16">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-emerald-500/5" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
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
                <Code size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold tracking-wider uppercase">
                  Custom Development
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.08] tracking-tight mb-6">
                We Build Software
                <br />
                That{" "}
                <span className="gradient-text">Ships, Scales</span>
                <br />
                &amp; Stays Standing.
              </h1>

              <p className="text-lg text-text-secondary max-w-xl leading-relaxed mb-8">
                Not another agency that delivers a demo and disappears. AdmireTech
                builds production-grade web and mobile applications with deep AI
                integration &mdash; architected to scale from Day 1, backed by
                engineers across London, Pune &amp; Lagos.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <CalBookingButton className="inline-flex items-center gap-2 px-7 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/20">
                  Get a Free Project Estimate
                  <ArrowRight size={16} />
                </CalBookingButton>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                >
                  View Our Work
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
                      {["N", "R", "T", "S", "K"][i]}
                    </div>
                  ))}
                </div>
                <span>
                  50+ applications shipped across{" "}
                  <span className="text-white font-medium">
                    London, Lagos &amp; Pune
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Right — code terminal visual */}
            <motion.div {...fade(0.2)}>
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/5">
                {/* Terminal topbar */}
                <div className="bg-[#1E1E1E] px-5 py-3.5 flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
                  </div>
                  <span className="text-text-secondary/50 text-xs font-mono ml-1">
                    admireit-project &mdash; main
                  </span>
                  <Terminal size={12} className="text-text-secondary/30 ml-auto" />
                </div>

                {/* Code body */}
                <div className="bg-card p-5 font-mono text-[12px] leading-relaxed space-y-1 min-h-[320px]">
                  {[
                    { line: 1, code: "// Your product, production-grade", color: "text-emerald-400/50" },
                    { line: 2, code: "", color: "" },
                    { line: 3, code: "const project = await AdmireTech.build({", color: "text-blue-400" },
                    { line: 4, code: '  stack: ["Next.js", "Python", "PostgreSQL"],', color: "text-accent" },
                    { line: 5, code: '  ai:    ["OpenAI", "LangChain", "Pinecone"],', color: "text-purple-400" },
                    { line: 6, code: '  deploy: "Vercel + AWS",', color: "text-amber-400" },
                    { line: 7, code: "  timeline: \"8 weeks\",", color: "text-emerald-400" },
                    { line: 8, code: "  quality: {", color: "text-blue-400" },
                    { line: 9, code: "    tests: true,", color: "text-text-secondary" },
                    { line: 10, code: "    cicd: true,", color: "text-text-secondary" },
                    { line: 11, code: "    monitoring: true,", color: "text-text-secondary" },
                    { line: 12, code: "    codeOwnership: \"yours\",", color: "text-green-400" },
                    { line: 13, code: "  }", color: "text-blue-400" },
                    { line: 14, code: "});", color: "text-blue-400" },
                    { line: 15, code: "", color: "" },
                    { line: 16, code: "// ✓ Shipped. Scaled. Standing.", color: "text-accent" },
                  ].map((l, i) => (
                    <motion.div
                      key={l.line}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.3 }}
                      className="flex"
                    >
                      <span className="w-8 text-right text-text-secondary/20 mr-4 select-none">
                        {l.line}
                      </span>
                      <span className={l.color}>{l.code}</span>
                    </motion.div>
                  ))}
                  <motion.span
                    className="inline-block w-2 h-4 bg-accent ml-12 mt-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ TECH MARQUEE ═══ */}
      <section className="bg-background-secondary border-y border-white/5">
        <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
          <TechMarquee />
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
              Building software is easy. Building software that lasts is hard.
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Most development agencies optimise for delivery day. We optimise
              for day 365 &mdash; and beyond. Here&apos;s what happens when you
              choose the wrong engineering partner.
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
                The AdmireTech Difference
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
                What if your next development partner shipped production-grade
                code, integrated AI natively, and owned the outcome like it was
                their own product?
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed mb-8">
                That&apos;s what we do. Every application we build is architected
                for scale, tested for reliability, and deployed with CI/CD from
                sprint one. We don&apos;t write throwaway code &mdash; and we
                don&apos;t charge for throwaway demos.
              </p>
              <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-accent-warm transition-all hover:-translate-y-0.5">
                Let&apos;s Scope Your Project
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
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Full-stack development with AI at the core
            </h2>
            <p className="text-text-secondary leading-relaxed">
              From frontend to infrastructure, every layer is engineered by
              senior developers who&apos;ve shipped at scale.
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
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From idea to production in 4 phases
            </h2>
            <p className="text-text-secondary leading-relaxed">
              No black boxes. No surprises. You see working software every week
              and give feedback before we move forward.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-[22px] left-[12%] right-[12%] h-px bg-gradient-to-r from-accent to-white/10 z-0" />

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.num}
                  {...fade(i * 0.1)}
                  className="relative z-10"
                >
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
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Why AdmireTech
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              Not another dev shop. A real engineering partner.
            </h2>
          </motion.div>

          <motion.div {...fade(0.1)} className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-white/[0.08] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-3 bg-card">
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50">
                  Criteria
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-accent text-center">
                  AdmireTech
                </div>
                <div className="px-6 py-4 text-xs font-bold tracking-wider uppercase text-text-secondary/50 text-center">
                  Typical Agency
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

      {/* ═══ PROJECT TYPES ═══ */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade()} className="max-w-2xl mb-12">
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              What We Build
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
              From startup MVPs to enterprise platforms
            </h2>
            <p className="text-text-secondary leading-relaxed">
              Every project is different, but our engineering standards are
              always the same: production-grade, scalable, and built to last.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectTypes.map((pt, i) => (
              <motion.div key={pt.title} {...fade(i * 0.08)}>
                <div className="rounded-2xl bg-card border border-white/5 p-7 h-full hover:border-accent/20 hover:-translate-y-1 transition-all">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 ${pt.color}`}
                  >
                    <pt.icon size={20} />
                  </div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight">
                    {pt.title}
                  </h4>
                  <p className="text-text-secondary text-[13px] leading-relaxed mb-4">
                    {pt.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-accent/15 text-accent">
                    <TrendingUp size={10} />
                    {pt.stat}
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
          <motion.div
            {...fade()}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <p className="text-accent text-[10px] font-bold tracking-[0.15em] uppercase mb-3">
              Client Results
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Production software. Production results.
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
                        <BadgeCheck size={14} className="text-green-400" />
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
                Still have questions? Book a free 30-minute project scoping call
                and we&apos;ll walk you through everything &mdash; no obligation.
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
                  <Code size={14} className="text-white" />
                  <span className="text-white/80 text-xs font-semibold">
                    Free Project Estimate &middot; No Commitment
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto mb-4">
                  Ready to build software that actually ships, scales &amp;
                  stays standing?
                </h2>
                <p className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                  Book a free 30-minute project scoping call. We&apos;ll review
                  your requirements, recommend a tech stack, and give you a
                  transparent estimate &mdash; whether you work with us or not.
                </p>

                <div className="flex flex-wrap gap-3 justify-center mb-8">
                  <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-bold text-sm px-8 py-4 rounded-full hover:-translate-y-0.5 hover:shadow-xl transition-all">
                    Get Your Free Project Estimate
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
                    30-min scoping call
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield size={12} />
                    You own 100% of the code
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
