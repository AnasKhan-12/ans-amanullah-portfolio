"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "./Hero.module.css";

const WORDS = ["save you 15-20 hrs/week", "save your money"];

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
      <div className={`wrap ${styles.heroInner}`}>

        {/* ── Left: text content ── */}
        <div className={styles.content}>
          <div className={styles.eyebrow}>
            <span className={styles.dot} />
            AI ENGINEER — AGENTIC SYSTEMS · LLM INTEGRATIONS · CHATBOTS
          </div>
          <h1>
            I build systems that{" "}
            <span ref={wordRef} className={styles.typedWord}>
              save you 15-20 hrs/week
            </span>
            <span className={styles.cursor}>&nbsp;</span>
          </h1>
          <p className={styles.sub}>
            I design and deploy the full stack behind AI products from model
            serving and eval pipelines to the interfaces people actually use.
          </p>
          <div className={styles.badges}>
            <span className={styles.badge}>LLM &amp; GenAI Apps</span>
            <span className={styles.badge}> Chatbots </span>
            <span className={styles.badge}>n8n Automations</span>
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

        {/* ── Right: profile photo ── */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoGlow} />
          <div className={styles.photoFrame}>
            {/*
              Replace /profile.jpg with your actual photo.
              Drop your image into: portfolio-app/public/profile.jpg
            */}
            <Image
              src="/profile.jpg"
              alt="Ans Amanullah | AI Engineer"
              fill
              sizes="(max-width: 768px) 200px, 300px"
              className={styles.photo}
              priority
              onError={(e) => {
                // If no photo found, show initials placeholder
                const target = e.currentTarget as HTMLImageElement;
                target.style.display = "none";
                const parent = target.parentElement;
                if (parent && !parent.querySelector("." + styles.initials)) {
                  const div = document.createElement("div");
                  div.className = styles.initials;
                  div.textContent = "A";
                  parent.appendChild(div);
                }
              }}
            />
          </div>
          {/* Decorative ring */}
          <div className={styles.ring} />
        </div>

      </div>
    </header>
  );
}
