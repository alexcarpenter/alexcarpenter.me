import type { NextPage } from "next/types";
import type { Post } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
import { Box } from "@/components/Box";
import { Heading } from "@/components/Heading";
import { Link } from "@/components/Link";
import { List, ListItem } from "@/components/List";
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
        <Spacer height="xl" />
        <List>
          {posts.map((post, index) => {
            return (
              <ListItem key={index}>
                <Box
                  display="grid"
                  columnGap="xl"
                  gridTemplateColumns={{
                    sm: "1fr",
                    md: "8rem 1fr",
                  }}
                >
                  <time dateTime={post.date}>
                    {format(parseISO(post.date), "LLL d")}
                  </time>
                  <div>
                    <Heading as="h3">
                      <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                    </Heading>
                    {post.description ? (
                      <>
                        <Spacer height="xs" />
                        <p>{post.description}</p>
                      </>
                    ) : null}
                  </div>
                </Box>
              </ListItem>
            );
          })}
        </List>
      </section>
    </>
  );
};

export default Posts;
