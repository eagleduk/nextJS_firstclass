import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news/NewsList";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
