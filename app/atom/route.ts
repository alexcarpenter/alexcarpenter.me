import { allPages } from "contentlayer/generated";

export async function GET() {
  const max = 100; // max returned posts
  const latest = allPages[0];
  return new Response(
    `<?xml version="1.0" encoding="utf-8"?>
  <feed xmlns="http://www.w3.org/2005/Atom">
    <title>Alex Carpenter</title>
    <subtitle>Web engineer</subtitle>
    <link href="https://alexcarpenter.me/atom" rel="self"/>
    <link href="https://alexcarpenter.me/"/>
    <updated>${latest.updated ? latest.updated : latest.published}</updated>
    <id>https://alexcarpenter.me/</id>
    <author>
      <name>Alex Carpenter</name>
      <email>im.alexcarpenter@gmail.com</email>
    </author>
    ${allPages
      .filter(({ draft }) => !draft)
      .slice(0, max)
      .reduce((acc, post) => {
        return `${acc}
        <entry>
          <id>${post._id}</id>
          <title>${post.title}</title>
          <description>${post.description}</description>
          <link href="https://alexcarpenter.me/${post.slug}"/>
          <updated>${post.updated ? post.updated : post.published}</updated>
        </entry>`;
      }, "")}
  </feed>`,
    {
      headers: {
        "Content-Type": "application/atom+xml; charset=utf-8",
      },
    }
  );
}
