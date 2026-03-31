"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Globe2,
  Sparkles,
  Target,
  Lightbulb,
  Users,
  Rocket,
  Shield,
  Brain,
  Calendar,
  Zap,
  TrendingUp,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { CalBookingButton } from "@/components/CalBookingButton";
import { Card } from "@/components/ui/Card";

/* ------------------------------------------------------------------ */
/*  Animation helper                                                   */
/* ------------------------------------------------------------------ */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
});

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

interface TeamMember {
  name: string;
  role: string;
  country: string;
  flag: string;
  image: string;
  department: "leadership" | "engineering" | "operations";
}

const team: TeamMember[] = [
  // Leadership
  {
    name: "Peter King",
    role: "CEO / CTO / Founder",
    country: "United Kingdom",
    flag: "🇬🇧",
    image: "/images/team/peter-king.webp",
    department: "leadership",
  },
  {
    name: "Rafa Zalewski",
    role: "CTO",
    country: "Poland",
    flag: "🇵🇱",
    image: "/images/team/rafa-zalewski.webp",
    department: "leadership",
  },
  {
    name: "Tokunbo Ajayi",
    role: "Head of AI Engineering",
    country: "Nigeria",
    flag: "🇳🇬",
    image: "/images/team/tokunbo-ajayi.webp",
    department: "leadership",
  },
  // Engineering
  {
    name: "Aryan Saini",
    role: "Machine Learning Engineer",
    country: "India",
    flag: "🇮🇳",
    image: "/images/team/aryan-saini.webp",
    department: "engineering",
  },
  {
    name: "Mohammed Ashhar",
    role: "AI Consultant",
    country: "India",
    flag: "🇮🇳",
    image: "/images/team/mohammed-ashhar.webp",
    department: "engineering",
  },
  {
    name: "Khiem Huynh",
    role: "Data Scientist",
    country: "Vietnam",
    flag: "🇻🇳",
    image: "/images/team/khiem-huynh.webp",
    department: "engineering",
  },
  {
    name: "Niel Nabal",
    role: "Full Stack Developer",
    country: "Pakistan",
    flag: "🇵🇰",
    image: "/images/team/niel-nabal.webp",
    department: "engineering",
  },
  {
    name: "Hanzla Farooq",
    role: "Full Stack Developer",
    country: "Pakistan",
    flag: "🇵🇰",
    image: "/images/team/hanzla-farooq.webp",
    department: "engineering",
  },
  // Operations
  {
    name: "Kgomotso Senanya",
    role: "Product Manager",
    country: "South Africa",
    flag: "🇿🇦",
    image: "/images/team/kgomotso-senanya.webp",
    department: "operations",
  },
  {
    name: "Tamara Burnett",
    role: "Account Manager",
    country: "South Africa",
    flag: "🇿🇦",
    image: "/images/team/tamara-burnett.webp",
    department: "operations",
  },
  {
    name: "Wasiu Quadri",
    role: "Technical Project Manager",
    country: "Nigeria",
    flag: "🇳🇬",
    image: "/images/team/wasiu-quadri.webp",
    department: "operations",
  },
  {
    name: "Omena Opute",
    role: "Project Manager",
    country: "Nigeria",
    flag: "🇳🇬",
    image: "/images/team/omena-opute.webp",
    department: "operations",
  },
  {
    name: "Abel Kayode",
    role: "Business Development Manager",
    country: "Nigeria",
    flag: "🇳🇬",
    image: "/images/team/abel-kayode.webp",
    department: "operations",
  },
];

const stats = [
  { value: "10+", label: "Years in Business", icon: Clock },
  { value: "13", label: "Team Members", icon: Users },
  { value: "7", label: "Countries", icon: Globe2 },
  { value: "50+", label: "Projects Delivered", icon: Rocket },
];

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description:
      "Every solution is measured by the ROI it generates. We don't ship features — we ship outcomes that move your bottom line.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We deploy the latest in LLMs, computer vision, and automation — not last year's tech wrapped in a new pitch deck.",
  },
  {
    icon: Globe2,
    title: "Globally Distributed",
    description:
      "With talent across 7 countries and 3 continents, your project is always moving forward — even while you sleep.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Trust",
    description:
      "SOC 2-aligned processes, encrypted pipelines, and rigorous code review. Your data and IP are always protected.",
  },
  {
    icon: Zap,
    title: "Speed to Market",
    description:
      "Our outcome-based sprints mean you see working AI in weeks, not quarters. Fast iteration, zero fluff.",
  },
  {
    icon: Brain,
    title: "Deep AI Expertise",
    description:
      "From fine-tuning LLMs to building real-time ML pipelines, our engineers live and breathe artificial intelligence.",
  },
];

const milestones = [
  { year: "2015", event: "Incorporated in England with a vision to bridge technology and business transformation" },
  { year: "2017", event: "Expanded into web and mobile development, delivering solutions for SMEs across the UK" },
  { year: "2019", event: "Opened operations in Lagos and Pune — establishing a true 3-continent presence" },
  { year: "2021", event: "Pivoted hard into AI and machine learning as demand surged across industries" },
  { year: "2023", event: "Launched dedicated AI agency brand, assembling specialist engineers and data scientists" },
  { year: "2024", event: "Delivered first enterprise AI chatbot processing 10,000+ conversations monthly" },
  { year: "2025", event: "Launched outcome-based development model — clients only pay for results" },
  { year: "2021", event: "Scaling to 13 team members across 7 countries; fractional AI developers in high demand" },
];

/* ------------------------------------------------------------------ */
/*  Avatar with fallback                                               */
/* ------------------------------------------------------------------ */
function TeamAvatar({ name, image }: { name: string; image: string }) {
  const [failed, setFailed] = useState(false);
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("");

  if (failed) {
    return (
      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-accent/30 to-accent-warm/20 flex items-center justify-center text-accent/60 text-xl font-bold">
        {initials}
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={image}
      alt={name}
      width={96}
      height={96}
      className="relative rounded-full object-cover w-24 h-24"
      onError={() => setFailed(true)}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function AboutContent() {
  return (
    <div className="pt-20">
      {/* ============================================================= */}
      {/*  HERO                                                          */}
      {/* ============================================================= */}
      <section className="relative overflow-hidden section-padding">
        {/* Background blurs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl" />

        <div className="container-wide mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <Sparkles size={16} className="text-accent" />
              <span className="text-accent text-sm font-medium">
                Est. 2015 &middot; 13 People &middot; 7 Countries
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              We&apos;re the{" "}
              <span className="gradient-text">AI team</span> your
              business deserves
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              AdmireTech is a globally distributed AI agency. We embed
              engineers, data scientists, and strategists directly into your
              workflow — so you get cutting-edge AI without the overhead of
              building an in-house team.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <CalBookingButton className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors group">
                Book a Free Strategy Call
                <Calendar size={18} />
              </CalBookingButton>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/10 text-white font-semibold rounded-lg hover:bg-card transition-colors group"
              >
                Explore Services
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  STATS BAR                                                     */}
      {/* ============================================================= */}
      <section className="py-12 bg-background-secondary border-y border-white/5">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                {...fade(i * 0.1)}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon size={22} className="text-accent" />
                </div>
                <p className="text-3xl sm:text-4xl font-bold text-white">
                  {stat.value}
                </p>
                <p className="text-text-secondary text-sm mt-1">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  MISSION & STORY                                               */}
      {/* ============================================================= */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Mission */}
            <motion.div {...fade(0)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Target size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  Our Mission
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Democratise AI for{" "}
                <span className="gradient-text">every business</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                Most businesses know they need AI — they just don&apos;t know
                where to start. We exist to close that gap. Whether you&apos;re
                a fintech startup in Lagos, a manufacturer in Pune, or an
                enterprise in London, we make world-class AI accessible,
                affordable, and measurable.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  "Ship production-ready AI in weeks, not quarters",
                  "Only pay for outcomes that move your metrics",
                  "Get a dedicated team without the hiring headache",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="text-accent mt-0.5 flex-shrink-0"
                    />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Story */}
            <motion.div {...fade(0.15)}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <Clock size={14} className="text-accent" />
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">
                  Our Story
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                A decade of building,{" "}
                <span className="gradient-text">globally</span>
              </h2>
              <p className="text-text-secondary leading-relaxed text-lg">
                AdmireTech was incorporated in England in 2015 by Peter King
                with a clear thesis: brilliant tech talent exists everywhere,
                but most agencies only hire locally. What started as a
                boutique development consultancy grew into a remote-first
                operation spanning Lagos, Pune, and London — and in 2021
                we went all-in on AI.
              </p>
              <p className="text-text-secondary leading-relaxed text-lg mt-4">
                Today, after 10+ years of building, we&apos;re a 13-person
                specialist team delivering AI chatbots, automation systems,
                and custom ML solutions across three continents. The best
                part? We&apos;re still just getting started.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  TIMELINE                                                      */}
      {/* ============================================================= */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide mx-auto">
          <motion.div {...fade(0)} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Journey
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              From a 2015 London startup to a global AI powerhouse — and counting.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

            {milestones.map((m, i) => (
              <motion.div
                key={`${m.year}-${i}`}
                {...fade(i * 0.08)}
                className={`relative flex items-start gap-6 mb-10 md:mb-12 ${
                  i % 2 === 0
                    ? "md:flex-row md:text-right"
                    : "md:flex-row-reverse md:text-left"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent ring-4 ring-background-secondary z-10 mt-1.5" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                    i % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <span className="inline-block text-accent font-bold text-sm mb-1">
                    {m.year}
                  </span>
                  <p className="text-text-secondary leading-relaxed">
                    {m.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  VALUES                                                        */}
      {/* ============================================================= */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div {...fade(0)} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What We Stand For
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              Six principles that shape every decision, every line of code,
              and every client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} {...fade(i * 0.08)}>
                <Card className="h-full">
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                    <v.icon size={28} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {v.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {v.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  TEAM GRID                                                     */}
      {/* ============================================================= */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide mx-auto">
          <motion.div {...fade(0)} className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Meet the Team
            </h2>
            <p className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto">
              13 specialists across 7 countries — united by a passion for
              AI that actually works.
            </p>
          </motion.div>

          {/* Department filter labels */}
          <motion.div {...fade(0.1)} className="flex flex-wrap justify-center gap-3 mb-12">
            {(
              [
                { label: "Leadership", count: 3 },
                { label: "Engineering & AI", count: 5 },
                { label: "Operations & Growth", count: 5 },
              ] as const
            ).map((dept) => (
              <span
                key={dept.label}
                className="px-4 py-2 rounded-full bg-card border border-white/5 text-text-secondary text-sm"
              >
                {dept.label}{" "}
                <span className="text-accent font-semibold">
                  ({dept.count})
                </span>
              </span>
            ))}
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {team.map((member, i) => (
              <motion.div key={member.name} {...fade(i * 0.05)}>
                <div className="group glass-card p-5 rounded-2xl text-center hover:border-accent/20 hover:-translate-y-1 transition-all duration-300">
                  {/* Avatar */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-accent-warm/20" />
                    <TeamAvatar name={member.name} image={member.image} />
                  </div>

                  {/* Info */}
                  <h3 className="text-white font-semibold text-sm group-hover:text-accent transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-accent/80 text-xs mt-1">{member.role}</p>
                  <p className="text-text-secondary text-xs mt-1.5 flex items-center justify-center gap-1">
                    <span>{member.flag}</span>
                    {member.country}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  GLOBAL MAP STRIP                                              */}
      {/* ============================================================= */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent-warm/5" />
        <div className="container-wide mx-auto relative z-10">
          <motion.div {...fade(0)} className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Where We Operate
            </h2>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {[
              { flag: "🇬🇧", city: "London", role: "HQ & Strategy" },
              { flag: "🇳🇬", city: "Lagos", role: "Engineering & Ops" },
              { flag: "🇮🇳", city: "Pune", role: "AI & ML Hub" },
              { flag: "🇵🇱", city: "Warsaw", role: "Engineering" },
              { flag: "🇻🇳", city: "Ho Chi Minh", role: "Data Science" },
              { flag: "🇵🇰", city: "Lahore", role: "Full Stack Dev" },
              { flag: "🇿🇦", city: "Cape Town", role: "Product & Accounts" },
            ].map((loc, i) => (
              <motion.div
                key={loc.city}
                {...fade(i * 0.08)}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card/60 border border-white/5"
              >
                <span className="text-2xl">{loc.flag}</span>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {loc.city}
                  </p>
                  <p className="text-text-secondary text-xs">{loc.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================= */}
      {/*  WHY ADMIRETCH — Social Proof CTA                              */}
      {/* ============================================================= */}
      <section className="section-padding bg-background-secondary">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fade(0)}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Why businesses choose{" "}
                <span className="gradient-text">AdmireTech</span>
              </h2>
              <div className="space-y-5">
                {[
                  {
                    icon: TrendingUp,
                    title: "Outcome-based pricing",
                    desc: "You only pay when we hit agreed KPIs. If we don't deliver, you don't pay.",
                  },
                  {
                    icon: Clock,
                    title: "First prototype in 2 weeks",
                    desc: "No 6-month scoping phases. We ship a working AI demo within your first sprint.",
                  },
                  {
                    icon: Users,
                    title: "Your own AI team, instantly",
                    desc: "Skip 6 months of recruiting. Get a fractional CTO, ML engineers, and PMs on day one.",
                  },
                  {
                    icon: Globe2,
                    title: "Follow-the-sun delivery",
                    desc: "With teams in 3 time zones, your project advances 16+ hours a day.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    {...fade(i * 0.1)}
                    className="flex items-start gap-4"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <item.icon size={20} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-text-secondary text-sm mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div {...fade(0.2)}>
              <div className="relative rounded-3xl bg-gradient-to-br from-accent/20 via-card to-accent-warm/10 border border-accent/20 p-8 sm:p-10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    Ready to add AI to your roadmap?
                  </h3>
                  <p className="text-text-secondary mt-3 leading-relaxed">
                    Book a free 30-minute strategy call. We&apos;ll audit your
                    current stack, identify your highest-ROI AI opportunity,
                    and map out a 90-day action plan — no strings attached.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <CalBookingButton className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors group">
                      Book Your Free Call
                      <Calendar size={18} />
                    </CalBookingButton>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/[0.06] border border-white/10 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors group"
                    >
                      Send a Message
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs text-text-secondary">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-accent" />
                      Free consultation
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-accent" />
                      No obligation
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 size={14} className="text-accent" />
                      90-day action plan
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
