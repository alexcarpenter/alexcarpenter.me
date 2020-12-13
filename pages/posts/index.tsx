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
import Tags from "@/components/Tags";

export default function Posts({ posts }) {
  return (
    <Page title='Posts'>
      <Header>
        <Header.Title>Posts</Header.Title>
      </Header>
      <Section>
        <Section.Title>Recent</Section.Title>
        <Listing>
          {posts.map((post) => {
            const { title, description, categories } = post.data;
            return (
              <Card key={post.filePath}>
                <Card.Title>
                  <Link as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`} href={`/posts/[slug]`}>
                    <a className='hover:text-blue'>{title}</a>
                  </Link>
                </Card.Title>
                {description && <Card.Description>{description}</Card.Description>}
                {categories && (
                  <div className='mt-2'>
                    <Tags items={categories} />
                  </div>
                )}
              </Card>
            );
          })}
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
