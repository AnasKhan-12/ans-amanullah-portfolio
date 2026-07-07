"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const WORDS = ["ship", "reason", "scale", "serve millions"];

export default function Hero() {
  const wordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || !wordRef.current) return;

    const el = wordRef.current;
    el.style.transition = "opacity 0.25s ease";
    let idx = 0;

    const interval = setInterval(() => {
      idx = (idx + 1) % WORDS.length;
      el.style.opacity = "0";
      setTimeout(() => {
        el.textContent = WORDS[idx];
        el.style.opacity = "1";
      }, 250);
    }, 2400);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.hero} id="top">
      <div className="wrap">
        <div className={styles.eyebrow}>
          <span className={styles.dot} />
          AI ENGINEER — LLM SYSTEMS · ML INFRA · FULL-STACK
        </div>
        <h1>
          I build systems that{" "}
          <span ref={wordRef} className={styles.typedWord}>
            ship
          </span>
          <span className={styles.cursor}>&nbsp;</span>
        </h1>
        <p className={styles.sub}>
          I design and deploy the full stack behind AI products — from model
          serving and eval pipelines to the interfaces people actually use.
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>LLM &amp; GenAI Apps</span>
          <span className={styles.badge}>ML Infra &amp; Systems</span>
          <span className={styles.badge}>Full-Stack AI Products</span>
        </div>
        <div className={styles.ctaRow}>
          <a className={`${styles.btn} ${styles.btnPrimary}`} href="#work">
            View work →
          </a>
          <a className={`${styles.btn} ${styles.btnGhost}`} href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
