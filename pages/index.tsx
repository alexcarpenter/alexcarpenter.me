import Card from "@/components/Card";
import Grid from "@/components/Grid";
import Header from "@/components/Header";
import Page from "@/components/Page";
import Section from "@/components/Section";

function Home() {
  return (
    <>
      <Page description='UI Engineer'>
        <Header>
          <Header.Title>Hey, I'm Alex</Header.Title>
          <Header.Description>a detail oriented user interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.</Header.Description>
        </Header>
        {/* <Section>
          <Section.Title>2020</Section.Title>
          <ul className='space-y-8'>
            <li className='flex'>
              <div className='h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mr-8'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <circle cx='18' cy='18' r='3'></circle>
                  <circle cx='6' cy='6' r='3'></circle>
                  <path d='M6 21V9a9 9 0 0 0 9 9'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <h3 className='text-lg font-bold'>Posted Switching to Next.js</h3>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet praesentium delectus laboriosam debitis id iste nisi, dicta doloribus eum, fuga facilis quis vero eos architecto qui saepe. Eius, voluptatum perspiciatis.</p>
                <div className='mt-4'>
                  <a href='' className='bg-blue text-white px-4 py-2 inline-block rounded'>
                    View repo
                  </a>
                </div>
              </div>
            </li>
            <li className='flex'>
              <div className='h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mr-8'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <circle cx='18' cy='18' r='3'></circle>
                  <circle cx='6' cy='6' r='3'></circle>
                  <path d='M6 21V9a9 9 0 0 0 9 9'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <h3 className='text-lg font-bold'>Posted Switching to Next.js</h3>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet praesentium delectus laboriosam debitis id iste nisi, dicta doloribus eum, fuga facilis quis vero eos architecto qui saepe. Eius, voluptatum perspiciatis.</p>
              </div>
            </li>
            <li className='flex'>
              <div className='h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mr-8'>
                <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'>
                  <circle cx='18' cy='18' r='3'></circle>
                  <circle cx='6' cy='6' r='3'></circle>
                  <path d='M6 21V9a9 9 0 0 0 9 9'></path>
                </svg>
              </div>
              <div className='mt-3'>
                <h3 className='text-lg font-bold'>Posted Switching to Next.js</h3>
                <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet praesentium delectus laboriosam debitis id iste nisi, dicta doloribus eum, fuga facilis quis vero eos architecto qui saepe. Eius, voluptatum perspiciatis.</p>
              </div>
            </li>
          </ul>
        </Section>
        <Section>
          <Section.Title>2019</Section.Title>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus totam harum fuga, deserunt mollitia non expedita nam adipisci illum velit aperiam nemo, cumque eligendi necessitatibus nesciunt praesentium accusamus veritatis.</p>
        </Section> */}
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
              <p className='mt-auto pt-2'>&ndash; Kyle Luck</p>
            </Card>
            <Card>
              <Card.Description italic>“I would recommend Alex to any forward-thinking web team. His passion for web standards along with his friendly attitude made him an invaluable part of our development team. I’m always especially impressed with his commitment to continuous learning and I hope to have the chance to work with him again!”</Card.Description>
              <p className='mt-auto pt-2'>&ndash; Melissa Taylor</p>
            </Card>
            <Card>
              <Card.Description italic>“Alex is incredibly thorough and thoughtful with his work and is always seeking out improving in his craft. He’s conscious of meeting deadlines and communicates concerns early so that project teams can be proactive in problem solving.”</Card.Description>
              <p className='mt-auto pt-2'>&ndash; Danielle Dunn</p>
            </Card>
            <Card>
              <Card.Description italic>“Alex is a true autodidact that is dedicated to keeping up with the latest development tools, methods and trends.”</Card.Description>
              <p className='mt-auto pt-2'>&ndash; Benjamin Kohl</p>
            </Card>
          </Grid>
        </Section> */}
      </Page>
    </>
  );
}

export default Home;
