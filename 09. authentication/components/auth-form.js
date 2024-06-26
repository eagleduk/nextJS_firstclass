"use client";
import { signup } from "@/action/auth";
import Link from "next/link";

import { useFormState } from "react-dom";

export default function AuthForm() {
  const [authState, authAction] = useFormState(signup, {});
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
        <button type="submit">Create Account</button>
      </p>
      <p>
        <Link href="/">Login with existing account.</Link>
      </p>
    </form>
  );
}
