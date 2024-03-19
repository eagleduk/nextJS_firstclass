import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import ResultsTitle from "@/components/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function FilteredEventPage() {
  const [allEvents, setAllEvents] = useState([]);
  const router = useRouter();

  const { data, error } = useSWR(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/events.json",
    fetcher
  );

  useEffect(() => {
    if (data) {
      const e = Object.entries(data).map(([key, value]) => ({
        ...value,
        id: key,
      }));

      setAllEvents(e);
    }
  }, [data]);

  if (!router.query.slug) {
    <p className="center">Loading....</p>;
  }

  const [year, month] = router.query.slug;

  const nYear = +year;
  const nMonth = +month;

  // if (props.error) {
  if (isNaN(nYear) || isNaN(nMonth) || nMonth < 1 || nMonth > 12 || error) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const events = allEvents.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === nYear && eventDate.getMonth() === nMonth - 1
    );
  });

  // const {
  //   events,
  //   date: { year, month },
  // } = props;

  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  return (
    <div>
      <ResultsTitle date={new Date(nYear, nMonth - 1)} />
      <EventList events={events} />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const { params } = context;

//   const [year, month] = params.slug;

//   const nYear = +year;
//   const nMonth = +month;

//   if (isNaN(nYear) || isNaN(nMonth) || nMonth < 1 || nMonth > 12) {
//     return {
//       props: {
//         error: true,
//       },
//     };
//   }

//   const events = await getFilteredEvents({ year: nYear, month: nMonth });

//   return {
//     props: {
//       events,
//       date: {
//         year: nYear,
//         month: nMonth,
//       },
//     },
//   };
// }
