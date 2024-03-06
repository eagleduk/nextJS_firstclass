import EventList from "@/components/EventList";
import EventSearch from "@/components/EventSearch";
import ResultsTitle from "@/components/ResultsTitle";
import Button from "@/components/ui/Button";
import ErrorAlert from "@/components/ui/ErrorAlert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";

export default function FilteredEventPage(props) {
  // const router = useRouter();

  // if (!router.query.slug) {
  //   <p className="center">Loading....</p>;
  // }

  // const [year, month] = router.query.slug;

  // const nYear = +year;
  // const nMonth = +month;

  if (props.error) {
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

  const {
    events,
    date: { year, month },
  } = props;

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
      <ResultsTitle date={new Date(year, month - 1)} />
      <EventList events={events} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;

  const [year, month] = params.slug;

  const nYear = +year;
  const nMonth = +month;

  if (isNaN(nYear) || isNaN(nMonth) || nMonth < 1 || nMonth > 12) {
    return {
      props: {
        error: true,
      },
    };
  }

  const events = await getFilteredEvents({ year: nYear, month: nMonth });

  return {
    props: {
      events,
      date: {
        year: nYear,
        month: nMonth,
      },
    },
  };
}
