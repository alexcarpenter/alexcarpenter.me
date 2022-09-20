import type { NextPage } from "next/types";
import { format, parseISO } from "date-fns";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { Box } from "components/Box";
import { Components } from "components/MDXComponents";
import { Heading } from "components/Heading";
import { Prose } from "components/Prose";
import { Text } from "components/Text";
import { Spacer } from "components/Spacer";

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return {
    props: {
      post,
    },
  };
}

const PostPage: NextPage<{ post: Post }> = ({ post }) => {
  const MDXContent = useMDXComponent(post.body.code);
  return (
    <>
      <NextSeo title={post.title} />
      <article>
        <Box
          as="header"
          textAlign={{ md: "center" }}
          maxWidth="container"
          marginX="auto"
        >
          <Heading fontSize={{ xs: "xxl", sm: "xxxl" }} as="h1">
            {post.title}
          </Heading>
          <Spacer height="xl" />
          <Text as="time" dateTime={post.date} color="foregroundNeutral">
            {format(parseISO(post.date), "MM/dd/Y")}
          </Text>
        </Box>

        <Spacer height="xxxxl" />

        <Box maxWidth="text" marginX="auto">
          <Prose>
            <MDXContent components={Components} />
          </Prose>
        </Box>
      </article>
    </>
  );
};

export default PostPage;
