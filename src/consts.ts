import type { CollectionEntry } from "astro:content";

export const GEAR_CATEGORY_MAP: Record<
  CollectionEntry<"gear">["data"]["category"],
  {
    title: string;
    description: string;
  }
> = {
  edc: {
    title: "Everyday Carry",
    description: "Tools I carry daily that fit into my pockets.",
  },
  coffee: {
    title: "Coffee",
    description: "My favorite coffee gear and accessories.",
  },
  home: {
    title: "Home",
    description: "My home automation setup.",
  },
  travel: {
    title: "Travel",
    description: "Gear I use while traveling and out and about.",
  },
};
