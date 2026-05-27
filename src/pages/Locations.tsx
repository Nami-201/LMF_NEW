import Navbar from "@/components/lmf/Navbar";
import Footer from "@/components/lmf/Footer";
import Locations from "@/components/lmf/Locations";
import Gallery from "@/components/lmf/Gallery";
import Reviews from "@/components/lmf/Reviews";

const LocationsPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <Locations />
        <Gallery />
        <Reviews />
      </div>
      <Footer />
    </main>
  );
};

export default LocationsPage;
