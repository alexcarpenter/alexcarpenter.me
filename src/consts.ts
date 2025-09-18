import type { CollectionEntry } from "astro:content";

export const GEAR_CATEGORY_MAP: Record<
  CollectionEntry<"gear">["data"]["category"],
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
  flashlight: {
    title: "Flashlights",
    description: "My favorite flashlights and lighting gear.",
    slug: "flashlights",
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
};
