import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

const SectionHeader = ({ title, className }: SectionHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={cn("mb-10 text-center", className)}
    >
      <h2
        className="text-4xl tracking-tight md:text-5xl"
        style={{
          fontFamily: "var(--font-serif)",
          fontStyle: "italic",
          fontWeight: 400,
        }}
      >
        {title}
      </h2>
      <div className="mx-auto mt-3 h-px w-10 rounded-full bg-black/20 dark:bg-white/25" />
    </motion.div>
  );
};

export default SectionHeader;
