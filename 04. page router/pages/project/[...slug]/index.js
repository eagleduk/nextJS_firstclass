import { useRouter } from "next/router";

export default function ProjectDetails() {
  const datas = useRouter();
  console.log(datas.query);
  return (
    <div>
      <h1>The Project Details</h1>
    </div>
  );
}
