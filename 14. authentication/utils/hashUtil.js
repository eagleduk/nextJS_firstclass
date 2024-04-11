import { hashSync, compareSync } from "bcryptjs";

export function hashPassword(password) {
  const result = hashSync(password, 12);
  return result;
}

export function comparePassword(password, hashedPassword) {
  const result = compareSync(password, hashedPassword);
  return result;
}
