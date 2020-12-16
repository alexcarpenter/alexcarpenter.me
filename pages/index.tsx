import Header from "@/components/Header";
import Page from "@/components/Page";

function Home() {
  return (
    <Page description='UI Engineer'>
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

export default Home;
