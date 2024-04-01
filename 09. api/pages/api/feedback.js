import { randomUUID } from "crypto";
import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "data", "feedback.json");
  const dataFile = fs.readFileSync(filePath);
  const data = JSON.parse(dataFile);

  if (req.method === "POST") {
    const email = req.body.email;
    const text = req.body.text;

    const feedback = {
      id: randomUUID(),
      email,
      text,
    };

    data.push(feedback);

    fs.writeFileSync(filePath, JSON.stringify(data));

    res.status(201).json({ message: "Success", feedback });
  } else {
    res.status(200).json({ feedback: data });
  }
}
