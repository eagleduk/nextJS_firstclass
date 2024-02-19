import Link from "next/link";

export default function About() {
  return (
    <main>
      <h1>About Page</h1>

      <p>
        <Link href={"/about/about-1"}>About 1</Link>
      </p>
      <p>
        <Link href={"/about/about-2"}>About 2</Link>
      </p>
    </main>
  );
}
