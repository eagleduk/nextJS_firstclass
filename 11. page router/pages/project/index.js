import { useRouter } from "next/router";

export default function ProjectMainPage() {
  const router = useRouter();
  function handleProjectStringLinkButton() {
    router.push("/project/2024/12");
  }
  function handleProjectObjectLinkButton() {
    router.push({
      pathname: "/project/[...slug]",
      query: { slug: ["2024", "12"] },
    });
  }
  return (
    <div>
      <h1>Project Main Page</h1>
      <button onClick={handleProjectStringLinkButton}>Go to Project</button>
      <button onClick={handleProjectObjectLinkButton}>Go to Project</button>
    </div>
  );
}
