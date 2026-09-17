import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { asset } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { EASE_EXPO } from "../motion-primitives";

export function Hero() {
  const t = useT();
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 60]);
  const blockY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -50]);

  const line = (text: string, delay: number) => (
    <span className="reveal-mask">
      <motion.span
        className="block"
        initial={reduced ? { opacity: 0 } : { y: "110%" }}
        animate={reduced ? { opacity: 1 } : { y: "0%" }}
        transition={{ duration: 1.1, ease: EASE_EXPO, delay }}
      >
        {text}
      </motion.span>
    </span>
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center pt-24 pb-24 md:pt-28"
    >
      <div className="shell w-full">
        {/* Eyebrow con regla que se extiende */}
        <div className="mb-8 flex items-center gap-6 md:mb-12">
          <motion.span
            className="label shrink-0 text-[0.65rem] text-ink md:text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t.hero.eyebrow}
          </motion.span>
          <motion.span
            className="h-px flex-1 origin-left bg-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE_EXPO, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Bloque tipográfico */}
          <div className="order-2 lg:order-1 lg:col-span-7">
            <h1 className="display text-[clamp(3.25rem,min(14vw,19vh),13rem)] leading-[0.82]">
              {line(t.hero.first, 0.35)}
              {line(t.hero.last, 0.43)}
            </h1>

            <motion.p
              className="mt-5 text-lg font-light text-ink md:mt-7 md:text-2xl"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.65 }}
            >
              {t.hero.role}
            </motion.p>

            <motion.span
              className="mt-8 block h-[3px] w-20 origin-left bg-accent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, ease: EASE_EXPO, delay: 0.8 }}
            />

            <motion.p
              className="mt-6 max-w-[34ch] text-base leading-relaxed text-muted md:text-lg"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE_EXPO, delay: 0.9 }}
            >
              {t.hero.tagline}
            </motion.p>
          </div>

          {/* Retrato sobre bloque naranja */}
          <div className="order-1 lg:order-2 lg:col-span-5">
            <motion.div
              className="relative mx-auto w-fit lg:mr-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: EASE_EXPO, delay: 0.25 }}
            >
              <motion.div
                className="absolute -right-3 -top-5 h-[88%] w-[72%] bg-accent md:-right-8 md:-top-10"
                style={{ y: blockY }}
                aria-hidden="true"
              />
              <motion.img
                src={asset("samuel-portrait.png")}
                alt={t.hero.portraitAlt}
                width={1014}
                height={1308}
                className="relative h-[min(34vh,19rem)] w-auto max-w-full md:h-[min(54vh,34rem)]"
                style={{ y: portraitY }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <motion.div
        className="shell absolute inset-x-0 bottom-8 hidden items-center gap-4 md:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <span className="scroll-line" aria-hidden="true" />
        <span className="label text-[0.65rem] text-muted">{t.hero.scroll}</span>
      </motion.div>
    </section>
  );
}
