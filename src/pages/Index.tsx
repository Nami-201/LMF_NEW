import Navbar from "@/components/lmf/Navbar";
import Hero from "@/components/lmf/Hero";
import About from "@/components/lmf/About";
import Equipment from "@/components/lmf/Equipment";
import Locations from "@/components/lmf/Locations";
import Gallery from "@/components/lmf/Gallery";
import Reviews from "@/components/lmf/Reviews";
import CTA from "@/components/lmf/CTA";
import Footer from "@/components/lmf/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Equipment />
      <Locations />
      <Gallery />
      <Reviews />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
