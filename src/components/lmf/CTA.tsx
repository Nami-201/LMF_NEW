import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="join" className="relative py-20 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl mx-auto text-center glass p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute -top-40 -left-40 h-80 w-80 bg-primary/30 blur-3xl rounded-full" />
          <div className="absolute -bottom-40 -right-40 h-80 w-80 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative">
            <div className="font-display text-[10px] tracking-[0.4em] text-primary mb-4">
              — TIME TO FORGE
            </div>
            <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight">
              YOUR STRENGTH<br />
              <span className="text-primary text-glow">STARTS NOW.</span>
            </h2>
            <p className="mt-6 text-muted-foreground max-w-lg mx-auto">
              Lock in founding member pricing. No long-term contracts.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/locations"
                onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
                className="font-display text-xs tracking-[0.25em] text-foreground hover:text-primary transition-colors border-b border-primary/40 pb-1"
              >
                VISIT A LOCATION
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
