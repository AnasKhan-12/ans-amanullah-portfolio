"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  maxTilt?: number; // degrees (default 8)
}

/**
 * Wraps content in a 3-D tilt card that rotates based on mouse position.
 * Seen on virtually every premium ThemeForest portfolio theme.
 */
export default function TiltCard({ children, className, maxTilt = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;  // 0..1
    const y = (e.clientY - rect.top) / rect.height;   // 0..1
    const rotateX = (0.5 - y) * maxTilt * 2;          // positive = tilt top up
    const rotateY = (x - 0.5) * maxTilt * 2;          // positive = tilt right up
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    // Shine overlay follows mouse
    const shine = el.querySelector<HTMLElement>("[data-shine]");
    if (shine) {
      shine.style.opacity = "1";
      shine.style.background = `radial-gradient(circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.08) 0%, transparent 60%)`;
    }
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    const shine = el.querySelector<HTMLElement>("[data-shine]");
    if (shine) shine.style.opacity = "0";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 600);
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {/* Shine layer */}
      <div
        data-shine
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: "inherit",
          opacity: 0,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
}
