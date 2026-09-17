import { projects } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { FadeUp, RevealLines } from "../motion-primitives";

// Los encuadres siguen la proporción real de cada pieza para recortar lo mínimo:
// los flyers y el manual son A4, el mockup es 3:2 y los overlays 16:9.
const SPAN_CLASS: Record<string, string> = {
  tall: "md:col-span-4 aspect-[3/4]",
  wide: "md:col-span-8 aspect-[16/10]",
  full: "md:col-span-12 aspect-[16/9]",
};

export function Work() {
  const t = useT();

  return (
    <section id="trabajo" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="label block text-[0.65rem] text-accent">
                {t.work.number}
              </span>
            </FadeUp>
            <RevealLines
              as="h2"
              lines={[t.work.title]}
              className="display mt-4 text-[clamp(2.5rem,8vw,6.5rem)]"
            />
          </div>
          <FadeUp delay={0.1} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-base leading-relaxed text-muted">
              {t.work.subtitle}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:mt-24 md:auto-rows-min md:grid-cols-12 md:gap-6">
          {projects.map((project, i) => {
            const copy = t.work.items[project.id as keyof typeof t.work.items];
            return (
              <FadeUp
                key={project.id}
                delay={(i % 3) * 0.08}
                className={SPAN_CLASS[project.span]}
              >
                <figure className="group relative h-full w-full overflow-hidden bg-rule">
                  <img
                    src={project.image}
                    alt={`${copy.name} — ${copy.category}`}
                    loading="lazy"
                    className="h-full w-full object-cover grayscale transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03] group-hover:grayscale-0"
                  />
                  <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-full bg-ink/90 p-5 text-paper transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-y-0">
                    <span className="display block text-xl md:text-2xl">
                      {copy.name}
                    </span>
                    <span className="label mt-1 block text-[0.6rem] text-accent">
                      {copy.category}
                    </span>
                  </figcaption>
                </figure>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
