import Contact from "@/src/components/Contact";
import Experience from "@/src/components/Experience";
import Footer from "@/src/components/Footer";
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Projects from "@/src/components/Projects";
import ScrollEffects from "@/src/components/ScrollEffects";
import Skills from "@/src/components/Skills";

export default function Home() {
  return (
    <main
      id="top"
      className="min-h-screen bg-[#fbfaf7] text-[#1f2d24] transition-colors dark:bg-[#050505] dark:text-[#f4f1df]"
    >
      <ScrollEffects />
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
