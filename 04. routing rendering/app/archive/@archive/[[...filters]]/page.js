import Link from "next/link";

import NewsList from "@/components/news/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news";

export default function ArchiveFilterNews({ params }) {
  const filters = params.filters;

  const year = filters?.[0];
  const month = filters?.[1];

  const years = getAvailableNewsYears();
  const months = year ? getAvailableNewsMonths(year) : [];

  let news = [];

  if (year && !month) news = getNewsForYear(year);
  else if (year && month) news = getNewsForYearAndMonth(year, month);

  let newsContent = <p>No have News.</p>;
  if (news.length > 0) newsContent = <NewsList news={news} />;

  return (
    <>
      <h1>News Archive</h1>
      <header id="archive-header">
        <ul>
          {years.map((y) => (
            <li key={y}>
              <Link href={`/archive/${y}`}>{y}</Link>
            </li>
          ))}
        </ul>

        <ul>
          {months.map((m) => (
            <li key={m}>
              <Link href={`/archive/${year}/${m}`}>{m}</Link>
            </li>
          ))}
        </ul>
      </header>
      {newsContent}
    </>
  );
}
