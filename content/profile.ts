// ============================================================================
//  ЕДИНЫЙ ФАЙЛ КОНТЕНТА  —  правь только его.
//  Ниже: общие данные (фото, музыка, ссылки) + локализация RU / EN.
// ============================================================================

export type Lang = "ru" | "en";

export interface Track {
  title: string;
  artist: string;
  duration: string;
  src: string;
}

/* ---- ОБЩЕЕ (не зависит от языка) ------------------------------------------ */

export const nick = "zaytsv";

/** портрет для аватарки */
export const avatar = "/photos/2.jpg";

/** галерея (первым — портрет) */
export const photos = [
  "/photos/2.jpg",
  "/photos/4.jpg",
  "/photos/1.jpg",
  "/photos/3.jpg",
  "/photos/5.jpg",
];

export const album = {
  title: "Вот мой альбом, сори",
  artist: "Серега Пират",
  year: "2026",
  cover: "/music_album.jpg",
};

/** локальные mp3 из public/music (переименованы в ASCII) */
export const music: Track[] = [
  { title: "современный ковбой", artist: "Серега Пират", duration: "2:53", src: "/music/01.mp3" },
  { title: "в аквапарке", artist: "Серега Пират", duration: "2:36", src: "/music/02.mp3" },
  { title: "ну где моя нога", artist: "Серега Пират", duration: "2:12", src: "/music/03.mp3" },
  { title: "911", artist: "Серега Пират", duration: "2:17", src: "/music/04.mp3" },
  { title: "всем на меня наплевать", artist: "Серега Пират", duration: "3:05", src: "/music/05.mp3" },
  { title: "прости я не знаю", artist: "Серега Пират", duration: "2:15", src: "/music/06.mp3" },
];

export const links = {
  site: "https://zaytsv.com",
  telegram: "https://t.me/zaytsv",
  discord: "https://discord.gg/MHntmrKkfB",
  github: "https://github.com/skiddgoddamn",
  email: "zaytsv.business@list.ru",
};

/** адрес в фейковой строке браузера */
export const fakeUrl = "http://ilya.zaytsv.com/";

/* ---- ЛОКАЛИЗАЦИЯ ----------------------------------------------------------- */

export interface Strings {
  name: string;
  tagline: string;
  about: string;
  interests: string[];
  online: string;
  personal: {
    hometown: string;
    city: string;
    birthday: string;
    languages: string[];
    labels: { hometown: string; city: string; birthday: string; languages: string };
  };
  sections: { personal: string; about: string; interests: string; music: string; photos: string; contacts: string };
  ie: { titleSuffix: string; menubar: string[]; back: string; addressLabel: string; go: string; ready: string; zone: string; secure: string };
  start: { about: string; music: string; photos: string; site: string; tg: string; discord: string; github: string; mail: string; shutdown: string };
  taskbar: { start: string; taskTitle: string };
  icons: { computer: string; about: string; music: string; photos: string; site: string; tg: string; discord: string; github: string; mail: string; bin: string };
  player: { ready: string; error: string; prev: string; play: string; next: string; seek: string; volume: string };
  contacts: { site: string; tg: string; discord: string; github: string; mail: string };
  shutdown: { line1: string; line2: string; hint: string };
  avatarAlt: string;
  photoWord: string;
  switchLang: string;
  booting: string;
  metaDescription: string;
}

export const strings: Record<Lang, Strings> = {
  ru: {
    name: "Илья Зайцев",
    tagline: "",
    about:
      "Родился в Ульяновске, но потом узнал, что бывает море — теперь живу в Сочи. Днём программирую, ночью тоже программирую, а между этим музыка на максимум. Ты сейчас реально сидишь в Windows 95, и это лучшее решение за сегодня.",
    interests: ["Программирование", "Игры", "Музыка"],
    online: "онлайн",
    personal: {
      hometown: "Ульяновск",
      city: "Сочи",
      birthday: "26 сентября 2001 г.",
      languages: ["Русский"],
      labels: { hometown: "Родной город:", city: "Город:", birthday: "День рождения:", languages: "Языки:" },
    },
    sections: {
      personal: "Личная информация",
      about: "О себе",
      interests: "Интересы",
      music: "Музыка",
      photos: "Фотографии",
      contacts: "Контакты",
    },
    ie: {
      titleSuffix: "— Microsoft Internet Explorer",
      menubar: ["Файл", "Правка", "Вид", "Избранное", "Сервис", "Справка"],
      back: "Назад",
      addressLabel: "Адрес",
      go: "Переход",
      ready: "Готово",
      zone: "Зона: Интернет",
      secure: "🔒 ilya.zaytsv.com",
    },
    start: {
      about: "Обо мне",
      music: "Музыка",
      photos: "Фотографии",
      site: "zaytsv.com",
      tg: "Telegram",
      discord: "Discord",
      github: "GitHub",
      mail: "Написать письмо",
      shutdown: "Завершение работы…",
    },
    taskbar: { start: "Пуск", taskTitle: "Илья Зайцев — Microsoft Inter…" },
    icons: {
      computer: "Мой компьютер",
      about: "Обо мне",
      music: "Музыка",
      photos: "Фото",
      site: "zaytsv.com",
      tg: "Telegram",
      discord: "Discord",
      github: "GitHub",
      mail: "Почта",
      bin: "Корзина",
    },
    player: {
      ready: "готов к воспроизведению",
      error: "Не удалось загрузить трек. Проверь файл в public/music/.",
      prev: "Предыдущий",
      play: "Играть / пауза",
      next: "Следующий",
      seek: "Перемотка",
      volume: "Громкость",
    },
    contacts: { site: "Сайт", tg: "Telegram", discord: "Discord", github: "GitHub", mail: "Почта" },
    shutdown: {
      line1: "Теперь питание компьютера",
      line2: "можно отключить.",
      hint: "(нажмите, чтобы включить снова)",
    },
    avatarAlt: "Фото",
    photoWord: "фото",
    switchLang: "Сменить язык",
    booting: "Загрузка…",
    metaDescription: "Личная страница · Сочи",
  },

  en: {
    name: "Ilya Zaytsev",
    tagline: "",
    about:
      "Born in Ulyanovsk, then found out the sea exists — so now I live in Sochi. I code by day, code by night, and blast music in between. You're literally browsing Windows 95 right now, and honestly that's the best decision you've made today.",
    interests: ["Programming", "Games", "Music"],
    online: "online",
    personal: {
      hometown: "Ulyanovsk",
      city: "Sochi",
      birthday: "September 26, 2001",
      languages: ["Russian"],
      labels: { hometown: "Hometown:", city: "City:", birthday: "Birthday:", languages: "Languages:" },
    },
    sections: {
      personal: "Personal info",
      about: "About me",
      interests: "Interests",
      music: "Music",
      photos: "Photos",
      contacts: "Contacts",
    },
    ie: {
      titleSuffix: "— Microsoft Internet Explorer",
      menubar: ["File", "Edit", "View", "Favorites", "Tools", "Help"],
      back: "Back",
      addressLabel: "Address",
      go: "Go",
      ready: "Done",
      zone: "Zone: Internet",
      secure: "🔒 ilya.zaytsv.com",
    },
    start: {
      about: "About me",
      music: "Music",
      photos: "Photos",
      site: "zaytsv.com",
      tg: "Telegram",
      discord: "Discord",
      github: "GitHub",
      mail: "Send e-mail",
      shutdown: "Shut Down…",
    },
    taskbar: { start: "Start", taskTitle: "Ilya Zaytsev — Microsoft Inter…" },
    icons: {
      computer: "My Computer",
      about: "About me",
      music: "Music",
      photos: "Photos",
      site: "zaytsv.com",
      tg: "Telegram",
      discord: "Discord",
      github: "GitHub",
      mail: "Mail",
      bin: "Recycle Bin",
    },
    player: {
      ready: "ready to play",
      error: "Couldn't load the track. Check the file in public/music/.",
      prev: "Previous",
      play: "Play / pause",
      next: "Next",
      seek: "Seek",
      volume: "Volume",
    },
    contacts: { site: "Website", tg: "Telegram", discord: "Discord", github: "GitHub", mail: "E-mail" },
    shutdown: {
      line1: "It's now safe to turn off",
      line2: "your computer.",
      hint: "(click to turn it back on)",
    },
    avatarAlt: "Photo",
    photoWord: "photo",
    switchLang: "Switch language",
    booting: "Starting…",
    metaDescription: "Personal homepage · Sochi",
  },
};
