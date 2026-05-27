import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "@/lib/router-shim";
import logo from "@/assets/lmf-logo.png";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

type NavLink = { label: string; href: string; type: "anchor" | "route" };

const links: NavLink[] = [
  { label: "Home", href: "/#home", type: "anchor" },
  { label: "About", href: "/#about", type: "anchor" },
  { label: "Programs", href: "/programs", type: "route" },
  { label: "Locations", href: "/locations", type: "route" },
  { label: "Contact", href: "/#contact", type: "anchor" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const renderLink = (l: NavLink, mobile = false) => {
    const className = mobile
      ? "font-display text-sm tracking-widest text-muted-foreground hover:text-primary block py-2"
      : "font-display text-xs tracking-widest text-muted-foreground hover:text-primary transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full";

    if (l.type === "route") {
      return (
        <Link to={l.href} onClick={() => setOpen(false)} className={className}>
          {l.label}
        </Link>
      );
    }

    const hash = l.href.split("#")[1];

    // Contact: always scroll to footer on the current page
    if (hash === "contact") {
      return (
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            setOpen(false);
            const el = document.getElementById("contact");
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
              if (window.location.hash !== "#contact") {
                history.replaceState(null, "", "#contact");
              }
              window.dispatchEvent(new HashChangeEvent("hashchange"));
            }
          }}
          className={className}
        >
          {l.label}
        </a>
      );
    }

    // For anchors: use plain <a> on home (smooth scroll), Link on other pages
    if (onHome) {
      return (
        <a href={`#${hash}`} onClick={() => setOpen(false)} className={className}>
          {l.label}
        </a>
      );
    }
    return (
      <Link to={l.href} onClick={() => setOpen(false)} className={className}>
        {l.label}
      </Link>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-border/60 py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="LMF logo"
            width={40}
            height={40}
            className="h-10 w-10 object-contain animate-fade-in drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_hsl(var(--primary))]"
          />
          <span className="font-display text-sm tracking-widest">
            <span className="text-foreground">L</span>
            <span className="text-primary">M</span>
            <span className="text-foreground">F</span>
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <li key={l.href}>{renderLink(l)}</li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href="https://wa.me/919886781967?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Kammanahalli%20branch."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-display text-[9px] tracking-[0.2em] px-3 py-2 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
            title="Enquire – Kammanahalli"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            KMN
          </a>
          <a
            href="https://wa.me/919886781967?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20HRBR%20branch."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-display text-[9px] tracking-[0.2em] px-3 py-2 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
            title="Enquire – HRBR"
          >
            <WhatsAppIcon className="h-3.5 w-3.5" />
            HRBR
          </a>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-2"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-border/60 overflow-hidden"
          >
            <ul className="flex flex-col p-6 gap-4">
              {links.map((l) => (
                <li key={l.href}>{renderLink(l, true)}</li>
              ))}
            </ul>
            <div className="px-6 pb-6 flex flex-col gap-2">
              <a
                href="https://wa.me/919886781967?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Kammanahalli%20branch."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-display text-[10px] tracking-[0.2em] px-4 py-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Enquire – Kammanahalli
              </a>
              <a
                href="https://wa.me/919886781967?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20HRBR%20branch."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-display text-[10px] tracking-[0.2em] px-4 py-3 border border-border hover:border-primary hover:bg-primary hover:text-primary-foreground hover:shadow-glow transition-all duration-300"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Enquire – HRBR
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
