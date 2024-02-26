import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/client">Client</Link>
          <ul>
            <Link href="/client/id1">client 1</Link>
          </ul>
        </li>
      </ul>
    </div>
  );
}
