import Backdrop from "@/components/backdrop";

import { getNewsItem } from "@/libs/news";

export default async function InterceptingNewsImagePage({ params }) {
  const paramSlug = params.slug;
  const news = await getNewsItem(paramSlug);
  return (
    <>
      <Backdrop />
      <dialog open className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
