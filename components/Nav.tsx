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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 640) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = (href: string) => {
    setActive(href);
    setMenuOpen(false);
  };

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
        <div className={`wrap ${styles.inner}`}>

          {/* Hamburger — left on mobile */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span />
            <span />
            <span />
          </button>

          {/* Name — right on mobile, left on desktop */}
          <span className={styles.name}>
            Ans <span className={styles.nameAccent}>Amanullah</span>
          </span>

          {/* Desktop links */}
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
              <a className={`${styles.navBtn}`} href="#contact">
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Backdrop */}
      <div
        className={`${styles.backdrop} ${menuOpen ? styles.backdropOpen : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Left-side slide-in drawer */}
      <aside
        className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.drawerHeader}>
          <span className={styles.drawerName}>
            Ans <span className={styles.nameAccent}>Amanullah</span>
          </span>
          <button
            className={styles.drawerClose}
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul className={styles.drawerLinks} role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${styles.drawerLink} ${
                  active === link.href ? styles.drawerLinkActive : ""
                }`}
                onClick={() => closeMenu(link.href)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          className={styles.drawerBtn}
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Hire Me
        </a>
      </aside>
    </>
  );
}
