import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTPATH = path.join(process.cwd(), "posts");

function getPost(filename) {
  const targetPath = path.join(POSTPATH, filename);
  const target = fs.readFileSync(targetPath);

  const { data, content } = matter(target);
  return {
    id: filename.replace(".md", ""),
    ...data,
    content,
  };
}

export function getPosts() {
  const posts = fs.readdirSync(POSTPATH);
  return posts.map((post) => getPost(post)).sort((a, b) => a.date - b.date);
}

export function getFeaturedPost() {
  return getPosts().filter((post) => post.isFeatured);
}
