import * as React from "react";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

const Home: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <h1>Hello world</h1>
    </>
  );
};

export default Home;
