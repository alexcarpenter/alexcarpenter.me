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
          This site is my digital playground that I have been tending on and off
          for the past eight years. I've used it as a tool to experiment and
          teach myself new tools and techniques. Most recently this site is
          built using Next.js, Tailwind CSS, TypeScript, MDX, and hosted using
          Vercel. View the source on{' '}
          <a href="https://github.com/alexcarpenter/alexcarpenter-next">
            Github
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
