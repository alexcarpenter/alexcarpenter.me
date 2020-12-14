import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { postFilePaths, POSTS_PATH } from "../../lib/mdxUtils";
import Page from "@/components/Page";
import Header from "@/components/Header";
import Section from "@/components/Section";
import Card from "@/components/Card";
import Listing from "@/components/Listing";

export default function Posts({ posts }) {
  return (
    <Page title='Posts'>
      <Header>
        <Header.Title>Posts</Header.Title>
        <Header.Description>Bibendum class eleifend accumsan lobortis nostra fusce donec augue sagittis</Header.Description>
      </Header>
      <Section>
        <Section.Title>Lastest posts</Section.Title>
        <Listing>
          {posts.map((post) => (
            <Card key={post.filePath}>
              <Card.Title>
                <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
                  <a>{post.data.title}</a>
                </Link>
              </Card.Title>
              {post.data.description && (
                <Card.Description>{post.data.description}</Card.Description>
              )}
            </Card>
          ))}
        </Listing>
      </Section>
    </Page>
  );
}

export function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}
