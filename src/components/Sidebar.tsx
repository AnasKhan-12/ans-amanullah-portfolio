"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Menu,
  X,
  Layers,
  PenTool,
} from "lucide-react";
import userData from "@/data/users.json";
import clsx from "clsx";
import Image from "next/image";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { profile } = userData;

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Services", href: "#services", icon: Layers },
    { name: "Portfolio", href: "#portfolio", icon: Briefcase },
    { name: "Testimonials", href: "#testimonials", icon: PenTool },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 p-2.5 rounded-xl md:hidden text-white border border-white/10"
        style={{ background: "var(--surface)" }}
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={clsx(
          "fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out md:translate-x-0 border-r border-white/5 flex flex-col items-center pt-4",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        style={{
          background:
            "linear-gradient(180deg, var(--surface-2) 0%, var(--surface) 100%)",
        }}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-4 text-center">
            {/* Avatar */}
            <div className="relative mb-5">
              <div
                className="relative w-24 h-24 rounded-full overflow-hidden border-2"
                style={{ borderColor: "rgba(255,255,255,0.12)" }}
              >
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  style={{ transform: "scale(1.4) translateY(8%)", objectPosition: "center 20%" }}
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = "none";
                    if (target.nextElementSibling) {
                      (target.nextElementSibling as HTMLElement).style.display =
                        "flex";
                    }
                  }}
                />
                <div
                  className="absolute inset-0 items-center justify-center text-2xl font-bold hidden"
                  style={{
                    color: "white",
                    background: "var(--surface-2)",
                  }}
                >
                  {profile.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>

              {/* Online indicator */}
              <span
                className="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 z-20"
                style={{
                  background: "#22c55e",
                  borderColor: "var(--surface-2)",
                }}
              />
            </div>

            <h1 className="text-lg font-bold text-white mb-1 tracking-tight">
              {profile.name}
            </h1>
            <div
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border"
              style={{
                background: "rgba(255,255,255,0.04)",
                borderColor: "rgba(255,255,255,0.09)",
                color: "var(--text-muted)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block" />
              {profile.role.split("|")[0].trim()}
            </div>
          </div>

          {/* Divider */}
          <div
            className="w-full h-px mb-3"
            style={{ background: "var(--border)" }}
          />

          {/* Navigation */}
          <nav className="flex-1 ">
            <ul className="space-y-1">
              {navItems.map((item) => {
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleScroll(e, item.href)}
                      className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 hover:bg-white/5 text-secondary hover:text-white"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 group-hover:scale-110"
                        style={{
                          background: "var(--surface)",
                        }}
                      >
                        <item.icon
                          size={15}
                          className="transition-colors duration-200 group-hover:text-accent"
                        />
                      </div>
                      <span className="text-sm font-medium tracking-wide transition-colors duration-200">
                        {item.name}
                      </span>
                      <span className="ml-auto w-1.5 h-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-accent" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto pt-6 border-t border-white/5 text-center">
            <div
              className="inline-flex items-center gap-2 text-xs px-3 py-1.5 rounded-full"
              style={{
                color: "var(--text-subtle)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />© 2024{" "}
              {profile.name}
            </div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-30 md:hidden backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
