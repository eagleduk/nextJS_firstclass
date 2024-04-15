import Head from "next/head";

import MeetupView from "@/components/meetups/MeetupView";

export default function MeetupDetail(props) {
  return (
    <>
      <Head>
        <title>{props.meetup.title}</title>
        <meta name="description" content={props.meetup.description} />
      </Head>
      <MeetupView meetup={props.meetup} />
    </>
  );
}

export async function getStaticProps(req, res) {
  const meetupId = req.params.meetupId;

  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/meetup/" +
      meetupId +
      ".json"
  );

  const meetup = await response.json();

  return {
    props: {
      meetup: { ...meetup, id: meetupId },
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json"
  );

  const meetups = await response.json();

  return {
    fallback: "blocking",
    paths: Object.keys(meetups).map((id) => ({ params: { meetupId: id } })),
  };
}
