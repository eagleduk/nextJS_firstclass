import Link from "next/link";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href={"/"}>NextNews</Link>
      </div>
      <nav>
        <ul>
          <Navigation href="/news">News</Navigation>
          <Navigation href="/archive">Archive</Navigation>
        </ul>
      </nav>
    </header>
  );
}
