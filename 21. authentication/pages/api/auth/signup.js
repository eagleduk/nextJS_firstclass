import { hashPassword } from "@/utils/hashUtil";

export default async function handler(req, res) {
  if (req.method !== "POST") return;

  const { id, password } = req.body;

  if (!id || id.trim() === "" || !password || password.trim().length < 6) {
    res.status(422).json({ message: "Invalid Inputs" });
    return;
  }

  const hashedPassword = hashPassword(password);

  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/auth/" +
      id +
      ".json"
  );

  const result = await response.json();

  if (result) {
    res.status(422).json({ message: "Duplicated ID" });
    return;
  }
  await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/auth/" +
      id +
      ".json",
    {
      method: "PUT",
      body: JSON.stringify({ password: hashedPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res.status(200).json({ message: "Success" });
}
