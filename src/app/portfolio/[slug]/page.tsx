import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { fetchSanityCaseStudyBySlug } from "@/lib/sanity-helpers";
import { urlFor } from "@/sanity/lib/image";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const portableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) return null;
      return (
        <div className="my-8 rounded-2xl overflow-hidden">
          <Image
            src={urlFor(value).width(800).url()}
            alt={value.alt || "Case study image"}
            width={800}
            height={450}
            className="w-full h-auto"
          />
        </div>
      );
    },
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-2xl font-bold text-white mt-10 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-xl font-semibold text-white mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-lg font-semibold text-white mt-6 mb-2">{children}</h4>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-text-secondary leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-accent pl-4 my-6 italic text-text-secondary">
        {children}
      </blockquote>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    link: ({ value, children }: { value?: { href: string }; children?: React.ReactNode }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-warm underline transition-colors"
      >
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-text-secondary">{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-text-secondary">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = await fetchSanityCaseStudyBySlug(slug);

  if (!study) {
    return { title: "Case Study Not Found" };
  }

  return {
    title: study.title,
    description: study.description || `Case study: ${study.title}`,
    openGraph: {
      title: study.title,
      description: study.description,
      type: "article",
      ...(study.coverImage && {
        images: [{ url: urlFor(study.coverImage).width(1200).height(630).url() }],
      }),
    },
    alternates: {
      canonical: `https://www.admireit.co/portfolio/${slug}`,
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = await fetchSanityCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Portfolio", url: "https://www.admireit.co/portfolio" },
          { name: study.title, url: `https://www.admireit.co/portfolio/${slug}` },
        ]}
      />
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

            {study.coverImage && (
              <div className="w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src={urlFor(study.coverImage).width(900).height(450).url()}
                  alt={study.title}
                  width={900}
                  height={450}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            <div className="mb-8">
              {study.client && (
                <p className="text-accent text-sm font-medium mb-2">{study.client}</p>
              )}
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {study.title}
              </h1>
              {study.description && (
                <p className="text-lg text-text-secondary leading-relaxed">
                  {study.description}
                </p>
              )}
            </div>

            {study.technologies && study.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {study.technologies.map((tech: string) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-background-secondary rounded-full text-xs text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {study.results && study.results.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                {study.results.map(
                  (result: { metric: string; value: string }, i: number) => (
                    <div key={i} className="glass-card p-4 text-center">
                      <p className="text-2xl font-bold text-accent">{result.value}</p>
                      <p className="text-text-secondary text-sm mt-1">{result.metric}</p>
                    </div>
                  )
                )}
              </div>
            )}

            {study.body && (
              <div className="prose prose-invert max-w-none">
                <PortableText value={study.body} components={portableTextComponents} />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
