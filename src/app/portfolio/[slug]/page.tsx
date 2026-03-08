import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Case Study",
};

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <div className="pt-20">
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-4xl">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Case Study: {params.slug.replace(/-/g, " ")}
          </h1>
          <p className="text-text-secondary leading-relaxed">
            This case study will be powered by Sanity CMS. Connect your Sanity
            project to see the full content here.
          </p>

          <div className="mt-12 glass-card p-8 text-center">
            <p className="text-text-secondary">
              Content will be loaded from Sanity CMS once connected.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
