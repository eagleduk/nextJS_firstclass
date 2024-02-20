"use client";

import Link from "next/link";

import classes from "./header-link.module.css";

import { usePathname } from "next/navigation";

export default function HeaderLink({ href, children }) {
  const path = usePathname();
  const classname =
    classes.link + " " + (path.startsWith(href) ? classes.active : "");
  return (
    <Link href={href} className={classname}>
      {children}
    </Link>
  );
}
