import PostIndex from "@/components/post/Index";
import { getPosts } from "@/utils/postUtil";

export default function Posts(props) {
  return <PostIndex posts={props.posts} />;
}

export function getStaticProps() {
  return {
    props: {
      posts: getPosts(),
    },
  };
}
