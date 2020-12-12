import Header from "@/components/Header";
import Page from "@/components/Page";
import Video from "@/components/Video";
import youtube from "pages/api/youtube";

export default function Post({ frontMatter, content }) {
  return (
    <Page {...frontMatter}>
      <article>
        <Header>
          <Header.Title decorate={false}>{frontMatter.title}</Header.Title>
          <Header.Description>{frontMatter.description}</Header.Description>
        </Header>
        {frontMatter.youtubeId && (
          <div className='my-8 -mx-4 md:-mx-16 bg-gray-200'>
            <Video id={frontMatter.youtubeId} />
          </div>
        )}
        <div className='mt-4 space-y-3'>{content}</div>
      </article>
    </Page>
  );
}
