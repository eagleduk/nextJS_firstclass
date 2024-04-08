import Head from "next/head";

import { getFeaturedPost } from "@/utils/postUtil";
import Hero from "../components/home/Hero";
import HomePost from "../components/home/HomePost";

export default function Index(props) {
  return (
    <>
      <Head>
        <title>xx's blog</title>
      </Head>
      <Hero />
      <HomePost posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getFeaturedPost(),
    },
    revalidate: 10,
  };
}
