export const SITE_VERSION = "5.0.0-alpha";
export const SITE_TITLE = "Alex Carpenter";

export const NAVIGATION = [
  {
    label: "Index",
    slug: "/",
  },
  {
    label: "Feed",
    slug: "/feed",
  },
  {
    label: "Resume",
    slug: "/resume",
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
] as const;

export const JOBS = [
  "Clerk",
  "Watershed",
  "HashiCorp",
  "NationBuilder",
  "Mighty in the Midwest",
  "Masuga Design",
] as const;
