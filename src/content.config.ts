import { defineCollection, reference } from "astro:content";
import { z } from "astro/zod";
import { file, glob } from "astro/loaders";
import { githubPrsLoader, type GithubPr } from "./lib/github-prs";
import { GEAR_CATEGORIES } from "./consts";

const CLERK_PRS_DUMMY: GithubPr[] = [
  {
    url: "https://github.com/clerk/javascript/pull/9999",
    title: "feat(ui): example open PR for local dev",
    number: 9999,
    date: "2026-06-01T00:00:00Z",
    status: "open",
  },
  {
    url: "https://github.com/clerk/javascript/pull/9998",
    title: "feat(headless): example merged PR for local dev",
    number: 9998,
    date: "2026-05-28T00:00:00Z",
    status: "merged",
  },
  {
    url: "https://github.com/clerk/javascript/pull/9997",
    title: "chore: example closed PR for local dev",
    number: 9997,
    date: "2026-05-20T00:00:00Z",
    status: "closed",
  },
];

const gear = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/gear" }),
  schema: z.object({
    name: z.string(),
    category: z.enum(GEAR_CATEGORIES),
    eyebrow: z.string().optional(),
    link: z.url().optional(),
    favorite: z.boolean().optional().default(false),
    status: z.enum(["active", "retired"]).default("active"),
  }),
});

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

const jobs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/jobs" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    startDate: z.coerce.date(),
    endDate: z.coerce.date().optional(),
    tools: z.array(z.string()).optional(),
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

const recommendations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/recommendations" }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    company: reference("jobs"),
    published: z.coerce.date(),
    avatar: z.string().optional(),
    status: z.enum(["visible", "hidden"]).default("visible"),
  }),
});

const ossContributions = defineCollection({
  loader: file("src/content/oss-contributions.json", {
    parser: (fileContent) => {
      const data = JSON.parse(fileContent);
      return data.map((item: Record<string, unknown>, index: number) => ({
        id: `contribution-${index + 1}`,
        ...item,
      }));
    },
  }),
  schema: z.object({
    link: z.url(),
    date: z.coerce.date(),
    description: z.string(),
    status: z.enum(["open", "merged", "closed"]).default("open"),
  }),
});

const clerkPrs = defineCollection({
  loader: githubPrsLoader({
    repo: "clerk/javascript",
    author: "alexcarpenter",
    dummy: CLERK_PRS_DUMMY,
  }),
  schema: z.object({
    url: z.url(),
    title: z.string(),
    number: z.number(),
    date: z.coerce.date(),
    status: z.enum(["open", "merged", "closed"]),
  }),
});

export const collections = {
  clerkPrs,
  gear,
  jobs,
  notes,
  ossContributions,
  recommendations,
};
