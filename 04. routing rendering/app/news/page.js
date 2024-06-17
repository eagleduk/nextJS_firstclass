import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href={"/news/1"}>first news</Link>
        </li>
        <li>
          <Link href={"/news/2"}>second news</Link>
        </li>
        <li>
          <Link href={"/news/3"}>third news</Link>
        </li>
      </ul>
    </>
  );
}
