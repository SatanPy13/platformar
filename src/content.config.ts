import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),

      publishDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),

      author: z.string().default("Admin"),

      category: z.string(),

      tags: z.array(z.string()).default([]),

      heroImage: image().optional(),

      featured: z.boolean().default(false),

      draft: z.boolean().default(false),

      seo: z.object({
        title: z.string().optional(),
        description: z.string().optional(),
      }).optional(),
    }),
});

export const collections = {
  blog,
};