import Link from "next/link";
import classes from "./Post.module.css";
import Image from "next/image";

export default function Post(props) {
  const { title, date, id, expcert, image } = props.post;

  const dateString = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    day: "numeric",
  });
  const imagePath = `/images/post/${id}/${image}`;

  return (
    <li className={classes.post}>
      <Link href={`/post/${id}`}>
        <div className={classes.image}>
          <Image
            alt={title}
            src={imagePath}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{dateString}</time>
          <p>{expcert}</p>
        </div>
      </Link>
    </li>
  );
}
