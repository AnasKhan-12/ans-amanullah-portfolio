"use client";

import { useRef, MouseEvent, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  strength?: number; // px the element moves max (default 18)
  as?: "a" | "button" | "div";
  href?: string;
  onClick?: () => void;
}

/**
 * Wraps any element with a magnetic effect — it gently follows the
 * cursor when hovered, then snaps back on mouse leave.
 */
export default function MagneticEl({
  children,
  className,
  strength = 18,
  as: Tag = "div",
  href,
  onClick,
}: Props) {
  const ref = useRef<HTMLElement>(null);

  function handleMove(e: MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * strength;
    const dy = ((e.clientY - cy) / (rect.height / 2)) * strength;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  }

  function handleLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transition = "transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)";
    el.style.transform = "translate(0px, 0px)";
    setTimeout(() => {
      if (ref.current) ref.current.style.transition = "";
    }, 500);
  }

  const props = {
    ref: ref as never,
    className,
    onMouseMove: handleMove,
    onMouseLeave: handleLeave,
    ...(href ? { href } : {}),
    ...(onClick ? { onClick } : {}),
  };

  return <Tag {...props}>{children}</Tag>;
}
