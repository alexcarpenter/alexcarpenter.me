import * as React from 'react';
import Head from 'next/head';

export default function Page({
  title = 'Alex Carpenter',
  description = 'UI Engineer',
  children,
}: {
  title?: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} key="title" />
        <meta name="description" content={description} />
        <meta name="og:description" content={description} />
      </Head>
      {children}
    </>
  );
}
