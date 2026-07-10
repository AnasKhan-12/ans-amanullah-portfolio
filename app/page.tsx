"use client";

import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <main>
        <Work />
        <Testimonials />
        <Stack />
        <Contact />
      </main>
      <motion.footer
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
      >
        built by hand, not a template — &copy;{" "}
        {new Date().getFullYear()} Ans
      </motion.footer>
    </>
  );
}
