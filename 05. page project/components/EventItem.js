import Link from "next/link";

import classes from "./EventItem.module.css";
import DateIcon from "./icons/date-icon";
import AddressIcon from "./icons/address-icon";
import Button from "./ui/Button";
import ArrowRightIcon from "./icons/arrow-right-icon";

export default function EventItem(props) {
  const { title, date, image, location, id } = props;
  return (
    <div className={classes.item}>
      <img src={"/" + image} alt={title} />
      <div className={classes.content}>
        <h2>{title}</h2>
        <div className={classes.date}>
          <DateIcon />
          <time>
            {new Date(date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>
        <div className={classes.address}>
          <AddressIcon />
          <address>{location.replace(",", "\n")}</address>
        </div>
        <div className={classes.actions}>
          <Button link={"/events/" + id}>
            <span>Explore Event</span>
            <span className={classes.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
