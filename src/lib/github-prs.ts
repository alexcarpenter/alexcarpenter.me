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

function toGithubPr(item: SearchItem): GithubPr {
  return {
    url: item.html_url,
    title: item.title,
    number: item.number,
    date: item.created_at,
    status: item.pull_request?.merged_at
      ? "merged"
      : item.state === "closed"
        ? "closed"
        : "open",
  };
}

export function githubPrsLoader(options: {
  repo: string;
  author: string;
  limit?: number;
  excludeStatuses?: GithubPr["status"][];
  dummy?: GithubPr[];
}): Loader {
  const { repo, author, limit = 10, excludeStatuses = [], dummy } = options;
  const shouldInclude = (pr: GithubPr) => !excludeStatuses.includes(pr.status);

  return {
    name: `github-prs:${repo}`,
    load: async ({ store, logger, parseData }) => {
      const write = async (entries: GithubPr[]) => {
        store.clear();
        for (const entry of entries) {
          const data = await parseData({
            id: String(entry.number),
            data: entry,
          });
          store.set({ id: String(entry.number), data });
        }
      };

      if (import.meta.env.DEV && dummy) {
        logger.info("Using dummy data (dev mode)");
        await write(dummy.filter(shouldInclude).slice(0, limit));
        return;
      }

      const entries: GithubPr[] = [];
      const perPage = 100;
      const maxPages = 10;
      let page = 1;

      while (entries.length < limit && page <= maxPages) {
        const url = `https://api.github.com/search/issues?q=${encodeURIComponent(
          `repo:${repo} author:${author} is:pr`,
        )}&sort=created&order=desc&per_page=${perPage}&page=${page}`;

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
        if (items.length === 0) {
          break;
        }

        entries.push(...items.map(toGithubPr).filter(shouldInclude));

        if (items.length < perPage) {
          break;
        }

        page += 1;
      }

      await write(entries.slice(0, limit));
    },
  };
}
