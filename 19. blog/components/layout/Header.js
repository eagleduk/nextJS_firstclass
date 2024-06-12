import Link from "next/link";
import classes from "./Header.module.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <ul>
        <li>
          <Link href="/post">POST</Link>
        </li>
        <li>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
    </header>
  );
}
