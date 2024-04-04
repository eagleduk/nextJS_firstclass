import classes from "./Index.module.css";
import Posts from "./Posts";

export default function PostIndex(props) {
  const { posts } = props;
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      {posts.map((post) => (
        <Posts posts={posts} key={posts.id} />
      ))}
    </section>
  );
}
