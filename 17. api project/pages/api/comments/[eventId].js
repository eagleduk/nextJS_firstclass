export default async function handler(req, res) {
  const eventId = req.query.eventId;

  if (req.method === "GET") {
    const comments = [];
    const response = await fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/comments/" +
        eventId +
        ".json"
    );

    if (response.ok) {
      const data = await response.json();

      Object.entries(data).map(([id, value]) => {
        comments.push({ id, ...value });
      });
    }
    res.status(200).json({ comments });
  }

  if (req.method === "POST") {
    const commentData = req.body;

    const response = await fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/comments/" +
        eventId +
        ".json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(commentData),
      }
    );
    if (response.ok) {
      res.status(200).json({ message: "Add Comment Success!" });
      return;
    }
    res.status(500).json({ message: "Add Comment Fail!" });
  }
}
