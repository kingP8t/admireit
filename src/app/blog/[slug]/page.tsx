import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { fetchSanityPostBySlug } from "@/lib/sanity-helpers";
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
            alt={value.alt || "Blog image"}
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
  const post = await fetchSanityPostBySlug(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the AdmireTech blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "AdmireTech"],
      ...(post.coverImage && {
        images: [{ url: urlFor(post.coverImage).width(1200).height(630).url() }],
      }),
    },
    alternates: {
      canonical: `https://www.admireit.co/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchSanityPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.admireit.co" },
          { name: "Blog", url: "https://www.admireit.co/blog" },
          { name: post.title, url: `https://www.admireit.co/blog/${slug}` },
        ]}
      />
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

            {post.coverImage && (
              <div className="w-full rounded-2xl overflow-hidden mb-8">
                <Image
                  src={urlFor(post.coverImage).width(800).height(400).url()}
                  alt={post.title}
                  width={800}
                  height={400}
                  className="w-full h-auto"
                  priority
                />
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-text-secondary text-sm mb-8">
              {post.author?.name && (
                <span className="flex items-center gap-1">
                  <User size={14} />
                  {post.author.name}
                </span>
              )}
              {publishedDate && (
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {publishedDate}
                </span>
              )}
              <span className="flex items-center gap-1">
                <Clock size={14} />5 min read
              </span>
            </div>

            {post.excerpt && (
              <p className="text-lg text-text-secondary leading-relaxed mb-8 border-l-4 border-accent/30 pl-4">
                {post.excerpt}
              </p>
            )}

            {post.body && (
              <div className="prose prose-invert max-w-none">
                <PortableText value={post.body} components={portableTextComponents} />
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
