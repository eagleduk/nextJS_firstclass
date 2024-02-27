import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEventPage() {
  const router = useRouter();
  const slug = router.query.slug;
  console.log(slug);

  const events = getFilteredEvents({ year: +slug[0], month: +slug[1] });
  return (
    <div>
      <EventSearch />
      <EventList events={events} />
    </div>
  );
}
