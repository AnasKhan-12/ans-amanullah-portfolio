"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import userData from "@/data/users.json";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const { hero } = userData.profile;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-10 pb-10 scroll-mt-24"
    >
      <div className=" w-full px-4">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 pt-2 w-full">
          {/* Left: Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-3"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mb-7"
            >
              <div className="w-10 h-0.5 bg-[#444059]  rounded-full" />
              <span
                className="text-xs font-medium tracking-[0.18em] uppercase px-3 py-1.5 rounded-full border"
                style={{
                  color: "var(--text-muted)",
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                {userData.profile.role.split("|")[0].trim()}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-[1.1] tracking-tight text-white"
              style={{ fontFamily: "var(--font-outfit), sans-serif" }}
            >
              Hi, I&apos;m <span className="text-accent">Ans</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-[20px] max-w-lg mb-10 leading-[30px] text-white/80"
            >
              {hero.subtitle}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-3 mb-14"
            >
              <Link
                href="#portfolio"
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-sm text-white transition-all duration-200 hover:bg-white/10"
                style={{
                  background: "var(--surface)",
                  border: "1px solid rgba(145,94,255,0.3)",
                  boxShadow: "0 0 15px rgba(145,94,255,0.2)",
                }}
              >
                Explore Work
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                style={{
                  color: "var(--text-muted)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                Contact Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.3,
            }}
            className="hidden lg:flex items-center lg:col-span-2 pt-0"
          >
            <div className="relative">
              {/* Image frame */}
              <div
                className="relative w-80 h-96 rounded-3xl overflow-hidden"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <Image
                  src={userData.profile.image}
                  alt={userData.profile.name}
                  fill
                  className="object-cover"
                  style={{
                    transform: "scale(1.35)",
                    objectPosition: "center 15%",
                  }}
                  priority
                />
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{
                    background:
                      "linear-gradient(to top, var(--background) 0%, transparent 100%)",
                  }}
                />
              </div>

              {/* Floating badge — Available */}
              {/* <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-6 px-4 py-2.5 rounded-xl border backdrop-blur-md"
                style={{
                  background: "rgba(15,15,22,0.92)",
                  borderColor: "rgba(255,255,255,0.09)",
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="text-xs font-medium text-white/80">
                    Available for hire
                  </span>
                </div>
              </motion.div> */}

              {/* Floating badge — Experience */}
              {/* <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -top-4 -right-6 px-4 py-2.5 rounded-xl border backdrop-blur-md"
                style={{
                  background: "rgba(15,15,22,0.92)",
                  borderColor: "rgba(255,255,255,0.09)",
                }}
              >
                <p
                  className="text-xs font-medium"
                  style={{ color: "var(--primary-light)" }}
                >
                  5+ Years Experience
                </p>
              </motion.div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
