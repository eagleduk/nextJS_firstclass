"use client";
import { useRouter } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

export default function InterceptingNewsImagePage({ params }) {
  const router = useRouter();

  const paramSlug = params.slug;
  const news = DUMMY_NEWS.find((news) => news.slug === paramSlug);
  return (
    <>
      <div className="modal-backdrop" onClick={router.back}></div>
      <dialog open className="modal">
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
}
