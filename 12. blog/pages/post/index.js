import PostIndex from "@/components/post/Index";

const Dummy = [
  {
    title: "Getting Started with NextJS",
    date: "2022-02-10",
    expcert:
      "NextJS is a the React framework for production-it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    image: "getting-started-nextjs.png",
    id: "blog1",
  },
];

export default function Posts() {
  return <PostIndex posts={Dummy} />;
}
