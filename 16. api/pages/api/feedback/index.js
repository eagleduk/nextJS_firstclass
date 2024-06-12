import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

export function getDatabase() {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const dataFile = fs.readFileSync(filePath);
  return JSON.parse(dataFile);
}

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const feedback = {
      id: randomUUID(),
      email,
      text,
    };

    const data = getDatabase();
    data.push(feedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success", feedback });
  } else {
    const data = getDatabase();
    res.status(200).json({ feedback: data });
  }
}
