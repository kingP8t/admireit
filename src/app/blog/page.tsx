import type { Metadata } from "next";
import { BlogContent } from "./BlogContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { fetchSanityPosts } from "@/lib/sanity-helpers";
import { urlFor } from "@/sanity/lib/image";
import { isSanityConfigured } from "@/lib/sanity-helpers";

export const metadata: Metadata = {
  title: "Blog — AI Insights, Guides & Industry Trends",
  description:
    "Read the latest insights on AI, automation, and digital transformation from the AdmireTech team.",
  alternates: {
    canonical: "https://www.admireit.co/blog",
  },
};

export default async function BlogPage() {
  // Fetch Sanity posts if configured, serialize for client component
  let sanityPosts: { title: string; slug: { current: string }; excerpt?: string; publishedAt?: string; coverImage?: string }[] = [];

  if (isSanityConfigured()) {
    const rawPosts = await fetchSanityPosts();
    sanityPosts = rawPosts.map((post) => ({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt || undefined,
      publishedAt: post.publishedAt || undefined,
      coverImage: post.coverImage ? urlFor(post.coverImage).width(400).height(160).url() : undefined,
    }));
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Blog", url: "https://www.admireit.co/blog" },
        ]}
      />
      <BlogContent sanityPosts={sanityPosts} />
    </>
  );
}
