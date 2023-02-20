import * as React from "react";
import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import Link from "next/link";
import * as Grid from "components/Grid";
import * as List from "components/List";
import { Heading } from "components/Heading";
import { Spacer } from "components/Spacer";
import { Text } from "components/Text";
import { allPosts } from "contentlayer/generated";

export async function getStaticProps() {
  // const postsByYear = allPosts
  //   .sort((a, b) => {
  //     return Number(new Date(b.date)) - Number(new Date(a.date));
  //   })
  //   .reduce((years, post) => {
  //     const year = new Date(post.date).getFullYear();
  //     if (!years[year]) {
  //       years[year] = [];
  //     }
  //     years[year].push(post);
  //     return years;
  //   }, {} as Record<string, Post[]>);
  const posts = allPosts.sort((a, b) => {
    return Number(new Date(b.date)) - Number(new Date(a.date));
  });
  return { props: { title: "Posts", posts } };
}

const Posts: NextPage<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <NextSeo
        title="Posts"
        description="Strong opinions, loosely held."
        openGraph={{
          title: "Posts",
          description: "Strong opinions, loosely held.",
        }}
      />

      <Spacer height="xxxl" />

      <Grid.Container>
        <Grid.Column span="2/3">
          <Heading fontSize="xl">Posts</Heading>
          <Spacer height="xxs" />
          <Text color="foregroundNeutral">Strong opinions, loosely held.</Text>
        </Grid.Column>
      </Grid.Container>

      <Spacer height="xxxl" />

      <List.Container>
        {posts.map((post) => {
          return (
            <List.Item key={post._id}>
              <Grid.Container>
                <Grid.Column>
                  <Text
                    as="time"
                    dateTime={post.date}
                    color="foregroundNeutral"
                    fontSize="sm"
                  >
                    {post.formattedDate}
                  </Text>
                </Grid.Column>
                <Grid.Column span="2/3">
                  <Heading>
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </Heading>
                  {post.description ? (
                    <>
                      <Spacer height="sm" />
                      <Text color="foregroundNeutral">{post.description}</Text>
                    </>
                  ) : null}
                </Grid.Column>
              </Grid.Container>
            </List.Item>
          );
        })}
      </List.Container>
    </>
  );
};

export default Posts;
