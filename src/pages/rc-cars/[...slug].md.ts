import type { APIRoute } from "astro";
import { getCollection, type CollectionEntry } from "astro:content";

type GalleryImage = CollectionEntry<"rcCars">["data"]["gallery"][number];
type Part = CollectionEntry<"rcCars">["data"]["parts"][number];

export async function getStaticPaths() {
  const rcCars = await getCollection("rcCars");

  return rcCars.map((rcCar) => ({
    params: { slug: rcCar.id },
    props: rcCar,
  }));
}

const escapeTableCell = (value: string) =>
  value.replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

export const GET: APIRoute = async ({ props }) => {
  const rcCar = props;
  const body = rcCar.body?.trim();
  const gallery = rcCar.data.gallery.map(
    (image: GalleryImage) =>
      `![${image.alt}](${new URL(image.src.src, "https://alexcarpenter.me")})`,
  );
  const parts = rcCar.data.parts.map(
    (part: Part) =>
      `| ${escapeTableCell(part.type)} | ${escapeTableCell(part.name)} | [View on Amazon](${part.link}) |`,
  );

  const markdown = [
    `# ${rcCar.data.title}`,
    "",
    rcCar.data.description,
    gallery.length ? "" : null,
    ...gallery,
    body ? "" : null,
    body,
    "",
    "## Parts",
    "",
    "| Type | Name | Link |",
    "| --- | --- | --- |",
    ...parts,
    "",
  ]
    .filter((value): value is string => typeof value === "string")
    .join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
