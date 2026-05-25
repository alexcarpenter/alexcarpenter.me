import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { formatLinkHostname } from "@/lib/utils";

export async function getStaticPaths() {
  const notes = await getCollection("notes");
  return notes.map((note) => ({
    params: { slug: note.id },
    props: note,
  }));
}

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    weekday: "short",
  });

export const GET: APIRoute = async ({ props }) => {
  const note = props;
  const title = note.data.title;
  const link = note.data.link;
  const body = note.body?.trim();

  const heading = title
    ? link
      ? `# [${title}](${link})`
      : `# ${title}`
    : link
      ? `# ${link}`
      : `# ${note.id}`;

  const markdown = [
    heading,
    "",
    `Published: ${formatDate(note.data.published)}`,
    link ? `Source: [${formatLinkHostname(link)}](${link})` : null,
    note.data.tags?.length ? `Tags: ${note.data.tags.join(", ")}` : null,
    body ? "" : null,
    body,
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
