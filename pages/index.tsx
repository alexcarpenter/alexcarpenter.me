import Page from '@/components/Page';

export default function Home() {
  return (
    <Page>
      <div className="prose md:text-xl">
        <h1>Hey, I'm Alex.</h1>
        <p>
          A detail oriented user interface engineer currently interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
        </p>
        <p>
          This site is my digital playground that I have been tending on and off
          for the past eight years. I've used it as a tool to experiment and
          teach myself new tools and techniques.
        </p>
        <p>
          Most recently this site is built using Next.js, Tailwind CSS,
          TypeScript, MDX, and hosted using Vercel. Overkill for a small
          personal website with a few posts I know, but I have learned a lot
          about React, TypeScript, Cypress E2E tests, and Github Actions from
          this experiment. Feel free to check out the source code on{' '}
          <a href="https://github.com/alexcarpenter/alexcarpenter-next">
            Github
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
