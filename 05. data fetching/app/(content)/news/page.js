"use client";

import { useEffect, useState } from "react";

import NewsList from "@/components/news/NewsList";

export default function Page() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("Error.");
      }
      const data = await response.json();
      setNews(data);

      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <p>News Loading....</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
