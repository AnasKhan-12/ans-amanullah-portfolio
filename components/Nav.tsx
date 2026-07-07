"use client";

import Link from "next/link";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className="wrap">
        <Link className={styles.logo} href="#top">
          ans<span>.ai</span>
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="#work">work</Link>
          </li>
          <li>
            <Link href="#testimonials">testimonials</Link>
          </li>
          <li>
            <Link href="#stack">stack</Link>
          </li>
          <li>
            <Link href="#contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
