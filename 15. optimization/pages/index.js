import Head from "next/head";

import EventList from "@/components/EventList";
import { getFeaturedEvents } from "@/dummy-data";

export default function HomePage(props) {
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
      </Head>
      <EventList events={props.events} />
    </div>
  );
}

export async function getStaticProps(context) {
  const events = await getFeaturedEvents();

  return {
    props: {
      events,
    },
  };
}
