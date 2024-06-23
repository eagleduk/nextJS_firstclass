"use client";
import { useOptimistic } from "react";

import { formatDate } from "@/lib/format";
import LikeButton from "./like-icon";
import { toggleFeedLike } from "@/actions/post";

function Post({ post, action }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{" "}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          <div>
            <form
              action={action.bind(null, post.id)}
              className={post.isLiked ? "liked" : ""}
            >
              <LikeButton />
            </form>
          </div>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPost, updateOptimisticPost] = useOptimistic(
    posts,
    (prevPost, postId) => {
      const targetIndex = prevPost.findIndex((post) => post.id === postId);

      if (targetIndex < 0) return prevPost;

      const updatePost = [...prevPost];
      updatePost[targetIndex] = {
        ...updatePost[targetIndex],
        likes:
          updatePost[targetIndex].likes +
          (updatePost[targetIndex].isLiked ? 1 : -1),
        isLiked: !updatePost[targetIndex].isLiked,
      };

      return updatePost;
    }
  );

  async function likeAction(postId) {
    updateOptimisticPost(postId);
    await toggleFeedLike(postId);
  }

  if (!optimisticPost || optimisticPost.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  return (
    <ul className="posts">
      {optimisticPost.map((post) => (
        <li key={post.id}>
          <Post post={post} action={likeAction} />
        </li>
      ))}
    </ul>
  );
}
