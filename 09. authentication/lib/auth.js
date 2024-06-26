import db from "./db";

export function createUser(email, password) {
  const data = db
    .prepare("INSERT INTO users (email,password) VALUES (?,?)")
    .run(email, password);

  return data.lastInsertRowid;
}
