import { useRouter } from "next/router";
import classes from "./EventSearch.module.css";

export default function EventSearch() {
  const router = useRouter();

  const handleSearchSubmitEvent = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    console.log(formData.get("year"), formData.get("month"));

    router.push({
      pathname: "/events/[...slug]",
      query: {
        slug: [formData.get("year"), formData.get("month")],
      },
    });
  };
  return (
    <form className={classes.form} onSubmit={handleSearchSubmitEvent}>
      <div className={classes.controls}>
        <div className={classes.control}>
          <label htmlFor="year">Year</label>
          <select id="year" name="year">
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="month">Month</label>
          <select id="month" name="month">
            <option value="04">04</option>
            <option value="05">05</option>
          </select>
        </div>
      </div>
      <button>Search</button>
    </form>
  );
}
