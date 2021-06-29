import * as React from 'react';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Header from '@/components/Header';

interface PageProps {
  type?: 'basic' | 'post' | 'work';
  title?: string;
  description?: string;
  date?: string;
  link?: string;
  thumbnail?: {
    src: string;
    width: string;
    height: string;
    alt: string;
  };
  slug?: string;
  children?: React.ReactNode;
}

export default function Page({
  type = 'basic',
  title,
  description = 'Detail oriented user interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.',
  date,
  link,
  slug,
  thumbnail,
  children,
}: PageProps) {
  const Component = type === 'basic' ? 'div' : 'article';
  return (
    <>
      <Head>
        <title>{`${title ? `${title} - ` : ''}Alex Carpenter`}</title>
        <meta
          property="og:title"
          content={`${title ? `${title} - ` : ''}Alex Carpenter`}
        />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <a
        href="#main"
        className="fixed top-0 left-0 p-1 bg-orange-500 text-black text-sm transform -translate-y-full focus:translate-y-0"
      >
        Skip to content
      </a>
      <Banner />
      <main id="main">
        <Component>
          <Header
            title={title}
            description={description}
            type={type}
            date={date}
            link={link}
            thumbnail={thumbnail}
            slug={slug}
          />
          {children}
        </Component>
      </main>
    </>
  );
}
