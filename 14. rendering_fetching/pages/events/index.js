import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getAllEvents } from "@/dummy-data";

export default function EventPage(props) {
  return (
    <div>
      <EventSearch />
      <EventList events={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getAllEvents();

  return {
    props: {
      events,
    },
  };
}
