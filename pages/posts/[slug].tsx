import type { NextPage } from "next/types";
import { allPosts, Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { NextSeo } from "next-seo";
import { formatDate } from "lib/utils";
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
      <NextSeo
        title={post.title}
        description={post.description}
        openGraph={{
          title: post.title,
          description: post.description,
          url: `https://alexcarpenter.me/posts/${post.slug}`,
          images: [
            {
              url: `https://alexcarpenter.me/api/og?title=${post.title}`,
            },
          ],
        }}
      />
      <article>
        <Box
          as="header"
          maxWidth="text"
          marginX="auto"
          textAlign={{ md: "center" }}
        >
          <Heading fontSize="xxl" as="h1">
            {post.title}
          </Heading>
          <Spacer height="sm" />
          <Text as="time" dateTime={post.date} color="foregroundNeutral">
            {post.formattedDate}
          </Text>
        </Box>

        <Spacer height="xxxl" />

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
