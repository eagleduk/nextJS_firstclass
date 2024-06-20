import Link from "next/link";

import NewsList from "@/components/news/NewsList";
import {
  getAvailableNewsMonths,
  getAvailableNewsYears,
  getNewsForYear,
  getNewsForYearAndMonth,
} from "@/libs/news";
import { Suspense } from "react";

const ALLYEAR = ["2021", "2022", "2023", "2024", "2025"].reverse();

async function FilterComponent({ year }) {
  const years = await getAvailableNewsYears();
  const months = year ? getAvailableNewsMonths(year) : [];

  return (
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
            if (months.includes(String(i + 1).padStart(2, "0"))) {
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
  );
}

async function FilteredNews({ year, month }) {
  let news = [];

  if (year && !month) news = await getNewsForYear(year);
  else if (year && month)
    news = await getNewsForYearAndMonth(year, month.padStart(2, "0"));

  let newsContent = <p>No have News.</p>;
  if (news.length > 0) newsContent = <NewsList news={news} />;

  if (
    (year && !ALLYEAR.includes(year)) ||
    (month &&
      !Array(12)
        .fill(0)
        .map((_, i) => i + 1)
        .includes(+month))
  ) {
    throw new Error("Invalid Filter.");
  }

  return newsContent;
}

export default async function ArchiveFilterNews({ params }) {
  const filters = params.filters;

  const year = filters?.[0];
  const month = filters?.[1];

  return (
    <>
      <h1>News Archive</h1>
      <Suspense fallback={<p>Filter Loading....</p>}>
        <FilterComponent year={year} />
      </Suspense>
      <Suspense fallback={<p>News Loading...</p>}>
        <FilteredNews year={year} month={month} />
      </Suspense>
    </>
  );
}
