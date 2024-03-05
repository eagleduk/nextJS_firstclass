import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Items() {
  const { data, isLoading, error } = useSWR(
    "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
    fetcher
  );

  //   const [items, setItems] = useState();
  //   const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     setIsLoading(true);
  //     fetch(
  //       "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         const d = Object.entries(data).map(([key, value]) => ({
  //           ...value,
  //           id: key,
  //         }));
  //         setItems(d);
  //       })
  //       .finally(() => setIsLoading(false));
  //   }, []);

  if (error) return <p>Data fetching Error.</p>;

  if (!data) return <p>No Data.</p>;

  if (isLoading) return <p>Loading....</p>;

  return (
    <ul>
      {Object.entries(data).map(([key, value]) => {
        return (
          <li key={key}>
            <h1>{value.title}</h1>
            <p>{value.openingText}</p>
          </li>
        );
      })}
    </ul>
  );
}
