import { DISCOUNT_PERCENT, contact, discountPrice } from "../data/catalog";
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
          <span className="display mt-1 block text-[clamp(1.75rem,4.5vw,3rem)] leading-none">
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

/** Precio real tachado + precio con descuento + etiqueta -40%. */
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
  if (!DISCOUNT_PERCENT) {
    return (
      <span className={className}>
        {price}
        {children}
      </span>
    );
  }
  return (
    <span className={`inline-flex flex-wrap items-baseline gap-x-3 ${className}`}>
      <s className="text-[0.7em] text-muted" aria-hidden="true">
        {price}
      </s>
      <span className="sr-only">{price}</span>
      <span aria-label={t.promo.discounted}>{discountPrice(price)}</span>
      <span className="label self-center bg-accent px-2 py-1 text-[0.55rem] text-paper">
        -{DISCOUNT_PERCENT}%
      </span>
      {children}
    </span>
  );
}
