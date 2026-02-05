import About from "@/components/About";
import Career from "@/components/Career";
import Contact from "@/components/Contact";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Patents from "@/components/Patents";
import Speaking from "@/components/Speaking";
import WorkshopTeaser from "@/components/WorkshopTeaser";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WorkshopTeaser />
        <About />
        <Expertise />
        <Career />
        <Patents />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
