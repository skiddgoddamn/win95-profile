"use client";

import { links, fakeUrl } from "../../content/profile";
import { useLang } from "./LangContext";
import Profile from "./Profile";

interface Props {
  hidden: boolean;
  onMinimize: () => void;
  onClose: () => void;
  onFocus: () => void;
}

/** Окно в стиле старого Internet Explorer с открытой личной страницей. */
export default function BrowserWindow({
  hidden,
  onMinimize,
  onClose,
  onFocus,
}: Props) {
  const { t } = useLang();

  const openSite = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(links.site, "_blank", "noopener");
  };

  return (
    <div
      className={`window browser-window${hidden ? " hidden" : ""}`}
      onMouseDown={onFocus}
    >
      <div className="title-bar">
        <div className="title-bar-text">
          <img className="tb-ico" src="/icons/site.png" alt="" aria-hidden draggable={false} />
          {t.name} {t.ie.titleSuffix}
        </div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" onClick={onMinimize} />
          <button aria-label="Maximize" />
          <button aria-label="Close" onClick={onClose} />
        </div>
      </div>

      <div className="ie-menubar">
        {t.ie.menubar.map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>

      <div className="ie-toolbar">
        <button type="button">
          ◄ <span className="lbl">{t.ie.back}</span>
        </button>
        <button type="button">►</button>
        <button type="button">✖</button>
        <button type="button">⟳</button>
        <button type="button">🏠</button>
      </div>

      <div className="ie-address">
        <label>{t.ie.addressLabel}</label>
        <form onSubmit={openSite}>
          <span className="addr">
            <img className="globe" src="/icons/site.png" alt="" aria-hidden draggable={false} />
            <span className="addr-text">{fakeUrl}</span>
          </span>
          <button type="submit">{t.ie.go}</button>
        </form>
      </div>

      <div className="ie-content">
        <Profile />
      </div>

      <div className="status-bar">
        <p className="status-bar-field">{t.ie.ready}</p>
        <p className="status-bar-field">{t.ie.zone}</p>
        <p className="status-bar-field">{t.ie.secure}</p>
      </div>
    </div>
  );
}
