import { useRouter } from "next/router";

export default function ClientInformation() {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>Client Information Page.</h1>
    </div>
  );
}
