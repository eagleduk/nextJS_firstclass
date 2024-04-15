import classes from "./MeetupView.module.css";

export default function MeetupView(props) {
  return (
    <section className={classes.detail}>
      <img src={props.meetup.image} alt={props.meetup.title} />
      <h1>{props.meetup.title}</h1>
      <address>{props.meetup.address}</address>
      <p>{props.meetup.description}</p>
    </section>
  );
}
