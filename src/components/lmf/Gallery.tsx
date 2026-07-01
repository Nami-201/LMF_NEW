import { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ImageOff } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";


// Dynamically pick up any images dropped into these folders
const hrbrModules = import.meta.glob(
  "@/assets/gallery/hrbr/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, as: "url" }
) as Record<string, string>;

const kammModules = import.meta.glob(
  "@/assets/gallery/kammanahalli/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}",
  { eager: true, as: "url" }
) as Record<string, string>;

const toList = (mods: Record<string, string>) =>
  Object.entries(mods)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([path, url]) => ({
      url,
      name: path.split("/").pop() || "image",
    }));

const hrbrImages = toList(hrbrModules);
const kammImages = toList(kammModules);

type GalleryImage = { url: string; name: string };

interface BranchGalleryProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  images: GalleryImage[];
  onOpen: (images: GalleryImage[], index: number) => void;
}

const BranchGallery = ({ id, eyebrow, title, subtitle, images, onOpen }: BranchGalleryProps) => {
  return (
    <section id={id} className="relative py-16 md:py-20">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(var(--primary)/0.12),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(hsl(var(--primary))_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary))_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <h2 className="font-display text-4xl md:text-6xl tracking-tight">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground text-base md:text-lg">
            {subtitle}
          </p>
          <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {images.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-primary/20 bg-card/40 backdrop-blur-md p-12 text-center"
          >
            <ImageOff className="mx-auto mb-4 h-10 w-10 text-primary/70" />
            <div className="font-display text-sm tracking-[0.3em] text-primary mb-2">
              GALLERY COMING SOON
            </div>
            <p className="text-muted-foreground text-sm">
              Drop images into{" "}
              <code className="text-primary/90">
                src/assets/gallery/{id === "hrbr-gallery" ? "hrbr" : "kammanahalli"}/
              </code>{" "}
              to populate this section.
            </p>
          </motion.div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
            {images.map((img, i) => (
              <motion.button
                key={img.url}
                type="button"
                onClick={() => onOpen(images, i)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: Math.min(i * 0.06, 0.4),
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative mb-5 block w-full overflow-hidden rounded-2xl border border-primary/15 bg-card/40 backdrop-blur-sm shadow-card transition-all duration-500 hover:border-primary/60 hover:shadow-glow-lg break-inside-avoid"
              >
                <img
                  src={img.url}
                  alt={`${title} — ${img.name}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
                {/* Hover overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Neon ring */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary/0 transition-all duration-500 group-hover:ring-primary/70 group-hover:shadow-[inset_0_0_40px_hsl(var(--primary)/0.35)]" />
                {/* Corner ticks */}
                <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-primary/0 transition-colors duration-500 group-hover:border-primary" />
                <span className="pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-r border-b border-primary/0 transition-colors duration-500 group-hover:border-primary" />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const Gallery = () => {
  const [active, setActive] = useState<{ images: GalleryImage[]; index: number } | null>(null);

  const open = useCallback((images: GalleryImage[], index: number) => {
    setActive({ images, index });
  }, []);
  const close = useCallback(() => setActive(null), []);
  const next = useCallback(
    () =>
      setActive((s) =>
        s ? { ...s, index: (s.index + 1) % s.images.length } : s
      ),
    []
  );
  const prev = useCallback(
    () =>
      setActive((s) =>
        s
          ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length }
          : s
      ),
    []
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <BranchGallery
        id="kammanahalli-gallery"
        eyebrow="THE FORGE — FLAGSHIP"
        title="Kammanahalli Branch"
        subtitle="Our flagship strength sanctuary — premium equipment, cinematic atmosphere, zero compromise."
        images={kammImages}
        onOpen={open}
      />
      <BranchGallery
        id="hrbr-gallery"
        eyebrow="THE FORGE — NORTH"
        title="HRBR Branch"
        subtitle="Step inside the HRBR Layout floor — engineered for serious lifters, built for relentless training."
        images={hrbrImages}
        onOpen={open}
      />

      {/* Lightbox */}
      <AnimatePresence>
        {active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md"
            onClick={close}
          >
            {/* Close */}
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-5 right-5 z-10 grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-background/60 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Prev */}
            {active.images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Previous image"
                className="absolute left-3 md:left-8 z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background/60 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={active.images[active.index].url}
              src={active.images[active.index].url}
              alt={active.images[active.index].name}
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[88vh] max-w-[92vw] rounded-xl object-contain shadow-glow-lg"
            />

            {/* Next */}
            {active.images.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Next image"
                className="absolute right-3 md:right-8 z-10 grid h-12 w-12 place-items-center rounded-full border border-primary/40 bg-background/60 text-foreground transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-glow"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            )}

            {/* Counter */}
            {active.images.length > 1 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-xs tracking-[0.4em] text-primary">
                {String(active.index + 1).padStart(2, "0")} /{" "}
                {String(active.images.length).padStart(2, "0")}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
