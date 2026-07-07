import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Статический экспорт → раскладывается на GitHub Pages / любой static-хостинг.
  // `next build` создаёт папку out/ с готовыми html+css+js (сервер не нужен).
  output: "export",

  // На GitHub Pages нет оптимизатора картинок Next — отдаём как есть.
  images: { unoptimized: true },

  // Если зальёшь как репозиторий-ПРОЕКТ (username.github.io/win95-profile),
  // раскомментируй и подставь имя репо — иначе ассеты уйдут в 404.
  // При деплое на свой домен (zaytsv.com) в КОРЕНЬ — оставь закомментированным.
  // basePath: "/win95-profile",
  // assetPrefix: "/win95-profile/",

  trailingSlash: true, // аккуратные пути вида /page/ на статике
};

export default nextConfig;
