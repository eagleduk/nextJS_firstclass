import Post from "./Post";
import classes from "./Posts.module.css";

export default function Posts(props) {
  const { posts } = props;
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </ul>
  );
}
