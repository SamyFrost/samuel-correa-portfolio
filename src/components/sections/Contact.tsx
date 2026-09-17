import { contact } from "../../data/catalog";
import { useT } from "../../i18n/LanguageContext";
import { FadeUp, RevealLines } from "../motion-primitives";

export function Contact() {
  const t = useT();

  return (
    <section id="contacto" className="bg-accent py-24 text-ink md:py-36">
      <div className="shell">
        <FadeUp>
          <span className="label block text-[0.65rem] text-ink/60">
            {t.contact.number}
          </span>
        </FadeUp>

        <RevealLines
          as="h2"
          lines={[t.contact.line1, t.contact.line2]}
          className="display mt-6 text-[clamp(2.75rem,10vw,8rem)]"
        />

        <div className="mt-16 grid grid-cols-1 border-t border-ink/20 md:mt-24 md:grid-cols-3">
          <FadeUp className="border-b border-ink/20 py-8 md:border-b-0 md:pr-8">
            <span className="label block text-[0.6rem] text-ink/60">
              {t.contact.whatsappLabel}
            </span>
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="display ul-draw mt-3 inline-block text-2xl md:text-3xl"
            >
              {contact.whatsappDisplay}
            </a>
          </FadeUp>

          <FadeUp
            delay={0.08}
            className="border-b border-ink/20 py-8 md:border-b-0 md:border-l md:border-ink/20 md:px-8"
          >
            <span className="label block text-[0.6rem] text-ink/60">
              {t.contact.emailLabel}
            </span>
            <a
              href={contact.emailHref}
              className="display ul-draw mt-3 inline-block break-all text-2xl md:text-3xl"
            >
              {contact.email}
            </a>
          </FadeUp>

          <FadeUp delay={0.16} className="py-8 md:border-l md:border-ink/20 md:pl-8">
            <span className="label block text-[0.6rem] text-ink/60">
              {t.contact.servicesLabel}
            </span>
            <p className="mt-3 text-sm leading-relaxed text-ink">
              {t.contact.servicesValue}
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.2}>
          <a
            href={contact.whatsappHref}
            target="_blank"
            rel="noreferrer noopener"
            className="label mt-12 inline-flex items-center gap-6 bg-ink px-8 py-6 text-sm text-paper transition-colors duration-300 hover:bg-paper hover:text-ink md:mt-16 md:px-12 md:py-8 md:text-base"
          >
            {t.contact.cta}
            <span aria-hidden="true">→</span>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
