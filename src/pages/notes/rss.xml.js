import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
const parser = new MarkdownIt();

export async function GET(context) {
  const notes = await getCollection("notes");

  return rss({
    title: "Notes // Alex Carpenter",
    description: "",
    site: context.site,
    items: notes.map((item) => {
      return {
        title: "",
        pubDate: item.data.published,
        description: item.data.description,
        link: `/notes/${item.slug}`,
        content: sanitizeHtml(parser.render(item.body), {
          allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        }),
      };
    }),
  });
}
