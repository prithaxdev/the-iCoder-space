import { motion } from "framer-motion";
import { PillButton, PillButtonOutline } from "@/components/ui/pill-button";
import { useScrollNavigation } from "@/hooks/useScrollNavigation";
import { HERO } from "@/constants";
import iCoderImg from "@/assets/icoder.webp";

const Hero = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section className="grid min-h-[calc(100vh-80px)] grid-cols-1 items-center gap-12 py-12 lg:grid-cols-2">
      {/* ── Text ── */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="order-2 space-y-6 lg:order-1"
      >
        <div className="space-y-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl tracking-tight text-black/55 md:text-2xl dark:text-white/55"
          >
            {HERO.greet}
          </motion.p>

          {/* Instrument Serif italic for the name — eye-catching display text */}
          <h1
            className="text-5xl leading-tight md:text-6xl lg:text-7xl xl:text-[6rem] xl:leading-[1.05]"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {HERO.name}
          </h1>
        </div>

        <p className="text-base leading-relaxed text-black/55 lg:text-lg dark:text-white/55">
          {HERO.description}
        </p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center gap-3 pt-2"
        >
          <PillButton
            label="View My Work"
            onClick={() => scrollTo("#projects")}
          />
          <PillButtonOutline
            label="Get in Touch"
            onClick={() => scrollTo("#contact")}
          />
        </motion.div>
      </motion.div>

      {/* ── Portrait ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="order-1 flex justify-center lg:order-2 lg:p-4"
      >
        <motion.img
          animate={{
            borderRadius: [
              "60% 40% 30% 70% / 60% 30% 70% 40%",
              "30% 60% 70% 40% / 50% 60% 30% 60%",
              "60% 40% 30% 70% / 60% 30% 70% 40%",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          src={iCoderImg}
          width={480}
          height={480}
          alt="Pritha Karki"
          loading="lazy"
          fetchPriority="high"
          decoding="async"
          className="dark:shadow-inset-black h-60 w-60 object-cover shadow-[0_0_0_6px_rgba(167,139,250,0.35),0_0_0_12px_rgba(236,72,153,0.14),0_20px_60px_rgba(0,0,0,0.1)] sm:h-72 sm:w-72 lg:h-[400px] lg:w-[400px] xl:h-[460px] xl:w-[460px]"
          style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
