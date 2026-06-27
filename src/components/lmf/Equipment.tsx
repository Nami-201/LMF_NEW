import { useState } from "react";
import { motion } from "framer-motion";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import emmanuel from "@/assets/trainers/emmanuel.jpg";
import rawlin from "@/assets/trainers/rawlin.jpg";
import sathya from "@/assets/trainers/sathya.jpg";

import imran from "@/assets/trainers/imran.jpg";
import manju from "@/assets/trainers/manju.jpg";
import shashi from "@/assets/trainers/shashi.jpg";
import rasoul from "@/assets/trainers/rasoul.jpg";

type Trainer = {
  image: string;
  name: string;
  title: string;
  experience: string;
  desc: string;
};

const branches: { branch: string; trainers: Trainer[] }[] = [
  {
    branch: "Kammanahalli Branch",
    trainers: [
      {
        image: imran,
        name: "Fitness Manager Imran",
        title: "Fitness Manager — Kammanahalli",
        experience: "12+ yrs",
        desc: "Experience of over 12 years. 250+ Transformations, Certified Personal Trainer, Nutrition Consultant, CPR Certified, Club Manager — Kammanahalli.",
      },
      {
        image: sathya,
        name: "Coach Sathya",
        title: "Certified Personal Trainer",
        experience: "10+ yrs",
        desc: "Certified fitness expert with 10+ years of experience. CPR Certified, Certified Personal Trainer.",
      },
      {
        image: manju,
        name: "Coach Manju Nath",
        title: "Certified Personal Trainer",
        experience: "5 yrs",
        desc: "Certified trainer, nutrition certified, CPR certified with 5 years of experience.",
      },
      {
        image: shashi,
        name: "Coach Shashi",
        title: "Certified Personal Trainer",
        experience: "6+ yrs",
        desc: "With over 6 years of experience in the fitness industry, specializes in Weight Loss, Strength & Conditioning, Customized Workout & Nutrition Plans.",
      },
    ],
  },
  {
    branch: "HRBR Branch",
    trainers: [
      {
        image: rasoul,
        name: "Fitness Manager Rasoul",
        title: "Fitness Manager — HRBR",
        experience: "15 yrs",
        desc: "15 Years of Experience, 250+ Transformations, 100% Dedication.",
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
    ],
  },
];

const trainers: Trainer[] = branches.flatMap((b) => b.trainers);

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

        <div className="space-y-16">
          {branches.map((b) => (
            <div key={b.branch}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-4 mb-8"
              >
                <span className="h-px flex-1 bg-border" />
                <h3 className="font-display text-xl md:text-2xl tracking-[0.15em] text-foreground whitespace-nowrap">
                  {b.branch.split(" ")[0]}{" "}
                  <span className="text-primary text-glow">
                    {b.branch.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
                <span className="h-px flex-1 bg-border" />
              </motion.div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {b.trainers.map((t, i) => {
                  const globalIndex = trainers.indexOf(t);
                  return (
                    <motion.button
                      type="button"
                      onClick={() => setActive(globalIndex)}
                      key={t.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                      className="group relative bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-glow overflow-hidden cursor-pointer"
                    >
                      <div className="absolute top-3 right-3 z-10 font-display text-[9px] tracking-[0.2em] text-primary border border-primary/50 bg-background/80 backdrop-blur-sm px-2.5 py-1">
                        {t.experience} EXPERIENCE
                      </div>
                      <div className="relative aspect-[4/5] overflow-hidden">
                        <img
                          src={t.image}
                          alt={`${t.name} — ${t.title}`}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="font-display text-xl md:text-2xl text-foreground mb-1">
                            {t.name}
                          </h3>
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
                  );
                })}
              </div>
            </div>
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
