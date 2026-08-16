type GithubCommitResponse = {
  html_url: string;
  stats?: {
    additions: number;
    deletions: number;
  };
};

export type GithubCommitMetadata = {
  url: string;
  additions: number | null;
  deletions: number | null;
};

const commitMetadataCache = new Map<
  string,
  Promise<GithubCommitMetadata | null>
>();

export function getGithubCommitMetadata(
  repo: string,
  sha: string,
): Promise<GithubCommitMetadata | null> {
  const cacheKey = `${repo}:${sha}`;
  const cached = commitMetadataCache.get(cacheKey);

  if (cached) return cached;

  const request = fetchGithubCommitMetadata(repo, sha);
  commitMetadataCache.set(cacheKey, request);

  return request;
}

async function fetchGithubCommitMetadata(
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
    const additions = patch
      .split("\n")
      .filter((line) => line.startsWith("+") && !line.startsWith("+++")).length;
    const deletions = patch
      .split("\n")
      .filter((line) => line.startsWith("-") && !line.startsWith("---")).length;

    return {
      url: `https://github.com/${repo}/commit/${sha}`,
      additions,
      deletions,
    };
  } catch {
    return null;
  }
}
