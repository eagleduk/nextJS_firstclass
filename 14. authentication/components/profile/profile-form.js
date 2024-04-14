import { useRef } from "react";
import classes from "./profile-form.module.css";

function ProfileForm(props) {
  const oldRef = useRef();
  const newRef = useRef();

  function handleSubmitEvent(event) {
    event.preventDefault();

    props.onPasswordChange({
      oldPassword: oldRef.current.value,
      newPassword: newRef.current.value,
    });
  }

  return (
    <form className={classes.form} onSubmit={handleSubmitEvent}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="old-password">Old Password</label>
        <input type="password" id="old-password" ref={oldRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
}

export default ProfileForm;
