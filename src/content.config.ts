import { JOBS } from "@/consts";
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const links = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/links" }),
  schema: z.object({
    title: z.string(),
    published: z.coerce.date(),
    link: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const gear = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gear" }),
  schema: z.object({
    eyebrow: z.string(),
    title: z.string(),
    description: z.string(),
    link: z.string(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    published: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
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
  loader: glob({ pattern: "**/*.md", base: "./src/content/recommendations" }),
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
  gear,
  jobs,
  notes,
  posts,
  recommendations,
};