import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FeaturedBlog } from "@/components/sections/FeaturedBlog";
import type { FeaturedPostItem } from "@/components/sections/FeaturedBlog";
import { CTA } from "@/components/sections/CTA";
import { fetchLatestSanityPosts, isSanityConfigured } from "@/lib/sanity-helpers";
import { urlFor } from "@/sanity/lib/image";

export default async function HomePage() {
  let latestPosts: FeaturedPostItem[] | undefined;

  if (isSanityConfigured()) {
    const rawPosts = await fetchLatestSanityPosts();
    if (rawPosts.length > 0) {
      latestPosts = rawPosts.map((post) => ({
        title: post.title,
        excerpt: post.excerpt || "",
        slug: post.slug.current,
        date: post.publishedAt || new Date().toISOString(),
        coverImage: post.coverImage ? urlFor(post.coverImage).width(400).height(192).url() : undefined,
      }));
    }
  }

  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <FeaturedBlog posts={latestPosts} />
      <CTA />
    </>
  );
}
