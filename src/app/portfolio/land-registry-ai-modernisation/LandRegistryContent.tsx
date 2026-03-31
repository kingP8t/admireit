"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  Monitor,
  Clock,
  CheckCircle,
  ChevronDown,
  Search,
  Globe,
  FolderOpen,
  Timer,
  AlertTriangle,
  DollarSign,
  Laptop,
  Layers,
  ScanSearch,
  Layout,
  GraduationCap,
  Target,
} from "lucide-react";
import { Card } from "@/components/ui/Card";
import { CalBookingButton } from "@/components/CalBookingButton";

/* ── Data ─────────────────────────────────────────── */

const metaChips = [
  { icon: MapPin, label: "Nigeria \u00B7 State Government" },
  { icon: Monitor, label: "Land Admin \u00B7 GovTech \u00B7 GIS" },
  { icon: Clock, label: "18\u201324 Month Engagement" },
  { icon: CheckCircle, label: "Ministry of Lands & Urban Dev." },
];

const stats = [
  { value: "60\u201380%", label: "Faster title searches" },
  { value: "Months\u2192Days", label: "CTC turnaround" },
  { value: "Real-time", label: "Fraud detection" },
  { value: "3 Phases", label: "Structured rollout" },
];

const painPoints = [
  {
    icon: FolderOpen,
    title: "Paper everywhere",
    desc: "Decades of land records living in physical files \u2014 different formats, different offices, and things going missing all the time.",
  },
  {
    icon: Timer,
    title: "Painfully slow processes",
    desc: "A straightforward title search or consent application could drag on for months. Nobody could tell applicants where their request actually was.",
  },
  {
    icon: AlertTriangle,
    title: "Fraud and double allocations",
    desc: "Multiple people holding titles to the same parcel. Forged documents that nobody caught until a dispute landed in court.",
  },
  {
    icon: DollarSign,
    title: "Revenue slipping through the cracks",
    desc: "Properties not in any digital system could not be taxed. Ground rent went uncollected. The state\u2019s revenue was well below potential.",
  },
  {
    icon: Laptop,
    title: "Limited digital capacity",
    desc: "Staff knew the land business inside out, but modern GIS, workflow automation, and AI were new territory.",
  },
];

const solutions = [
  {
    icon: Layers,
    num: "01",
    title: "Digital Land Registry Platform",
    description:
      "Central system bringing together parcel maps and survey plans in a proper GIS, scanned and indexed legacy documents, and structured title records all linked to unique parcel IDs. Connected to tax, planning, and finance systems through secure APIs.",
    tags: ["GIS", "Platform Engineering"],
  },
  {
    icon: ScanSearch,
    num: "02",
    title: "Legacy Data Capture & Cleansing",
    description:
      "High-volume scanning with OCR, quality assurance workflows, and georeferencing of existing survey plans against modern base maps. AI-assisted validation to flag inconsistent parcel sizes, duplicate title numbers, and suspicious overlaps hidden in the paper system for years.",
    tags: ["OCR & Scanning", "Georeferencing", "AI Validation"],
  },
  {
    icon: Search,
    num: "03",
    title: "AI-Powered Title Search & Fraud Detection",
    description:
      "AI engine that searches across names, plot numbers, coordinates, and historical records \u2014 what used to take days now takes seconds. Fraud and anomaly detection models scan the entire registry for red flags: multiple allocations, suspicious ownership chains, and mismatches between survey data and documents.",
    tags: ["Machine Learning", "Anomaly Detection"],
  },
  {
    icon: Layout,
    num: "04",
    title: "Online Services Portal",
    description:
      "Public-facing portal where citizens, lawyers, surveyors, and banks can apply for new titles, consent, or CTCs online and track applications in real time. Integrates with payment gateways and supports role-based access for different stakeholders.",
    tags: ["UX & Portal", "Payments Integration"],
  },
  {
    icon: GraduationCap,
    num: "05",
    title: "Change Management & Capacity Building",
    description:
      "Process redesign with the Ministry, hands-on training for registry, survey, and ICT staff, and stakeholder engagement with lawyers, estate agents, surveyors, and community leaders. Aligned with federal digitisation initiatives.",
    tags: ["Policy & Process", "Training"],
  },
];

const phases = [
  {
    num: 1,
    title: "Diagnostic & Roadmap",
    duration: "Months 1\u20134",
    desc: "Mapped every business process end to end, reviewed the legal and regulatory landscape, audited existing systems and data, and prioritised quick wins \u2014 CTC issuance and title search.",
  },
  {
    num: 2,
    title: "Core Platform & Pilot",
    duration: "Months 5\u201312",
    desc: "Deployed the registry platform and GIS in a pilot area \u2014 the state capital and high-demand urban LGAs. Digitised highest-value records first and got AI title search running for internal staff.",
  },
  {
    num: 3,
    title: "Scale-Up & AI Enrichment",
    duration: "Month 12+",
    desc: "State-wide data capture. Integration with tax and planning systems. Fraud detection switched on. Public portal opened. API access went live for banks and financial institutions.",
  },
];

const outcomes = [
  {
    category: "Speed",
    color: "accent",
    items: [
      "Title search time cut by 60\u201380% in digitised areas \u2014 from days of manual digging to seconds with AI-assisted search",
      "CTC and consent turnaround dropped from months to days, with full status tracking throughout",
    ],
  },
  {
    category: "Integrity & Trust",
    color: "green",
    items: [
      "Significant drop in duplicate allocations and much easier detection of forged documents thanks to AI anomaly detection",
      "Banks and investors gained confidence \u2014 with verifiable digital titles, lenders became far more willing to accept land as collateral",
    ],
  },
  {
    category: "Revenue & Formalisation",
    color: "amber",
    items: [
      "Thousands of properties brought into the formal system, expanding the tax base and aligning with federal revenue goals",
      "Better visibility of delinquent ground rent and fees, enabling targeted enforcement and improved compliance",
    ],
  },
  {
    category: "Foundation for What\u2019s Next",
    color: "blue",
    items: [
      "Digital registry and APIs created a platform for blockchain-backed title pilots, national land system integration, and data-driven urban planning",
    ],
  },
];

const techStack = [
  "Geographic Information Systems (GIS)",
  "Machine Learning",
  "Optical Character Recognition",
  "Anomaly Detection",
  "Cloud Platform",
  "Secure API Design",
  "Georeferencing",
  "Payment Gateway Integration",
  "Workflow Automation",
  "Role-Based Access Control",
  "Data Migration & Cleansing",
  "Change Management",
  "Stakeholder Training",
];

const faqs = [
  {
    q: "How long does it take to digitise a state land registry in Nigeria?",
    a: "A phased approach typically takes 18 to 24 months to reach state-wide coverage. The first phase (diagnostic and roadmap) takes 3 to 4 months, a core platform pilot in high-priority areas takes another 6 to 8 months, and full scale-up with AI enrichment follows from month 12 onwards. Early wins like faster title searches and CTC processing are visible within the first 6 months.",
  },
  {
    q: "Can AI really detect land fraud in Nigerian registries?",
    a: "Yes. AI anomaly detection models can scan entire registries for red flags that manual checks miss \u2014 including multiple allocations on the same parcel, suspicious ownership chains, mismatches between survey coordinates and title documents, and patterns consistent with forged documents. These models improve over time as more data is digitised.",
  },
  {
    q: "What technologies are used to modernise a land registry?",
    a: "A modern land registry combines Geographic Information Systems (GIS) for spatial data, Optical Character Recognition (OCR) for digitising paper records, machine learning for title search and fraud detection, workflow automation for application processing, secure APIs for integration with tax and financial systems, and cloud infrastructure for reliability and scalability.",
  },
  {
    q: "How does a digital land registry increase state government revenue?",
    a: "When properties are brought into a searchable digital system, the state gains visibility over ground rent, consent fees, and property taxes that were previously uncollectable. Digital registries also enable better enforcement of payment compliance and reduce revenue leakage from unregistered properties.",
  },
  {
    q: "Does AdmireTech work with government organisations on AI projects?",
    a: "Yes. AdmireTech has experience partnering with public sector organisations on AI and digital transformation projects across Nigeria and other developing markets. Our approach combines technical delivery with change management and capacity building to ensure sustainable adoption.",
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

export function LandRegistryContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div>
      {/* ═══ HERO ═══ */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden pb-16 pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-accent-warm/5 rounded-full blur-3xl" />

        <div className="container-wide relative z-10">
          <motion.div {...fade()}>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.p
            {...fade(0.05)}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-4"
          >
            Case Study &middot; Public Sector &amp; GovTech
          </motion.p>

          <motion.h1
            {...fade(0.1)}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight max-w-4xl mb-6"
          >
            AI-Powered Land Registry Modernisation for a{" "}
            <span className="text-accent">Nigerian State Government</span>
          </motion.h1>

          <motion.p
            {...fade(0.15)}
            className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed"
          >
            AdmireTech partnered with a State Ministry of Lands to replace
            decades of paper files with an AI-enabled digital land registry
            &mdash; cutting title search times by up to 80%, catching fraud that
            manual checks had missed for years, and bringing thousands of
            properties into a system that actually works.
          </motion.p>

          {/* Meta chips */}
          <motion.div {...fade(0.2)} className="flex flex-wrap gap-3">
            {metaChips.map((chip) => (
              <span
                key={chip.label}
                className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <chip.icon className="w-3.5 h-3.5 text-accent" />
                {chip.label}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ STATS ═══ */}
      <section className="section-padding pt-0">
        <div className="container-wide">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                {...fade(i * 0.05)}
                className="bg-surface text-center py-8 px-4"
              >
                <p className="text-2xl md:text-3xl font-bold text-accent font-mono mb-1">
                  {s.value}
                </p>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ THE CHALLENGE ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            The Challenge
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-6"
          >
            A land registry stuck in the last century
          </motion.h2>
          <motion.div {...fade(0.1)} className="max-w-3xl space-y-4 mb-10">
            <p className="text-gray-300 leading-relaxed">
              If you have ever tried to verify land ownership in a Nigerian
              state, you know the drill. You show up at the registry, someone
              disappears into a back room full of dusty binders, and &mdash; if
              you are lucky &mdash; they come back a few weeks later with an
              answer. If you are not lucky, the file is &ldquo;missing.&rdquo;
              Or worse, two people hold valid-looking titles for the same plot
              of land.
            </p>
            <p className="text-gray-400 leading-relaxed">
              That was the reality for this state&apos;s Ministry of Lands.
              Records were paper-based, scattered across registries, survey
              offices, and GIS units. Processing a simple title search or
              Certified True Copy took months. Citizens were frustrated,
              investors were hesitant, and the state was leaving serious money
              on the table.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The Ministry needed a technology partner who understood both the
              tech and the terrain &mdash; someone who could deliver a modern
              system without overwhelming existing institutions.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {painPoints.map((pain, i) => (
              <motion.div key={pain.title} {...fade(i * 0.05)}>
                <Card className="p-6 h-full">
                  <pain.icon className="w-8 h-8 text-accent mb-4" />
                  <h3 className="text-white font-bold mb-2">{pain.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {pain.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SOLUTION ═══ */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            What We Built
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-4"
          >
            Five layers of a land registry that actually works
          </motion.h2>
          <motion.p
            {...fade(0.1)}
            className="text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            We did not try to replace the Ministry&apos;s expertise. What we did
            was give them the digital infrastructure and{" "}
            <Link
              href="/services/ai-automation"
              className="text-accent hover:underline"
            >
              AI automation tools
            </Link>{" "}
            to do their jobs faster, with more confidence, and at scale.
          </motion.p>

          <div className="space-y-4">
            {solutions.map((sol, i) => (
              <motion.div key={sol.title} {...fade(i * 0.05)}>
                <Card className="p-8">
                  <div className="flex gap-5 items-start">
                    <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-mono text-sm font-bold">
                        {sol.num}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-2">
                        {sol.title}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed mb-3">
                        {sol.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {sol.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-semibold uppercase tracking-wider text-accent bg-accent/10 px-2.5 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ IMPLEMENTATION PHASES ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            Implementation
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-4"
          >
            A phased rollout built for the real world
          </motion.h2>
          <motion.p
            {...fade(0.1)}
            className="text-gray-400 max-w-2xl mb-10 leading-relaxed"
          >
            We did not try to digitise the whole state on day one. We broke it
            into phases that delivered visible wins early and built confidence
            for the bigger changes. This is the same{" "}
            <Link
              href="/services/outcome-based-development"
              className="text-accent hover:underline"
            >
              outcome-based approach
            </Link>{" "}
            we use across all our engagements.
          </motion.p>

          <div className="relative pl-8 border-l-2 border-accent/20 space-y-10">
            {phases.map((phase, i) => (
              <motion.div key={phase.num} {...fade(i * 0.1)} className="relative">
                <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-accent border-[3px] border-black" />
                <p className="text-xs font-mono font-bold text-accent mb-1">
                  {phase.duration}
                </p>
                <h3 className="text-white font-bold mb-2">
                  Phase {phase.num}: {phase.title}
                </h3>
                <p className="text-sm text-gray-400 max-w-xl leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ OUTCOMES ═══ */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            Results &amp; Impact
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-10"
          >
            What changed in 18&ndash;24 months
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((group, gi) => (
              <motion.div key={group.category} {...fade(gi * 0.05)}>
                <Card className="p-7 h-full">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
                    {group.category}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item, ii) => (
                      <div key={ii} className="flex gap-3 items-start">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-400 leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TECH STACK ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            Technologies &amp; Capabilities
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-8"
          >
            What we brought to the table
          </motion.h2>

          <motion.div {...fade(0.1)} className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-sm text-gray-400 bg-white/5 border border-white/10 px-4 py-2 rounded-lg hover:border-accent/30 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══ WHY IT MATTERS ═══ */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-wide">
          <motion.p
            {...fade()}
            className="text-xs font-bold tracking-[.15em] uppercase text-accent mb-3"
          >
            Why This Matters
          </motion.p>
          <motion.h2
            {...fade(0.05)}
            className="text-2xl md:text-4xl font-extrabold text-white mb-6"
          >
            Land is the foundation &mdash; literally
          </motion.h2>

          <motion.div
            {...fade(0.1)}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 max-w-3xl space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              For state governments across Nigeria, land is one of the most
              powerful tools for development. But that is only true when the
              records are secure, searchable, and trusted. When they are not,
              fraud thrives, investors stay away, and billions in revenue go
              uncollected.
            </p>
            <p className="text-gray-400 leading-relaxed">
              This project proved that it is possible to move from a paper-based,
              fragmented registry to a modern, AI-enabled land information system
              &mdash; without overwhelming existing institutions. The combination
              of GIS, workflow automation,{" "}
              <Link
                href="/services/ai-consulting"
                className="text-accent hover:underline"
              >
                AI consulting
              </Link>
              , and genuine change management is what made this work.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══ RELATED WORK ═══ */}
      <section className="section-padding">
        <div className="container-wide">
          <motion.h2
            {...fade()}
            className="text-xl font-bold text-white mb-6"
          >
            Related Work
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/portfolio/mfb-ai-transformation"
              className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-xs text-accent font-semibold mb-1">
                Fintech &middot; Nigeria
              </p>
              <p className="text-white font-medium text-sm">
                AI-Driven Transformation for a Nigerian Microfinance Bank
              </p>
            </Link>
            <Link
              href="/portfolio/rural-energy-ai-platform"
              className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-xs text-accent font-semibold mb-1">
                Energy &middot; Pan-African
              </p>
              <p className="text-white font-medium text-sm">
                AI-Driven Operations for a Pan-African Rural Energy Provider
              </p>
            </Link>
            <Link
              href="/portfolio/warehouse-management-pwa"
              className="block bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-colors"
            >
              <p className="text-xs text-accent font-semibold mb-1">
                Logistics &middot; Operations
              </p>
              <p className="text-white font-medium text-sm">
                AI-Powered Warehouse Management Progressive Web App
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-wide max-w-3xl">
          <motion.h2
            {...fade()}
            className="text-2xl md:text-3xl font-extrabold text-white mb-8"
          >
            Frequently Asked Questions
          </motion.h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                {...fade(i * 0.05)}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="text-white font-medium pr-4">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-accent flex-shrink-0 transition-transform ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <motion.div
            {...fade()}
            className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 rounded-2xl p-8 md:p-12 text-center"
          >
            <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Facing a similar challenge?
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Whether it is land administration, public records, or any complex
              data system that is still running on paper and trust &mdash; our{" "}
              <Link
                href="/services/ai-consulting"
                className="text-accent hover:underline"
              >
                AI consulting
              </Link>{" "}
              and{" "}
              <Link
                href="/services/custom-development"
                className="text-accent hover:underline"
              >
                custom development
              </Link>{" "}
              team can help you turn complexity into a competitive advantage.
            </p>
            <CalBookingButton
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-black font-semibold px-8 py-3 rounded-full transition-colors"
              eventSlug="admireit-discovery-call"
            >
              <Target className="w-5 h-5" />
              Book a Free Consultation
            </CalBookingButton>
          </motion.div>
        </div>
      </section>

      {/* ═══ NEXT / PREV ═══ */}
      <section className="section-padding bg-white/[0.01]">
        <div className="container-wide flex flex-col sm:flex-row justify-between gap-4">
          <Link
            href="/portfolio/rural-energy-ai-platform"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Rural Energy AI Platform
          </Link>
          <Link
            href="/portfolio/mfb-ai-transformation"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors sm:ml-auto"
          >
            MFB AI Transformation
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
