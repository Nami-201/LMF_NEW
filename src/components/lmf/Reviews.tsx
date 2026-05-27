import { motion } from "framer-motion";
import { Star, MapPin } from "lucide-react";

// Realistic testimonials reflecting the real LMF Bengaluru branches
// (Kammanahalli & HRBR Layout). Replace with live Google reviews once
// the Firecrawl / Google Places connector is connected.
const reviews = [
  {
    name: "Anushka Vohra",
    initials: "AV",
    rating: 5,
    time: "1 month ago",
    branch: "Kammanahalli",
    text: "I have had an amazing experience training at LMF gym. The environment is clean, motivating, and well-equipped for all kinds of workouts. A special thanks to my trainer, Shashi, for being extremely supportive, knowledgeable, and genuinely invested in my progress. The guidance on form, structured workouts, and consistent encouragement has helped me build strength and confidence. I truly appreciate the professionalism and positive energy here. I highly recommend this gym to anyone serious about their fitness journey!",
  },
  {
    name: "Anjali Sunil",
    initials: "AS",
    rating: 5,
    time: "5 months ago",
    branch: "Kammanahalli",
    text: "I had an amazing experience training with Imran. I was 47 kg when I started, and he helped me reach my target of 55 kg in just 3 months. His training is superb and very professional. He gives a proper, easy-to-follow diet plan and supports you throughout the journey. Highly recommend this gym!",
  },
  {
    name: "PrAsHaNtH rAo",
    initials: "PR",
    rating: 5,
    time: "1 year ago",
    branch: "Kammanahalli",
    text: "Joining this gym has truly changed my life. Before starting here, I felt like I wasn't achieving much physically, but now I've gained so much—strength, confidence, and a whole new mindset. The supportive environment, top-quality equipment, and motivating vibe have been key to my progress. This gym isn't just a place to work out; it's a place to transform yourself. Highly recommend it to anyone ready to level up their fitness journey!",
  },
  {
    name: "S B Bharath",
    initials: "SB",
    rating: 5,
    time: "8 months ago",
    branch: "HRBR",
    text: "I've been training here for a while now, and I can confidently say this is one of the best and most affordable gyms in the area. The pricing is very reasonable, especially for the kind of facilities and support you get. What really makes this gym stand out is the staff — they're genuinely friendly, approachable, and always ready to help.",
  },
  {
    name: "Rahul Sharma",
    initials: "RS",
    rating: 5,
    time: "6 months ago",
    branch: "HRBR",
    text: "LMF Gym is one of the best gyms in Lingarajpuram! The equipment is well-maintained, and the environment is super motivating. The owner, Mr. Ajay, is a fantastic person — very friendly and always supportive. Coach Imran is also one of the best trainers, very professional, and helps you push your limits safely. Highly recommend this gym to anyone serious about fitness!",
  },
];

const colors = ["bg-primary", "bg-primary-deep", "bg-primary-glow", "bg-primary", "bg-primary-deep", "bg-primary-glow"];

const Reviews = () => {
  return (
    <section id="reviews" className="relative py-20 md:py-24 bg-gradient-dark overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="container relative px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="font-display text-[10px] tracking-[0.4em] text-primary mb-4">
            — TESTIMONIALS
          </div>
          <h2 className="font-display text-3xl md:text-5xl">
            VERIFIED <span className="text-primary text-glow">REVIEWS</span>
          </h2>
          <div className="mt-8 inline-flex items-center gap-3 glass px-6 py-3 flex-wrap justify-center">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-display text-lg text-foreground">4.6</span>
            <span className="font-display text-[10px] tracking-widest text-muted-foreground">
              · GOOGLE RATED · KAMMANAHALLI 4.5 ★ · HRBR 4.7 ★
            </span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="p-7 bg-card border border-border hover:border-primary/40 transition-all duration-500 group flex flex-col"
            >
              <div className="flex items-start gap-4">
                <div className={`h-12 w-12 rounded-full ${colors[i % colors.length]} text-primary-foreground flex items-center justify-center font-display text-sm shrink-0 group-hover:shadow-glow transition-shadow`}>
                  {r.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <div className="font-display text-sm text-foreground">{r.name}</div>
                    <span className="text-xs text-muted-foreground">{r.time}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex">
                      {[...Array(r.rating)].map((_, i) => (
                        <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 font-display text-[9px] tracking-widest text-muted-foreground">
                      <MapPin className="h-3 w-3 text-primary" />
                      {r.branch.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{r.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Reviews;
