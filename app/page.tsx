import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Manifesto from "@/components/Manifesto";
import Collections from "@/components/Collections";
import VirtualTour from "@/components/VirtualTour";
import ProductAR from "@/components/ProductAR";
import ShoppableRoom from "@/components/ShoppableRoom";
import DesignService from "@/components/DesignService";
import Services from "@/components/Services";
import Proof from "@/components/Proof";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <ProductAR />
      <Marquee />
      <Manifesto />
      <Collections />
      <VirtualTour />
      <ShoppableRoom />
      <DesignService />
      <Services />
      <Proof />
      <Visit />
      <Footer />
    </main>
  );
}
