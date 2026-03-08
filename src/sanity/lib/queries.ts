import { groq } from "next-sanity";

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->{ name, image }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    coverImage,
    publishedAt,
    "author": author->{ name, image, bio }
  }
`;

export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    slug,
    description,
    icon,
    features
  }
`;

export const caseStudiesQuery = groq`
  *[_type == "caseStudy"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    client,
    description,
    coverImage,
    technologies
  }
`;

export const caseStudyBySlugQuery = groq`
  *[_type == "caseStudy" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    client,
    description,
    coverImage,
    results,
    technologies,
    body
  }
`;

export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(_createdAt desc) {
    _id,
    name,
    company,
    role,
    quote,
    photo,
    rating
  }
`;

export const teamMembersQuery = groq`
  *[_type == "teamMember"] | order(order asc) {
    _id,
    name,
    role,
    bio,
    photo,
    socials
  }
`;

export const latestPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    coverImage,
    publishedAt
  }
`;
