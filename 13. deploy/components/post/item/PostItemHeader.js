import classes from "./PostItemHeader.module.css";

import Image from "next/image";

export default function PostItemHeader(props) {
  const { title, src } = props;
  return (
    <header className={classes.header}>
      <h1>{title}</h1>
      <Image src={src} width={200} height={150} alt={title} />
    </header>
  );
}
