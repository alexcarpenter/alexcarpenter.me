import type { ReactElement } from 'react';
import Page from '@/layouts/Page';

export default function Home() {
  return <p>Hello world</p>;
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Page>{page}</Page>;
};
