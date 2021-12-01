import Image from 'next/image';
import Blurb from '@/components/Blurb';
import Link from '@/components/Link';
import Page from '@/components/Page';

export default function Home() {
  return (
    <Page>
      <h1 className="sr-only">Alex Carpenter</h1>
      <Blurb date="2021-11-30T17:19:32Z">
        The winter snow has finally arrived here in Michigan. Not sure I am
        ready for it but excited for the holidays!
      </Blurb>
      <div className="mt-8">
        <div className="prose">
          <h2>About</h2>
          <div className="relative float-right w-1/3 ml-4 md:ml-8 mb-4 md:mb-8 inline-flex rounded-md overflow-hidden">
            <Image
              src="/images/family.jpg"
              width={400}
              height={400}
              alt="My wife, my dog, and I at the park."
            />
          </div>
          <p>
            Hey! I'm Alex, a detail oriented user interface engineer interested
            in CSS architecture, React, TypeScript, design systems, and state
            machines. Currently working at{' '}
            <Link href="/work/hashicorp">HashiCorp</Link>, helping build and
            maintain public-facing HashiCorp websites and web applications with
            Next.js.
          </p>
          <p>
            Outside of work I am a self-proclaimed serial hobbyist. Currently
            interested in <del>fly fishing</del>, <del>RC cars</del>, disc golf,
            and outdoor cooking{' '}
            <a href="https://www.instagram.com/alexcarp/">#smokedmeats</a>.
          </p>
          <h2>Colophon</h2>
          {/* <p>
            This site is my digital playground that I have been tending on and
            off for the past eight years. I've used it as a tool to experiment
            and teach myself new tools and techniques.
          </p> */}
          <p>
            This site is built using Next.js, Tailwind CSS, TypeScript, MDX, and
            hosted using Vercel. Type is set in JetBrains Mono. Overkill for a
            small personal website with a few posts I know, but I have learned a
            lot about React, TypeScript, Cypress E2E tests, and Github Actions
            from this experiment. Feel free to check out the source code on{' '}
            <a href="https://github.com/alexcarpenter/alexcarpenter-next">
              Github
            </a>
            .
          </p>
        </div>
      </div>
    </Page>
  );
}
