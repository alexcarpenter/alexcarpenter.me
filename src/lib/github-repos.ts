export type GithubRepoMetadata = {
  fullName: string;
  stars: number | null;
};

type GithubRepoResponse = {
  full_name: string;
  stargazers_count: number;
};

export function getGithubRepoFromUrl(urlString: string): string | null {
  const url = new URL(urlString);

  if (url.hostname !== "github.com") {
    return null;
  }

  const [owner, repo] = url.pathname.split("/").filter(Boolean);

  if (!owner || !repo) {
    return null;
  }

  return `${owner}/${repo}`;
}

export async function getGithubRepoMetadata(
  urlString: string,
): Promise<GithubRepoMetadata | null> {
  const repo = getGithubRepoFromUrl(urlString);

  if (!repo) {
    return null;
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
        "User-Agent": "alexcarpenter.me-build",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    });

    if (!res.ok) {
      return {
        fullName: repo,
        stars: null,
      };
    }

    const data = (await res.json()) as GithubRepoResponse;

    return {
      fullName: data.full_name,
      stars: data.stargazers_count,
    };
  } catch {
    return {
      fullName: repo,
      stars: null,
    };
  }
}
