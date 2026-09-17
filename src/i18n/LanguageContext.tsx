import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { languages, translations, type Language, type Translation } from "./translations";

const STORAGE_KEY = "sc-lang";
const DEFAULT_LANG: Language = "es";

/** Dominio público del sitio: necesario para canonical, hreflang y Open Graph. */
export const SITE_URL = "https://samyfrost.github.io/samuel-correa-portfolio/";

type LanguageContextValue = {
  lang: Language;
  setLang: (next: Language) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const isLanguage = (v: string | null): v is Language =>
  v !== null && (languages as readonly string[]).includes(v);

/** URL pública de un idioma. El español vive en la raíz; los demás en ?lang=. */
export function urlFor(lang: Language) {
  return lang === DEFAULT_LANG ? SITE_URL : `${SITE_URL}?lang=${lang}`;
}

/**
 * Prioridad: ?lang= en la URL (es lo que rastrea Google y lo que se comparte)
 * > preferencia guardada > idioma del navegador > español.
 */
function readInitialLanguage(): Language {
  if (typeof window === "undefined") return DEFAULT_LANG;

  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(fromUrl)) return fromUrl;

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    /* localStorage bloqueado (modo privado): seguimos evaluando */
  }

  const nav = navigator.language?.slice(0, 2).toLowerCase();
  if (isLanguage(nav)) return nav;

  return DEFAULT_LANG;
}

/** Crea o actualiza una etiqueta del <head> sin duplicarla. */
function upsertTag(
  tag: "meta" | "link",
  attr: "name" | "property" | "rel",
  key: string,
  valueAttr: "content" | "href",
  value: string,
  extra?: Record<string, string>,
) {
  const selector =
    attr === "rel"
      ? `link[rel="${key}"]${extra?.hreflang ? `[hreflang="${extra.hreflang}"]` : ""}`
      : `${tag}[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = document.createElement(tag);
    el.setAttribute(attr, key);
    if (extra) Object.entries(extra).forEach(([k, v]) => el!.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(valueAttr, value);
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(readInitialLanguage);

  const setLang = useCallback((next: Language) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* sin persistencia disponible */
    }
    // La URL acompaña al idioma para poder compartirla y para que Google
    // indexe las tres versiones por separado.
    const url = new URL(window.location.href);
    if (next === DEFAULT_LANG) url.searchParams.delete("lang");
    else url.searchParams.set("lang", next);
    window.history.replaceState({}, "", url);
  }, []);

  useEffect(() => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;

    upsertTag("meta", "name", "description", "content", t.meta.description);
    upsertTag("meta", "property", "og:title", "content", t.meta.title);
    upsertTag("meta", "property", "og:description", "content", t.meta.description);
    upsertTag("meta", "property", "og:locale", "content", t.meta.locale);
    upsertTag("meta", "property", "og:url", "content", urlFor(lang));
    upsertTag("link", "rel", "canonical", "href", urlFor(lang));
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang] }),
    [lang, setLang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage debe usarse dentro de <LanguageProvider>");
  return ctx;
}

/** Atajo para leer solo el diccionario. */
export function useT(): Translation {
  return useLanguage().t;
}
