import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Post",
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="pt-20">
      <article className="section-padding">
        <div className="container-wide mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {params.slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
          </h1>

          <div className="flex items-center gap-4 text-text-secondary text-sm mb-8">
            <span>AdmireIT Team</span>
            <span>&middot;</span>
            <span>5 min read</span>
          </div>

          <div className="w-full h-64 rounded-2xl bg-card mb-8" />

          <div className="prose prose-invert max-w-none">
            <div className="glass-card p-8 text-center">
              <p className="text-text-secondary">
                Blog content will be loaded from Sanity CMS once connected.
                Create posts in the{" "}
                <Link href="/studio" className="text-accent hover:text-accent-warm">
                  Sanity Studio
                </Link>{" "}
                to see them here.
              </p>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
