import { GetStaticProps, NextPage } from "next";
import type { FeedFrontMatter } from "@/lib/feed";
import { getAllFeed, serializeMdxContent } from "@/lib/feed";
import pageData from "@/data/feed.json";
import Intro from "@/components/Intro";
import EntryList from "@/components/EntryList";
import Prose from "@/components/Prose";
import { MDXRemote } from "next-mdx-remote";
import { components } from "@/components/MDXComponents";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type FeedProps = {
  title: string;
  description: string;
  items: Array<{
    frontMatter: FeedFrontMatter;
    mdx: any;
  }>;
};

const Feed: NextPage<FeedProps> = ({ title, description, items }) => {
  return (
    <>
      <Intro title={title} description={description} />

      <EntryList>
        {items
          .sort(
            (a, b) =>
              Number(new Date(b.frontMatter.date)) -
              Number(new Date(a.frontMatter.date))
          )
          .map((item, index) => {
            const source = item.mdx;
            return (
              <article key={index}>
                <Prose>
                  <MDXRemote {...source} components={components} />
                </Prose>
                <p className="mt-6 text-sm textSecondary">
                  &mdash;{" "}
                  <Link href={`/feed/${item.frontMatter.slug}`}>
                    <a className="underline hover:no-underline">
                      <time dateTime={item.frontMatter.date}>
                        {formatDate(item.frontMatter.date, "full")}
                      </time>
                    </a>
                  </Link>
                </p>
              </article>
            );
          })}
      </EntryList>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const items = getAllFeed();

  return {
    props: {
      ...pageData,
      items: await Promise.all(items.map((f) => serializeMdxContent(f))),
    },
  };
};

export default Feed;
