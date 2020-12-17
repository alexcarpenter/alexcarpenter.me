import getContent from "@/lib/getContent";
import Header from "@/components/Header";
import Page from "@/components/Page";

function Home({ posts }) {
  return (
    <Page
      description="Hey, I'm Alex. User interface engineer currently interested in CSS
    architecture, React, TypeScript, design systems, and state machines."
    >
      <Header>
        <Header.Title>Hey, I'm Alex</Header.Title>
        <Header.Description>
          a detail oriented user interface engineer currently interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
        </Header.Description>
      </Header>
    </Page>
  );
}

export const getStaticProps = () => {
  const posts = getContent("screencasts");

  return {
    props: {
      posts,
    },
  };
};

export default Home;
