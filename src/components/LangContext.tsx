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

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("ru");

  // 1) явный выбор пользователя приоритетнее; 2) иначе — язык браузера
  useEffect(() => {
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
    const isRu = browserLangs.some((l) => /^ru/i.test(l));
    setLangState(isRu ? "ru" : "en");
  }, []);

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
