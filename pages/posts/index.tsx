import * as React from "react";
import { compareDesc, format, parseISO } from "date-fns";
import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { allPosts } from "contentlayer/generated";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { List } from "components/List";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

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
      <NextSeo title="Posts" />

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          Posts
        </Heading>
        <Spacer height="xl" />
        <Text
          fontSize={{ xs: "lg", sm: "xl" }}
          color="foregroundNeutral"
          style={{
            display: "inline-flex",
          }}
        >
          Strong opinions, loosely held.
        </Text>
      </Box>

      <Spacer height="xxxxl" />

      <Box as="section" maxWidth={{ md: "text" }} marginX="auto">
        <List>
          {posts.map((post) => {
            return (
              <List.Item key={post._id}>
                <Box
                  display="flex"
                  flexDirection={{
                    xs: "column",
                    sm: "row-reverse",
                  }}
                  alignItems={{ sm: "center" }}
                  justifyContent={{ sm: "space-between" }}
                  gap="sm"
                  maxWidth="text"
                >
                  <Text color="foregroundNeutral" fontSize="sm">
                    {format(parseISO(post.date), "y")}
                  </Text>
                  <Heading>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </Heading>
                </Box>
                <Spacer height={{ xs: "sm", sm: "md" }} />
                <Text color="foregroundNeutral">{post.description}</Text>
              </List.Item>
            );
          })}
        </List>
      </Box>
    </>
  );
};

export default Posts;
