"use client";

import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ArrowRight, Bot, Zap, Target, type LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeader } from "@/components/ui/SectionHeader";

export interface FeaturedPostItem {
  title: string;
  excerpt: string;
  slug: string;
  date: string;
  coverImage?: string;
  icon?: LucideIcon;
  gradient?: string;
  accentColor?: string;
  category?: string;
}

// Fallback data when Sanity is not connected
const fallbackPosts: FeaturedPostItem[] = [
  {
    title: "How AI Chatbots Are Revolutionising Customer Support in 2026",
    excerpt:
      "Discover how businesses are using AI-powered chatbots to improve response times and customer satisfaction.",
    slug: "ai-chatbots-customer-support",
    date: "2026-03-15",
    icon: Bot,
    gradient: "from-blue-500/20 via-blue-400/5 to-transparent",
    accentColor: "text-blue-400",
    category: "AI Chatbots",
  },
  {
    title: "The Complete Guide to AI Automation for Small Businesses",
    excerpt:
      "A practical guide to implementing AI automation without breaking the bank.",
    slug: "ai-automation-small-business",
    date: "2026-03-10",
    icon: Zap,
    gradient: "from-amber-500/20 via-amber-400/5 to-transparent",
    accentColor: "text-amber-400",
    category: "Automation",
  },
  {
    title: "Why Every Business Needs an AI Strategy in 2026",
    excerpt:
      "From startups to enterprises, an AI strategy is no longer optional. Here's how to build one.",
    slug: "ai-strategy-2026",
    date: "2026-03-05",
    icon: Target,
    gradient: "from-accent/20 via-accent-warm/5 to-transparent",
    accentColor: "text-accent",
    category: "Strategy",
  },
];

export function FeaturedBlog({ posts }: { posts?: FeaturedPostItem[] }) {
  const t = useTranslations("blog");
  const displayPosts = posts && posts.length > 0 ? posts : fallbackPosts;

  return (
    <section className="section-padding bg-background-secondary">
      <div className="container-wide mx-auto">
        <SectionHeader title={t("latestTitle")} subtitle={t("subtitle")} />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayPosts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                {post.coverImage ? (
                  <div className="w-full h-48 rounded-lg mb-4 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={`Thumbnail for ${post.title}`}
                      width={400}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${post.gradient || "from-accent/20 via-accent-warm/5 to-transparent"} rounded-lg mb-4 flex items-center justify-center relative overflow-hidden`}
                  >
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
                        backgroundSize: "24px 24px",
                      }}
                    />
                    {post.icon && (
                      <post.icon
                        size={40}
                        className="text-white/20"
                      />
                    )}
                  </div>
                )}
                <p className="text-text-secondary text-xs mb-2">
                  {new Date(post.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed flex-1 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-accent text-sm font-medium hover:text-accent-warm transition-colors group"
                >
                  {t("readMore")}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
