import Link from "next/link";
import Image from "next/image";

import classes from "./header.module.css";

import logo from "@/assets/logo.png";
import HeaderBackground from "./header-background";
import HeaderLink from "./header-link";

export default function Header() {
  return (
    <>
      <HeaderBackground />
      <header className={classes.header}>
        <Link href={"/"} className={classes.logo}>
          <Image src={logo} alt="logo" priority />
          nextLevel food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <HeaderLink href="/meals">Browse Meals</HeaderLink>
            </li>
            <li>
              <HeaderLink href="/community">Foodies Community</HeaderLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
