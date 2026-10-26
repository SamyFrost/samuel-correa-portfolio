import { DISCOUNT_PERCENT, contact, discountPrice, startPrice } from "../data/catalog";
import { useT } from "../i18n/LanguageContext";
import { FadeUp } from "./motion-primitives";

/** Banner de oferta; se oculta si el descuento está desactivado. */
export function PromoBanner() {
  const t = useT();
  if (!DISCOUNT_PERCENT) return null;
  return (
    <FadeUp className="mt-10 md:mt-14">
      <a
        href={contact.whatsappHref}
        target="_blank"
        rel="noreferrer noopener"
        className="flex flex-col gap-4 bg-accent p-6 text-paper md:flex-row md:items-center md:justify-between md:p-8"
      >
        <div>
          <span className="label block text-[0.6rem] text-paper/80">
            {t.promo.badge}
          </span>
          <span className="display mt-1 block text-[clamp(1.08rem,2.79vw,1.86rem)] leading-none">
            {t.promo.title}
          </span>
        </div>
        <p className="max-w-[44ch] text-sm leading-relaxed text-paper/90">
          {t.promo.note}
        </p>
      </a>
    </FadeUp>
  );
}

/** "A partir de" + precio de entrada; con oferta: tachado + descuento + etiqueta -40%. */
export function PriceTag({
  price,
  className = "",
  children,
}: {
  price: string;
  className?: string;
  /** Contenido extra tras el precio (p. ej. unidad "/ pieza"). */
  children?: React.ReactNode;
}) {
  const t = useT();
  const from = startPrice(price);
  const prefix = (
    <span className="label self-center text-[0.5em] text-muted">{t.pricing.from}</span>
  );
  if (!DISCOUNT_PERCENT) {
    return (
      <span className={`inline-flex flex-wrap items-baseline gap-x-2 ${className}`}>
        {prefix}
        {from}
        {children}
      </span>
    );
  }
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-3 ${className}`}>
      {prefix}
      <s className="text-[0.7em] text-muted" aria-hidden="true">
        {from}
      </s>
      <span className="sr-only">{from}</span>
      <span aria-label={t.promo.discounted}>{discountPrice(from)}</span>
      <span className="label self-center bg-accent px-2 py-1 text-[0.55rem] text-paper">
        -{DISCOUNT_PERCENT}%
      </span>
      {children}
    </span>
  );
}
