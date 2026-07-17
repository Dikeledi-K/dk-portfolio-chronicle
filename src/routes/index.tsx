import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Education, Experience, Certifications } from "@/components/portfolio/Timeline";
import { Contact } from "@/components/portfolio/Contact";
import { BackToTop, Footer, ScrollProgress } from "@/components/portfolio/Chrome";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-dvh">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
