"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import MagneticEl from "./MagneticEl";
import { heroContainer, heroChild, scaleIn } from "@/lib/animations";

const WORDS = ["save your time", "save your money"];

// Typewriter timings (ms)
const TYPE_SPEED = 55;   // ms per character typed
const DELETE_SPEED = 35;   // ms per character deleted
const HOLD_DELAY = 1600; // pause after fully typed
const NEXT_DELAY = 400;  // pause after fully deleted before next word

export default function Hero() {
  const [displayed, setDisplayed] = useState(WORDS[0]);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Graceful fallback: just cycle words with a fade
    if (prefersReduced) {
      let idx = 0;
      const id = setInterval(() => {
        idx = (idx + 1) % WORDS.length;
        setDisplayed(WORDS[idx]);
      }, 2400);
      return () => clearInterval(id);
    }

    let wordIdx = 0;
    let charIdx = WORDS[0].length; // start fully typed
    let isDeleting = false;
    let timerId: ReturnType<typeof setTimeout>;

    function tick() {
      const word = WORDS[wordIdx];

      if (!isDeleting) {
        // ── Typing ──
        charIdx++;
        setDisplayed(word.slice(0, charIdx));

        if (charIdx === word.length) {
          // Fully typed — hold, then start deleting
          isDeleting = true;
          timerId = setTimeout(tick, HOLD_DELAY);
          return;
        }
        timerId = setTimeout(tick, TYPE_SPEED);
      } else {
        // ── Deleting ──
        charIdx--;
        setDisplayed(word.slice(0, charIdx));

        if (charIdx === 0) {
          // Fully deleted — move to next word
          isDeleting = false;
          wordIdx = (wordIdx + 1) % WORDS.length;
          timerId = setTimeout(tick, NEXT_DELAY);
          return;
        }
        timerId = setTimeout(tick, DELETE_SPEED);
      }
    }

    // Kick off: delete the initial word first so the first cycle feels natural
    isDeleting = true;
    timerId = setTimeout(tick, HOLD_DELAY);

    return () => clearTimeout(timerId);
  }, []);

  return (
    <header className={styles.hero} id="top">
      <div className={`wrap ${styles.heroInner}`}>

        {/* ── Left: text content ── */}
        <motion.div
          className={styles.content}
          variants={heroContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.eyebrow} variants={heroChild}>
            <span className={styles.dot} />
            AI ENGINEER — AGENTIC SYSTEMS · LLM INTEGRATIONS · CHATBOTS
          </motion.div>
          <motion.h1 variants={heroChild}>
            I build systems that{" "}
            <span className={styles.typedWord}>{displayed}</span>
            <span className={styles.cursor}>&nbsp;</span>
          </motion.h1>
          <motion.p className={styles.sub} variants={heroChild}>
            I design and deploy the full stack behind AI products from model
            serving and eval pipelines to the interfaces people actually use.
          </motion.p>
          <motion.div className={styles.badges} variants={heroChild}>
            <span className={styles.badge}>LLM &amp; GenAI Apps</span>
            <span className={styles.badge}> Chatbots </span>
            <span className={styles.badge}>n8n Automations</span>
            <span className={styles.badge}>Full-Stack AI Products</span>
          </motion.div>
          <motion.div className={styles.ctaRow} variants={heroChild}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "contents" }}
            >
              <MagneticEl as="a" href="#work" className={`${styles.btn} ${styles.btnPrimary}`} strength={12}>
                View work →
              </MagneticEl>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ display: "contents" }}
            >
              <MagneticEl as="a" href="#contact" className={`${styles.btn} ${styles.btnGhost}`} strength={10}>
                Get in touch
              </MagneticEl>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Right: profile photo ── */}
        <motion.div
          className={styles.photoWrapper}
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            style={{ position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
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
          </motion.div>
        </motion.div>

      </div>

    </header>
  );
}
