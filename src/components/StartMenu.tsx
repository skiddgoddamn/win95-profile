"use client";

import { links } from "../../content/profile";
import { useLang } from "./LangContext";

interface Props {
  onClose: () => void;
  openAbout: () => void;
  openMusic: () => void;
  openPhotos: () => void;
  shutdown: () => void;
}

/** Меню «Пуск» с фирменной боковой полосой и реальными пунктами. */
export default function StartMenu({
  onClose,
  openAbout,
  openMusic,
  openPhotos,
  shutdown,
}: Props) {
  const { t } = useLang();

  const run = (fn: () => void) => {
    fn();
    onClose();
  };

  return (
    <>
      <div className="startmenu-overlay" onClick={onClose} />
      <div className="startmenu" role="menu">
        <div className="startmenu-side">
          <b>zaytsv</b>
          <span> 95</span>
        </div>
        <div className="startmenu-list">
          <button className="startmenu-item" onClick={() => run(openAbout)}>
            <img className="mi-glyph" src="/icons/about.png" alt="" aria-hidden /> {t.start.about}
          </button>
          <button className="startmenu-item" onClick={() => run(openMusic)}>
            <img className="mi-glyph" src="/icons/music.png" alt="" aria-hidden /> {t.start.music}
          </button>
          <button className="startmenu-item" onClick={() => run(openPhotos)}>
            <img className="mi-glyph" src="/icons/photos.png" alt="" aria-hidden /> {t.start.photos}
          </button>

          <div className="startmenu-divider" />

          <a
            className="startmenu-item"
            href={links.site}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <img className="mi-glyph" src="/icons/site.png" alt="" aria-hidden /> {t.start.site}
          </a>
          <a
            className="startmenu-item"
            href={links.telegram}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <img className="mi-glyph" src="/icons/telegram.svg" alt="" aria-hidden /> {t.start.tg}
          </a>
          <a
            className="startmenu-item"
            href={links.discord}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <img className="mi-glyph" src="/icons/discord.svg" alt="" aria-hidden /> {t.start.discord}
          </a>
          <a
            className="startmenu-item"
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
          >
            <img className="mi-glyph" src="/icons/github.svg" alt="" aria-hidden /> {t.start.github}
          </a>
          <a className="startmenu-item" href={`mailto:${links.email}`} onClick={onClose}>
            <img className="mi-glyph" src="/icons/mail.png" alt="" aria-hidden /> {t.start.mail}
          </a>

          <div className="startmenu-divider" />

          <button className="startmenu-item" onClick={() => run(shutdown)}>
            <img className="mi-glyph" src="/icons/computer.png" alt="" aria-hidden /> {t.start.shutdown}
          </button>
        </div>
      </div>
    </>
  );
}
