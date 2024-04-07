import PostItem from "@/components/post/item/PostItem";
import { getPostFiles, getPost } from "@/utils/postUtil";

export default function Post(props) {
  return <PostItem post={props.post} />;
}

export function getStaticProps(context) {
  const { params } = context;
  return {
    props: {
      post: getPost(params.id + ".md"),
    },
  };
}

export function getStaticPaths() {
  const posts = getPostFiles();
  return {
    paths: posts.map((post) => ({ params: { id: post.replace(".md", "") } })),
    fallback: "blocking",
  };
}
