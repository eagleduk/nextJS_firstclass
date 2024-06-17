import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"news"}>News</Link>
        </li>
      </nav>
    </header>
  );
}
