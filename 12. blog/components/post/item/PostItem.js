import ReactMarkdown from "react-markdown";

import classes from "./PostItem.module.css";

import PostItemHeader from "./PostItemHeader";
import Image from "next/image";

export default function PostItem(props) {
  const imagePath = `/images/post/${props.post.id}/${props.post.image}`;

  const components = {
    p(content) {
      const { node } = content;
      if (node.children[0].tagName === "img") {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/post/${props.post.id}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{content.children}</p>;
    },
  };

  return (
    <article className={classes.content}>
      <PostItemHeader title={props.post.title} src={imagePath} />
      <ReactMarkdown components={components}>
        {props.post.content}
      </ReactMarkdown>
    </article>
  );
}
