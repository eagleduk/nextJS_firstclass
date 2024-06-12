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

    try {
      const URL = `https://${process.env.firebaseURL}/blog/contact.json`;
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, name }),
      });

      if (!response.ok) {
        res.status(500).json({ message: "Data save error.." });
        return;
      }
    } catch (err) {
      res.status(500).json({ message: "Database error..." });
    }

    res.status(200).json({ message: "success" });
  }
}
