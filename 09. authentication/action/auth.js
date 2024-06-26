"use server";

import { redirect } from "next/navigation";

import { createUser, getUser } from "@/lib/auth";
import { hashUserPassword, verifyPassword } from "@/lib/hash";
import { createUserSession, destorySession } from "@/lib/lucia-auth";

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
    const id = createUser(email, hashedPassword);
    await createUserSession(id);
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

export default async function login(_, formData) {
  const email = formData.get("email");
  const password = formData.get("password");

  const user = getUser(email);
  if (!user) {
    return {
      errors: {
        email: "확인되지 않는 계정",
      },
    };
  }

  const isValidPassword = verifyPassword(user.password, password);

  if (!isValidPassword) {
    return {
      errors: {
        password: "확인되지 않는 계정",
      },
    };
  }

  await createUserSession(user.id);

  redirect("/training");
}

export async function authAction(mode, _, formData) {
  return mode === "login" ? login(_, formData) : signup(_, formData);
}

export async function logout() {
  await destorySession();

  redirect("/");
}
