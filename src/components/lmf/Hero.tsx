import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import heroImg from "@/assets/hero-gym.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="LMF gym interior with red ambient lighting"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-bg opacity-40" />
      </div>

      {/* Red glow orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-primary/15 blur-3xl" />

      <div className="container relative z-10 px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-normal tracking-tight leading-none"
        >
          <span className="text-foreground">L</span>
          <span className="text-primary text-glow">M</span>
          <span className="text-foreground">F</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-10 bg-primary" />
          <p className="font-display text-[11px] md:text-sm tracking-[0.4em] text-muted-foreground">
            LEON MAESTRO DE FITNESS
          </p>
          <span className="h-px w-10 bg-primary" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 font-display text-2xl md:text-4xl lg:text-5xl text-foreground/90"
        >
          FORGE YOUR <span className="text-primary text-glow">STRENGTH</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          className="mt-6 max-w-xl mx-auto text-base md:text-lg text-muted-foreground"
        >
          Where iron meets discipline. A premium training experience built for those who refuse average.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.25 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="h-12 w-6 rounded-full border border-foreground/30 flex items-start justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
