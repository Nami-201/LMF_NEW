import { motion } from "framer-motion";
import { Award, Dumbbell, Flame, HeartPulse, Medal, Target, Trophy, Zap } from "lucide-react";

const trainers = [
  {
    icon: Trophy,
    name: "Leon Castelino",
    title: "Head Coach · Strength",
    experience: "15+ yrs",
    desc: "IFBB-certified strength coach. Specializes in powerlifting and hypertrophy programming.",
  },
  {
    icon: Flame,
    name: "Arjun Rao",
    title: "HIIT & Conditioning",
    experience: "10 yrs",
    desc: "Ex-national athlete. Builds brutal metabolic conditioning circuits that burn fat fast.",
  },
  {
    icon: Dumbbell,
    name: "Rohan Mehta",
    title: "Bodybuilding Specialist",
    experience: "12 yrs",
    desc: "Stage-prep expert. Has coached 30+ competitors to regional and national podiums.",
  },
  {
    icon: HeartPulse,
    name: "Priya Nair",
    title: "Women's Strength",
    experience: "8 yrs",
    desc: "Pre/post-natal certified. Empowering women through progressive barbell training.",
  },
  {
    icon: Target,
    name: "Karan Singh",
    title: "Olympic Lifting",
    experience: "11 yrs",
    desc: "USAW Level 2 coach. Snatch, clean & jerk, and explosive athletic development.",
  },
  {
    icon: Zap,
    name: "Sneha Iyer",
    title: "Mobility & Recovery",
    experience: "7 yrs",
    desc: "FRC-certified. Keeps lifters moving pain-free with mobility and soft-tissue work.",
  },
  {
    icon: Medal,
    name: "Vikram Shetty",
    title: "Boxing & Combat",
    experience: "14 yrs",
    desc: "Former state-level boxer. Striking technique, footwork, and fight conditioning.",
  },
  {
    icon: Award,
    name: "Ananya Reddy",
    title: "Nutrition & Transformation",
    experience: "9 yrs",
    desc: "ISSN nutritionist. Builds sustainable plans for fat loss, muscle gain and performance.",
  },
];

const Equipment = () => {
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
            Decades of combined experience. Every coach at LMF is certified, competitive,
            and obsessed with getting you results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {trainers.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
              className="group relative p-6 bg-card border border-border hover:border-primary/60 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 flex items-center justify-center bg-gradient-primary clip-slant">
                  <t.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-display text-[10px] tracking-[0.2em] text-primary border border-primary/40 px-2 py-1">
                  {t.experience}
                </div>
              </div>

              <h3 className="font-display text-base tracking-wider mb-1 group-hover:text-primary transition-colors">
                {t.name}
              </h3>
              <div className="font-display text-[10px] tracking-[0.25em] text-muted-foreground mb-3">
                {t.title.toUpperCase()}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.desc}
              </p>

              <div className="absolute -top-px -right-px w-8 h-8 border-t-2 border-r-2 border-primary/0 group-hover:border-primary transition-colors pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;
