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

export const COLLECTIONS = [
  {
    label: "Everyday Carry",
    slug: "/collections/everyday-carry",
  },
  {
    label: "Favorites",
    slug: "/collections/favorites",
  },
  {
    label: "Smart Home",
    slug: "/collections/smart-home",
  },
  // {
  //   label: "Uses",
  //   slug: "/collections/uses",
  // },
] as const;
