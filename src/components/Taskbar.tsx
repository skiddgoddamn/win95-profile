"use client";

import Clock from "./Clock";
import { useLang } from "./LangContext";

interface Props {
  startActive: boolean;
  onToggleStart: () => void;
  showTask: boolean;
  taskActive: boolean;
  onTaskClick: () => void;
}

/** Нижняя панель: «Пуск», кнопка окна, трей с языком, громкостью и часами. */
export default function Taskbar({
  startActive,
  onToggleStart,
  showTask,
  taskActive,
  onTaskClick,
}: Props) {
  const { t, lang, toggle } = useLang();

  return (
    <div className="taskbar bevel-out">
      <button
        className={`start-button${startActive ? " active" : ""}`}
        onClick={onToggleStart}
        type="button"
      >
        <img className="flag" src="/icons/start-flag.png" alt="" aria-hidden draggable={false} />
        {t.taskbar.start}
      </button>

      <div className="taskbar-sep" />

      {showTask && (
        <button
          className={`task-button${taskActive ? " active" : ""}`}
          onClick={onTaskClick}
          type="button"
          title={t.taskbar.taskTitle}
        >
          <img className="task-ico" src="/icons/site.png" alt="" aria-hidden draggable={false} />
          <span className="task-label">{t.taskbar.taskTitle}</span>
        </button>
      )}

      <div className="tray">
        <button
          className="tray-lang"
          onClick={toggle}
          type="button"
          title={t.switchLang}
        >
          {lang.toUpperCase()}
        </button>
        <span className="tray-vol" aria-hidden>
          🔊
        </span>
        <Clock />
      </div>
    </div>
  );
}
