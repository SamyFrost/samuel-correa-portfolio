import { useEffect, useRef, useState } from "react";

const INTERACTIVE = "a, button, [role='button'], summary, input, textarea";

/**
 * Punto que sigue al mouse con lerp y se expande sobre elementos interactivos.
 * Solo se monta en punteros finos y si el usuario no pidió menos movimiento.
 */
export function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(fine.matches && !reduced.matches);
    update();
    fine.addEventListener("change", update);
    reduced.addEventListener("change", update);
    return () => {
      fine.removeEventListener("change", update);
      reduced.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      document.documentElement.classList.remove("cursor-host");
      return;
    }
    document.documentElement.classList.add("cursor-host");

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onOver = (e: PointerEvent) => {
      const hit = (e.target as Element | null)?.closest?.(INTERACTIVE);
      ringRef.current?.classList.toggle("is-active", Boolean(hit));
    };

    const loop = () => {
      ring.x += (target.x - ring.x) * 0.16;
      ring.y += (target.y - ring.y) * 0.16;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("cursor-host");
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div aria-hidden="true">
      <style>{`
        .sc-ring { transition: width .4s cubic-bezier(.16,1,.3,1), height .4s cubic-bezier(.16,1,.3,1), border-color .4s; }
        .sc-ring.is-active { width: 48px; height: 48px; border-color: var(--color-accent); }
        .sc-ring.is-active + .sc-dot, .sc-dot { transition: opacity .3s; }
      `}</style>
      <div
        ref={ringRef}
        className="sc-ring pointer-events-none fixed left-0 top-0 z-[90] h-6 w-6 rounded-full border border-ink mix-blend-difference"
        style={{ borderRadius: "9999px" }}
      />
      <div
        ref={dotRef}
        className="sc-dot pointer-events-none fixed left-0 top-0 z-[91] h-1.5 w-1.5 bg-accent mix-blend-difference"
        style={{ borderRadius: "9999px" }}
      />
    </div>
  );
}
