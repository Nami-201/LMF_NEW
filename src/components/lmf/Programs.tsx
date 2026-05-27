import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import strength from "@/assets/training-strength.jpg";
import cardio from "@/assets/training-cardio.jpg";
import coaching from "@/assets/training-coaching.jpg";

const programs = [
  {
    img: strength,
    code: "01",
    title: "STRENGTH",
    desc: "Powerlifting, hypertrophy, and raw force. Built for those chasing real numbers.",
    tags: ["Powerlifting", "Hypertrophy"],
  },
  {
    img: cardio,
    code: "02",
    title: "CONDITIONING",
    desc: "HIIT, metcons, and combat conditioning. Forge an engine that doesn't quit.",
    tags: ["HIIT", "Combat"],
  },
  {
    img: coaching,
    code: "03",
    title: "1:1 COACHING",
    desc: "Direct mentorship from the Maestro. Tailored programming, accountability, results.",
    tags: ["Personal", "Online"],
  },
];

const Programs = () => {
  return (
    <section id="programs" className="relative py-32 bg-gradient-dark">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="font-display text-[10px] tracking-[0.4em] text-primary mb-4">
            — TRAINING PROGRAMS
          </div>
          <h2 className="font-display text-3xl md:text-5xl">
            BUILT TO <span className="text-primary text-glow">DOMINATE</span>
          </h2>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground">
            Three pillars. Infinite progression. Choose your path — or master them all.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <motion.article
              key={p.code}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden bg-card border border-border hover:border-primary/60 transition-all duration-500 hover:shadow-glow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={800}
                  height={1024}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute top-4 left-4 font-display text-xs text-primary">{p.code}</div>
                <div className="absolute top-4 right-4 h-8 w-8 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="font-display text-[10px] tracking-widest px-2.5 py-1 bg-secondary text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
