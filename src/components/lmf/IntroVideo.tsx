import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "lmf_intro_played";

const IntroVideo = () => {
  const [show, setShow] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    setShow(true);
  }, []);

  const finish = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setShow(false);
  };

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(finish, 8000); // safety fallback
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
        >
          <video
            ref={videoRef}
            src="/intro.mp4"
            autoPlay
            muted
            playsInline
            onEnded={finish}
            className="h-full w-full object-cover"
          />
          <button
            onClick={finish}
            className="absolute bottom-6 right-6 px-4 py-2 text-xs tracking-[0.3em] font-display text-foreground/80 border border-foreground/30 hover:border-primary hover:text-primary transition-colors"
          >
            SKIP
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroVideo;
