import { motion } from "framer-motion";
import { ShieldCheck, Activity, Zap, Wrench } from "lucide-react";
import equipmentImg from "@/assets/lmf-equipment.jpg";

const features = [
  {
    icon: Wrench,
    title: "Built to Last",
    desc: "Commercial-grade steel frames engineered for decades of heavy use.",
  },
  {
    icon: Activity,
    title: "Biomechanics",
    desc: "Movement paths designed around real human anatomy for maximum gains.",
  },
  {
    icon: Zap,
    title: "Performance",
    desc: "Smooth bearings, precise loading — every rep feels powerful.",
  },
  {
    icon: ShieldCheck,
    title: "Safety First",
    desc: "Reinforced safeties and stable bases so you can push your limits.",
  },
];

const Equipment = () => {
  return (
    <section id="equipment" className="relative py-16 md:py-20 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/40 bg-primary/5 clip-slant">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-display text-[10px] tracking-[0.25em] text-primary">
                POWERED BY JERAI FITNESS
              </span>
            </div>

            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
              Train with the <span className="text-primary text-glow">Best</span> Equipment
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl">
              We've outfitted LMF with <span className="text-foreground font-semibold">Jerai Fitness</span> —
              India's most trusted professional-grade equipment brand. Built for serious lifters,
              engineered for results, and designed to take everything you throw at it.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group relative p-5 bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-glow"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-11 h-11 flex items-center justify-center bg-gradient-primary clip-slant">
                      <f.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-sm tracking-widest mb-1.5 group-hover:text-primary transition-colors">
                        {f.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative clip-slant overflow-hidden border border-border shadow-card">
              <img
                src={equipmentImg}
                alt="Jerai Fitness professional gym equipment at LMF"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-background via-background/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-5 -left-5 md:-left-8 bg-card border border-primary/50 px-5 py-3 shadow-glow clip-slant hidden sm:block">
              <div className="font-display text-[10px] tracking-[0.25em] text-muted-foreground">
                COMMERCIAL GRADE
              </div>
              <div className="font-display text-lg text-primary text-glow">
                100% JERAI
              </div>
            </div>

            {/* Corner accents */}
            <div className="absolute -top-2 -right-2 w-16 h-16 border-t-2 border-r-2 border-primary pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
