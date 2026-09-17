import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { processSteps } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { FadeUp, RevealLines } from "../motion-primitives";

export function Process() {
  const t = useT();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 60%"],
  });
  // La línea que une los pasos se dibuja a medida que la sección entra.
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="proceso" className="bg-ink py-24 text-paper md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="label block text-[0.65rem] text-accent">
                {t.process.number}
              </span>
            </FadeUp>
            <RevealLines
              as="h2"
              lines={[t.process.title]}
              className="display mt-4 text-[clamp(2.75rem,9vw,7rem)] text-paper"
            />
          </div>
          <FadeUp delay={0.1} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-base leading-relaxed text-paper/60">
              {t.process.subtitle}
            </p>
          </FadeUp>
        </div>

        <div ref={ref} className="relative mt-16 md:mt-28">
          {/* Riel horizontal en desktop */}
          <div className="absolute left-0 right-0 top-0 hidden h-px bg-paper/15 md:block">
            <motion.div
              className="h-px origin-left bg-accent"
              style={{ scaleX: lineScale }}
            />
          </div>

          <ol className="grid grid-cols-1 gap-10 md:grid-cols-5 md:gap-6 md:pt-12">
            {processSteps.map((step, i) => (
              <FadeUp key={step.id} delay={i * 0.09}>
                <li className="relative border-t border-paper/15 pt-6 md:border-t-0 md:pt-0">
                  <span className="outline-num block text-[clamp(3rem,7vw,5.5rem)]">
                    {step.number}
                  </span>
                  <span className="display mt-4 block text-2xl text-paper md:mt-6 md:text-3xl">
                    {step.name}
                  </span>
                  <p className="mt-3 max-w-[30ch] text-sm leading-relaxed text-paper/60">
                    {t.process.steps[step.id as keyof typeof t.process.steps]}
                  </p>
                </li>
              </FadeUp>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
