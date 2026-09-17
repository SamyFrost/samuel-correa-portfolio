import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { contact, serviceAreas } from "../../data/catalog";
import type { ServiceArea } from "../../data/types";
import { useT } from "../../i18n/LanguageContext";
import { EASE_EXPO, FadeUp, RevealLines } from "../motion-primitives";

function AreaRow({
  area,
  open,
  onToggle,
}: {
  area: ServiceArea;
  open: boolean;
  onToggle: () => void;
}) {
  const t = useT();
  const copy = t.services.areas[area.id];
  const panelId = `area-panel-${area.id}`;

  return (
    <div className="border-t border-rule last:border-b">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="group flex w-full items-center gap-5 py-7 text-left md:gap-10 md:py-10"
        >
          <span
            className={`display shrink-0 text-2xl transition-colors duration-500 md:text-4xl ${
              open ? "text-accent" : "text-muted"
            }`}
          >
            {area.number}
          </span>
          <span className="display flex-1 text-[clamp(1.75rem,5vw,3.75rem)] leading-none transition-colors duration-500 group-hover:text-accent">
            {copy.title}
          </span>
          <span className="label hidden text-xs text-muted sm:block">{area.range}</span>
          <span
            className={`relative ml-2 block h-4 w-4 shrink-0 transition-transform duration-500 ${
              open ? "rotate-45" : ""
            }`}
            aria-hidden="true"
          >
            <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-ink" />
            <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-ink" />
          </span>
        </button>
      </h3>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: EASE_EXPO }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 gap-8 pb-12 lg:grid-cols-12">
              <p className="max-w-[46ch] text-base leading-relaxed text-muted lg:col-span-4">
                {copy.desc}
              </p>

              <ul className="lg:col-span-7 lg:col-start-6">
                {area.items.map((item) => (
                  <li
                    key={item.id}
                    className="border-t border-rule py-5 first:border-t-0 first:pt-0"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <span className="display text-xl md:text-2xl">{item.name}</span>
                      <span className="display text-lg text-accent md:text-xl">
                        {item.price}
                        {item.unit && (
                          <span className="ml-2 text-sm text-muted">
                            {item.unit === "piece"
                              ? t.services.perPiece
                              : t.services.perSlide}
                          </span>
                        )}
                      </span>
                    </div>
                    <p className="mt-2 max-w-[70ch] text-sm leading-relaxed text-muted">
                      {
                        (copy.items as Record<string, string>)[item.id]
                      }
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const t = useT();
  const [openId, setOpenId] = useState<string | null>("identidad");

  return (
    <section id="servicios" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="label block text-[0.65rem] text-accent">
                {t.services.number}
              </span>
            </FadeUp>
            <RevealLines
              as="h2"
              lines={[t.services.title]}
              className="display mt-4 text-[clamp(2.75rem,9vw,7rem)]"
            />
          </div>
          <FadeUp delay={0.1} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-base leading-relaxed text-muted">
              {t.services.kicker}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 md:mt-24">
          {serviceAreas.map((area) => (
            <AreaRow
              key={area.id}
              area={area}
              open={openId === area.id}
              onToggle={() => setOpenId(openId === area.id ? null : area.id)}
            />
          ))}
        </div>

        <FadeUp className="mt-12">
          <a
            href={contact.catalogHref}
            target="_blank"
            rel="noreferrer noopener"
            className="label ul-draw inline-flex items-center gap-3 text-xs text-ink"
          >
            {t.services.catalogCta}
            <span aria-hidden="true" className="text-accent">
              →
            </span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
