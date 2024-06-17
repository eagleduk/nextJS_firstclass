import { getAvailableNewsYears } from "@/libs/news";
import Link from "next/link";

export default function ArchiveNewsLayout({ children }) {
  const years = getAvailableNewsYears();
  return (
    <>
      <h1>News Archive</h1>
      <header id="archive-header">
        <ul>
          {years.map((year) => (
            <li key={year}>
              <Link href={`/archive/${year}`}>{year}</Link>
            </li>
          ))}
        </ul>
      </header>
      {children}
    </>
  );
}
