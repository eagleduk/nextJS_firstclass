import NewsList from "@/components/news/NewsList";
import { getAllNews } from "@/libs/news";

export default async function Page() {
  const news = await getAllNews();
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
