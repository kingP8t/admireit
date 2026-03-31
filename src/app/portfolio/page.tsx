import type { Metadata } from "next";
import { PortfolioContent } from "./PortfolioContent";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { fetchSanityCaseStudies, isSanityConfigured } from "@/lib/sanity-helpers";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Portfolio — AI Case Studies & Client Results",
  description:
    "Explore AdmireTech's portfolio of AI projects and case studies showcasing real impact for businesses worldwide.",
  alternates: {
    canonical: "https://www.admireit.co/portfolio",
  },
};

export default async function PortfolioPage() {
  let sanityCaseStudies: { title: string; slug: { current: string }; client?: string; description?: string; technologies?: string[]; coverImage?: string }[] = [];

  if (isSanityConfigured()) {
    const rawStudies = await fetchSanityCaseStudies();
    sanityCaseStudies = rawStudies.map((study) => ({
      title: study.title,
      slug: study.slug,
      client: study.client || undefined,
      description: study.description || undefined,
      technologies: study.technologies || [],
      coverImage: study.coverImage ? urlFor(study.coverImage).width(400).height(192).url() : undefined,
    }));
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
        ]}
      />
      <PortfolioContent sanityCaseStudies={sanityCaseStudies} />
    </>
  );
}
