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
      return {
        message: commit.commit.message,
        date: commit.commit.author.date,
        url: commit.html_url,
      };
    });
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return [];
  }
}
