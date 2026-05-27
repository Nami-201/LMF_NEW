import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/lmf-logo.png";

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

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
