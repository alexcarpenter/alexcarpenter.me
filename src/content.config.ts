import { defineCollection, reference, z } from "astro:content";
import { file, glob } from "astro/loaders";
import { GEAR_CATEGORIES, COMPANIES } from "./consts";

const notes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/notes" }),
  schema: z.object({
    published: z.coerce.date(),
    title: z.string().optional(),
    description: z.string().optional(),
    link: z.string().optional(),
    tags: z.array(z.string()).optional(),
    demo: z.string().optional(),
  }),
});

const changelog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/changelog" }),
  schema: z.object({
    published: z.coerce.date(),
    version: z.string(),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    published: z.coerce.date(),
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
  }),
});

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    company: z.enum(COMPANIES),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tools: z.array(z.string()),
    projects: z
      .array(
        z.object({
          title: z.string(),
          description: z.string().optional(),
          link: z.string(),
          published: z.coerce.date().optional(),
        }),
      )
      .optional(),
  }),
});

const now = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/now" }),
  schema: z.object({
    published: z.coerce.date(),
  }),
});

const recommendations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recommendations" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: z.enum(COMPANIES),
    published: z.coerce.date(),
    avatar: z.string().optional(),
    status: z.enum(["visible", "hidden"]).default("visible"),
  }),
});

const gear = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gear" }),
  schema: z.object({
    eyebrow: z.string().optional(),
    name: z.string(),
    link: z.string().optional(),
    category: z.enum(GEAR_CATEGORIES),
    favorite: z.boolean().default(false),
    status: z.enum(["active", "retired"]).default("active"),
  }),
});

const rolodex = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/rolodex" }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    description: z.string().optional(),
    avatar: z.string().optional(),
    jobs: z.array(z.string()).optional(),
    links: z
      .object({
        website: z.string().optional(),
        twitter: z.string().optional(),
        github: z.string().optional(),
        linkedin: z.string().optional(),
        email: z.string().optional(),
      })
      .optional(),
  }),
});

const ossContributions = defineCollection({
  loader: file("src/content/oss-contributions.json", {
    parser: (fileContent) => {
      const data = JSON.parse(fileContent);
      return data.map((item, index) => ({
        id: `contribution-${index + 1}`,
        ...item,
      }));
    },
  }),
  schema: z.object({
    link: z.string().url(),
    date: z.coerce.date(),
    description: z.string(),
    status: z.enum(["open", "merged", "closed"]).default("open"),
  }),
});

export const collections = {
  changelog,
  gear,
  jobs,
  articles,
  notes,
  now,
  ossContributions,
  recommendations,
  rolodex,
};
