import { client } from "@/sanity/lib/client";
import {
  postsQuery,
  postBySlugQuery,
  caseStudiesQuery,
  caseStudyBySlugQuery,
  latestPostsQuery,
} from "@/sanity/lib/queries";

export function isSanityConfigured(): boolean {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return !!projectId && projectId !== "placeholder";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchSanityPosts(): Promise<any[]> {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(postsQuery);
  } catch {
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchSanityPostBySlug(slug: string): Promise<any | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch(postBySlugQuery, { slug });
  } catch {
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchSanityCaseStudies(): Promise<any[]> {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(caseStudiesQuery);
  } catch {
    return [];
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchSanityCaseStudyBySlug(slug: string): Promise<any | null> {
  if (!isSanityConfigured()) return null;
  try {
    return await client.fetch(caseStudyBySlugQuery, { slug });
  } catch {
    return null;
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchLatestSanityPosts(): Promise<any[]> {
  if (!isSanityConfigured()) return [];
  try {
    return await client.fetch(latestPostsQuery);
  } catch {
    return [];
  }
}
