"use client";

import { useEffect, useRef } from "react";

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";

interface Props {
  text: string;
  className?: string;
  delay?: number; // ms before scramble starts
}

/**
 * Renders text that scrambles through random characters before
 * revealing the final letters one by one from left to right.
 */
export default function ScrambleText({ text, className, delay = 0 }: Props) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      el.textContent = text;
      return;
    }

    let frame = 0;
    let rafId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const chars = text.split("");
    // How many frames each character scrambles before locking in
    const FRAMES_PER_CHAR = 8;
    const totalFrames = chars.length * FRAMES_PER_CHAR;

    function tick() {
      const revealedCount = Math.floor(frame / FRAMES_PER_CHAR);

      el!.textContent = chars
        .map((ch, i) => {
          if (ch === " ") return " ";
          if (i < revealedCount) return ch; // locked
          return SCRAMBLE_CHARS[
            Math.floor(Math.random() * SCRAMBLE_CHARS.length)
          ];
        })
        .join("");

      frame++;
      if (frame <= totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        el!.textContent = text; // ensure clean final state
      }
    }

    timeoutId = setTimeout(() => {
      rafId = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(rafId);
    };
  }, [text, delay]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {text}
    </span>
  );
}
