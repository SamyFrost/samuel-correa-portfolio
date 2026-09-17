import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { contact } from "../data/catalog";
import { useLanguage } from "../i18n/LanguageContext";
import { languages, type Language } from "../i18n/translations";
import { EASE_EXPO } from "./motion-primitives";

const SECTIONS = [
  { href: "#trabajo", key: "work" },
  { href: "#servicios", key: "services" },
  { href: "#paquetes", key: "packages" },
  { href: "#proceso", key: "process" },
  { href: "#contacto", key: "contact" },
] as const;

function LangSwitch({ compact = false }: { compact?: boolean }) {
  const { lang, setLang, t } = useLanguage();
  return (
    <div
      className={`flex items-center ${compact ? "gap-4" : "gap-2"}`}
      role="group"
      aria-label={t.nav.language}
    >
      {languages.map((code: Language, i) => (
        <span key={code} className="flex items-center gap-2">
          {i > 0 && !compact && <span className="text-rule">·</span>}
          <button
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={lang === code}
            className={`label text-xs transition-colors duration-300 ${
              lang === code
                ? "text-accent"
                : compact
                  ? "text-paper/50 hover:text-paper"
                  : "text-muted hover:text-ink"
            } ${compact ? "text-2xl" : ""}`}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}

export function Header() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
          scrolled
            ? "border-rule bg-paper/90 backdrop-blur-sm"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between gap-6 md:h-20">
          <a href="#top" className="display text-lg tracking-tight md:text-xl">
            Samuel Correa
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {SECTIONS.map((s) => (
              <a key={s.href} href={s.href} className="label ul-draw text-xs text-ink">
                {t.nav[s.key]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden sm:block">
              <LangSwitch />
            </div>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="label hidden bg-ink px-5 py-3 text-xs text-paper transition-colors duration-300 hover:bg-accent md:inline-block"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center lg:hidden"
              onClick={() => setOpen(true)}
              aria-label={t.nav.openMenu}
              aria-expanded={open}
            >
              <span className="relative block h-3 w-6">
                <span className="absolute inset-x-0 top-0 h-px bg-ink" />
                <span className="absolute inset-x-0 bottom-0 h-px bg-ink" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] bg-ink text-paper"
            initial={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            animate={reduced ? { opacity: 1 } : { clipPath: "inset(0 0 0% 0)" }}
            exit={reduced ? { opacity: 0 } : { clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: reduced ? 0.2 : 0.7, ease: EASE_EXPO }}
            role="dialog"
            aria-modal="true"
          >
            <div className="shell flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <span className="display text-lg">Samuel Correa</span>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t.nav.closeMenu}
                  className="label text-xs text-paper"
                >
                  ✕
                </button>
              </div>

              <nav className="mt-auto flex flex-col gap-2 pb-10" aria-label="Principal">
                {SECTIONS.map((s, i) => (
                  <span className="reveal-mask" key={s.href}>
                    <motion.a
                      href={s.href}
                      onClick={() => setOpen(false)}
                      className="display block text-[clamp(2.75rem,13vw,5rem)] text-paper transition-colors duration-300 hover:text-accent"
                      initial={reduced ? { opacity: 0 } : { y: "110%" }}
                      animate={reduced ? { opacity: 1 } : { y: "0%" }}
                      transition={{
                        duration: reduced ? 0.2 : 0.8,
                        ease: EASE_EXPO,
                        delay: reduced ? 0 : 0.15 + i * 0.06,
                      }}
                    >
                      {t.nav[s.key]}
                    </motion.a>
                  </span>
                ))}
              </nav>

              <div className="mt-auto flex items-center justify-between border-t border-paper/20 pt-6">
                <LangSwitch compact />
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="label bg-accent px-5 py-3 text-xs text-paper"
                >
                  {t.nav.cta}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
