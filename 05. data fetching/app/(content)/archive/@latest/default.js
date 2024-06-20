import NewsList from "@/components/news/NewsList";
import { getLatestNews } from "@/libs/news";

export default async function LatestNews() {
  const news = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
