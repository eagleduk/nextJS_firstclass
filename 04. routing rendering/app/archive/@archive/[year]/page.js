import NewsList from "@/components/news/NewsList";
import { getNewsForYear } from "@/libs/news";

export default function ArchiveFilterNews({ params }) {
  const year = params.year;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
}
