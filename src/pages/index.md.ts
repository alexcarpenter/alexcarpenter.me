import type { APIRoute } from "astro";
import { getCollection, getEntry } from "astro:content";

const homepageIntro = [
  "# Alex Carpenter",
  "",
  "Staff UI Engineer at Clerk",
  "",
  "Grand Rapids, MI.",
  "",
  "## Staff UI Engineer building composable interfaces for humans and agents.",
  "",
  "I’m currently on the core team at Clerk, working on UI components, theming infrastructure, and developer tooling for authentication interfaces. My work is mostly about making customization easier, improving component APIs, and giving developers more flexible primitives to build with.",
  "",
  "I do my best work on small teams that collaborate closely and ship often. I care deeply about design and craft, and I’m especially interested in how AI tools can help designers and engineers build better interfaces together.",
].join("\n");

const projects = [
  {
    name: "I Brew My Own Coffee",
    link: "https://ibrewmyown.coffee",
    description:
      "A curated collection of home coffee setups. Built with Astro, Tailwind CSS, and Base UI.",
  },
  {
    name: "Curated",
    link: "https://curated.alexcarpenter.me",
    description:
      "Weekly curated items including design inspiration, tools, and resources. Built with Astro.",
  },
  {
    name: "RESILIENT—UI",
    link: "https://resilient-ui.com",
    description:
      "Resources for building resilient user interfaces. Built with Next.js, Tailwind CSS, Base UI, shadcn/ui, and Fumadocs.",
  },
];

const links = [
  ["GitHub", "https://github.com/alexcarpenter"],
  ["Twitter", "https://twitter.com/alexcarp_me"],
  ["Bluesky", "https://bsky.app/profile/alexcarpenter.me"],
  ["LinkedIn", "https://www.linkedin.com/in/imalexcarpenter/"],
];

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
  });

const normalizeMarkdown = (value?: string) =>
  (value ?? "")
    .trim()
    .replace(/<mark>(.*?)<\/mark>/g, "**$1**")
    .replace(/\s+$/gm, "");

const getRepoName = (link: string) => {
  const match = link.match(/github\.com\/([^/]+\/[^/]+)/);
  return match ? match[1].toLowerCase() : link;
};

export const GET: APIRoute = async () => {
  const jobs = await getCollection("jobs");
  const recommendations = await getCollection("recommendations");
  const ossContributions = await getCollection("ossContributions");
  const clerkPrs = await getCollection("clerkPrs");
  const githubRepos = await getCollection("githubRepos");

  const experienceMarkdown = jobs
    .sort(
      (a, b) =>
        Date.parse(b.data.startDate.toString()) -
        Date.parse(a.data.startDate.toString()),
    )
    .map((job) => {
      const dates = `${formatDate(job.data.startDate)}–${
        job.data.endDate ? formatDate(job.data.endDate) : "Now"
      }`;
      const body = normalizeMarkdown(job.body);
      const tools = job.data.tools?.length
        ? `\n\nTools: ${new Intl.ListFormat("en-US", {
            style: "long",
            type: "conjunction",
          }).format(job.data.tools)}.`
        : "";

      return [
        `### ${job.data.company}`,
        "",
        `**${job.data.title}** · ${dates}`,
        "",
        body + tools,
      ].join("\n");
    })
    .join("\n\n");

  const recommendationsMarkdown = (
    await Promise.all(
      recommendations
        .sort(
          (a, b) =>
            Date.parse(b.data.published.toString()) -
            Date.parse(a.data.published.toString()),
        )
        .filter((recommendation) => recommendation.data.status === "visible")
        .map(async (recommendation) => {
          const company = await getEntry(recommendation.data.company);
          return [
            `> ${normalizeMarkdown(recommendation.body)}`,
            "",
            `— ${recommendation.data.name}, ${recommendation.data.title}, ${company.data.company}`,
          ].join("\n");
        }),
    )
  ).join("\n\n");

  const markdown = [
    homepageIntro,
    "",
    "## Projects",
    "",
    projects
      .map(
        (project) =>
          `### [${project.name}](${project.link})\n\n${project.description}`,
      )
      .join("\n\n"),
    "",
    "## Experience",
    "",
    experienceMarkdown,
    "",
    "## Latest Work",
    "",
    clerkPrs
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map(
        (pr) =>
          `- [${pr.data.title}](${pr.data.url}) — clerk/javascript#${pr.data.number} (${pr.data.status})`,
      )
      .join("\n"),
    "",
    "## Recommendations",
    "",
    recommendationsMarkdown,
    "",
    "## OSS Contributions",
    "",
    githubRepos
      .sort((a, b) => a.data.title.localeCompare(b.data.title))
      .map(
        (repo) =>
          `### [${repo.data.title}](${repo.data.link})\n\n${repo.data.description}`,
      )
      .join("\n\n"),
    "",
    ossContributions
      .sort(
        (a, b) =>
          Date.parse(b.data.date.toString()) -
          Date.parse(a.data.date.toString()),
      )
      .map(
        (contribution) =>
          `- [${getRepoName(contribution.data.link)}](${contribution.data.link}) — ${contribution.data.description} (${contribution.data.status})`,
      )
      .join("\n"),
    "",
    "## Connect",
    "",
    links.map(([label, href]) => `- [${label}](${href})`).join("\n"),
    "",
  ].join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
