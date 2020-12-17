import Link from "next/link";
import { useRouter } from "next/router";
import Page from "@/components/Page";
import Header from "@/components/Header";
import Filter from "@/components/Filter";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Stack from "@/components/Stack";
import getContent from "@/lib/getContent";

export default function Posts({ posts }) {
  const router = useRouter();
  let tag = router.query.tagged;
  return (
    <Page title='Posts'>
      <Header>
        <Header.Title>Posts</Header.Title>
        <Header.Description>
          Bibendum class eleifend accumsan lobortis nostra fusce donec augue
          sagittis
        </Header.Description>
      </Header>
      <Section>
        <Section.Title>Recent</Section.Title>
        <Filter
          pathname='/posts'
          tags={["CSS", "JavaScript"]}
          activeTag={tag}
        />
        <Stack grid>
          {posts
            .filter((post) => {
              if (!tag) {
                return post;
              } else {
                return post.tags.map((c) => c.toLowerCase()).includes(tag);
              }
            })
            .map((post) => (
              <Stack.Item key={post.slug}>
                <Card>
                  <Card.Title>
                    <Link as={`/posts/${post.slug}`} href={`/posts/[slug]`}>
                      <a>{post.title}</a>
                    </Link>
                  </Card.Title>
                  <Card.Tags items={post.tags} />
                </Card>
              </Stack.Item>
            ))}
        </Stack>
      </Section>
    </Page>
  );
}

export function getStaticProps() {
  const posts = getContent();
  return { props: { posts } };
}
