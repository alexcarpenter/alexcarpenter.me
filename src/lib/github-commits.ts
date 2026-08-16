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

    if (!res.ok) return getGithubCommitMetadataFromPatch(repo, sha);

    const data = (await res.json()) as GithubCommitResponse;

    if (!data.stats) return getGithubCommitMetadataFromPatch(repo, sha);

    return {
      url: data.html_url,
      date: data.commit.author.date,
      additions: data.stats.additions,
      deletions: data.stats.deletions,
    };
  } catch {
    return getGithubCommitMetadataFromPatch(repo, sha);
  }
}

async function getGithubCommitMetadataFromPatch(
  repo: string,
  sha: string,
): Promise<GithubCommitMetadata | null> {
  try {
    const res = await fetch(`https://github.com/${repo}/commit/${sha}.patch`);

    if (!res.ok) return null;

    const patch = await res.text();
    const date = patch.match(/^Date: (.+)$/m)?.[1];

    if (!date) return null;

    const additions = patch
      .split("\n")
      .filter((line) => line.startsWith("+") && !line.startsWith("+++")).length;
    const deletions = patch
      .split("\n")
      .filter((line) => line.startsWith("-") && !line.startsWith("---")).length;

    return {
      url: `https://github.com/${repo}/commit/${sha}`,
      date,
      additions,
      deletions,
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
