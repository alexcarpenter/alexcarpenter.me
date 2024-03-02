import { defineCollection, z } from "astro:content";

const experiences = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tools: z.array(z.string()),
  }),
});

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
    draft: z.boolean().optional(),
  }),
});

const recommendations = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
  }),
});

export const collections = { experiences, pages, notes, recommendations };
