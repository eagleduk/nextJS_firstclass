import Head from "next/head";

import MeetupList from "../components/meetups/MeetupList";

export default function Root(props) {
  return (
    <>
      <Head>
        <title>My Meetups!</title>
        <meta name="description" content="My NextJS Meetup Project!" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json"
  );

  const meetups = await response.json();

  return {
    revalidate: 10,
    props: {
      meetups: Object.entries(meetups).map(([id, value]) => ({
        ...value,
        id,
      })),
    },
  };
}
