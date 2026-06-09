import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import emmanuel from "@/assets/trainers/emmanuel.jpg";
import rawlin from "@/assets/trainers/rawlin.jpg";
import sathya from "@/assets/trainers/sathya.jpg";
import sinclair from "@/assets/trainers/sinclair.jpg";
import imran from "@/assets/trainers/imran.jpg";
import rasoul from "@/assets/trainers/rasoul.jpg";

const trainers = [
  {
    image: rasoul,
    name: "Coach Rasoul",
    title: "Master Coach",
    experience: "15 yrs",
    desc: "15 Years of Experience, 250+ Transformations, 100% Dedication.",
  },
  {
    image: imran,
    name: "Coach Imran",
    title: "Club Manager · Kammanahalli",
    experience: "10+ yrs",
    desc: "Experience of over 10 years. 250+ Transformations, Certified Personal Trainer, Nutrition Consultant, CPR Certified, Club Manager — Kammanahalli.",
  },
  {
    image: sathya,
    name: "Coach Sathya",
    title: "Certified Personal Trainer",
    experience: "10+ yrs",
    desc: "Certified fitness expert with 10+ years of experience. CPR Certified, Certified Personal Trainer.",
  },
  {
    image: sinclair,
    name: "Coach Sinclair",
    title: "Functional Training",
    experience: "5+ yrs",
    desc: "Certified fitness expert with 5+ years of experience, specializing in functional training and body transformation.",
  },
  {
    image: emmanuel,
    name: "Coach Emmanuel",
    title: "Strength & Conditioning",
    experience: "5 yrs",
    desc: "Certified CPT, Strength & Conditioning Specialist, and Nutrition Coach from Spartan Official Academy with 5 years of hands-on experience in fitness.",
  },
  {
    image: rawlin,
    name: "Coach Rawlin",
    title: "Fitness Instructor",
    experience: "2.5 yrs",
    desc: "Certified fitness instructor at New Skills Academy, certified in nutrition with FBX training. Experience: 2 and a half years.",
  },
];

const Equipment = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="equipment" className="relative py-16 md:py-24 overflow-hidden bg-background">
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-primary/10 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-primary/40 bg-primary/5 clip-slant">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="font-display text-[10px] tracking-[0.25em] text-primary">
              MEET THE TEAM
            </span>
          </div>

          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-6">
            Train with the <span className="text-primary text-glow">Best</span> Trainers
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Certified, competitive and obsessed with your results. Tap any coach to see their full profile.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {trainers.map((t, i) => (
            <motion.button
              type="button"
              onClick={() => setActive(i)}
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group relative bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-glow overflow-hidden cursor-pointer"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={t.image}
                  alt={`${t.name} — ${t.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="inline-flex font-display text-[9px] tracking-[0.2em] text-primary border border-primary/50 px-2.5 py-1 mb-3">
                    {t.experience} EXPERIENCE
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                    {t.name}
                  </h3>
                  <p className="font-display text-[11px] tracking-[0.2em] text-muted-foreground mb-3">
                    {t.title.toUpperCase()}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-4">
                    {t.desc}
                  </p>
                  <span className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.15em] text-primary">
                    VIEW PROFILE <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
              <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors pointer-events-none" />
            </motion.button>
          ))}
        </div>
      </div>

      <Dialog open={active !== null} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-card border-primary/40">
          {active !== null && (
            <div className="grid md:grid-cols-2">
              <div className="relative aspect-[4/5] md:aspect-auto bg-background">
                <img
                  src={trainers[active].image}
                  alt={trainers[active].name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-7 md:p-9 flex flex-col justify-center">
                <div className="font-display text-[10px] tracking-[0.3em] text-primary mb-3">
                  — LMF COACH
                </div>
                <DialogTitle className="font-display text-2xl md:text-3xl mb-2">
                  {trainers[active].name}
                </DialogTitle>
                <div className="font-display text-[11px] tracking-[0.25em] text-muted-foreground mb-5">
                  {trainers[active].title.toUpperCase()}
                </div>
                <div className="inline-flex self-start font-display text-[10px] tracking-[0.25em] text-primary border border-primary/50 px-3 py-1.5 mb-6">
                  {trainers[active].experience} EXPERIENCE
                </div>
                <DialogDescription className="text-base text-foreground/80 leading-relaxed">
                  {trainers[active].desc}
                </DialogDescription>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Equipment;
