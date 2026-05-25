import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const formatDate = (date: Date) =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

export const GET: APIRoute = async () => {
  const notes = await getCollection("notes");

  const markdown = [
    "# Notes",
    "",
    "Notes from Alex Carpenter on engineering, developer experience, design systems, and accessibility.",
    "",
    ...notes
      .sort(
        (a, b) =>
          Date.parse(b.data.published.toString()) -
          Date.parse(a.data.published.toString()),
      )
      .map((note) => {
        const title = note.data.title ?? note.data.description ?? note.id;
        const date = formatDate(note.data.published);
        return `- [${title}](https://alexcarpenter.me/notes/${note.id}.md) — ${date}`;
      }),
    "",
  ].join("\n");

  return new Response(markdown, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
    },
  });
};
