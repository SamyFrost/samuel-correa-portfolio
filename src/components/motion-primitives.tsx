import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

export const EASE_EXPO = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ */
/* Reveal de titulares: cada línea sube desde debajo de su propia máscara */
/* ------------------------------------------------------------------ */

type RevealLinesProps = {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number;
};

export function RevealLines({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
}: RevealLinesProps) {
  const reduced = useReducedMotion();
  // El disparador va en el contenedor, nunca en la línea: la línea arranca
  // desplazada fuera de su máscara overflow:hidden y un IntersectionObserver
  // sobre ella nunca llegaría a verla (se quedaría bloqueada para siempre).
  const MotionTag = motion[Tag as "h1" | "h2" | "h3" | "p" | "div"];

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px" }}
    >
      {lines.map((line, i) => (
        <span className="reveal-mask" key={`${line}-${i}`}>
          <motion.span
            className={`block ${lineClassName}`}
            variants={{
              hidden: reduced ? { opacity: 0 } : { y: "110%" },
              visible: reduced ? { opacity: 1 } : { y: "0%" },
            }}
            transition={{
              duration: reduced ? 0.3 : 1,
              ease: EASE_EXPO,
              delay: delay + i * 0.08,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}

/* ------------------------------------------------------------------ */
/* Fade + desplazamiento corto, para bloques de cuerpo                  */
/* ------------------------------------------------------------------ */

export function FadeUp({
  children,
  delay = 0,
  y = 28,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: reduced ? 0.3 : 0.9, ease: EASE_EXPO, delay }}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Contador que arranca al entrar en viewport                          */
/* ------------------------------------------------------------------ */

export function Counter({
  to,
  prefix = "",
  suffix = "",
  duration = 1600,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration, reduced]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
