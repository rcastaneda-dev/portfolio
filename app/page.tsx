import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { loadCiBundle } from '@/lib/data/ci-load';

// Content renders straight into the static HTML. Pipeline runs come from
// lib/data/ci-build.json (written by the prebuild step) or the committed snapshot.
export default function Home() {
  const ci = loadCiBundle();

  return (
    <>
      <Navigation />
      <main id="main">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects ci={ci.projects} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
