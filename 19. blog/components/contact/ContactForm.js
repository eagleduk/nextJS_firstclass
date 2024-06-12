import { useEffect, useState } from "react";
import classes from "./ContactForm.module.css";
import Notification from "../ui/notification";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [toastStatus, setToastStatus] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    if (toastStatus === "success" || toastStatus === "error") {
      const timer = setTimeout(() => {
        setToastMessage(null);
        setToastStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastStatus]);

  async function handleSubmitEventHandler(event) {
    event.preventDefault();

    setToastStatus("pending");

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, name, message }),
    });

    const result = await response.json();

    if (!response.ok) {
      setToastStatus("error");
      setToastMessage(result.message || "Error...");
      return;
    }
    setToastStatus("success");
    setEmail("");
    setName("");
    setMessage("");
  }

  let toast = null;

  if (toastStatus === "pending") {
    toast = {
      status: "pending",
      title: "Send Contact...",
      message: "Please wait...",
    };
  }
  if (toastStatus === "error") {
    toast = {
      status: "error",
      title: "Error",
      message: toastMessage,
    };
  }
  if (toastStatus === "success") {
    toast = {
      status: "success",
      title: "Send Success!",
      message: "Successfully Save Your Contact.",
    };
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={handleSubmitEventHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {toast && (
        <Notification
          status={toast.status}
          title={toast.title}
          message={toast.message}
        />
      )}
    </section>
  );
}
