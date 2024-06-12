import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Items(props) {
  const [result, setResult] = useState(props.result);
  const { data, isLoading, error } = useSWR(
    "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json",
    fetcher
  );

  useEffect(() => {
    if (!data) return;
    const d = Object.entries(data).map(([key, value]) => ({
      ...value,
      id: key,
    }));
    setResult(d);
  }, [data]);

  if (error) return <p>Data fetching Error.</p>;

  if (isLoading) return <p>Loading....</p>;

  if (!result) return <p>No Data.</p>;

  return (
    <ul>
      {result.map((r) => {
        return (
          <li key={r.id}>
            <h1>{r.title}</h1>
            <p>{r.openingText}</p>
          </li>
        );
      })}
    </ul>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://udemy-perfect-react-default-rtdb.asia-southeast1.firebasedatabase.app/movie.json"
  );
  const data = await response.json();

  const d = Object.entries(data).map(([key, value]) => ({
    ...value,
    id: key,
  }));

  return {
    props: {
      result: d,
    },
    revalidate: 10,
  };
}
