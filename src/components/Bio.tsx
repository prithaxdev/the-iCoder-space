import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import { BIO } from "@/constants";

const Bio = () => {
  return (
    <section className="flex w-full max-w-3xl flex-col gap-2 py-8" id="bio">
      <SectionHeader title="Bio" />
      <div className="space-y-5">
        {BIO.map((paragraph, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            className="text-base leading-7 text-black/60 lg:text-lg lg:leading-8 dark:text-white/60"
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default Bio;
