"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Calendar,
  Clock,
  Tag,
  MapPin,
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  BookOpen,
  Rocket,
  FileText,
  Users,
  BarChart3,
  Globe,
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
    q: "What does an AI Technical Product Manager actually do?",
    a: "An AI Technical Product Manager bridges the gap between business problems and technical AI solutions. They define requirements, manage stakeholders, run discovery, oversee delivery, and ensure AI systems behave as intended — without writing the code themselves. In AI projects specifically, they also manage uncertainty, set realistic expectations around model behaviour, and build monitoring and feedback loops post-launch.",
  },
  {
    q: "What technical skills does an AI product manager need?",
    a: "You need enough technical depth to have meaningful conversations with engineers: reading API responses, understanding the difference between fine-tuning and RAG (retrieval-augmented generation), reading pull requests for compliance or privacy concerns, and grasping prompt engineering fundamentals. You don't need to be an ML engineer, but surface-level understanding isn't enough to do the job well.",
  },
  {
    q: "How do you manage AI projects across different time zones?",
    a: "Identify the overlap window between all time zones — often just 1–2 hours — and protect it fiercely for live collaboration. For everything else, invest heavily in async communication: detailed PRDs, written decision logs, and clear ticket descriptions. Remote AI project management works best when documentation is a first-class deliverable, not an afterthought.",
  },
  {
    q: "Why do AI projects fail?",
    a: "Common causes include poor data quality, misaligned stakeholder expectations, insufficient post-launch monitoring, scope creep from chasing technical perfection, and lack of a human-in-the-loop checkpoint for edge cases. Discovery phase failures — where the real business problem isn't properly identified — are also a leading culprit.",
  },
  {
    q: "How is AI product management different from traditional product management?",
    a: "AI product management involves managing uncertainty in a way traditional PM does not. AI systems can hallucinate, drift over time, and behave unpredictably in edge cases. This means AI PMs must build feedback loops and monitoring into every project from the start. Expectation management with non-technical stakeholders is also a significantly larger and more continuous part of the role.",
  },
];

const lessons = [
  {
    number: "01",
    icon: BarChart3,
    title: "Data quality is 80% of your AI problem",
    body: "If the data going in is a mess, the AI output will be a creative mess. Clean, structured, well-labelled data is the unsexy foundation of every good AI product. Prioritise it early or pay for it later.",
  },
  {
    number: "02",
    icon: Users,
    title: "Stakeholders will anthropomorphise the AI",
    body: "They will say it 'wants' to do things, that it 'feels' certain ways. This is human and charming — and also a source of incorrect expectations. Gently, patiently, repeatedly: it's a language model.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch is the beginning, not the end",
    body: "AI products need monitoring, feedback loops, and iteration after go-live. Build this into your project plan from day one. Models drift. Usage patterns surprise you. That's not failure — it's the job.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "The best prompt engineers aren't always the developers",
    body: "Some of the best prompts I've seen came from someone in operations who just knew the process inside out. Involve subject matter experts in prompt design — their domain knowledge is irreplaceable.",
  },
  {
    number: "05",
    icon: FileText,
    title: "Document everything, obsessively",
    body: "Decisions, tradeoffs, rationale — write it all down. Six months after launch, someone will ask why you made a certain architectural choice. 'We thought it was best at the time' is not an answer.",
  },
];

export function AIProductManagementContent() {
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
            AI Product Management
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            6 May 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            9 min read
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin size={14} />
            Johannesburg, South Africa
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          I&apos;ve Managed 15+ AI Projects From South Africa.{" "}
          <span className="text-accent">Here&apos;s What Nobody Tells You.</span>
        </h1>

        {/* Author chip */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center shrink-0 font-bold text-white text-sm">
            KS
          </div>
          <div>
            <p className="text-sm font-medium text-white">Kgomotso Senanya</p>
            <p className="text-xs text-text-secondary">
              Technical Product Manager &middot; AdmireTech &middot; Published 6
              May 2026
            </p>
          </div>
        </div>

        {/* TL;DR */}
        <div className="rounded-xl bg-card border border-white/5 p-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-3">
            TL;DR — Key Takeaways
          </p>
          <ul className="space-y-2">
            {[
              "AI product management is fundamentally about managing uncertainty, not just timelines.",
              "The problem your client describes is rarely the real problem. Structured discovery is non-negotiable.",
              "Expectation management with non-technical stakeholders is half the job in AI projects.",
              "Remote AI project management across time zones only works with obsessive async documentation.",
              "A technical PM who can't read a pull request or understand RAG vs. fine-tuning is leaving value on the table.",
              "Shipping is the skill. Perfect AI systems that never launch help no one.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-text-secondary leading-relaxed">
                <CheckCircle2 size={15} className="text-accent mt-0.5 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">

        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            It&apos;s 6:47am in Johannesburg. My coffee is still brewing, my cat is
            sitting on my laptop, and somewhere across the ocean, a client in London
            is in a Monday morning standup asking why the AI chatbot said something
            unhinged to one of their customers at 3am.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This is my life as a Technical Product Manager at{" "}
            <Link href="/services" className="text-accent hover:text-accent-warm transition-colors">
              AdmireTech
            </Link>
            . And honestly? I wouldn&apos;t trade it for anything. Well. Most days.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Over the past few years, I&apos;ve managed{" "}
            <strong className="text-white">AI projects across three continents</strong>:
            London, Pune, and Lagos. Custom AI chatbots, automation pipelines, full-stack
            applications with AI baked in, AI strategy engagements for clients who&apos;d
            never used the word &ldquo;prompt&rdquo; before. You name it, I&apos;ve probably
            shipped it, broken it, fixed it at 11pm, and shipped it again.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This post is everything I wish someone had told me before I started. No
            fluff, no corporate-speak, no slide deck. Just real lessons from the trenches
            of <strong className="text-white">AI product management</strong>.
          </p>
        </motion.section>

        {/* Section 1 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What AI Product Management Actually Is (And Why It&apos;s Harder Than It Looks)
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            If you Google &ldquo;Technical Product Manager,&rdquo; you&apos;ll get a thousand
            job descriptions that make it sound like you&apos;re half engineer, half psychic.
            In <strong className="text-white">AI product management</strong>, that&apos;s
            surprisingly close to true.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            A Technical PM bridges the gap between the business problem and the technical AI
            solution. You&apos;re not writing the code — but you need to understand it well
            enough to ask the right questions, spot when something is technically possible but
            practically unhinged, and translate between the developer saying{" "}
            <em className="text-white">&ldquo;we need to fine-tune the embeddings&rdquo;</em>{" "}
            and the client saying{" "}
            <em className="text-white">&ldquo;I just want my chatbot to stop calling customers &lsquo;dear.&rsquo;&rdquo;</em>
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            In AI specifically, the stakes are higher. AI systems can behave unexpectedly.
            They hallucinate. They make confident-sounding mistakes. They surface edge cases
            you didn&apos;t anticipate because humans are wonderfully unpredictable.{" "}
            <strong className="text-white">
              Managing AI projects means managing not just timelines and stakeholders, but
              uncertainty itself.
            </strong>{" "}
            And no, your Gantt chart is not prepared for that.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5 mb-6">
            <p className="text-white font-semibold text-lg leading-snug italic mb-2">
              &ldquo;Managing AI projects means managing not just timelines and stakeholders,
              but uncertainty itself. And no, your Gantt chart is not prepared for that.&rdquo;
            </p>
            <cite className="text-xs text-text-secondary uppercase tracking-wider not-italic">
              — Kgomotso Senanya, TPM, AdmireTech
            </cite>
          </blockquote>
        </motion.section>

        {/* Lesson 1 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lesson 1: The Real Problem in Every AI Project Is Buried Under the First Answer
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            I&apos;ve lost count of how many AI projects started with a brief that said
            &ldquo;we need a chatbot.&rdquo; Full stop. Just those five words. No mention of
            what the chatbot should actually do, who it&apos;s talking to, what happens when it
            doesn&apos;t know the answer, or — my personal favourite — what success even looks like.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            On one of my earliest{" "}
            <Link href="/services/ai-chatbots" className="text-accent hover:text-accent-warm transition-colors">
              AI chatbot projects
            </Link>
            , a client told me they wanted a chatbot to &ldquo;handle customer queries.&rdquo;
            Three discovery calls later, we found out they actually wanted to reduce the load
            on a single, overworked customer service rep named Dave who was handling 400
            tickets a day alone.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            <strong className="text-white">Dave was the real brief.</strong>
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            We built around Dave. We mapped his most common ticket types, trained the AI on
            his actual response style (with his blessing and considerable amusement), and
            deployed a solution that automated 68% of queries in the first month. Dave cried.
            Good tears.
          </p>

          {/* Callout */}
          <div className="rounded-xl bg-accent/5 border border-accent/20 p-6">
            <div className="flex items-start gap-3">
              <Lightbulb size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  TPM Tip
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  Always run a structured discovery phase before writing a single line of
                  code or workflow. Ask &ldquo;why&rdquo; at least three times. The real
                  problem lives underneath the first answer.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Lesson 2 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lesson 2: Managing AI Client Expectations Is Half the Work
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            The hype around AI is real. Clients have seen the demos, they&apos;ve read the
            headlines, they half-expect you to hand them something that can predict the future
            and make their tea.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            A significant part of{" "}
            <strong className="text-white">AI product management</strong> is expectation
            management — and most people underestimate how much.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            On one engagement, a client was convinced their new AI automation would be
            &ldquo;like having five extra employees.&rdquo; The results were genuinely
            impressive — we saved them about 180 hours a month in manual data processing.
            But in the first week, they called in a panic because the model had classified one
            document incorrectly. <em className="text-white">One.</em> Out of thousands.
          </p>
          <p className="text-text-secondary leading-relaxed">
            This is why I now dedicate an entire section of every project kickoff to what I
            call the &ldquo;Realistic AI Conversation.&rdquo; We discuss confidence
            thresholds, human-in-the-loop checkpoints, and the difference between &ldquo;the
            AI is wrong&rdquo; and &ldquo;the AI is learning.&rdquo; It saves approximately
            47 panicked WhatsApp messages per project.
          </p>
        </motion.section>

        {/* Lesson 3 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lesson 3: Remote AI Project Management Across Time Zones Will Test Your Soul
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Working from Johannesburg while coordinating development teams in Pune and
            stakeholders in London is an exercise in creative time management. SAST is UTC+2.
            London is UTC+1. Pune is UTC+5:30. Lagos is UTC+1.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            In practice, this means there&apos;s approximately a two-hour window each morning
            where I can speak to everyone simultaneously. I guard those two hours like
            they&apos;re the last charger at an airport.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            The silver lining: async communication forced us to become exceptionally good at
            written handoffs. Every decision gets documented. Every blocker gets logged. When
            you can&apos;t tap someone on the shoulder, you learn to write things down
            properly. Our PRDs started winning quiet admiration from developers who told me
            they&apos;d never seen tickets so clear. That&apos;s the highest compliment
            I&apos;ve ever received in my career.
          </p>

          {/* Pull quote */}
          <blockquote className="border-l-4 border-accent bg-accent/5 rounded-r-xl px-6 py-5">
            <p className="text-white font-semibold text-lg leading-snug italic mb-2">
              &ldquo;There is a two-hour window each morning where I can speak to everyone
              simultaneously. I guard those two hours like they&apos;re the last charger at
              an airport.&rdquo;
            </p>
            <cite className="text-xs text-text-secondary uppercase tracking-wider not-italic">
              — Kgomotso on remote AI project management
            </cite>
          </blockquote>
        </motion.section>

        {/* Lesson 4 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lesson 4: A Technical Product Manager Who Can&apos;t Read Code Is Leaving Value
            on the Table
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            I want to be direct here, especially for anyone looking to break into{" "}
            <strong className="text-white">
              technical product management for AI
            </strong>
            : you need to go deeper than &ldquo;I understand concepts at a high level.&rdquo;
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            You don&apos;t need to be a machine learning engineer. But you should be able to
            look at an API response and understand what&apos;s happening. You should know the
            difference between fine-tuning and retrieval-augmented generation (RAG) — and
            when each one is the right call. You should be able to read a pull request and
            spot whether it touches something the client&apos;s compliance team will care about.
          </p>
          <p className="text-text-secondary leading-relaxed mb-6">
            On one project, I flagged a concern during a code review about how user data was
            being passed to a third-party model. The developer hadn&apos;t thought about it
            from a privacy angle — not because they were careless, but because that&apos;s
            not where their brain naturally goes. Catching that saved us from a very difficult
            conversation with a client who had GDPR obligations.
          </p>

          {/* Callout */}
          <div className="rounded-xl bg-accent/5 border border-accent/20 p-6">
            <div className="flex items-start gap-3">
              <BookOpen size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                  Resources That Actually Help
                </p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  If you&apos;re building this skill: learn enough Python to read AI code,
                  understand REST APIs, study how LLMs work at a conceptual level (Andrej
                  Karpathy&apos;s YouTube series is brilliant for this), and get comfortable
                  with prompt engineering fundamentals. It will change how you work.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Lesson 5 */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Lesson 5: In AI Product Management, Shipping Is the Skill
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Across every AI project I&apos;ve managed — chatbots, automation tools, custom AI
            integrations, ML-powered dashboards — one truth is constant: a perfect plan that
            doesn&apos;t ship is worth nothing.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            I&apos;ve seen AI projects stall because a team was perfecting an accuracy metric
            the end user would never notice. I&apos;ve seen projects delayed because someone
            wanted to explore a technically cooler approach when the straightforward one worked
            fine.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The job of a Technical PM is to protect the momentum of the team while protecting
            the quality of the outcome. You&apos;re the person who says:{" "}
            <em className="text-white">
              &ldquo;That&apos;s fascinating — let&apos;s put it in the backlog and ship what
              we have.&rdquo;
            </em>{" "}
            At AdmireTech, our outcome-based approach means we&apos;re always asking: does
            this decision get us closer to the result the client actually needs?
          </p>
        </motion.section>

        {/* Lessons grid */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            5 Things Managing AI Projects Teaches You That Nobody Puts in a Job Description
          </h2>
          <div className="grid gap-4">
            {lessons.map(({ number, icon: Icon, title, body }) => (
              <div
                key={number}
                className="bg-card border border-white/5 rounded-xl p-5 flex gap-4 items-start"
              >
                <span className="text-3xl font-bold text-accent/40 leading-none shrink-0 font-sans">
                  {number}
                </span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon size={15} className="text-accent" />
                    <h3 className="text-white font-semibold text-sm">{title}</h3>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* South Africa section */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            AI Product Management from South Africa: Why Location Is a Superpower
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Working in AI from South Africa in 2026 is genuinely exciting — and for reasons
            that go beyond what most people expect.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The continent is at a fascinating inflection point. There&apos;s real demand for{" "}
            <Link href="/blog" className="text-accent hover:text-accent-warm transition-colors">
              AI solutions built with African markets in mind
            </Link>
            , not just adapted from a Western template. Language diversity alone is a serious
            product challenge: South Africa has 11 official languages. When you&apos;re
            building AI tools for people across the African continent, suddenly all the
            assumptions baked into English-first models look a lot more complicated.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            <strong className="text-white">
              This isn&apos;t an edge case. It&apos;s a billion-person opportunity.
            </strong>
          </p>
          <p className="text-text-secondary leading-relaxed">
            Being based here — close to the kinds of businesses and challenges that AI could
            genuinely transform — makes this work feel meaningful. Every project I ship has
            the potential to make something easier for someone who&apos;s been doing it the
            hard way for too long.
          </p>
        </motion.section>

        {/* Closing */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Should You Pursue AI Product Management? My Honest Advice.
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            It&apos;s one of the most demanding and most rewarding roles I can imagine.
            You&apos;ll need to be technically curious, commercially sharp, endlessly patient
            with ambiguity, and genuinely good at working with people across wildly different
            contexts and time zones.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            You&apos;ll have days where everything ships perfectly and the client sends you a
            voice note of pure joy. You&apos;ll have days where an AI model does something
            baffling at 2am and you&apos;re Googling error messages in your pyjamas.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            <strong className="text-white">Both of those are the job.</strong>
          </p>
          <p className="text-text-secondary leading-relaxed">
            At AdmireTech, we work on problems that genuinely matter —{" "}
            <Link href="/services" className="text-accent hover:text-accent-warm transition-colors">
              automating the things that drain people&apos;s time
            </Link>
            , building AI tools that help businesses grow in ways they couldn&apos;t before,
            and doing it with teams spread across three continents who are all genuinely
            brilliant at what they do.
          </p>
        </motion.section>

        {/* FAQ */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Frequently Asked Questions About AI Product Management
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-card border border-white/5 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={openFaq === i}
                >
                  <span className="text-white font-medium text-sm leading-snug">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={16}
                    className={`text-accent shrink-0 transition-transform duration-200 ${
                      openFaq === i ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5">
                    <p className="text-text-secondary text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Author bio */}
        <motion.section {...fade()} className="mb-8">
          <div className="bg-card border border-white/5 rounded-xl p-6 flex gap-4 items-start">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent to-accent-warm flex items-center justify-center shrink-0 font-bold text-white text-lg">
              KS
            </div>
            <div>
              <h4 className="text-white font-semibold mb-0.5">Kgomotso Senanya</h4>
              <p className="text-xs text-accent uppercase tracking-wider mb-3">
                Technical Product Manager &middot; AdmireTech &middot; Johannesburg, South Africa
              </p>
              <p className="text-text-secondary text-sm leading-relaxed">
                Kgomotso leads the delivery of AI chatbot, automation, and custom development
                projects across the UK, India, and Africa at AdmireTech. With experience
                across 15+ AI projects and a deep interest in how technology can serve
                African markets, she bridges the gap between engineering and business outcomes
                — one very thorough PRD at a time.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section {...fade()} className="mb-16">
          <div className="rounded-xl bg-gradient-to-br from-accent to-accent-warm p-8 text-center">
            <Globe size={28} className="text-white/70 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-white mb-2">
              Ready to Build Something with AI?
            </h3>
            <p className="text-white/80 text-sm mb-6 max-w-md mx-auto">
              We help businesses across London, Pune, Lagos and beyond transform with
              intelligent, outcome-driven AI solutions.
            </p>
            <CalBookingButton className="inline-flex items-center gap-2 bg-white text-accent font-semibold text-sm px-6 py-3 rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-150">
              Book a Free Consultation
              <ArrowRight size={15} />
            </CalBookingButton>
          </div>
        </motion.section>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pb-16">
          {[
            "AI Product Management",
            "Technical Product Manager",
            "Managing AI Projects",
            "Remote AI Project Management",
            "AI Chatbot Projects",
            "AI Automation",
            "South Africa Tech",
            "AI Agency",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs uppercase tracking-wider text-text-secondary bg-card border border-white/5 px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </div>
  );
}
