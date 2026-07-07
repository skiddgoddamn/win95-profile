"use client";

import { useState } from "react";
import { useLang } from "./LangContext";

/**
 * Пиксельная заставка загрузки Windows 95.
 * Скрывается CSS-анимацией через 3с (работает даже без JS); клик — пропустить.
 * Контент страницы всё это время в DOM под заставкой → SEO не страдает.
 */
export default function BootScreen() {
  const { t } = useLang();
  const [gone, setGone] = useState(false);

  return (
    <div
      className={`boot${gone ? " boot--gone" : ""}`}
      onClick={() => setGone(true)}
      aria-hidden
    >
      <div className="boot-inner">
        <img className="boot-flag" src="/icons/boot-flag.png" alt="" draggable={false} />
        <div className="boot-title">
          <span className="boot-ms">Microsoft</span>
          <span className="boot-win">
            Windows<b>95</b>
          </span>
        </div>
      </div>
      <div className="boot-bar">
        <div className="boot-bar-fill" />
      </div>
      <div className="boot-hint">{t.booting}</div>
    </div>
  );
}
