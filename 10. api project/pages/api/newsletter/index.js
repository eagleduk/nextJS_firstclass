export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "News Letter" });
  }
  if (req.method === "POST") {
    const email = req.body.email;
    fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    res.status(200).json({});
  }
}
