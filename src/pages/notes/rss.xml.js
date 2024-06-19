import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const notes = await getCollection("notes");
  return rss({
    title: "Notes // Alex Carpenter",
    description: "Short-form thoughts and updates.",
    site: context.site,
    trailingSlash: false,
    items: notes
      .sort((a, b) => {
        const aDate = a.data.published;
        const bDate = b.data.published;
        return Date.parse(bDate.toString()) - Date.parse(aDate.toString());
      })
      .map((note) => ({
        link: `/notes/${note.slug}`,
        pubDate: note.data.published,
        title: `Note: ${note.data.published}`,
        content: sanitizeHtml(parser.render(note.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat([
            "img",
            "details",
            "summary",
          ]),
        }),
      })),
  });
}
