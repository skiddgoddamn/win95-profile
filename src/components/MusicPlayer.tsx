"use client";

import { useRef, useState } from "react";
import { music as tracks, album } from "../../content/profile";
import { useLang } from "./LangContext";

function fmt(t: number) {
  if (!isFinite(t) || t < 0) t = 0;
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Мини-плеер в духе Windows Media Player. Локальные mp3 из public/music. */
export default function MusicPlayer() {
  const { t } = useLang();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [cur, setCur] = useState(0);
  const [dur, setDur] = useState(0);
  const [vol, setVol] = useState(0.8);
  const [error, setError] = useState(false);

  const track = tracks[idx];

  const playIndex = (i: number) => {
    const a = audioRef.current;
    if (!a || !tracks[i]) return;
    if (i !== idx || !a.src) {
      a.src = tracks[i].src;
      setIdx(i);
      setCur(0);
      setDur(0);
    }
    a.volume = vol;
    setError(false);
    a.play().catch(() => setError(true));
  };

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (!a.src) {
      playIndex(idx);
      return;
    }
    if (a.paused) a.play().catch(() => setError(true));
    else a.pause();
  };

  const next = () => playIndex((idx + 1) % tracks.length);
  const prev = () => playIndex((idx - 1 + tracks.length) % tracks.length);

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    const v = Number(e.target.value);
    if (a) a.currentTime = v;
    setCur(v);
  };

  const onVol = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value);
    setVol(v);
    if (audioRef.current) audioRef.current.volume = v;
  };

  return (
    <div className="player">
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={next}
        onError={() => track && setError(true)}
        onTimeUpdate={(e) => setCur(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDur(e.currentTarget.duration)}
      />

      <div className="player-head">
        <div className="album-cover" aria-hidden>
          {album.cover ? <img src={album.cover} alt="" /> : "💿"}
        </div>
        <div className="album-meta">
          <div className="album-title">{album.title}</div>
          <div className="album-sub">
            {album.artist} · {album.year}
          </div>
        </div>
      </div>

      <ol className="tracklist">
        {tracks.map((tr, i) => {
          const isCur = i === idx;
          return (
            <li
              key={tr.src}
              className={`track${isCur && playing ? " playing" : ""}`}
              onClick={() => playIndex(i)}
              title={`${tr.artist} — ${tr.title}`}
            >
              <span className="t-idx" aria-hidden>
                {isCur && playing ? <span className="t-eq">♪</span> : i + 1}
              </span>
              <span className="t-title">{tr.title}</span>
              <span className="t-dur">{tr.duration}</span>
            </li>
          );
        })}
      </ol>

      <div className="transport">
        <button onClick={prev} title={t.player.prev} type="button">
          ⏮
        </button>
        <button onClick={toggle} title={t.player.play} type="button">
          {playing ? "⏸" : "▶"}
        </button>
        <button onClick={next} title={t.player.next} type="button">
          ⏭
        </button>
        <span className="now">
          {playing || cur > 0 ? `${track.artist} — ${track.title}` : t.player.ready}
        </span>
        <span className="time">
          {fmt(cur)} / {dur ? fmt(dur) : track.duration}
        </span>
      </div>

      <div className="seek-row">
        <input
          type="range"
          min={0}
          max={dur || 0}
          step={0.1}
          value={Math.min(cur, dur || 0)}
          onChange={onSeek}
          disabled={!dur}
          aria-label={t.player.seek}
        />
      </div>

      <div className="vol-row">
        <span aria-hidden>🔈</span>
        <input
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={vol}
          onChange={onVol}
          aria-label={t.player.volume}
        />
        <span aria-hidden>🔊</span>
      </div>

      {error && (
        <p className="placeholder-note" style={{ color: "#a00000" }}>
          ⚠ {t.player.error}
        </p>
      )}
    </div>
  );
}
