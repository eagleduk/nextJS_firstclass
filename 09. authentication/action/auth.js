"use server";

import { createUser } from "@/lib/auth";
import { hashUserPassword } from "@/lib/hash";
import { redirect } from "next/navigation";

export async function signup(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const errors = {};

  if (!email.includes("@")) {
    errors.email = "잘못된 형식의 이메일입니다.";
  }

  if (password.trim().length < 4) {
    errors.password = "비밀번호가 너무 짧습니다.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);

  try {
    createUser(email, hashedPassword);
  } catch (error) {
    if (error.code === "SQLITE_CONSTRAINT_UNIQUE") {
      return {
        errors: {
          email: "중복된 이메일",
        },
      };
    }
    throw Error;
  }

  redirect("/training");
}
