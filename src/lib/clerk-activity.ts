const DAY_MS = 24 * 60 * 60 * 1000;
const ACTIVITY_URL =
  "https://github.com/users/alexcarpenter/contributions?org=clerk";

export type ClerkActivity = {
  total: number;
  days: {
    date: string;
    count: number;
    level: 0 | 1 | 2 | 3 | 4;
  }[];
};

export async function getClerkActivity(): Promise<ClerkActivity | undefined> {
  if (import.meta.env.DEV) return mockActivity();

  try {
    const response = await fetch(ACTIVITY_URL, {
      headers: { "User-Agent": "alexcarpenter.me" },
      signal: AbortSignal.timeout(10_000),
    });

    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);

    const activity = parseClerkActivity(await response.text());
    if (!activity) throw new Error("GitHub returned an unexpected response");
    return activity;
  } catch (error) {
    console.warn(
      `Skipping Clerk activity: ${error instanceof Error ? error.message : "Unknown GitHub error"}`,
    );
    return;
  }
}

export function parseClerkActivity(html: string): ClerkActivity | undefined {
  const heading = html.match(
    /id="js-contribution-activity-description"[^>]*>([\s\S]*?)<\/h2>/,
  )?.[1];
  const total = heading?.match(/[\d,]+/)?.[0];

  if (!total) return;

  const days = Array.from(
    html.matchAll(
      /<td\b(?=[^>]*data-date="([^"]+)")(?=[^>]*data-level="([0-4])")[^>]*>[\s\S]*?<\/td>\s*<tool-tip[^>]*>([\s\S]*?)<\/tool-tip>/g,
    ),
    ([, date, level, label]) => {
      const count = label.match(/([\d,]+) contributions?/)?.[1];
      return {
        date,
        count: count ? Number.parseInt(count.replaceAll(",", ""), 10) : 0,
        level: Number(level) as 0 | 1 | 2 | 3 | 4,
      };
    },
  ).sort((a, b) => a.date.localeCompare(b.date));

  if (days.length < 350) return;
  return { total: Number.parseInt(total.replaceAll(",", ""), 10), days };
}

function mockActivity(): ClerkActivity {
  const end = new Date();
  end.setUTCHours(0, 0, 0, 0);
  const start = new Date(end.getTime() - (52 * 7 + end.getUTCDay()) * DAY_MS);
  const length = Math.round((end.getTime() - start.getTime()) / DAY_MS) + 1;
  const days = Array.from({ length }, (_, index) => {
    const count = index % 11 === 0 ? 0 : (index * 5) % 7;
    return {
      date: new Date(start.getTime() + index * DAY_MS)
        .toISOString()
        .slice(0, 10),
      count,
      level: (count ? Math.ceil(count / 2) : 0) as 0 | 1 | 2 | 3 | 4,
    };
  });

  return {
    total: days.reduce((total, day) => total + day.count, 0),
    days,
  };
}
