import { getFeaturedPost } from "@/utils/postUtil";
import Hero from "../components/home/Hero";
import HomePost from "../components/home/HomePost";

export default function Index(props) {
  return (
    <>
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
