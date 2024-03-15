import { defineCollection, z } from "astro:content";

const bookmarks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const jobs = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tools: z.array(z.string()),
    projects: z
      .array(
        z.object({
          title: z.string(),
          href: z.string(),
          img: z.object({
            src: z.string(),
            alt: z.string(),
          }),
        })
      )
      .optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    published: z.coerce.date(),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date().optional(),
    toc: z.boolean().optional(),
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

export const collections = {
  bookmarks,
  jobs,
  notes,
  posts,
  recommendations,
};
