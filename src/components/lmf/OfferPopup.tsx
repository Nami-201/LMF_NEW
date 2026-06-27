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
  );
};

export default OfferPopup;
