import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const notes = await getCollection("notes");
  return rss({
    title: "Alex Carpenter - Notes",
    description: "Short-form thoughts and updates",
    site: `${context.site}/notes/`,
    items: notes.map((note) => ({
      title: `Note: ${new Date(
        note.data.published
      ).toLocaleDateString()} - ${new Date(
        note.data.published
      ).toLocaleTimeString()}`,
      pubDate: note.data.published,
      content: sanitizeHtml(parser.render(note.body)),
    })),
  });
}
