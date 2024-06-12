import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage() {
  const events = getFeaturedEvents();

  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
