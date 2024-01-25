import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    published: z.coerce.date(),
  }),
});

const pages = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    pinned: z.boolean().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { notes, pages };
