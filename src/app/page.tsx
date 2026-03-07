import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
}
