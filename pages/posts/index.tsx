import type { NextPage } from "next/types";
import type { Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { List, ListItem } from "@/components/List";
import { Item, ItemContent, ItemMeta } from "@/components/Item";
import { Spacer } from "@/components/Spacer";

export async function getStaticProps() {
  const posts = allPosts.sort((a, b) => {
    return compareDesc(new Date(a.date), new Date(b.date));
  });
  return { props: { title: "Posts", posts } };
}

const Posts: NextPage<{
  posts: Post[];
}> = ({ posts }) => {
  return (
    <>
      <section>
        <Heading decorated>Posts</Heading>
        <Spacer size="xl" />
        <List>
          {posts.map((post, index) => {
            return (
              <ListItem key={index}>
                <Item>
                  <ItemMeta>
                    <time dateTime={post.date}>
                      {format(parseISO(post.date), "LLL d")}
                    </time>
                  </ItemMeta>
                  <ItemContent>
                    <h3>
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </h3>
                    {post.description ? <p>{post.description}</p> : null}
                  </ItemContent>
                </Item>
              </ListItem>
            );
          })}
        </List>
      </section>
    </>
  );
};

export default Posts;
