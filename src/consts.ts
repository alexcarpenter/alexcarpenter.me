export const SITE_VERSION = "5.0.0-alpha";
export const SITE_TITLE = "Alex Carpenter";

export const NAVIGATION = [
  {
    label: "Index",
    slug: "/",
    hotkey: "i",
  },
  {
    label: "Resume",
    slug: "/resume",
    hotkey: "r",
  },
  {
    label: "Feed",
    slug: "/feed",
    hotkey: "f",
  },
  {
    label: "Collections",
    slug: "/collections",
    hotkey: "c",
  },
];

export const SOCIALS = [
  {
    icon: "github",
    label: "GitHub",
    url: "https://github.com/alexcarpenter",
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/imalexcarpenter/",
  },
  {
    icon: "twitter",
    label: "Twitter",
    url: "https://x.com/hybrid_alex",
  },
  {
    icon: "bluesky",
    label: "Bluesky",
    url: "https://bsky.app/profile/alexcarpenter.me",
  },
] as const;

export const JOBS = [
  "Clerk",
  "Watershed",
  "HashiCorp",
  "NationBuilder",
  "Mighty in the Midwest",
  "Masuga Design",
] as const;

export const RSS_FEEDS = [
  {
    label: "Notes",
    url: "/notes/rss.xml",
  },
  {
    label: "Links",
    url: "/links/rss.xml",
  },
  {
    label: "Posts",
    url: "/posts/rss.xml",
  },
] as const;
