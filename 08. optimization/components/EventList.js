import EventItem from "./EventItem";

import classes from "./EventList.module.css";

export default function EventList(props) {
  const { events } = props;
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          location={event.location}
          title={event.title}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
}
