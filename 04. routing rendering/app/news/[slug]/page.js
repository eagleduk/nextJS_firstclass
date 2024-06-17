import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsDetail({ params }) {
  const paramSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === paramSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${news.image}`} />
        <h1>{news.title}</h1>
        <time dateTime={news.date}>{news.date}</time>
      </header>
      <p>{news.content}</p>
    </article>
  );
}
