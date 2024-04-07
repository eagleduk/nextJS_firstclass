import ReactMarkdown from "react-markdown";

import classes from "./PostItem.module.css";

import PostItemHeader from "./PostItemHeader";

const DUMMY = {
  title: "Getting Started with NextJS",
  image: "getting-started-nextjs.png",
  id: "blog1",
  content: "# This is a first post",
};

export default function PostItem() {
  const imagePath = `/images/post/${DUMMY.id}/${DUMMY.image}`;
  return (
    <article className={classes.content}>
      <PostItemHeader title={DUMMY.title} src={imagePath} />
      <ReactMarkdown>{DUMMY.content}</ReactMarkdown>
    </article>
  );
}
