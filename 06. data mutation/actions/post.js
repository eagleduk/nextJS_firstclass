"use server";
import { redirect } from "next/navigation";

import { uploadImage } from "@/lib/cloudinary";
import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";

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

  let imageUrl;

  try {
    imageUrl = await uploadImage(image);
  } catch (err) {
    throw new Error("Image Upload Fail.");
  }

  await storePost({
    imageUrl,
    title,
    content,
    userId: 1,
  });

  revalidatePath("/", "layout");
  redirect("/feed");
}

export async function toggleFeedLike(postId) {
  await updatePostLikeStatus(postId, 2);
  revalidatePath("/", "layout");
}
