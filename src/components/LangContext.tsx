"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { strings, type Lang, type Strings } from "../../content/profile";

interface Ctx {
  lang: Lang;
  t: Strings;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LangCtx = createContext<Ctx | null>(null);

export function LangProvider({
  children,
  initialLang = "ru",
  detect = false,
}: {
  children: React.ReactNode;
  /** язык, с которым страница пре-рендерится (задаётся роутом: / → ru, /en → en) */
  initialLang?: Lang;
  /** авто-определение по браузеру (только на корневом роуте) */
  detect?: boolean;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // 1) явный выбор пользователя приоритетнее; 2) иначе — язык браузера.
  // Работает только на корневом роуте (detect); на /en язык фиксирован.
  useEffect(() => {
    if (!detect) return;
    try {
      const saved = localStorage.getItem("lang");
      if (saved === "ru" || saved === "en") {
        setLangState(saved);
        return;
      }
    } catch {}
    const browserLangs = [navigator.language, ...(navigator.languages || [])].filter(
      Boolean
    );
    setLangState(browserLangs.some((l) => /^ru/i.test(l)) ? "ru" : "en");
  }, [detect]);

  // держим атрибут <html lang> актуальным (для SEO и скринридеров)
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const toggle = () => setLang(lang === "ru" ? "en" : "ru");

  return (
    <LangCtx.Provider value={{ lang, t: strings[lang], setLang, toggle }}>
      {children}
    </LangCtx.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangCtx);
  if (!ctx) throw new Error("useLang must be used within <LangProvider>");
  return ctx;
}
