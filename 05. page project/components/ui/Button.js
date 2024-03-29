import Link from "next/link";

import classes from "./Button.module.css";

export default function Button(props) {
  return (
    <Link href={props.link} className={classes.btn}>
      {props.children}
    </Link>
  );
}
