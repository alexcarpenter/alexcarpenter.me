import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async () => {
  const rcCars = (await getCollection("rcCars")).sort((a, b) =>
    a.data.heading.localeCompare(b.data.heading),
  );

  const markdown = [
    "# RC Cars",
    "",
    "RC car builds, upgrades, parts lists, and installation notes from Alex Carpenter.",
    "",
    "## Builds",
    "",
    ...rcCars.map(
      (rcCar) =>
        `- [${rcCar.data.heading}](https://alexcarpenter.me/rc-cars/${rcCar.id}.md) — ${rcCar.data.description}`,
    ),
    "",
  ].join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
