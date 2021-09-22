import Link from 'next/link';
import Note from '@/components/Note';
import Page from '@/components/Page';

export default function Home() {
  return (
    <Page>
      <div className="prose">
        <h1>Hey, I'm Alex.</h1>
        <p>
          A detail oriented user interface engineer interested in CSS
          architecture, React, TypeScript, design systems, and state machines.
          Currently working at{' '}
          <Link href="/work/hashicorp">
            <a>HashiCorp</a>
          </Link>
          .
        </p>
        <aside className="sm:float-right sm:w-1/2 sm:ml-4 sm:mb-4">
          <Note label="Currently" variant="orange">
            Learning TypeScript via Ultimate Courses, rebuilding{' '}
            <a href="https://us-coffee-roasters.com">us-coffee-roasters.com</a>{' '}
            with Next.js, and playing lots of disc golf.
          </Note>
        </aside>
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
