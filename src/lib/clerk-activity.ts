const DAY_MS = 24 * 60 * 60 * 1000;
const GITHUB_API_URL = "https://api.github.com";
const GITHUB_GRAPHQL_URL = `${GITHUB_API_URL}/graphql`;

const contributionLevels = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

type ContributionLevel = keyof typeof contributionLevels;

type ContributionCalendar = {
  totalContributions: number;
  weeks: {
    contributionDays: {
      contributionCount: number;
      contributionLevel: ContributionLevel;
      date: string;
    }[];
  }[];
};

export type ClerkActivity = {
  total: number;
  days: {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
};

export async function getClerkActivity(): Promise<ClerkActivity | undefined> {
  if (import.meta.env.DEV) return toClerkActivity(mockCalendar());

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.warn("Skipping Clerk activity: GITHUB_TOKEN is not set");
    return;
  }

  try {
    const organization = await github<{ node_id: string }>(
      "/orgs/clerk",
      token,
    );
    const data = await githubGraphql<{
      user: {
        contributionsCollection: {
          contributionCalendar: ContributionCalendar;
        };
      } | null;
    }>(
      `query ClerkActivity($organization: ID!) {
        user(login: "alexcarpenter") {
          contributionsCollection(organizationID: $organization) {
            contributionCalendar {
              totalContributions
              weeks {
                contributionDays {
                  contributionCount
                  contributionLevel
                  date
                }
              }
            }
          }
        }
      }`,
      { organization: organization.node_id },
      token,
    );

    if (!data.user) throw new Error("GitHub user not found");
    return toClerkActivity(
      data.user.contributionsCollection.contributionCalendar,
    );
  } catch (error) {
    console.warn(
      `Skipping Clerk activity: ${error instanceof Error ? error.message : "Unknown GitHub error"}`,
    );
    return;
  }
}

async function github<T>(path: string, token: string): Promise<T> {
  const response = await fetch(`${GITHUB_API_URL}${path}`, {
    headers: githubHeaders(token),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) throw new Error(`GitHub API returned ${response.status}`);
  return response.json() as Promise<T>;
}

async function githubGraphql<T>(
  query: string,
  variables: Record<string, string>,
  token: string,
): Promise<T> {
  const response = await fetch(GITHUB_GRAPHQL_URL, {
    method: "POST",
    headers: {
      ...githubHeaders(token),
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    signal: AbortSignal.timeout(10_000),
  });
  const result = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (!response.ok)
    throw new Error(`GitHub GraphQL returned ${response.status}`);
  if (result.errors?.length) throw new Error(result.errors[0].message);
  if (!result.data) throw new Error("GitHub GraphQL returned no data");
  return result.data;
}

function githubHeaders(token: string) {
  return {
    Accept: "application/vnd.github+json",
    Authorization: `Bearer ${token}`,
    "User-Agent": "alexcarpenter.me",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

function toClerkActivity(calendar: ContributionCalendar): ClerkActivity {
  return {
    total: calendar.totalContributions,
    days: calendar.weeks.flatMap((week) =>
      week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: contributionLevels[day.contributionLevel],
      })),
    ),
  };
}

function mockCalendar(): ContributionCalendar {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  const start = new Date(end.getTime() - (52 * 7 + end.getUTCDay()) * DAY_MS);
  const length = Math.round((end.getTime() - start.getTime()) / DAY_MS) + 1;
  const levels = Object.keys(contributionLevels) as ContributionLevel[];
  const days = Array.from({ length }, (_, index) => {
    const contributionCount = index % 11 === 0 ? 0 : (index * 5) % 7;
    return {
      date: new Date(start.getTime() + index * DAY_MS)
        .toISOString()
        .slice(0, 10),
      contributionCount,
      contributionLevel:
        levels[contributionCount ? Math.ceil(contributionCount / 2) : 0],
    };
  });

  return {
    totalContributions: days.reduce(
      (total, day) => total + day.contributionCount,
      0,
    ),
    weeks: Array.from({ length: Math.ceil(days.length / 7) }, (_, index) => ({
      contributionDays: days.slice(index * 7, index * 7 + 7),
    })),
  };
}
