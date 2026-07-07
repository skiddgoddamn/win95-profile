"use client";

import { avatar, photos, nick, links } from "../../content/profile";
import { useLang } from "./LangContext";
import MusicPlayer from "./MusicPlayer";

/** Личная страница внутри окна «браузера». Текст — из content/profile.ts */
export default function Profile() {
  const { t } = useLang();

  return (
    <div className="profile" id="top">
      {/* Шапка */}
      <div className="profile-head">
        {avatar ? (
          <img className="avatar" src={avatar} alt={t.name} />
        ) : (
          <div className="avatar" aria-hidden>
            {t.avatarAlt}
          </div>
        )}
        <div>
          <h1>{t.name}</h1>
          {nick && <p className="nick">@{nick}</p>}
          <p className="tagline">
            <span className="online-dot" aria-hidden />
            {t.tagline || t.online}
          </p>
        </div>
      </div>

      {/* Интересы */}
      <fieldset>
        <legend>{t.sections.interests}</legend>
        <div className="interests">
          {t.interests.map((it) => (
            <span className="interest-chip" key={it}>
              {it}
            </span>
          ))}
        </div>
      </fieldset>

      {/* Музыка */}
      <fieldset id="music">
        <legend>{t.sections.music}</legend>
        <MusicPlayer />
      </fieldset>

      {/* Фото */}
      <fieldset id="photos">
        <legend>{t.sections.photos}</legend>
        <div className="photo-grid">
          {photos.length
            ? photos.map((src, i) => (
                <a
                  className="photo-tile"
                  key={src}
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={src}
                    alt={`${t.photoWord} ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                    fetchPriority="low"
                  />
                </a>
              ))
            : Array.from({ length: 6 }).map((_, i) => (
                <div className="photo-tile" key={i} aria-hidden>
                  {t.photoWord}
                </div>
              ))}
        </div>
      </fieldset>

      {/* Контакты */}
      <fieldset id="contacts">
        <legend>{t.sections.contacts}</legend>
        <div className="contacts">
          <a className="contact-link" href={links.site} target="_blank" rel="noopener noreferrer">
            <img className="ci" src="/icons/site.png" alt="" aria-hidden />
            <b>{t.contacts.site}</b>
            <small>{links.site.replace(/^https?:\/\//, "")}</small>
          </a>
          <a className="contact-link" href={links.telegram} target="_blank" rel="noopener noreferrer">
            <img className="ci" src="/icons/telegram.svg" alt="" aria-hidden />
            <b>{t.contacts.tg}</b>
            <small>{links.telegram.replace(/^https?:\/\//, "")}</small>
          </a>
          <a className="contact-link" href={links.discord} target="_blank" rel="noopener noreferrer">
            <img className="ci" src="/icons/discord.svg" alt="" aria-hidden />
            <b>{t.contacts.discord}</b>
            <small>{links.discord.replace(/^https?:\/\//, "")}</small>
          </a>
          <a className="contact-link" href={links.github} target="_blank" rel="noopener noreferrer">
            <img className="ci" src="/icons/github.svg" alt="" aria-hidden />
            <b>{t.contacts.github}</b>
            <small>{links.github.replace(/^https?:\/\//, "")}</small>
          </a>
          <a className="contact-link" href={`mailto:${links.email}`}>
            <img className="ci" src="/icons/mail.png" alt="" aria-hidden />
            <b>{t.contacts.mail}</b>
            <small>{links.email}</small>
          </a>
        </div>
      </fieldset>
    </div>
  );
}
