"use client";
import Link from "next/link";
import { useFormState } from "react-dom";

import { authAction as auth } from "@/action/auth";

export default function AuthForm({ mode }) {
  const [authState, authAction] = useFormState(auth.bind(null, mode), {});
  return (
    <form id="auth-form" action={authAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {authState.errors && (
        <ul id="form-errors">
          {Object.entries(authState.errors).map(([key, value]) => {
            return <li key={key}>{value}</li>;
          })}
        </ul>
      )}
      <p>
        <button type="submit">
          {mode === "signup" ? "Create Account" : "Login"}
        </button>
      </p>
      <p>
        {mode === "login" && (
          <Link href="/?mode=signup">Create New Account.</Link>
        )}
        {mode !== "login" && (
          <Link href="/?mode=login">Login with existing account.</Link>
        )}
      </p>
    </form>
  );
}
