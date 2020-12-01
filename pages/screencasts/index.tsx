import Page from "@/components/Page";
import Card from "@/components/Card";
import Listing from "@/components/Listing";
import Header from "@/components/Header";
import PseudoLink from "@/components/PseudoLink";
import Section from "@/components/Section";
import ScreencastStats from "@/components/ScreencastStats";

function Screencasts() {
  return (
    <>
      <Page title="Screencasts">
        <Header>
          <Header.Title>Screencasts</Header.Title>
          <Header.Description>Sed tincidunt aenean magnis velit tellus egestas urna placerat ipsum elit cum hac platea hendrerit ac tempus sollicitudin.</Header.Description>
        </Header>
        <div className='mt-8'>
          <ScreencastStats />
          <div className='mt-4 text-center'>
            <a href='https://www.youtube.com/channel/UC2jJoQlzvLPvnYfowAEVaOg?sub_confirmation=1' className='inline-flex items-center text-blue hover:underline'>
              Subscribe on YouTube{" "}
              <svg className='ml-1' aria-hidden="true" xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                <polyline points='15 3 21 3 21 9'></polyline>
                <line x1='10' y1='14' x2='21' y2='3'></line>
              </svg>
            </a>
          </div>
        </div>
        <Section>
          <Section.Title>Popular</Section.Title>
          <Listing>
            <Card>
              <Card.Title><PseudoLink href="https://www.youtube.com/watch?v=Uwnmn65cMec">How to lazyload images</PseudoLink></Card.Title>
              <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus atque enim beatae. Voluptates doloremque, expedita molestias quas neque eaque pariatur error voluptatem debitis dignissimos adipisci sequi repellat excepturi modi.</Card.Description>
            </Card>
            <Card>
              <Card.Title>How to create overlapping images with CSS Grid</Card.Title>
              <Card.Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat possimus atque enim beatae. Voluptates doloremque, expedita molestias quas neque eaque pariatur error voluptatem debitis dignissimos adipisci sequi repellat excepturi modi.</Card.Description>
            </Card>
          </Listing>
        </Section>
      </Page>
    </>
  );
}

export default Screencasts;
