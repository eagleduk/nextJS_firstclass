export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, name, message } = req.body;

    if (
      !email ||
      !email.includes("@") ||
      !name ||
      name.trim() === "" ||
      !message ||
      message.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid inputs" });
      return;
    }

    const response = await fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/blog/contact.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, name }),
      }
    );

    if (!response.ok) {
      res.status(500).json({ message: "Database error.." });
      return;
    }

    res.status(200).json({ message: "success" });
  }
}
