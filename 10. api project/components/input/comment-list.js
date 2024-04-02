import { useEffect, useState } from "react";
import classes from "./comment-list.module.css";

function CommentList(props) {
  const { eventId } = props;
  const [commets, setCommets] = useState([]);
  useEffect(() => {
    fetch(
      "https://nextjs-course-7f144-default-rtdb.asia-southeast1.firebasedatabase.app/comments/" +
        eventId +
        ".json"
    )
      .then((res) => res.json())
      .then((data) => {
        const c = [];
        data &&
          Object.entries(data).map(([id, value]) => {
            c.push({ id, ...value });
          });
        setCommets(c);
      });
  }, []);
  return (
    <ul className={classes.comments}>
      {commets.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <div>
              By <address>{comment.email}</address>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default CommentList;
