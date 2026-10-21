import rss from "@astrojs/rss";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";
import { getCollection } from "astro:content";

const markdown = await createMarkdownProcessor({ syntaxHighlight: false });

export async function GET(context) {
  const notes = await getCollection("notes");
  return rss({
    title: "Notes - Alex Carpenter",
    description:
      "Notes on engineering, developer experience, design systems, and accessibility.",
    site: context.site,
    items: await Promise.all(
      notes
        .sort((a, b) => b.data.published - a.data.published)
        .map(async (post) => ({
          title: post.data.title,
          description: post.data.description,
          pubDate: post.data.published,
          link: `/notes/${post.id}`,
          content: post.body && (await markdown.render(post.body)).code,
        })),
    ),
  });
}
