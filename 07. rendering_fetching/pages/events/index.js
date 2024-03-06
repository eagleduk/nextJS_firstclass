import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getAllEvents } from "@/dummy-data";

export default function EventPage() {
  const events = getAllEvents();
  return (
    <div>
      <EventSearch />
      <EventList events={events} />
    </div>
  );
}
