import Link from "next/link";

import { getNewsItem } from "@/libs/news";
import { notFound } from "next/navigation";

export default async function NewsDetail({ params }) {
  const paramSlug = params.slug;
  const news = await getNewsItem(paramSlug);

  if (!news) notFound();

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${news.slug}/image`}>
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </Link>
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
