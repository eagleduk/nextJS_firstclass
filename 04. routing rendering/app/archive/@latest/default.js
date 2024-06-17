import NewsList from "@/components/news/NewsList";
import { getLatestNews } from "@/libs/news";

export default function LatestNews() {
  const news = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={news} />
    </>
  );
}
