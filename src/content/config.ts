import { JOBS } from "@/consts";
import { defineCollection, z } from "astro:content";

const links = defineCollection({
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
    company: z.enum(JOBS),
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
        }),
      )
      .optional(),
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    published: z.coerce.date(),
    draft: z.boolean().optional(),
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
    company: z.enum(JOBS),
    published: z.coerce.date(),
    avatar: z.string().optional(),
    status: z.enum(["visible", "hidden"]).default("visible"),
  }),
});

export const collections = {
  links,
  jobs,
  notes,
  posts,
  recommendations,
};
