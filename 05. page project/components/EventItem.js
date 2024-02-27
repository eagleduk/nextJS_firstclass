import Link from "next/link";

import classes from "./EventItem.module.css";

export default function EventItem(props) {
  const { title, date, image, location, id } = props;
  return (
    <div className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <time>
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <div className={classes.address}>
          <address>{location.replace(",", "\n")}</address>
        </div>
        <div className={classes.actions}>
          <Link href={"/events/" + id}>Explore Event</Link>
        </div>
      </div>
    </div>
  );
}
