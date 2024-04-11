import { hashSync } from "bcryptjs";

export default function hashPassword(password) {
  const result = hashSync(password, 12);
  return result;
}
