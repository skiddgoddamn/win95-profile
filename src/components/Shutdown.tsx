"use client";

import { useLang } from "./LangContext";

/** Классический экран «теперь питание можно отключить». Клик — включить снова. */
export default function Shutdown({ onRestart }: { onRestart: () => void }) {
  const { t } = useLang();
  return (
    <div className="shutdown" onClick={onRestart} role="button" tabIndex={0}>
      <p>
        {t.shutdown.line1}
        <br />
        {t.shutdown.line2}
        <small>{t.shutdown.hint}</small>
      </p>
    </div>
  );
}
