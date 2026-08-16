type GithubCommitResponse = {
  html_url: string;
  commit: {
    author: {
      date: string;
    };
  };
  stats?: {
    additions: number;
    deletions: number;
  };
};

export type GithubCommitMetadata = {
  url: string;
  date: string;
  additions: number | null;
  deletions: number | null;
};

export async function getGithubCommitMetadata(
  repo: string,
  sha: string,
): Promise<GithubCommitMetadata | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${repo}/commits/${sha}`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          "X-GitHub-Api-Version": "2022-11-28",
          "User-Agent": "alexcarpenter.me-build",
          ...(process.env.GITHUB_TOKEN
            ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
            : {}),
        },
      },
    );

    if (!res.ok) return null;

    const data = (await res.json()) as GithubCommitResponse;

    return {
      url: data.html_url,
      date: data.commit.author.date,
      additions: data.stats?.additions ?? null,
      deletions: data.stats?.deletions ?? null,
    };
  } catch {
    return null;
  }
}

export function formatRelativeTime(date: string): string {
  const elapsedSeconds = (Date.now() - new Date(date).getTime()) / 1000;
  const units = [
    ["year", 60 * 60 * 24 * 365],
    ["month", 60 * 60 * 24 * 30],
    ["week", 60 * 60 * 24 * 7],
    ["day", 60 * 60 * 24],
    ["hour", 60 * 60],
    ["minute", 60],
  ] as const;

  const [unit, seconds] = units.find(
    ([, seconds]) => elapsedSeconds >= seconds,
  ) ?? ["second", 1];

  return new Intl.RelativeTimeFormat("en", { numeric: "always" }).format(
    -Math.floor(elapsedSeconds / seconds),
    unit,
  );
}
