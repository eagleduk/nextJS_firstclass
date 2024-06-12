import { useContext } from "react";
import classes from "./notification.module.css";
import { notificationContext } from "../../store/notificationContext";

function Notification(props) {
  const {
    notification: { title, message, status },
    onReset,
  } = useContext(notificationContext);

  let statusClasses = "";

  if (status === "success") {
    statusClasses = classes.success;
  }

  if (status === "error") {
    statusClasses = classes.error;
  }

  if (status === "pending") {
    statusClasses = classes.pending;
  }

  const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <>
      {status && (
        <div className={activeClasses} onClick={onReset}>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}

export default Notification;
