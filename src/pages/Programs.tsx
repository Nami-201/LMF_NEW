import { motion } from "framer-motion";
import { ArrowRight, Dumbbell, Flame, UserCog, Activity, HeartPulse, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/lmf/Navbar";
import Footer from "@/components/lmf/Footer";
import CTA from "@/components/lmf/CTA";

const programs = [
  {
    code: "01",
    icon: Dumbbell,
    title: "STRENGTH TRAINING",
    desc: "Powerlifting, hypertrophy, and raw force. Build dense muscle and real-world strength under expert programming.",
    tags: ["Powerlifting", "Hypertrophy"],
  },
  {
    code: "02",
    icon: Flame,
    title: "WEIGHT LOSS",
    desc: "High-intensity fat burn protocols combined with smart nutrition. Drop body fat without losing muscle.",
    tags: ["HIIT", "Nutrition"],
  },
  {
    code: "03",
    icon: UserCog,
    title: "PERSONAL TRAINING",
    desc: "1:1 coaching from the Maestro himself. Custom programming, accountability, and direct mentorship.",
    tags: ["1:1", "Custom"],
  },
  {
    code: "04",
    icon: Activity,
    title: "FUNCTIONAL TRAINING",
    desc: "Real-world movement patterns. Mobility, athleticism, and durability for life beyond the gym.",
    tags: ["Mobility", "Athletic"],
  },
  {
    code: "05",
    icon: HeartPulse,
    title: "CARDIO & CONDITIONING",
    desc: "Forge an engine that doesn't quit. Metcons, sprints, and combat conditioning circuits.",
    tags: ["Endurance", "MetCon"],
  },
  {
    code: "06",
    icon: Trophy,
    title: "ATHLETE PERFORMANCE",
    desc: "Sport-specific training for competitive athletes. Speed, power, and recovery dialed in.",
    tags: ["Sport", "Elite"],
  },
];

const Programs = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-40 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-primary/15 blur-3xl pointer-events-none" />
        <div className="container relative mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="font-display text-[10px] tracking-[0.4em] text-primary mb-4">
              — LMF PROGRAMS
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-tight">
              OUR TRAINING <br />
              <span className="text-primary text-glow">PROGRAMS</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground text-lg">
              Six pillars of transformation. Every program engineered by the Maestro,
              built on Jerai-grade equipment, and tested in the trenches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="relative py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p, i) => (
              <motion.article
                key={p.code}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.12 }}
                className="group relative overflow-hidden bg-card border border-border hover:border-primary/60 transition-all duration-500 hover:shadow-glow hover:-translate-y-1"
              >
                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <div className="p-7">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 flex items-center justify-center bg-gradient-primary clip-slant group-hover:shadow-glow transition-all">
                      <p.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="font-display text-xs text-primary/60 tracking-widest">{p.code}</span>
                  </div>

                  <h3 className="font-display text-lg md:text-xl mb-3 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-secondary text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link
                    to="/#join"
                    className="group/btn inline-flex items-center gap-2 font-display text-[11px] tracking-[0.25em] text-foreground hover:text-primary transition-colors"
                  >
                    JOIN NOW
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Footer />
    </main>
  );
};

export default Programs;
