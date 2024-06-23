"use server";
import { storePost } from "@/lib/posts";

import { redirect } from "next/navigation";

export async function createPost(_, formData) {
  const title = formData.get("title");
  const image = formData.get("image");
  const content = formData.get("content");

  const error = [];
  if (!title || title.trim().length === 0) {
    error.push("Title is required.");
  }
  if (!content || content.trim().length === 0) {
    error.push("Content is required.");
  }
  if (!image || image.size === 0) {
    error.push("Image is required.");
  }

  if (error.length > 0) return { error };

  await storePost({
    imageUrl: "",
    title,
    content,
    userId: 1,
  });

  redirect("/feed");
}
