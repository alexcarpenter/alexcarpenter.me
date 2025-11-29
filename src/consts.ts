export const COMPANIES = [
  "Clerk",
  "Watershed",
  "HashiCorp",
  "NationBuilder",
  "Mighty in the Midwest",
  "Masuga Design",
] as const;

export const GEAR_CATEGORIES = [
  "bag",
  "coffee",
  "edc",
  "gym",
  "home",
  "wellness",
  "kitchen",
  "knife",
  "flashlight",
  "misc",
  "travel",
  "workspace",
] as const;

type GearCategory = (typeof GEAR_CATEGORIES)[number];

export const GEAR_CATEGORY_MAP: Record<
  GearCategory,
  {
    title: string;
    description: string;
    slug: string;
  }
> = {
  bag: {
    title: "Bags",
    description: "My current rotation of bags.",
    slug: "bags",
  },
  coffee: {
    title: "Coffee",
    description: "My favorite coffee gear and accessories.",
    slug: "coffee",
  },
  edc: {
    title: "Everyday Carry",
    description: "Tools I carry daily that fit into my pockets.",
    slug: "everyday-carry",
  },
  flashlight: {
    title: "Flashlights",
    description: "My favorite flashlights and lighting gear.",
    slug: "flashlights",
  },
  gym: {
    title: "Home Gym",
    description: "My home gym equipment and setup.",
    slug: "home-gym",
  },
  wellness: {
    title: "Health & Wellness",
    description: "",
    slug: "health-and-wellness",
  },
  home: {
    title: "Home",
    description: "My home automation setup.",
    slug: "home",
  },
  kitchen: {
    title: "Kitchen",
    description: "My favorite kitchen gadgets and tools.",
    slug: "kitchen",
  },
  knife: {
    title: "Knives",
    description: "Pocket knives and multi-tools.",
    slug: "knives",
  },
  travel: {
    title: "Travel",
    description: "Gear I use while traveling and out and about.",
    slug: "travel",
  },
  workspace: {
    title: "Workspace",
    description: "The tools I use for work.",
    slug: "workspace",
  },
  misc: {
    title: "Miscellaneous",
    description: "Other gear that doesn't fit into a specific category.",
    slug: "miscellaneous",
  },
};
