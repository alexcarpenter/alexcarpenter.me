const getPullRequestIdFromMessage = (message: string) => {
  const match = message.match(/\(#(\d+)\)/);
  return match ? match[1] : null;
};

export async function fetchLatestPullRequests({
  username,
  repoOwner,
  repoName,
}: {
  username: string;
  repoOwner: string;
  repoName: string;
}): Promise<
  {
    message: string;
    date: string;
    url: string;
  }[]
> {
  const apiUrl = `https://api.github.com/repos/${repoOwner}/${repoName}/commits?author=${username}`;
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error("Failed to fetch contributions");
    }
    const commits = await response.json();
    return commits.slice(0, 5).map((commit: any) => {
      const id = getPullRequestIdFromMessage(commit.commit.message);
      return {
        message: commit.commit.message,
        date: commit.commit.author.date,
        url: `https://github.com/${repoOwner}/${repoName}/pull/${id}`,
      };
    });
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
}
