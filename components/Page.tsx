import * as React from 'react';
import Head from 'next/head';
import { onlyText } from 'react-children-utilities';
import Banner from '@/components/Banner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface PageProps {
  type?: 'basic' | 'post' | 'feed';
  title?: string;
  description?: string | React.ReactNode;
  image?: string;
  date?: string;
  link?: string;
  slug?: string;
  children?: React.ReactNode;
}

export default function Page({
  type = 'basic',
  title,
  description = 'Detail oriented user interface engineer currently interested in CSS architecture, React, TypeScript, design systems, and state machines.',
  image,
  date,
  link,
  slug,
  children,
}: PageProps) {
  const Component = type === 'basic' ? 'div' : 'article';
  const metaTitle = `${title ? `${title} - ` : ''}Alex Carpenter`;
  const metaDescription = onlyText(description);
  const metaImage = image ? image : '/image/meta-image.png';
  return (
    <>
      <Head>
        {/* Title */}
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />

        {/* Description */}
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />

        {/* URL */}
        <meta name="og:url" content="https://alexcarpenter.me" />

        {/* General */}
        <meta httpEquiv="Content-Language" content="en" />
        <meta property="og:type" content="website" />
        <meta name="twitter:site" content="@hybrid_alex" />
        <meta name="author" content="Alex Carpenter" />

        {/* Image */}
        <meta
          property="og:image"
          content={`https://alexcarpenter.me${metaImage}`}
        />

        {/* Favicons */}
        <meta name="theme-color" content="#000000" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <a
        href="#main"
        className="fixed top-0 left-0 p-1 bg-black dark:bg-gray-200 text-white dark:text-black text-sm transform -translate-y-full focus:translate-y-0"
      >
        Skip to content
      </a>
      <Banner />
      <main id="main" className="mb-auto">
        <Component>
          <Header
            title={title}
            description={description}
            type={type}
            date={date}
            link={link}
            slug={slug}
          />
          {children}
        </Component>
      </main>
      <Footer />
    </>
  );
}
