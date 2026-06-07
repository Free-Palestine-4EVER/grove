import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Collections from "@/components/Collections";
import SofaShowcase from "@/components/SofaShowcase";
import DesignService from "@/components/DesignService";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Financing from "@/components/Financing";
import VirtualTour from "@/components/VirtualTour";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Collections />
      <Manifesto />
      <SofaShowcase />
      <DesignService />
      <Services />
      <Proof />
      <Financing />
      <VirtualTour />
      <Visit />
      <Footer />
    </main>
  );
}
