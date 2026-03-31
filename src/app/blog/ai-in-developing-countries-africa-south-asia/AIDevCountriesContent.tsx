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
  Globe,
  Stethoscope,
  Sprout,
  Landmark,
  Headphones,
  TrendingUp,
  Smartphone,
  Users,
  DollarSign,
  Bot,
  Zap,
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
    q: "What is AI adoption like in developing countries in 2026?",
    a: "AI adoption in developing countries is growing faster than in many wealthy nations. India leads globally with 73% AI enthusiasm and over 162 million AI app downloads. In Africa, the AI market is growing at 27.4% annually and is expected to reach $16.53 billion by 2030. Countries like Nigeria, Kenya, and South Africa are seeing rapid adoption driven by young populations and mobile-first internet access.",
  },
  {
    q: "Why is Africa considered a frontier for AI businesses?",
    a: "Africa has the world\u2019s youngest population, a fast-growing mobile internet user base, and minimal legacy technology to hold businesses back. McKinsey estimates generative AI could unlock $61\u2013$103 billion in economic value across the continent. Major initiatives like the AI 10 Billion Initiative aim to create 40 million AI-related jobs by 2035.",
  },
  {
    q: "How can startups in emerging markets afford AI development?",
    a: "Development costs in emerging markets are significantly lower than in the West. Skilled AI developers in India and Nigeria work at rates of $15\u2013$40 per hour compared to $100\u2013$200+ in the US. Outcome-based development models, where you pay for results rather than hours, further reduce risk. Starting with a small MVP and iterating based on real user feedback is the most cost-effective approach.",
  },
  {
    q: "What industries in developing countries benefit most from AI?",
    a: "The biggest opportunities are in fintech and mobile money, healthcare, agriculture, e-commerce, and customer support. AI chatbots, fraud detection, crop prediction, and process automation are already delivering measurable results across Africa and South Asia.",
  },
  {
    q: "What is digital leapfrogging and how does it relate to AI?",
    a: "Digital leapfrogging is when developing countries skip older technologies and jump straight to the latest solutions. Just as Africa skipped landlines and went directly to mobile phones, many businesses in developing markets are bypassing traditional IT systems and adopting AI-first approaches from the start. This gives them a speed and cost advantage over businesses tied to legacy infrastructure.",
  },
];

const stats = [
  { value: "73%", label: "India AI adoption enthusiasm" },
  { value: "600%", label: "Nigeria YoY AI growth" },
  { value: "$103B", label: "AI value potential for Africa" },
  { value: "27.4%", label: "Africa AI market CAGR" },
];

const useCases = [
  {
    icon: Stethoscope,
    name: "Healthcare",
    desc: "AI-powered triage chatbots serving rural clinics where there is one doctor per 5,000 people.",
  },
  {
    icon: Sprout,
    name: "Agriculture",
    desc: "Crop disease detection, weather prediction, and irrigation optimisation for smallholder farmers.",
  },
  {
    icon: Landmark,
    name: "Financial Services",
    desc: "Fraud detection, identity verification, and serving millions of unbanked customers via mobile money.",
  },
  {
    icon: Headphones,
    name: "Customer Support",
    desc: "AI chatbots handling queries 24/7 at a fraction of the cost of hiring full support teams.",
  },
];

export function AIDevCountriesContent() {
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
            AI Adoption & Strategy
          </span>
          <span className="inline-flex items-center gap-1">
            <Calendar size={14} />
            17 March 2026
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock size={14} />
            8 min read
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Why Africa and South Asia Are the Next Frontiers for AI-Powered
          Businesses
        </h1>

        <div className="flex items-center gap-3 mt-4 mb-8">
          <img
            src="/images/team/peter-king.webp"
            alt="Peter King, CEO and CTO of AdmireTech"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium text-white">Peter King</p>
            <p className="text-xs text-gray-400">
              Serial Entrepreneur &middot; CEO & CTO, AdmireTech &middot;
              Published 17 March 2026
            </p>
          </div>
        </div>

        {/* Quick Answer Box */}
        <div className="rounded-xl bg-accent/5 border border-accent/20 p-6 mt-6">
          <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
            Quick Answer
          </p>
          <p className="text-text-secondary leading-relaxed text-sm sm:text-base">
            Africa and South Asia are the fastest-growing AI adoption markets in
            the world. India leads globally with 73% AI adoption enthusiasm,
            Nigeria saw 600% year-on-year AI growth, and McKinsey estimates
            generative AI could unlock $61&ndash;$103 billion in economic value
            across Africa alone. Young populations, mobile-first infrastructure,
            and the ability to skip legacy systems give these regions a unique
            advantage. The opportunity is not just in adopting AI &mdash; it is
            in building AI-powered solutions where competition is still thin and
            demand is exploding.
          </p>
        </div>
      </motion.header>

      {/* Article Body */}
      <article className="container-wide mx-auto px-6 max-w-4xl">
        {/* Introduction */}
        <motion.section {...fade()} className="mb-12">
          <p className="text-text-secondary leading-relaxed mb-4">
            I have spent most of my adult life between London and Lagos. I was
            born into a British-African household where two worlds met at the
            dinner table every evening &mdash; one rooted in tradition, one
            racing towards the future. That mix shaped how I see business,
            technology, and opportunity.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Over the past two decades, I have built, funded, and failed at more
            ventures than I care to admit. Some in the UK, some across West
            Africa, and a few in India. And if there is one thing I have learnt,
            it is this: the biggest opportunities rarely show up where everyone
            is already looking.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Right now, the world is looking at Silicon Valley, at London, at
            Beijing. And yes, those places matter. But the real frontier for
            AI-powered businesses? It is sitting right under our noses &mdash; in
            Lagos, Nairobi, Pune, Dhaka, and Accra.
          </p>
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
              <div className="text-xs sm:text-sm text-text-secondary">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* The Numbers Don't Lie */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Numbers Do Not Lie
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            If you still think AI is a rich-country game, the data says
            otherwise. According to Microsoft&rsquo;s 2025 Global AI Adoption
            Report, roughly one in six people on the planet now uses generative
            AI tools. Global adoption reached 16.3% of the working-age
            population by the second half of 2025.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            But here is the part that surprised me. The growth is not coming from
            New York or Berlin. The fastest adoption rates are in the Global
            South.
          </p>
          <ul className="space-y-3 text-text-secondary">
            {[
              "India leads the world with 73% AI adoption enthusiasm and over 162 million AI app downloads in 2025 \u2014 the highest of any country. Adoption growth in India is running at over four times the rate of high-income countries.",
              "Nigeria recorded 600% year-on-year growth in AI tool adoption, with 77% of online adults expressing excitement about AI technologies.",
              "Kenya reached a 42.1% ChatGPT usage rate among internet users, driven almost entirely by mobile access.",
              "Africa\u2019s AI market is growing at a compound annual growth rate of 27.4% and is projected to reach $16.53 billion by 2030. McKinsey estimates generative AI alone could unlock $61\u2013$103 billion in additional economic value across the continent.",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-text-secondary leading-relaxed mt-4">
            These are not small numbers. These are signals that a shift is
            happening &mdash; quietly, rapidly, and with massive commercial
            potential.
          </p>
        </motion.section>

        {/* The Leapfrog Advantage */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Leapfrog Advantage: No Legacy, No Problem
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Growing up between the UK and Nigeria, I saw this pattern first-hand.
            Africa did not wait for landline telephones before building one of
            the world&rsquo;s most successful mobile money systems. M-Pesa
            launched in Kenya in 2007 and changed how an entire continent thinks
            about finance. No banks needed. No branches. Just a phone.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The same thing is happening now with AI.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Businesses in Africa and South Asia are not burdened by expensive
            legacy IT systems that Western companies spent decades building.
            There are no clunky old databases to migrate. No twenty-year-old ERP
            software to untangle. They can go straight to AI-first &mdash; using{" "}
            <Link
              href="/services/ai-chatbots"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              chatbots for customer support
            </Link>
            ,{" "}
            <Link
              href="/services/ai-automation"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              automation for operations
            </Link>
            , and machine learning for decision-making from day one.
          </p>

          {/* Callout box */}
          <div className="bg-card border border-white/5 rounded-xl p-6 my-6">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <Smartphone size={18} className="text-accent" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm mb-1">
                  From the Field
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  I saw this with my own eyes in Lagos. A small logistics company
                  I advised went from pen-and-paper dispatch to an AI-powered
                  routing system in under six weeks. No &ldquo;digital
                  transformation&rdquo; roadmap. No committee. Just a problem and
                  a solution. That kind of speed is nearly impossible in a large
                  Western corporation tied to legacy contracts.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Young, Hungry, Digitally Native */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Young, Hungry, and Digitally Native
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Africa has the youngest population on Earth. The median age is 19. In
            India, over 65% of the population is under 35. These are not just
            statistics &mdash; they represent hundreds of millions of people who
            grew up with smartphones, who think in apps, and who are not afraid
            of new technology.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Compare that with Europe, where ageing populations and conservative
            corporate cultures often slow down technology adoption. I have sat in
            boardrooms in London where &ldquo;AI strategy&rdquo; meant a
            twelve-month consulting engagement and a PowerPoint deck. In Lagos, a
            twenty-three-year-old founder builds and ships an{" "}
            <Link
              href="/services/ai-chatbots"
              className="text-accent hover:text-accent-warm transition-colors"
            >
              AI chatbot
            </Link>{" "}
            in a weekend.
          </p>
          <p className="text-text-secondary leading-relaxed">
            The talent is there. The hunger is there. What is needed is
            investment, guidance, and the right technology partners.
          </p>
        </motion.section>

        {/* Real Problems That AI Can Solve */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">
            Real Problems That AI Can Actually Solve
          </h2>
          <p className="text-text-secondary leading-relaxed mb-6">
            In developed countries, a lot of AI use cases are about convenience
            &mdash; better product recommendations, smarter email filters, more
            accurate ad targeting. Nothing wrong with that. But in developing
            countries, AI is solving problems that actually change lives.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {useCases.map((uc) => (
              <div
                key={uc.name}
                className="bg-card border border-white/5 rounded-xl p-5 flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <uc.icon size={18} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">
                    {uc.name}
                  </h3>
                  <p className="text-text-secondary text-xs leading-relaxed">
                    {uc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-text-secondary leading-relaxed mt-6">
            These are not theoretical use cases. They are happening right now,
            and they represent enormous opportunities for businesses willing to
            build solutions for these markets.
          </p>
        </motion.section>

        {/* The Cost Advantage */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Cost Advantage Is Real
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Let us talk money, because that is what matters to any entrepreneur.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            Building an AI-powered product in a developing country costs
            significantly less than doing it in the West. Software developers in
            India command rates of $15&ndash;$40 per hour. In Nigeria, skilled
            developers work at $25&ndash;$40 per hour. Compare that to
            $100&ndash;$200+ per hour in the US or UK.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            But it is not just about cheaper labour. The cost of reaching
            customers is lower too. Digital advertising costs, office space, and
            operational overheads are all a fraction of what you would pay in
            London or San Francisco. You can build an MVP, test it with real
            users, and iterate &mdash; all for a budget that would barely cover a
            month&rsquo;s rent in Shoreditch.
          </p>

          {/* Cost comparison */}
          <div className="bg-card border border-white/5 rounded-xl overflow-hidden my-6">
            <div className="grid grid-cols-3 gap-px bg-white/5">
              <div className="bg-card p-4 text-center">
                <DollarSign size={18} className="text-accent mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">India</div>
                <div className="text-accent font-bold text-lg">$15&ndash;$40</div>
                <div className="text-text-secondary text-xs">per hour</div>
              </div>
              <div className="bg-card p-4 text-center">
                <DollarSign size={18} className="text-accent mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">Nigeria</div>
                <div className="text-accent font-bold text-lg">$25&ndash;$40</div>
                <div className="text-text-secondary text-xs">per hour</div>
              </div>
              <div className="bg-card p-4 text-center">
                <DollarSign size={18} className="text-accent mx-auto mb-2" />
                <div className="text-white font-semibold text-sm">US / UK</div>
                <div className="text-accent font-bold text-lg">$100&ndash;$200+</div>
                <div className="text-text-secondary text-xs">per hour</div>
              </div>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            At AdmireTech, we have helped founders do exactly this. Build smart,
            ship fast, and pay for outcomes rather than hours. It is a model that
            works particularly well in emerging markets where every dollar has to
            count.
          </p>
        </motion.section>

        {/* Big Money */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            The Big Money Is Starting to Pay Attention
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            This is not just a grassroots movement. Serious institutional money
            is flowing into AI across the developing world.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            In February 2026, the African Development Bank and UNDP launched the
            AI 10 Billion Initiative &mdash; a partnership aiming to mobilise up
            to $10 billion by 2035 to unlock 40 million new AI-related jobs
            across Africa. The announcement was made at the Nairobi AI Forum
            2026, which brought together governments, tech innovators, and
            private sector leaders from across the continent.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            India has seen a 47% compound annual growth rate in AI services
            exports and a 35% annual increase in AI talent. The country&rsquo;s
            AI market alone is projected to reach $5.1 billion in 2025.
          </p>
          <p className="text-text-secondary leading-relaxed">
            When governments, development banks, and global tech companies are
            all pointing in the same direction, it is a strong signal. The smart
            money is already here.
          </p>
        </motion.section>

        {/* Challenges */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            Yes, There Are Challenges
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            I am not going to sugarcoat it. Building AI-powered businesses in
            developing countries is not easy. Infrastructure gaps are real
            &mdash; unreliable electricity, patchy internet connectivity, and a
            shortage of experienced AI engineers are genuine obstacles.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            The World Bank&rsquo;s 2026 World Development Report on AI
            highlights that while AI could help developing countries leapfrog
            traditional development challenges, it could also widen the gap if
            the requirements for computing power, data, and skills are not
            addressed.
          </p>
          <p className="text-text-secondary leading-relaxed">
            But here is my perspective as someone who has built businesses across
            these markets: challenges are just problems waiting for the right
            solution. And more often than not, the entrepreneurs and developers
            in these regions are the ones best placed to solve them &mdash;
            because they live with these problems every day.
          </p>
        </motion.section>

        {/* What This Means for You */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            What This Means for You
          </h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Whether you are a founder in Lagos looking to build your first AI
            product, a business owner in Pune wanting to automate your
            operations, or an international company looking to expand into
            emerging markets &mdash; the window is open right now.
          </p>
          <ol className="space-y-3 text-text-secondary list-decimal list-inside">
            <li>
              <span className="font-semibold text-white">
                Start small, think big.
              </span>{" "}
              You do not need a massive{" "}
              <Link
                href="/services/ai-consulting"
                className="text-accent hover:text-accent-warm transition-colors"
              >
                AI strategy
              </Link>
              . Start with one problem &mdash; a chatbot for customer queries, an
              automation tool for invoicing, a recommendation engine for your
              products. Build an MVP. Test it. Learn.
            </li>
            <li>
              <span className="font-semibold text-white">
                Find the right technology partner.
              </span>{" "}
              You need a partner who understands both the technology and the
              market. Someone with teams in your time zone who speaks your
              language &mdash; literally and commercially.
            </li>
            <li>
              <span className="font-semibold text-white">
                Focus on outcomes, not hours.
              </span>{" "}
              The traditional model of paying developers by the hour does not work
              well for startups in capital-constrained markets. Look for partners
              who tie their work to your{" "}
              <Link
                href="/services/outcome-based-development"
                className="text-accent hover:text-accent-warm transition-colors"
              >
                business results
              </Link>
              .
            </li>
            <li>
              <span className="font-semibold text-white">Move fast.</span> The
              companies that win in these markets will be the ones that get in
              early. Competition is growing, but it is nowhere near as saturated
              as in the West. First movers still have a real advantage.
            </li>
          </ol>
        </motion.section>

        {/* Final Thoughts */}
        <motion.section {...fade()} className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Final Thoughts</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            I have always believed that the best businesses are built where need
            meets possibility. Right now, in Africa and South Asia, the need for
            smarter, faster, more affordable technology has never been greater.
            And the possibility &mdash; thanks to AI &mdash; has never been more
            real.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            This is not a trend. It is a tectonic shift. The next wave of
            billion-dollar AI companies will not all come from California. Some
            of them will come from Lagos, Nairobi, Bangalore, and Dhaka.
          </p>
          <p className="text-text-secondary leading-relaxed mb-4">
            I know this because I have seen it &mdash; from Yaba to Pune, the
            energy is unmistakable.
          </p>
          <p className="text-white font-semibold leading-relaxed">
            The question is not whether it will happen. It is whether you will be
            part of it.
          </p>
        </motion.section>

        {/* CTA Banner */}
        <motion.div
          {...fade()}
          className="mb-16 rounded-2xl bg-gradient-to-r from-accent/20 via-accent/10 to-accent-warm/20 border border-accent/20 p-8 sm:p-10 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Ready to Build Your AI-Powered Business?
          </h2>
          <p className="text-text-secondary mb-6 max-w-lg mx-auto">
            AdmireTech helps founders and companies in Africa, South Asia, and
            beyond launch AI products that deliver real results. Book a free
            consultation.
          </p>
          <CalBookingButton className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-warm transition-colors">
            Book Your Free AI Consultation
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

        {/* Author Bio */}
        <motion.div
          {...fade()}
          className="mt-12 pt-8 border-t border-white/5"
        >
          <div className="flex items-start gap-4">
            <img
              src="/images/team/peter-king.webp"
              alt="Peter King, CEO and CTO of AdmireTech"
              className="w-14 h-14 rounded-full object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-semibold mb-1">
                About the Author
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                <span className="text-white font-medium">Peter King</span> is a
                British-African serial entrepreneur with over two decades of
                experience building technology businesses across the UK, West
                Africa, and India. He is a founding partner at{" "}
                <Link
                  href="/about"
                  className="text-accent hover:text-accent-warm transition-colors"
                >
                  AdmireTech
                </Link>
                , an AI-powered digital agency with offices in London, Pune, and
                Lagos that helps businesses launch intelligent solutions that
                drive real growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Related Services */}
        <motion.div {...fade()} className="mt-8 pt-8 border-t border-white/5">
          <h3 className="text-lg font-semibold text-white mb-4">
            Related Services & Reading
          </h3>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-chatbots"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Bot size={16} />
              AI Chatbots
            </Link>
            <Link
              href="/services/ai-automation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Zap size={16} />
              AI Automation
            </Link>
            <Link
              href="/services/ai-consulting"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Users size={16} />
              AI Consulting
            </Link>
            <Link
              href="/portfolio/mfb-ai-transformation"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <TrendingUp size={16} />
              MFB AI Case Study
            </Link>
            <Link
              href="/blog/ai-transforming-african-tech-ecosystem"
              className="inline-flex items-center gap-2 bg-card border border-white/5 rounded-lg px-4 py-2.5 text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
            >
              <Globe size={16} />
              AI in African Tech
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
