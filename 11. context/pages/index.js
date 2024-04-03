import Head from "next/head";

import { getFeaturedEvents } from "../helpers/api-util";
import EventList from "../components/events/event-list";
import NewsletterRegistration from "../components/input/newsletter-registration";
import NotificationProvider, {
  notificationContext,
} from "../store/notificationContext";
import { useContext } from "react";
import Notification from "../components/ui/notification";

function HomePage(props) {
  const {
    notification: { title, message, status },
    onReset,
  } = useContext(notificationContext);
  return (
    <NotificationProvider>
      <Head>
        <title>NextJS Events </title>
        <meta
          name="description"
          content="Find a lot of great events that allow you to evolve..."
        />
      </Head>
      <NewsletterRegistration />
      <EventList items={props.events} />
      <Notification />
    </NotificationProvider>
  );
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}

export default HomePage;
