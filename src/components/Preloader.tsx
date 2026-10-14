import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { LogoMarkAnimated } from "./Logo";
import { useEffect, useState } from "react";
import { EASE_EXPO } from "./motion-primitives";

const SESSION_KEY = "sc-intro-seen";

function alreadySeen() {
  try {
    return window.sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => !alreadySeen() && !reduced);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) {
      onDone();
      return;
    }
    try {
      window.sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sin sessionStorage: el intro se mostrará de nuevo, no es crítico */
    }

    document.body.style.overflow = "hidden";
    const duration = 1300;
    const start = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setCount(Math.round(100 * (1 - Math.pow(1 - p, 2))));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setVisible(false);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = "";
    };
  }, [visible, onDone]);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] bg-ink text-paper"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: EASE_EXPO }}
          aria-hidden="true"
        >
          <div className="shell flex h-full flex-col justify-between py-10">
            <div className="flex items-center gap-4">
              <LogoMarkAnimated className="h-10 w-10 text-paper md:h-12 md:w-12" delay={0.1} />
              <span className="label text-xs text-muted">Samuel Correa</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="display text-[clamp(2.48rem,11.2vw,6.82rem)] leading-none">
                {String(count).padStart(3, "0")}
              </span>
              <span className="label mb-3 text-xs text-muted">
                Diseño / Estrategia / Creatividad
              </span>
            </div>
            <div className="h-px w-full bg-paper/20">
              <motion.div
                className="h-px bg-accent"
                style={{ width: `${count}%` }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
