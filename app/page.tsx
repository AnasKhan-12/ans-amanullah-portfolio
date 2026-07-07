import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Stack from "@/components/Stack";
import Contact from "@/components/Contact";

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
      <footer>
        built by hand, not a template — &copy;{" "}
        {new Date().getFullYear()} Ans
      </footer>
    </>
  );
}
