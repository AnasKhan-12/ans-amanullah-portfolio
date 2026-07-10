/**
 * Shared animation variants for Framer Motion.
 * Centralizes all animation definitions to avoid duplication across components.
 */

import type { Variants } from "framer-motion";

// ── Viewport config ──────────────────────────────────────────────────────────
export const VIEWPORT_ONCE = { once: true, amount: 0.15 } as const;

// ── Base fade-up ─────────────────────────────────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Fade up — lighter lift (for children inside stagger containers) ───────────
export const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Stagger container ────────────────────────────────────────────────────────
export const staggerContainer = (
  stagger = 0.1,
  delayChildren = 0
): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: stagger,
      delayChildren,
    },
  },
});

// ── Card entrance (scale + fade) ─────────────────────────────────────────────
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Slide from left ──────────────────────────────────────────────────────────
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Slide from right ─────────────────────────────────────────────────────────
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Scale in (for images) ────────────────────────────────────────────────────
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Navbar entrance ──────────────────────────────────────────────────────────
export const navVariant: Variants = {
  hidden: { opacity: 0, y: -16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Hero stagger container (fires immediately on page load) ──────────────────
export const heroContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// ── Hero individual child ────────────────────────────────────────────────────
export const heroChild: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] },
  },
};

// ── Photo float ─────────────────────────────────────────────────────────────
export const floatVariant: Variants = {
  rest: { y: 0 },
  float: {
    y: [-8, 0, -8],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};
