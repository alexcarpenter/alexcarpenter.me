import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
// import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";
// const parser = new MarkdownIt();

export async function GET(context) {
  const links = await getCollection("links");

  return rss({
    title: "Links // Alex Carpenter",
    description: "",
    site: context.site,
    items: links.map((item) => {
      return {
        title: item.data.title,
        pubDate: item.data.published,
        link: item.data.link,
        // content: sanitizeHtml(parser.render(item.body), {
        //   allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
        // }),
      };
    }),
  });
}
