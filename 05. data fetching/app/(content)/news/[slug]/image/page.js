import { notFound } from "next/navigation";

import { getNewsItem } from "@/libs/news";

export default async function NewsImagePage({ params }) {
  const paramSlug = params.slug;
  const news = await getNewsItem(paramSlug);

  if (!news) notFound();
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
}
