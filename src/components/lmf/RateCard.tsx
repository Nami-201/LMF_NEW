import { motion } from "framer-motion";
const rateCardAsset = { url: "/rate-card.png" };

const RateCard = () => {
  return (
    <section id="rates" className="relative py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(var(--primary)/0.15),_transparent_65%)]" />
      </div>

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <div className="font-display text-xs md:text-sm tracking-[0.4em] text-primary mb-4">
            MEMBERSHIP PLANS
          </div>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">
            Rate Card
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg">
            Choose the plan that fits your grind. Access both HRBR &amp; Kammanahalli branches.
          </p>
          <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-primary/25 bg-card/40 backdrop-blur-md shadow-glow-lg"
        >
          <img
            src={rateCardAsset.url}
            alt="LMF Membership Rate Card — 1 Month, 2, 3, 6 Months and Yearly plans"
            loading="lazy"
            decoding="async"
            className="block w-full h-auto"
          />
          <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-primary/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default RateCard;
