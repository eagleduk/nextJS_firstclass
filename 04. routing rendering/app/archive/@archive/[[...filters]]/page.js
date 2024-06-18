import Link from "next/link";

import NewsList from "@/components/news/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news";

const ALLYEAR = [2021, 2022, 2023, 2024, 2025].reverse();

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

  if (
    (year && !ALLYEAR.includes(+year)) ||
    (month &&
      !Array(12)
        .fill(0)
        .map((_, i) => i + 1)
        .includes(+month))
  ) {
    throw new Error("Invalid Filter.");
  }
  return (
    <>
      <h1>News Archive</h1>
      <header id="archive-header">
        <ul>
          {ALLYEAR.map((y) => {
            if (years.includes(y)) {
              return (
                <li key={y}>
                  <Link href={`/archive/${y}`}>{y}</Link>
                </li>
              );
            }

            return <li key={y}>{y}</li>;
          })}
        </ul>

        <ul>
          {Array(12)
            .fill(0)
            .map((_, i) => {
              if (months.includes(i + 1)) {
                return (
                  <li key={i + 1}>
                    <Link href={`/archive/${year}/${i + 1}`}>{i + 1}</Link>
                  </li>
                );
              }
              return <li key={i + 1}>{i + 1}</li>;
            })}
        </ul>
      </header>
      {newsContent}
    </>
  );
}
