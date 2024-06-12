import { getDatabase } from ".";

export default function handler(req, res) {
  const id = req.query.id;
  const data = getDatabase();

  const feedback = data.find((d) => d.id === id);
  res.status(200).json({ feedback });
}
