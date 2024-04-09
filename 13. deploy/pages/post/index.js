import Head from "next/head";

import PostIndex from "@/components/post/Index";
import { getPosts } from "@/utils/postUtil";

export default function Posts(props) {
  return (
    <>
      <Head>
        <title>All My Posts.</title>
      </Head>
      <PostIndex posts={props.posts} />
    </>
  );
}

export function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
