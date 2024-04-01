import { useRef, useState } from "react";

function HomePage() {
  const [feedbacks, setFeedbacks] = useState([]);

  const emailRef = useRef();
  const textRef = useRef();

  function handleSubmitEvent(event) {
    event.preventDefault();

    const email = emailRef.current.value;
    const text = textRef.current.value;

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({ email, text }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function handleFeedbackLoadEvent() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbacks(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={handleSubmitEvent}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input id="email" type="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="text">Yout Feedback</label>
          <textarea rows={5} id="text" ref={textRef}></textarea>
        </div>
        <button>Send Feedback</button>
      </form>

      <hr />
      <button onClick={handleFeedbackLoadEvent}>Load Feedback</button>
      <ul>
        {feedbacks.map((feedback) => (
          <li key={feedback.id}>{feedback.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
