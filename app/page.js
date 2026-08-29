import Navbar from '@/components/Navbar';
import AnimatedBackground from '@/components/AnimatedBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
