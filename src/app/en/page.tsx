import type { Metadata } from "next";
import { LangProvider } from "@/components/LangContext";
import Win95 from "@/components/Win95";
import BootScreen from "@/components/BootScreen";
import Oneko from "@/components/Oneko";
import { strings, avatar } from "../../../content/profile";

const en = strings.en;
const SITE = "https://ilya.zaytsv.com";
const ogDesc = "Programming, games and music — a Windows 95-style personal homepage.";

export const metadata: Metadata = {
  title: `${en.name} — ${en.personal.city} · programming, games, music`,
  description: `${en.name} (Илья Зайцев), ${en.personal.city}. Programming, games and music. A Windows 95-style personal homepage. Links: Telegram, Discord, GitHub, zaytsv.com.`,
  keywords: [
    "Ilya Zaytsev",
    "Илья Зайцев",
    "zaytsv",
    "Sochi",
    "programming",
    "games",
    "music",
    "personal homepage",
    "windows 95",
  ],
  alternates: {
    canonical: `${SITE}/en/`,
    languages: {
      "ru-RU": `${SITE}/`,
      "en-US": `${SITE}/en/`,
      "x-default": `${SITE}/`,
    },
  },
  openGraph: {
    type: "profile",
    firstName: "Ilya",
    lastName: "Zaytsev",
    username: "zaytsv",
    title: `${en.name} — ${en.personal.city}`,
    description: ogDesc,
    url: `${SITE}/en/`,
    siteName: en.name,
    locale: "en_US",
    alternateLocale: "ru_RU",
    images: [{ url: avatar, alt: en.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${en.name} — ${en.personal.city}`,
    description: ogDesc,
    images: [avatar],
  },
};

// Английский пре-рендер (для англоязычного поиска). Язык зафиксирован.
export default function HomeEn() {
  return (
    <LangProvider initialLang="en">
      <Win95 />
      <BootScreen />
      <Oneko />
    </LangProvider>
  );
}
