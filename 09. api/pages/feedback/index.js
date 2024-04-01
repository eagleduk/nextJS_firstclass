import { useState } from "react";
import { getDatabase } from "../api/feedback/index";

export default function FeedbackPage(props) {
  const [feedback, setFeedback] = useState();
  function handleDetailButtonEvent(id) {
    fetch("/api/feedback/" + id)
      .then((res) => res.json())
      .then((data) => setFeedback(data.feedback));
  }
  return (
    <>
      {feedback && <p>{feedback.email}</p>}
      <ul>
        {props.feedbacks.map((feedback) => (
          <li key={feedback.id}>
            {feedback.text}
            <button onClick={() => handleDetailButtonEvent(feedback.id)}>
              Detail..
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export function getStaticProps() {
  const data = getDatabase();
  return {
    props: {
      feedbacks: data,
    },
  };
}
