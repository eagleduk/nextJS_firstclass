import Posts from "../post/Posts";
import classes from "./HomePost.module.css";

export default function HomePost(props) {
  const { posts } = props;
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <Posts posts={posts} />
    </section>
  );
}
