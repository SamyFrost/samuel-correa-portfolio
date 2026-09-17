import { useT } from "../../i18n/LanguageContext";

export function Marquee() {
  const t = useT();
  // Se duplica el set completo para que el loop al -50% no tenga costura.
  const set = [...t.marquee, ...t.marquee, ...t.marquee];

  return (
    <div
      className="overflow-hidden border-y border-rule py-4 md:py-6"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div className="flex shrink-0" key={copy}>
            {set.map((word, i) => (
              <span
                key={`${copy}-${word}-${i}`}
                className="display flex items-center whitespace-nowrap text-[clamp(1.75rem,4vw,3.25rem)] text-ink"
              >
                {word}
                <span className="mx-6 text-accent md:mx-10">—</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
