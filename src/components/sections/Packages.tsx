import { addOnIds, contact, packages } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { FadeUp, RevealLines } from "../motion-primitives";

export function Packages() {
  const t = useT();
  const grid = packages.filter((p) => !p.featured);
  const featured = packages.find((p) => p.featured);

  return (
    <section id="paquetes" className="py-24 md:py-36">
      <div className="shell">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeUp>
              <span className="label block text-[0.65rem] text-accent">
                {t.packages.number}
              </span>
            </FadeUp>
            <RevealLines
              as="h2"
              lines={[t.packages.title]}
              className="display mt-4 text-[clamp(2.75rem,9vw,7rem)]"
            />
          </div>
          <FadeUp delay={0.1} className="self-end lg:col-span-4 lg:col-start-9">
            <p className="max-w-[42ch] text-base leading-relaxed text-muted">
              {t.packages.subtitle}
            </p>
          </FadeUp>
        </div>

        {/* Cuatro paquetes en 2×2 */}
        <div className="mt-16 grid grid-cols-1 border-l border-t border-rule sm:grid-cols-2 md:mt-24">
          {grid.map((pkg, i) => {
            const copy = t.packages.items[pkg.id as keyof typeof t.packages.items];
            return (
              <FadeUp
                key={pkg.id}
                delay={i * 0.07}
                className="group border-b border-r border-rule"
              >
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex h-full flex-col p-8 transition-colors duration-500 hover:bg-ink md:p-10"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="display text-2xl transition-colors duration-500 group-hover:text-paper md:text-3xl">
                      {pkg.name}
                    </span>
                    <span className="display text-3xl transition-colors duration-500 group-hover:text-accent md:text-4xl">
                      {pkg.price}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-paper/70">
                    {copy.desc}
                  </p>
                  <div className="mt-8 border-t border-rule pt-5 transition-colors duration-500 group-hover:border-paper/20">
                    <span className="label block text-[0.6rem] text-accent">
                      {t.packages.includes}
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-ink transition-colors duration-500 group-hover:text-paper">
                      {copy.includes}
                    </p>
                  </div>
                </a>
              </FadeUp>
            );
          })}
        </div>

        {/* Paquete destacado a todo el ancho */}
        {featured && (
          <FadeUp delay={0.1}>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 grid grid-cols-1 bg-ink p-8 text-paper md:mt-10 md:grid-cols-12 md:gap-10 md:p-14"
            >
              <div className="md:col-span-5">
                <span className="label inline-block bg-accent px-3 py-1.5 text-[0.6rem] text-paper">
                  {t.packages.featuredTag}
                </span>
                <span className="display mt-6 block text-[clamp(2.25rem,6vw,4.5rem)]">
                  {featured.name}
                </span>
                <span className="display mt-2 block text-[clamp(2.5rem,7vw,5rem)] text-accent">
                  {featured.price}
                </span>
              </div>
              <div className="mt-8 md:col-span-6 md:col-start-7 md:mt-0 md:self-center">
                <p className="text-lg leading-relaxed text-paper md:text-xl">
                  {t.packages.items["creative-brand"].desc}
                </p>
                <div className="mt-8 border-t border-paper/20 pt-5">
                  <span className="label block text-[0.6rem] text-accent">
                    {t.packages.includes}
                  </span>
                  <p className="mt-2 text-sm leading-relaxed text-paper/70">
                    {t.packages.items["creative-brand"].includes}
                  </p>
                </div>
              </div>
            </a>
          </FadeUp>
        )}

        {/* Add-ons */}
        <div className="mt-20 md:mt-28">
          <FadeUp>
            <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-rule pb-5">
              <h3 className="display text-3xl md:text-4xl">{t.packages.addOnsTitle}</h3>
              <p className="text-sm text-muted">{t.packages.addOnsSubtitle}</p>
            </div>
          </FadeUp>
          <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16">
            {addOnIds.map((id, i) => {
              const addOn = t.packages.addOns[id];
              return (
                <FadeUp key={id} delay={i * 0.04}>
                  <li className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
                    <span className="text-sm text-ink">{addOn.name}</span>
                    <span className="display shrink-0 text-lg text-accent">
                      {addOn.price}
                    </span>
                  </li>
                </FadeUp>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
