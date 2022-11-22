import * as React from "react";
import type { NextPage } from "next";
import type { Post } from "contentlayer/generated";
import { NextSeo } from "next-seo";
import { allPosts } from "contentlayer/generated";
import { formatDate } from "lib/utils";
import { Box } from "components/Box";
import { Heading } from "components/Heading";
import { Link } from "components/Link";
import { List } from "components/List";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

export async function getStaticProps() {
  const postsByYear = allPosts
    .sort((a, b) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    })
    .reduce((years, post) => {
      const year = new Date(post.date).getFullYear();
      if (!years[year]) {
        years[year] = [];
      }
      years[year].push(post);
      return years;
    }, {} as Record<string, Post[]>);
  return { props: { title: "Posts", postsByYear } };
}

const Posts: NextPage<{
  postsByYear: Record<string, Post[]>;
}> = ({ postsByYear }) => {
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

      <Box
        as="header"
        textAlign={{ md: "center" }}
        maxWidth="container"
        marginX="auto"
      >
        <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
          Posts
        </Heading>
        <Spacer height="sm" />
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

      {Object.entries(postsByYear)
        .reverse()
        .map(([year, posts], i) => {
          return (
            <React.Fragment key={year}>
              {i > 0 ? <Spacer height="xxxxl" /> : null}
              <Box as="section" maxWidth={{ md: "text" }} marginX="auto">
                <header>
                  <Heading fontSize="xl" id={year}>
                    {year}
                  </Heading>
                </header>
                <Spacer height="xxl" />
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
                            {formatDate(post.date)}
                          </Text>
                          <Heading>
                            <Link href={`/posts/${post.slug}`}>
                              {post.title}
                            </Link>
                          </Heading>
                        </Box>
                        {post.description ? (
                          <>
                            <Spacer height={{ xs: "sm", sm: "md" }} />
                            <Text color="foregroundNeutral">
                              {post.description}
                            </Text>
                          </>
                        ) : null}
                      </List.Item>
                    );
                  })}
                </List>
              </Box>
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Posts;
