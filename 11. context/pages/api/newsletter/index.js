export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ message: "News Letter" });
  }
  if (req.method === "POST") {
    const email = req.body.email;

    const response = await fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/subscription.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      }
    );
    if (response.ok) {
      res.status(200).json({ message: "Subscription Success." });
      return;
    }
    res.status(500).json({ message: "Subscription Fail." });
  }
}
