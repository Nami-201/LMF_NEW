import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import offerImg from "@/assets/offer-popup.jpg";

const OfferPopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* Floating mini poster */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="View live offer"
        className="fixed bottom-5 right-5 z-40 group flex items-end gap-2 focus:outline-none"
      >
        <div className="relative w-20 h-28 sm:w-24 sm:h-32 rounded-lg overflow-hidden border-2 border-primary shadow-[0_0_20px_rgba(220,38,38,0.6)] transition-transform group-hover:scale-105">
          <img
            src={offerImg}
            alt="LMF Offer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute top-1 left-1 flex items-center gap-1 bg-primary text-primary-foreground px-1.5 py-0.5 rounded-full shadow">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white" />
            </span>
            <span className="font-display text-[7px] tracking-[0.2em] font-bold">
              LIVE
            </span>
          </div>
          <div className="absolute bottom-1 inset-x-1 text-center">
            <span className="font-display text-[8px] tracking-[0.15em] text-white font-bold">
              TAP TO VIEW
            </span>
          </div>
        </div>
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-0 overflow-hidden bg-black border-primary/40">
          <div className="relative">
            <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-primary text-primary-foreground px-3 py-1.5 rounded-full shadow-lg">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
              </span>
              <span className="font-display text-[10px] tracking-[0.3em] font-bold">
                LIVE NOW
              </span>
            </div>
            <img
              src={offerImg}
              alt="LMF Annual Membership Offer — Live Now"
              className="w-full h-auto block"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default OfferPopup;
