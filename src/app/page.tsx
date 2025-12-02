import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Career from '@/components/Career';
import Patents from '@/components/Patents';
import Speaking from '@/components/Speaking';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import TestButton from '@/components/TestButton';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Expertise />
        <Career />
        <Patents />
        <Speaking />
        <Contact />
      </main>
      <Footer />
      <TestButton />
    </>
  );
}
