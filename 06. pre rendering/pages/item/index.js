import { useEffect, useState } from "react";

export default function Items() {
  const [items, setItems] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
    )
      .then((response) => response.json())
      .then((data) => {
        const d = Object.entries(data).map(([key, value]) => ({
          ...value,
          id: key,
        }));
        setItems(d);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (!items) return <p>No Data.</p>;

  if (isLoading) return <p>Loading....</p>;

  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.openingText}</p>
          </li>
        );
      })}
    </ul>
  );
}
