"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./Nav.module.css";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`wrap ${styles.inner}`}>
        <span className={styles.name}>
          Ans <span className={styles.nameAccent}>Amanullah</span>
        </span>

        <ul className={styles.navLinks} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.navLink} ${
                  active === link.href ? styles.navLinkActive : ""
                }`}
                onClick={() => setActive(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              className={`${styles.navBtn}`}
              href="#contact"
            >
              Hire Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
