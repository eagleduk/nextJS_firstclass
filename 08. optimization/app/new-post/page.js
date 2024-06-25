import { createPost } from "@/actions/posts";
import PostForm from "@/components/post-form";

export const metadata = {
  title: "New Post!",
  description: "New Post What you do",
};

export default function NewPostPage() {
  return <PostForm action={createPost} />;
}
