import { useEffect, useState } from "react";
import { useLocation, Link } from "@/lib/router-shim";
import { Instagram, Facebook } from "lucide-react";
import logo from "@/assets/lmf-logo.png";

const INSTAGRAM_URL = "https://www.instagram.com/leon_maestro_de_fitness/";
const FACEBOOK_URL = "https://www.facebook.com/lmfgym/";
const WHATSAPP_URL = "https://wa.me/919000000001";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const location = useLocation();
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const trigger = () => {
      if (window.location.hash === "#contact") {
        const el = document.getElementById("contact");
        if (el) {
          setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
        }
        setHighlight(true);
        setTimeout(() => setHighlight(false), 2400);
      }
    };
    trigger();
    window.addEventListener("hashchange", trigger);
    return () => window.removeEventListener("hashchange", trigger);
  }, [location.key, location.pathname, location.hash]);

  const socials = [
    { Icon: Instagram, href: INSTAGRAM_URL, label: "Instagram" },
    { Icon: Facebook, href: FACEBOOK_URL, label: "Facebook" },
  ];

  return (
    <footer id="contact" className="relative border-t border-border bg-card scroll-mt-20">
      <div className="container px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LMF on Instagram"
              className="flex items-center gap-3 group"
            >
              <img src={logo} alt="LMF logo" width={48} height={48} className="h-12 w-12 object-contain drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_16px_hsl(var(--primary))]" />
              <div>
                <div className="font-display text-lg">
                  <span className="text-foreground">L</span>
                  <span className="text-primary">M</span>
                  <span className="text-foreground">F</span>
                </div>
                <div className="font-display text-[9px] tracking-[0.3em] text-muted-foreground group-hover:text-primary transition-colors">
                  LEON MAESTRO DE FITNESS
                </div>
              </div>
            </a>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              A premium fitness brand built for the relentless. Forge your strength, master your craft,
              join the movement.
            </p>
            <div className="mt-8">
              <h3 className="font-display text-xs tracking-[0.3em] text-primary mb-4">FOLLOW US</h3>
              <div className="flex items-center gap-3">
                {socials.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="h-11 w-11 flex items-center justify-center border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp Enquiry Buttons */}
            <div className={`mt-8 space-y-3 max-w-md rounded-md p-3 -m-3 transition-all duration-500 ${highlight ? "ring-2 ring-primary shadow-glow animate-pulse bg-primary/5" : ""}`}>
              <h4 className="font-display text-[10px] tracking-[0.2em] text-primary mb-3">WHATSAPP ENQUIRY</h4>
              <a
                href="https://wa.me/919886781967?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20gym%20membership%20plans%20at%20your%20Kammanahalli%20Branch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-display text-[10px] tracking-[0.2em] px-4 py-3 bg-background border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire – Kammanahalli
              </a>
              <a
                href="https://wa.me/919886781967?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20the%20gym%20membership%20plans%20at%20your%20HRBR%20Branch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full font-display text-[10px] tracking-[0.2em] px-4 py-3 bg-background border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enquire – HRBR
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.3em] text-primary mb-5">EXPLORE</h3>
            <ul className="space-y-3 text-sm">
              {[
                { label: "About", href: "/#about", type: "hash" },
                { label: "Programs", href: "/programs", type: "route" },
                { label: "Locations", href: "/locations", type: "route" },
                { label: "Reviews", href: "/#reviews", type: "hash" },
              ].map((l) => (
                <li key={l.label}>
                  {l.type === "route" ? (
                    <Link
                      to={l.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior })}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  ) : (
                    <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {l.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xs tracking-[0.3em] text-primary mb-5">CONTACT</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>leonmaestrodefitness@gmail.com</li>
              <li>+91 98867 81967</li>
              <li>Kammanahalli & HRBR Layout<br/>Bengaluru, Karnataka</li>
            </ul>

          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} LMF — LEON MAESTRO DE FITNESS · ALL RIGHTS RESERVED
          </div>
          <div className="font-display text-[10px] tracking-[0.3em] text-muted-foreground">
            FORGE · STRENGTH · MASTERY
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
