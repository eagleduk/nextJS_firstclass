import ReactMarkdown from "react-markdown";

import classes from "./PostItem.module.css";

import PostItemHeader from "./PostItemHeader";

export default function PostItem(props) {
  const imagePath = `/images/post/${props.post.id}/${props.post.image}`;
  return (
    <article className={classes.content}>
      <PostItemHeader title={props.post.title} src={imagePath} />
      <ReactMarkdown>{props.post.content}</ReactMarkdown>
    </article>
  );
}
