"use client";

import { useState } from "react";
import { links } from "../../content/profile";
import { useLang } from "./LangContext";
import DesktopIcon from "./DesktopIcon";
import BrowserWindow from "./BrowserWindow";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import Shutdown from "./Shutdown";

type WindowStatus = "open" | "minimized" | "closed";

/** Корневая оболочка: рабочий стол + окно + таскбар + меню Пуск. */
export default function Win95() {
  const { t } = useLang();
  const [win, setWin] = useState<WindowStatus>("open");
  const [startOpen, setStartOpen] = useState(false);
  const [shutdown, setShutdown] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const openWindow = () => setWin("open");

  const openAndScroll = (id: string) => {
    setWin("open");
    requestAnimationFrame(() =>
      requestAnimationFrame(() =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" })
      )
    );
  };

  const link = (url: string) => window.open(url, "_blank", "noopener");

  const icons = [
    { id: "pc", icon: "/icons/computer.png", label: t.icons.computer, act: openWindow },
    { id: "about", icon: "/icons/about.png", label: t.icons.about, act: () => openAndScroll("top") },
    { id: "music", icon: "/icons/music.png", label: t.icons.music, act: () => openAndScroll("music") },
    { id: "photos", icon: "/icons/photos.png", label: t.icons.photos, act: () => openAndScroll("photos") },
    { id: "site", icon: "/icons/site.png", label: t.icons.site, act: () => link(links.site) },
    { id: "tg", icon: "/icons/telegram.svg", label: t.icons.tg, act: () => link(links.telegram) },
    { id: "dc", icon: "/icons/discord.svg", label: t.icons.discord, act: () => link(links.discord) },
    { id: "gh", icon: "/icons/github.svg", label: t.icons.github, act: () => link(links.github) },
    { id: "mail", icon: "/icons/mail.png", label: t.icons.mail, act: () => link(`mailto:${links.email}`) },
    { id: "bin", icon: "/icons/bin.png", label: t.icons.bin, act: () => {} },
  ];

  const clearDesktop = () => {
    setSelected(null);
    setStartOpen(false);
  };

  if (shutdown) {
    return <Shutdown onRestart={() => window.location.reload()} />;
  }

  return (
    <div className="desktop" onMouseDown={clearDesktop}>
      <div className="desktop-icons" onMouseDown={(e) => e.stopPropagation()}>
        {icons.map((ic) => (
          <DesktopIcon
            key={ic.id}
            icon={ic.icon}
            label={ic.label}
            selected={selected === ic.id}
            onClick={() => {
              setSelected(ic.id);
              ic.act();
            }}
          />
        ))}
      </div>

      <div onMouseDown={(e) => e.stopPropagation()}>
        <BrowserWindow
          hidden={win !== "open"}
          onMinimize={() => setWin("minimized")}
          onClose={() => setWin("closed")}
          onFocus={() => setStartOpen(false)}
        />
      </div>

      {startOpen && (
        <div onMouseDown={(e) => e.stopPropagation()}>
          <StartMenu
            onClose={() => setStartOpen(false)}
            openAbout={() => openAndScroll("top")}
            openMusic={() => openAndScroll("music")}
            openPhotos={() => openAndScroll("photos")}
            shutdown={() => setShutdown(true)}
          />
        </div>
      )}

      <div onMouseDown={(e) => e.stopPropagation()}>
        <Taskbar
          startActive={startOpen}
          onToggleStart={() => setStartOpen((v) => !v)}
          showTask={win !== "closed"}
          taskActive={win === "open"}
          onTaskClick={() => setWin((s) => (s === "open" ? "minimized" : "open"))}
        />
      </div>
    </div>
  );
}
