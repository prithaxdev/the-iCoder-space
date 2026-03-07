import { useEffect, useState } from "react";
import { Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 16 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollTop}
          aria-label="Scroll to top"
          className={cn(
            "fixed right-6 bottom-6 z-50",
            "flex h-11 w-11 items-center justify-center rounded-full",
            "bg-primary text-primary-foreground",
            "shadow-lg shadow-black/20",
            "hover:scale-110 active:scale-95",
            "cursor-pointer transition-transform duration-200",
          )}
        >
          <Rocket size={16} className="-rotate-45" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
