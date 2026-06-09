import type { Loader } from "astro/loaders";

type SearchItem = {
  html_url: string;
  title: string;
  number: number;
  state: "open" | "closed";
  created_at: string;
  pull_request?: { merged_at: string | null };
};

type Entry = {
  url: string;
  title: string;
  number: number;
  date: string;
  status: "open" | "merged" | "closed";
};

const DUMMY: Entry[] = [
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

export function clerkPrsLoader(
  author = "alexcarpenter",
  limit = 10,
): Loader {
  return {
    name: "clerk-prs",
    load: async ({ store, logger, parseData }) => {
      const write = async (entries: Entry[]) => {
        store.clear();
        for (const entry of entries) {
          const data = await parseData({ id: String(entry.number), data: entry });
          store.set({ id: String(entry.number), data });
        }
      };

      if (import.meta.env.DEV) {
        logger.info("Using dummy data (dev mode)");
        await write(DUMMY);
        return;
      }

      const url = `https://api.github.com/search/issues?q=${encodeURIComponent(
        `repo:clerk/javascript author:${author} is:pr`,
      )}&sort=created&order=desc&per_page=${limit}`;

      const res = await fetch(url, {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "alexcarpenter.me-build",
        },
      });

      if (!res.ok) {
        logger.error(`GitHub API ${res.status}: ${await res.text()}`);
        return;
      }

      const { items } = (await res.json()) as { items: SearchItem[] };
      await write(
        items.map((item) => ({
          url: item.html_url,
          title: item.title,
          number: item.number,
          date: item.created_at,
          status: item.pull_request?.merged_at
            ? "merged"
            : item.state === "closed"
              ? "closed"
              : "open",
        })),
      );
    },
  };
}
