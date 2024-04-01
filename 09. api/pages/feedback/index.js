import { getDatabase } from "../api/feedback";

export default function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbacks.map((feedback) => (
        <li key={feedback.id}>{feedback.text}</li>
      ))}
    </ul>
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
