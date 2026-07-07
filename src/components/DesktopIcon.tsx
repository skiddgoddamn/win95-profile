"use client";

interface Props {
  icon: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}

/** Иконка на рабочем столе: настоящая Win95-иконка + подпись. */
export default function DesktopIcon({ icon, label, selected, onClick }: Props) {
  return (
    <button
      className={`desktop-icon${selected ? " selected" : ""}`}
      onClick={onClick}
      type="button"
    >
      <img className="glyph-img" src={icon} alt="" aria-hidden draggable={false} />
      <span className="label">{label}</span>
    </button>
  );
}
