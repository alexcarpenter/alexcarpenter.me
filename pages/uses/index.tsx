import hydrate from 'next-mdx-remote/hydrate';
import { getContentBySlug } from '@/lib/mdx';
import Page from '@/components/Page';
import MDXComponents from '@/components/MDXComponents';

export default function Uses({ source, frontMatter }) {
  const { title, description } = frontMatter;
  const content = hydrate(source, { components: MDXComponents });
  return (
    <Page meta={{ title, description }}>
      <Page.Header>
        <Page.Title>{title}</Page.Title>
        <Page.Description>{description}</Page.Description>
      </Page.Header>
      <Page.Content>{content}</Page.Content>
    </Page>
  );
}

export async function getStaticProps() {
  const uses = await getContentBySlug('uses');
  return { props: uses };
}
