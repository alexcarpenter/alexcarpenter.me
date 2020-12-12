import Page from "@/components/Page";
import Header from "@/components/Header";

function Home() {
  return (
    <>
      <Page description='UI Engineer'>
        <Header>
          <Header.Title>Hey, I'm Alex</Header.Title>
          <Header.Description>a detail oriented user interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.</Header.Description>
        </Header>
        {/* <Section>
          <Section.Title>Experience</Section.Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus totam harum fuga, deserunt mollitia non expedita nam adipisci illum velit aperiam nemo, cumque eligendi necessitatibus nesciunt praesentium accusamus veritatis.</p>
        </Section>
        <Section>
          <Section.Title>Interests</Section.Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus totam harum fuga, deserunt mollitia non expedita nam adipisci illum velit aperiam nemo, cumque eligendi necessitatibus nesciunt praesentium accusamus veritatis.</p>
        </Section>
        <Section>
          <Section.Title>Recomendations</Section.Title>
          <Grid>
            <Card>
              <Card.Description italic>“Alex is incredibly skilled, efficient, and thorough in his work. Perhaps more than any other co-worker I have had, Alex possesses a deep and wide understanding of modern web technologies, while his steady passion for producing best-of-class work inspires his peers to write cleaner, simpler, and more elegant code.”</Card.Description>
              <p className="mt-auto pt-2">&ndash; Kyle Luck</p>
            </Card>
            <Card>
              <Card.Description italic>“I would recommend Alex to any forward-thinking web team. His passion for web standards along with his friendly attitude made him an invaluable part of our development team. I’m always especially impressed with his commitment to continuous learning and I hope to have the chance to work with him again!”</Card.Description>
              <p className="mt-auto pt-2">&ndash; Melissa Taylor</p>
            </Card>
            <Card>
              <Card.Description italic>“Alex is incredibly thorough and thoughtful with his work and is always seeking out improving in his craft. He’s conscious of meeting deadlines and communicates concerns early so that project teams can be proactive in problem solving.”</Card.Description>
              <p className="mt-auto pt-2">&ndash; Danielle Dunn</p>
            </Card>
            <Card>
              <Card.Description italic>“Alex is a true autodidact that is dedicated to keeping up with the latest development tools, methods and trends.”</Card.Description>
              <p className="mt-auto pt-2">&ndash; Benjamin Kohl</p>
            </Card>
          </Grid>
        </Section> */}
      </Page>
    </>
  );
}

export default Home;
