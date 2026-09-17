import { tools } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { Counter, FadeUp, RevealLines } from "../motion-primitives";

export function About() {
  const t = useT();

  return (
    <section id="sobre-mi" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <FadeUp>
              <span className="outline-num block text-[clamp(5rem,12vw,10rem)]">
                {t.about.number}
              </span>
            </FadeUp>
            <RevealLines
              as="h2"
              lines={[t.about.title]}
              className="display mt-4 text-[clamp(2.5rem,7vw,6rem)]"
            />
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <FadeUp>
              <p className="max-w-[60ch] text-lg leading-relaxed text-ink md:text-xl">
                {t.about.p1}
              </p>
            </FadeUp>
            <FadeUp delay={0.1}>
              <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-muted md:text-lg">
                {t.about.p2}
              </p>
            </FadeUp>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 border-t border-rule md:mt-28 md:grid-cols-4">
          {t.about.stats.map((stat, i) => (
            <FadeUp
              key={stat.label}
              delay={i * 0.08}
              className={`border-b border-rule px-0 py-8 md:border-b-0 md:py-10 ${
                i > 0 ? "md:border-l md:pl-8" : ""
              } ${i % 2 === 1 ? "border-l pl-6 md:pl-8" : ""}`}
            >
              <span className="display block text-[clamp(2.75rem,6vw,4.5rem)] text-ink">
                <Counter to={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </span>
              <span className="label mt-3 block text-[0.65rem] text-muted">
                {stat.label}
              </span>
            </FadeUp>
          ))}
        </div>

        {/* Herramientas */}
        <FadeUp className="mt-16 md:mt-20">
          <span className="label block text-[0.65rem] text-muted">
            {t.about.toolsLabel}
          </span>
          <ul className="mt-5 flex flex-wrap gap-3">
            {tools.map((tool) => (
              <li
                key={tool}
                className="label rounded-full border border-ink px-5 py-2.5 text-[0.7rem] text-ink transition-colors duration-300 hover:bg-ink hover:text-paper"
                style={{ borderRadius: "9999px" }}
              >
                {tool}
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </section>
  );
}
