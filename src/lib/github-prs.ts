import type { Loader } from "astro/loaders";

type SearchItem = {
  html_url: string;
  title: string;
  number: number;
  state: "open" | "closed";
  created_at: string;
  pull_request?: { merged_at: string | null };
};

export type GithubPr = {
  url: string;
  title: string;
  number: number;
  date: string;
  status: "open" | "merged" | "closed";
};

export function githubPrsLoader(options: {
  repo: string;
  author: string;
  limit?: number;
  dummy?: GithubPr[];
}): Loader {
  const { repo, author, limit = 10, dummy } = options;
  return {
    name: `github-prs:${repo}`,
    load: async ({ store, logger, parseData }) => {
      const write = async (entries: GithubPr[]) => {
        store.clear();
        for (const entry of entries) {
          const data = await parseData({ id: String(entry.number), data: entry });
          store.set({ id: String(entry.number), data });
        }
      };

      if (import.meta.env.DEV && dummy) {
        logger.info("Using dummy data (dev mode)");
        await write(dummy);
        return;
      }

      const url = `https://api.github.com/search/issues?q=${encodeURIComponent(
        `repo:${repo} author:${author} is:pr`,
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
