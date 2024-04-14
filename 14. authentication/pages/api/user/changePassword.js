import { comparePassword, hashPassword } from "@/utils/hashUtil";
import { getServerSession } from "next-auth/next";
import { AuthOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getServerSession(req, res, AuthOptions);

  if (!session) {
    res.status(401).json({ message: "No Have Authentication." });
    return;
  }

  const id = session.user.id;

  const response = await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/auth/" +
      id +
      ".json"
  );

  const idCheckResult = await response.json();

  if (!idCheckResult) {
    res.status(404).json({ message: "No Have ID User." });
    return;
  }

  const { newPassword, oldPassword } = req.body;

  const isCompare = comparePassword(oldPassword, idCheckResult.password);

  if (!isCompare) {
    res.status(402).json({ message: "Invalid Password" });
    return;
  }

  const hashedPassword = hashPassword(newPassword);

  await fetch(
    "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/auth/" +
      id +
      ".json",
    {
      method: "PATCH",
      body: JSON.stringify({ password: hashedPassword }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  res.status(200).json({ message: "Success" });
}
