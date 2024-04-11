import { useRef, useState } from "react";
import classes from "./auth-form.module.css";

function AuthForm() {
  const idRef = useRef();
  const passwordRef = useRef();
  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function handleSubmitHandler(event) {
    event.preventDefault();

    if (isLogin) {
    } else {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: idRef.current.value,
          password: passwordRef.current.value,
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
