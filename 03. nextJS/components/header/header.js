import Link from "next/link";
import Image from "next/image";

import classes from "./header.module.css";

import logo from "@/assets/logo.png";
import HeaderBackground from "./header-background";

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
              <Link href={"/meals"}>Browse Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Foodies Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
