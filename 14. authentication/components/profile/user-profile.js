import ProfileForm from "./profile-form";
import classes from "./user-profile.module.css";

function UserProfile() {
  // Redirect away if NOT auth

  async function handleChangePasswordEvent(changeData) {
    const response = await fetch("/api/user/changePassword", {
      method: "PATCH",
      body: JSON.stringify(changeData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
  }

  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm onPasswordChange={handleChangePasswordEvent} />
    </section>
  );
}

export default UserProfile;
