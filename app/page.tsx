"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  useScrollReveal();

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
      <footer>
        built by hand, not a template — &copy;{" "}
        {new Date().getFullYear()} Ans
      </footer>
    </>
  );
}
