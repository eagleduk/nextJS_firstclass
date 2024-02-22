import InputImage from "@/components/meals/image-picker";
import classes from "./page.module.css";
import { saveMeal } from "@/lib/meals";
import { redirect } from "next/navigation";
import FormSubmit from "@/components/meals/formSubmit";

function isInvalidText(text) {
  return !text || text.trim() === "";
}

export default function ShareMealPage() {
  async function sumitAction(formData) {
    "use server";
    const meal = {
      title: formData.get("title"),
      image: formData.get("image"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions"),
      creator: formData.get("name"),
      creator_email: formData.get("email"),
    };

    if (
      isInvalidText(meal.title) ||
      isInvalidText(meal.summary) ||
      isInvalidText(meal.instructions) ||
      isInvalidText(meal.creator) ||
      isInvalidText(meal.creator_email) ||
      !meal.creator_email.includes("@") ||
      !meal.image ||
      meal.image.size === 0
    ) {
      throw new Error("Invalid input");
    }

    await saveMeal(meal);
    redirect("/meals");
  }
  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={sumitAction}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <InputImage name="image" />
          <p className={classes.actions}>
            <FormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
