import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "98.css";
import "./globals.css";
import { strings, links, avatar } from "../../content/profile";

// Единый пиксельный шрифт с кириллицей — чтобы русский не «выделялся».
const pixel = Pixelify_Sans({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-pixel",
});

const ru = strings.ru;
const SITE = "https://ilya.zaytsv.com";
const ogDesc = "Программирование, игры, музыка. Личная страница в стиле Windows 95.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: `${ru.name} — ${ru.personal.city} · программирование, игры, музыка`,
  description: `${ru.name} (Ilya Zaytsev), ${ru.personal.city}. Программирование, игры и музыка. Личная страница в стиле Windows 95. Контакты: Telegram, Discord, GitHub, сайт zaytsv.com.`,
  keywords: [
    "Илья Зайцев",
    "Ilya Zaytsev",
    "zaytsv",
    "1lywa",
    "Сочи",
    "программирование",
    "игры",
    "музыка",
    "личная страница",
  ],
  applicationName: ru.name,
  authors: [{ name: ru.name, url: "https://zaytsv.com" }],
  creator: ru.name,
  alternates: { canonical: `${SITE}/` },
  referrer: "no-referrer",
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icons/start-flag.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/boot-flag.png", sizes: "32x32", type: "image/png" },
    ],
    shortcut: "/icons/boot-flag.png",
    apple: "/icons/boot-flag.png",
  },
  openGraph: {
    type: "profile",
    firstName: "Илья",
    lastName: "Зайцев",
    username: "zaytsv",
    title: `${ru.name} — ${ru.personal.city}`,
    description: ogDesc,
    url: `${SITE}/`,
    siteName: ru.name,
    locale: "ru_RU",
    alternateLocale: "en_US",
    images: [{ url: avatar, alt: ru.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${ru.name} — ${ru.personal.city}`,
    description: ogDesc,
    images: [avatar],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Илья Зайцев",
  alternateName: ["Ilya Zaytsev", "zaytsv", "1lywa"],
  homeLocation: { "@type": "Place", name: "Сочи" },
  knowsLanguage: ["Русский", "Russian"],
  knowsAbout: ["Программирование", "Игры", "Музыка", "Programming", "Games", "Music"],
  email: `mailto:${links.email}`,
  url: SITE,
  image: `${SITE}${avatar}`,
  sameAs: [links.site, links.telegram, links.discord, links.github],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={pixel.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
