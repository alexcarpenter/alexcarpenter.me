import { defineCollection, z } from "astro:content";

const notes = defineCollection({
  type: "content",
  schema: z.object({
    published: z.coerce.date(),
  }),
});

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

const recommendations = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.string(),
  }),
});

export const collections = { notes, experiences, recommendations };
