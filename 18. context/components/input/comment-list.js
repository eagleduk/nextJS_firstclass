import { useEffect, useState } from "react";
import classes from "./comment-list.module.css";

function CommentList(props) {
  return (
    <ul className={classes.comments}>
      {props.comments.map((comment) => {
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
