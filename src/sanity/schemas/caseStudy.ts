import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case Study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "client",
      title: "Client Name",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "results",
      title: "Key Results",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "metric", type: "string", title: "Metric" },
            { name: "value", type: "string", title: "Value" },
          ],
        },
      ],
    }),
    defineField({
      name: "technologies",
      title: "Technologies Used",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "body",
      title: "Full Case Study",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "client",
      media: "coverImage",
    },
  },
});
