import Image from 'next/image';
import Blurb from '@/components/Blurb';
import Link from '@/components/Link';
import Page from '@/components/Page';

const status = {
  content: (
    <>
      Getting back into the swing of things producing screencasts. First up, how
      to create an animated nav shadow with Framer Motion.{' '}
      <a href="https://youtu.be/CbSVUCQA2K4">youtu.be/CbSVUCQA2K4</a>
    </>
  ),
  date: '2021-12-27T14:27:52Z',
};

export default function Home() {
  return (
    <Page>
      <h1 className="sr-only">Alex Carpenter</h1>
      <div className="-mt-4">
        <Blurb date={status.date}>{status.content}</Blurb>
      </div>
      <div className="mt-8 prose">
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
          Hey, I'm Alex. A detail oriented user interface engineer interested in
          CSS architecture, React, TypeScript, design systems, and state
          machines. Currently working at{' '}
          <Link href="/work/hashicorp">HashiCorp</Link>, helping build and
          maintain public-facing HashiCorp websites and web applications with
          Next.js.
        </p>
        <p>
          Outside of work I am a self-proclaimed serial hobbyist. Currently
          interested in <del>fly fishing</del>, <del>RC cars</del>, disc golf,
          and outdoor cooking{' '}
          <a href="https://www.instagram.com/alexcarp/">#smokedmeats</a>. Also
          big fan of <Link href="/tagged/edc">everyday tools</Link> and{' '}
          <Link href="/tagged/gear">gear</Link>.
        </p>
        <h2>Colophon</h2>
        <p>
          This site is built using Next.js, Tailwind CSS, Framer Motion,
          TypeScript, MDX, and hosted using Vercel. Type is set in JetBrains
          Mono. Feel free to check out the source code on{' '}
          <a href="https://github.com/alexcarpenter/alexcarpenter-next">
            Github
          </a>
          .
        </p>
      </div>
    </Page>
  );
}
