import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { cx, formatDate } from '@/lib/utils';
import { getLatestUpdate } from '@/lib/feed';
import { MDXRemote } from 'next-mdx-remote';
import { components } from '@/components/MDXComponents';
import Prose from '@/components/Prose';

type HomeProps = any;

const Home: NextPage<HomeProps> = ({ date, mdx }) => {
  return (
    <>
      <article
        className={cx(
          '-mt-4 relative w-full p-4 rounded-md border',
          'bg-white border-gray-200',
          'dark:bg-gray-800 dark:border-gray-700',
        )}
      >
        <span
          className={cx(
            'block w-4 h-4 absolute top-0 left-4 rotate-45 -translate-y-1/2 border border-r-0 border-b-0',
            'bg-white border-gray-200',
            'dark:bg-gray-800 dark:border-gray-700',
          )}
        />
        <Prose>
          <MDXRemote {...mdx} components={components} />
        </Prose>
        <p
          className={cx(
            'mt-4 text-sm flex justify-between flex-wrap gap-4',
            'text-gray-600',
            'dark:text-gray-300',
          )}
        >
          <span>&mdash; {formatDate(date, 'full')}</span>
          <Link href="/feed/tagged/update">
            <a className="underline">View more</a>
          </Link>
        </p>
      </article>

      <Prose className="mt-12">
        <h2>About</h2>
        <div className="relative float-right w-1/3 ml-4 md:ml-8 mb-4 md:mb-8 inline-flex rounded-md overflow-hidden">
          <Image
            src="/img/family.jpeg"
            width={400}
            height={400}
            alt="My wife, my dog, and I at the park."
          />
        </div>
        <p>
          Hey, I&apos;m Alex. A detail oriented user interface engineer
          interested in CSS architecture, React, TypeScript, design systems, and
          state machines. Currently working at{' '}
          <Link href="/work/hashicorp">
            <a>HashiCorp</a>
          </Link>
          , helping build and maintain public-facing HashiCorp websites and web
          applications with Next.js.
        </p>
        <p>
          Outside of work I am a self-proclaimed serial hobbyist. Currently
          interested in <del>fly fishing</del>, <del>RC cars</del>, disc golf,
          and outdoor cooking{' '}
          <a href="https://www.instagram.com/alexcarp/">#smokedmeats</a>. Also
          big fan of everyday tools and gear.
        </p>
        <h2>Colophon</h2>
        <p>
          This site is built using Next.js, Tailwind CSS, Framer Motion, React
          Aria, TypeScript, MDX, and hosted using Vercel. Type is set in
          JetBrains Mono. Feel free to check out the source code on{' '}
          <a href="https://github.com/alexcarpenter/alexcarpenter-next">
            Github
          </a>
          .
        </p>
      </Prose>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const update = await getLatestUpdate();
  return {
    props: {
      ...update,
    },
  };
};

export default Home;
