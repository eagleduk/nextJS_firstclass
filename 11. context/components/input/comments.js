import { useContext, useState } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import { addComment } from "@/helpers/api-util";
import { notificationContext } from "@/store/notificationContext";

function Comments(props) {
  const { onNotification } = useContext(notificationContext);
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);

    if (!showComments) {
      fetch("/api/comments/" + eventId)
        .then((res) => res.json())
        .then((data) => setComments(data.comments));
    }
  }

  function addCommentHandler(commentData) {
    onNotification("sending...", "sending..", "pending");
    // send data to API
    fetch("/api/comments/" + eventId, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentData),
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
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
