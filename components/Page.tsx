import * as React from 'react';
import { formatDate, widont } from '@/lib/utils';
import Head from 'next/head';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Views from '@/components/Views';

interface PageProps {
  title?: string;
  description?: string;
  date?: string;
  link?: string;
  as?: 'div' | 'article';
  slug?: string;
  type?: 'post' | 'work';
  children?: React.ReactNode;
}

export default function Page({
  title,
  description = 'UI Engineer',
  date,
  link,
  as: Component = 'div',
  slug,
  thumbnail,
  type,
  children,
}: PageProps) {
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
        className="fixed top-0 left-0 p-1 bg-yellow-400 text-[#111] text-sm transform -translate-y-full focus:translate-y-0"
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
