import { motion } from "framer-motion";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const locations = [
  {
    city: "KAMMANAHALLI",
    address: "Venkateshappa Layout, Kammanahalli, Bengaluru, Karnataka 560033",
    hours: "5AM — 10PM",
    phone: "+91 98867 81967",
    flagship: true,
    mapUrl: "https://maps.app.goo.gl/Li418ZJUcND9QjxT8",
    embed:
      "https://www.google.com/maps?q=13.0137055,77.6357879&hl=en&z=17&output=embed",
  },
  {
    city: "HRBR LAYOUT",
    address: "3C-837, 1st Block, 9th Main Rd, HRBR Layout, Kalyan Nagar, Bengaluru, Karnataka 560043",
    hours: "5AM — 10PM",
    phone: "+91 98867 81967",
    mapUrl: "https://maps.app.goo.gl/SoNaWrBrHNrZNbe59",
    embed:
      "https://www.google.com/maps?q=13.0183176,77.6471462&hl=en&z=17&output=embed",
  },
];

const Locations = () => {
  return (
    <section id="locations" className="relative py-20 md:py-24">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10"
        >
          <div>
            <div className="font-display text-[10px] tracking-[0.4em] text-primary mb-4">
              — FIND THE FORGE
            </div>
            <h2 className="font-display text-3xl md:text-5xl">
              GYM <span className="text-primary text-glow">LOCATIONS</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Two Bengaluru branches. One unbreakable standard. Walk into any LMF and feel the difference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <motion.a
              key={loc.city}
              href={loc.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${loc.city} location on Google Maps`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative block bg-card border border-border hover:border-primary transition-all duration-500 hover:-translate-y-1 hover:shadow-glow overflow-hidden cursor-pointer"
            >
              {loc.flagship && (
                <span className="absolute top-4 right-4 z-10 font-display text-[9px] tracking-widest px-2 py-1 bg-primary text-primary-foreground">
                  FLAGSHIP
                </span>
              )}

              {/* Map preview (visual only — card click handles redirect) */}
              <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-secondary pointer-events-none">
                <iframe
                  src={loc.embed}
                  title={`Map preview of LMF ${loc.city}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[40%] contrast-110 group-hover:grayscale-0 transition-all duration-500"
                  style={{ border: 0 }}
                />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="h-10 w-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:shadow-glow transition-all">
                    <MapPin className="h-4 w-4 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl">{loc.city}</h3>
                </div>

                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="h-4 w-4 text-primary shrink-0" />
                    <span>{loc.hours}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                </div>

                <span className="mt-6 inline-flex items-center gap-2 font-display text-[10px] tracking-[0.3em] text-foreground border-b border-primary pb-1 group-hover:text-primary transition-colors">
                  VIEW ON MAP <ExternalLink className="h-3 w-3" />
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
