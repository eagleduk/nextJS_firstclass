export default async function handler(req, res) {
  if (req.method !== "POST") return;

  const meetupData = req.body;

  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/meetup.json",
    {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const result = await response.json();

  res.status(200).json({ message: "Save New Meetup!" });
}
