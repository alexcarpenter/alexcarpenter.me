interface GitHubPR {
  number: number;
  title: string;
  url: string;
  merge_commit_sha: string;
  merged_at: string;
}

interface FetchPROptions {
  username: string;
  limit: number;
  repository?: string;
  state?: "open" | "closed" | "all";
  sort?: "created" | "updated" | "popularity" | "long-running";
  direction?: "asc" | "desc";
}

/**
 * Fetches the latest merged PRs from a specific user for a given repository
 *
 * @param {FetchPROptions} options - Configuration options for fetching PRs
 * @returns {Promise<GitHubPR[]>} - Array of merged PRs from the specified user
 */
export async function fetchLatestGithubPrs({
  username = "alexcarpenter",
  limit = 5,
  repository = "clerk/javascript",
  state = "closed",
  direction = "desc",
}: Partial<FetchPROptions> = {}): Promise<GitHubPR[]> {
  const apiUrl = `https://api.github.com/repos/${repository}/pulls`;

  try {
    const headers: Record<string, string> = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "PR-Fetcher",
    };

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `token ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `${apiUrl}?state=${state}&per_page=100&direction=${direction}`,
      { headers },
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const allPRs = (await response.json()) as Array<any>;

    const userMergedPRs = allPRs
      .filter(
        (pr) =>
          pr.user.login.toLowerCase() === username.toLowerCase() &&
          pr.merged_at !== null,
      )
      .sort((a, b) => {
        const dateA = new Date(a.merged_at).getTime();
        const dateB = new Date(b.merged_at).getTime();
        return dateB - dateA;
      })
      .slice(0, limit);

    return userMergedPRs.map((pr) => ({
      number: pr.number,
      title: pr.title,
      url: pr.html_url,
      merge_commit_sha: pr.merge_commit_sha,
      merged_at: pr.merged_at,
    }));
  } catch (error) {
    console.error("Error fetching merged PRs:", error);
    throw error;
  }
}
