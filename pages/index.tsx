import type { NextPage } from "next";
import Head from "next/head";
import Blogs from "../components/Blogs";
import Features from "../components/Features";
import Header from "../components/Header";
import Main from "../components/Main";
import { PostsProp } from "../interfaces/interface";

const Home: NextPage<PostsProp> = () => {
  return (
    <div>
      <Head>
        <title>Bloggy</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <>
        <Main />
      </>
    </div>
  );
};

export default Home;
