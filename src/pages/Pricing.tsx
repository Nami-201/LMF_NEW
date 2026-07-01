import Navbar from "@/components/lmf/Navbar";
import Footer from "@/components/lmf/Footer";
import RateCard from "@/components/lmf/RateCard";

const Pricing = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="pt-24">
        <RateCard />
      </div>
      <Footer />
    </main>
  );
};

export default Pricing;
