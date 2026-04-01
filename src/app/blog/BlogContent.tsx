"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Zap,
  Target,
  Code,
  Scale,
  Globe,
  TrendingUp,
  Clock,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Card } from "@/components/ui/Card";

export interface SanityPostItem {
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  coverImage?: string; // pre-resolved URL
}

const posts = [
  {
    title: "Digital Leapfrogging: Skipping Legacy Tech and Going Straight to AI",
    excerpt:
      "The absence of legacy infrastructure is not a disadvantage \u2014 it is a strategic advantage. How businesses in emerging markets can bypass decades of enterprise software and build AI-native from day one.",
    slug: "digital-leapfrogging-skip-legacy-tech-ai",
    date: "1 Apr 2026",
    readTime: "9 min",
    category: "Digital Leapfrogging",
    icon: Rocket,
    gradient: "from-cyan-500/20 via-cyan-400/5 to-transparent",
    accent: "bg-cyan-400/10 text-cyan-400",
  },
  {
    title: "Why Africa and South Asia Are the Next Frontiers for AI-Powered Businesses",
    excerpt:
      "India leads with 73% AI enthusiasm. Nigeria saw 600% growth. McKinsey estimates $61\u2013$103B in AI value for Africa. The data is clear \u2014 the next wave starts here.",
    slug: "ai-in-developing-countries-africa-south-asia",
    date: "17 Mar 2026",
    readTime: "8 min",
    category: "AI Adoption & Strategy",
    icon: TrendingUp,
    gradient: "from-accent/20 via-accent-warm/5 to-transparent",
    accent: "bg-accent/10 text-accent",
  },
  {
    title: "Building an AI Strategy on a Lean Budget: A Guide for Emerging Market Startups",
    excerpt:
      "You do not need a million-dollar budget to build an AI-powered business. A practical five-step framework with real costs, free tools, and hard-won lessons from Lagos, Pune, and London.",
    slug: "ai-strategy-lean-budget-startups-emerging-markets",
    date: "15 Jun 2025",
    readTime: "10 min",
    category: "AI Adoption & Strategy",
    icon: Target,
    gradient: "from-accent/20 via-accent-warm/5 to-transparent",
    accent: "bg-accent/10 text-accent",
  },
  {
    title: "How AI Chatbots Are Revolutionising Customer Support in 2026",
    excerpt:
      "Your customers expect instant answers. AI chatbots deliver them around the clock while slashing support costs by up to 60%.",
    slug: "ai-chatbots-customer-support",
    date: "15 Mar 2026",
    readTime: "5 min",
    category: "AI Chatbots",
    icon: Bot,
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
    accent: "bg-blue-400/10 text-blue-400",
  },
  {
    title: "The Complete Guide to AI Automation for Small Businesses",
    excerpt:
      "A practical guide to implementing AI automation without breaking the bank. Save 20+ hours a week starting with a single process.",
    slug: "ai-automation-small-business",
    date: "10 Mar 2026",
    readTime: "7 min",
    category: "Automation",
    icon: Zap,
    gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
    accent: "bg-amber-400/10 text-amber-400",
  },
  {
    title: "Why Every Business Needs an AI Strategy in 2026",
    excerpt:
      "From startups to enterprises, an AI strategy is no longer optional. Here\u2019s how to build one that delivers real results.",
    slug: "ai-strategy-2026",
    date: "5 Mar 2026",
    readTime: "6 min",
    category: "Strategy",
    icon: Target,
    gradient: "from-accent/20 via-accent-warm/5 to-transparent",
    accent: "bg-accent/10 text-accent",
  },
  {
    title: "Building Scalable AI Applications with Next.js and Python",
    excerpt:
      "Next.js handles the frontend. Python dominates ML. Combine them for production-ready AI apps that are fast, scalable, and a joy to develop.",
    slug: "scalable-ai-nextjs-python",
    date: "28 Feb 2026",
    readTime: "6 min",
    category: "Development",
    icon: Code,
    gradient: "from-emerald-500/20 via-emerald-400/5 to-transparent",
    accent: "bg-emerald-400/10 text-emerald-400",
  },
  {
    title: "The Ethics of AI in Business: What You Need to Know",
    excerpt:
      "AI is powerful. But power without principles is dangerous. Navigate bias, transparency, privacy, and accountability.",
    slug: "ai-ethics-business",
    date: "20 Feb 2026",
    readTime: "6 min",
    category: "AI Ethics",
    icon: Scale,
    gradient: "from-pink-500/20 via-pink-400/5 to-transparent",
    accent: "bg-pink-400/10 text-pink-400",
  },
  {
    title: "5 Ways AI Is Transforming the African Tech Ecosystem",
    excerpt:
      "Africa is not just adopting AI \u2014 it is building it. From Lagos to Nairobi, AI is solving uniquely African challenges at continental scale.",
    slug: "ai-transforming-african-tech-ecosystem",
    date: "15 Feb 2026",
    readTime: "6 min",
    category: "Africa & AI",
    icon: Globe,
    gradient: "from-purple-500/20 via-purple-400/5 to-transparent",
    accent: "bg-purple-400/10 text-purple-400",
  },
];

export function BlogContent({ sanityPosts = [] }: { sanityPosts?: SanityPostItem[] }) {

  // Filter out Sanity posts that duplicate static slugs
  const staticSlugs = new Set(posts.map((p) => p.slug));
  const newSanityPosts = sanityPosts.filter(
    (p) => !staticSlugs.has(p.slug.current)
  );

  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Blog
            </h1>
            <p className="mt-6 text-xl text-text-secondary">
              Insights, tutorials, and industry updates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sanity CMS posts (newest, shown first) */}
            {newSanityPosts.map((post, i) => (
              <motion.div
                key={post.slug.current}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug.current}`} className="group block h-full">
                  <Card className="h-full flex flex-col overflow-hidden">
                    {post.coverImage ? (
                      <div className="w-full h-40 rounded-lg mb-4 overflow-hidden">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={400}
                          height={160}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="w-full h-40 bg-gradient-to-br from-accent/20 via-accent-warm/5 to-transparent rounded-lg mb-4 flex items-center justify-center">
                        <Sparkles size={40} className="text-white/20" />
                      </div>
                    )}
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-2.5 py-1 bg-accent/10 text-accent text-[11px] rounded-full font-medium">
                        New
                      </span>
                      {post.publishedAt && (
                        <span className="text-text-secondary text-xs ml-auto">
                          {new Date(post.publishedAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:text-accent-warm transition-colors">
                      Read More
                      <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}

            {/* Static posts */}
            {posts.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full flex flex-col overflow-hidden">
                    {/* Gradient header with icon */}
                    <div
                      className={`w-full h-40 bg-gradient-to-br ${post.gradient} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                    >
                      <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                          backgroundImage:
                            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                          backgroundSize: "24px 24px",
                        }}
                      />
                      <post.icon
                        size={40}
                        className="text-white/20 group-hover:text-white/30 transition-colors duration-300"
                      />
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2.5 py-1 ${post.accent} text-[11px] rounded-full font-medium`}
                      >
                        {post.category}
                      </span>
                      <span className="text-text-secondary text-xs flex items-center gap-1">
                        <Clock size={11} />
                        {post.readTime}
                      </span>
                      <span className="text-text-secondary text-xs ml-auto">
                        {post.date}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2 group-hover:text-accent transition-colors duration-200">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <span className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium group-hover:text-accent-warm transition-colors">
                      Read More
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
