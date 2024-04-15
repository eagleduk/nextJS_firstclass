import { useRouter } from "next/router";
import Head from "next/head";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";

export default function New() {
  const router = useRouter();

  async function handleAddMeetupEvent(meetupData) {
    const response = await fetch("/api/meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();

    router.push("/");
  }
  return (
    <>
      <Head>
        <title>A New Meetup</title>
        <meta name="description" content="New Meetup Create!" />
      </Head>
      <NewMeetupForm onAddMeetup={handleAddMeetupEvent} />
    </>
  );
}
