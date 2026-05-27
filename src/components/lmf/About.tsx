import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Users, Dumbbell } from "lucide-react";

const easeSmooth = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: easeSmooth },
  }),
};

const features = [
  {
    icon: ShieldCheck,
    title: "12+ Years of Excellence",
    desc:
      "Since 2012, Leon Maestro De Fitness has stood as a beacon of discipline and transformation. Over a decade of trust, thousands of lives reshaped, and an unwavering commitment to elite fitness standards.",
  },
  {
    icon: Dumbbell,
    title: "Premium Jerai Equipment",
    desc:
      "Powered by Jerai Fitness — India's leading commercial-grade equipment manufacturer. Advanced biomechanics, precision-engineered strength machines, and international-quality manufacturing built to outlast your limits.",
  },
  {
    icon: Users,
    title: "Professional Trainers",
    desc:
      "Our certified coaches are more than instructors — they are architects of transformation. Every session is structured, every movement is corrected, every limit is challenged with purpose.",
  },
  {
    icon: Trophy,
    title: "Transformation Focused",
    desc:
      "This is not a place for half-measures. LMF is built for those who show up when motivation fades. Strength, discipline, and results — forged one rep at a time.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-16 md:py-20 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/8 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="font-display text-[10px] tracking-[0.4em] text-primary mb-3"
          >
            — ABOUT THE MAESTRO
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight"
          >
            MORE THAN A GYM.
            <br />
            <span className="text-primary text-glow">A STANDARD.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            custom={2}
            className="mt-6 text-muted-foreground text-sm md:text-base leading-relaxed space-y-4"
          >
            <p>
              <strong className="text-foreground font-semibold">LMF — Leon Maestro De Fitness</strong> is not a trend.
              It is a tradition built on iron, discipline, and an unrelenting pursuit of excellence.
              For over <strong className="text-foreground font-semibold">12 years</strong>, we have been the training ground
              for those who refuse to settle — athletes, professionals, and everyday warriors who choose
              strength over comfort.
            </p>
            <p>
              Our floors are lined with <strong className="text-foreground font-semibold">Jerai Fitness</strong> — India's most
              trusted name in commercial-grade gym equipment. Every machine is engineered with advanced biomechanics,
              built for high durability, and manufactured to international standards. From precision strength training
              rigs to performance-focused cardio zones, every piece of equipment at LMF is chosen to deliver
              results that last.
            </p>
            <p>
              But equipment is only half the story. At LMF, you train under the watch of professional coaches who understand
              that real transformation demands more than routines — it demands accountability, precision, and a culture that
              does not accept excuses. This is where discipline becomes habit. Where sweat becomes proof. Where you become
              the strongest version of yourself.
            </p>
          </motion.div>
        </motion.div>

        {/* Feature cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.1,
                  ease: easeSmooth,
                }}
                className="group relative glass p-7 border border-border/40 hover:border-primary/60 transition-all duration-500 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute -top-16 -right-16 h-40 w-40 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center h-12 w-12 border border-primary/40 bg-primary/10 mb-5 group-hover:shadow-glow transition-all duration-500">
                    <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                  </div>

                  <h4 className="font-display text-sm md:text-base text-foreground mb-3 leading-tight tracking-wide">
                    {f.title.toUpperCase()}
                  </h4>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>

                  <div className="mt-5 h-px w-10 bg-primary/60 group-hover:w-20 transition-all duration-500" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom mission statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: easeSmooth }}
          className="mt-12 text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-primary/60" />
            <span className="font-display text-[10px] tracking-[0.4em] text-primary">OUR MISSION</span>
            <span className="h-px w-12 bg-primary/60" />
          </div>

          <p className="font-display text-xl md:text-3xl text-foreground leading-snug">
            TO BUILD A COMMUNITY WHERE{" "}
            <span className="text-primary text-glow">DISCIPLINE</span>,{" "}
            <span className="text-primary text-glow">STRENGTH</span>, AND{" "}
            <span className="text-primary text-glow">TRANSFORMATION</span>{" "}
            ARE NOT GOALS — THEY ARE EXPECTATIONS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
