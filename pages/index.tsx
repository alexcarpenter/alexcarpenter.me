import Emoji from '@/components/Emoji';
import Page from '@/components/Page';

export default function Home() {
  return (
    <Page>
      <div className="prose text-xl">
        <h1>Hey, I'm Alex.</h1>
        <p>
          A detail oriented user interface engineer currently interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
        </p>
        <p>
          Outside of work I am a serial hobbyist. Currently enjoying disc golf,
          outdoor cooking, and most recently lawn maintenance. I love learning,
          sharing and being apart of passionate communities.
        </p>
        <p>
          <Emoji label="Peace">✌🏻</Emoji>
        </p>
      </div>
    </Page>
  );
}
