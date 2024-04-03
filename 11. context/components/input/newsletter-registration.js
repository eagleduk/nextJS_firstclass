import { useContext, useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { notificationContext } from "../../store/notificationContext";

function NewsletterRegistration() {
  const { onNotification } = useContext(notificationContext);

  const emailRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    onNotification("sending...", "sending..", "pending");
    const email = emailRef.current.value;

    fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        onNotification("success...", "success..", "success");
      })
      .catch((err) => {
        console.error(err);
        onNotification("error...", "error..", "error");
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
