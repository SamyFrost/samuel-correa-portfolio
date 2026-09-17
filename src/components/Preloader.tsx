import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
            <span className="label text-xs text-muted">Samuel Correa</span>
            <div className="flex items-end justify-between">
              <span className="display text-[clamp(4rem,18vw,11rem)] leading-none">
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
