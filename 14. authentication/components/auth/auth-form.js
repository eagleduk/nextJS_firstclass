import { useRef, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import classes from "./auth-form.module.css";

function AuthForm() {
  const idRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function handleSubmitHandler(event) {
    event.preventDefault();

    const id = idRef.current.value;
    const password = passwordRef.current.value;

    if (isLogin) {
      const result = await signIn(
        "credentials",
        { redirect: false },
        { id, password }
      );
      console.log(result);
      if (!result.error) {
        // login success
        router.replace("/");
      }
    } else {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          password,
        }),
      });
      const result = await response.json();
      console.log(result);
    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={handleSubmitHandler}>
        <div className={classes.control}>
          <label htmlFor="id">Your ID</label>
          <input type="text" id="id" required ref={idRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" required ref={passwordRef} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? "Login" : "Create Account"}</button>
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;
