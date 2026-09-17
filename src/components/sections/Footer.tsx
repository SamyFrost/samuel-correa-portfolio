import { useEffect, useState } from "react";
import { contact } from "../../data/catalog";
import { useLanguage } from "../../i18n/LanguageContext";

export function Footer() {
  const { lang, t } = useLanguage();
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat(lang, {
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    tick();
    const id = window.setInterval(tick, 30_000);
    return () => window.clearInterval(id);
  }, [lang]);

  return (
    <footer className="bg-ink py-10 text-paper md:py-14">
      <div className="shell">
        <div className="flex flex-col gap-6 border-t border-paper/15 pt-8 md:flex-row md:items-center md:justify-between">
          <div>
            <span className="display block text-xl md:text-2xl">Samuel Correa</span>
            <span className="label mt-1 block text-[0.6rem] text-paper/50">
              {t.footer.role}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href={contact.whatsappHref}
              target="_blank"
              rel="noreferrer noopener"
              className="label ul-draw text-[0.65rem] text-paper"
            >
              WhatsApp
            </a>
            <a href={contact.emailHref} className="label ul-draw text-[0.65rem] text-paper">
              {t.contact.emailLabel}
            </a>
            <a
              href={contact.catalogHref}
              target="_blank"
              rel="noreferrer noopener"
              className="label ul-draw text-[0.65rem] text-paper"
            >
              PDF
            </a>
          </div>

          <div className="text-right">
            <span className="label block text-[0.6rem] text-paper/50">
              {t.footer.localTime} — {time}
            </span>
            <span className="label mt-1 block text-[0.6rem] text-paper/50">
              © {new Date().getFullYear()} · {t.footer.rights}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
