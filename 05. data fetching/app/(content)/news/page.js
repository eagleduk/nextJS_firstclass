import NewsList from "@/components/news/NewsList";

export default async function Page() {
  const response = await fetch("http://localhost:8080/news");

  if (!response) throw new Error("fetch news error.");

  const news = await response.json();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
