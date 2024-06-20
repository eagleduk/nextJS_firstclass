import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsImagePage({ params }) {
  const paramSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === paramSlug);

  if (!news) notFound();
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
