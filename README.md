# win95-profile

A personal homepage that boots straight into **Windows 95**. A full-screen retro
desktop — teal wallpaper, desktop icons, a working Start menu and a live taskbar
clock — with an *Internet Explorer* window in the middle showing the profile
(intro, music player, photo gallery and links).

🔗 **Live:** https://ilya.zaytsv.com

Built with **Next.js** (static export), so it's just HTML/CSS/JS and runs on any
static host — GitHub Pages included.

## Features

- 🖥️ Windows 95 desktop UI — real Win95 icons, Start menu, taskbar, tray clock
- 🪟 Internet Explorer window with menu bar, toolbar and address bar (minimize / close, restore from taskbar)
- 🎵 Built-in music player
- 🖼️ Photo gallery and contact links (website, Telegram, Discord, GitHub, e-mail)
- 🎬 Pixel Windows 95 boot animation (CSS-driven, click to skip)
- 🐱 [oneko](https://github.com/adryd325/oneko.js) — a pixel cat that chases the cursor
- 🌍 Russian / English with **automatic browser-language detection** and a taskbar switcher
- 🔤 One consistent pixel font with Cyrillic support (Pixelify Sans)
- 🔎 SEO-ready — content is server-rendered into static HTML, plus Open Graph and JSON-LD `Person`

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router) · React 19 · TypeScript
- Static export (`output: 'export'`)
- [98.css](https://jdan.github.io/98.css/) for the window chrome
- [@react95/icons](https://github.com/react95-io/React95) for authentic Win95 icons
- [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) pixel font

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

> Don't run `npm run build` while `npm run dev` is running — both write to `.next`.

## Editing content

Everything (both languages, links, music and photos) lives in a single file:
[`content/profile.ts`](content/profile.ts). Put images in `public/photos/` and
audio in `public/music/`, then reference their paths in that file.

## Deployment

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the static export and publishes it to GitHub Pages. The custom
domain is configured through [`public/CNAME`](public/CNAME).

## Credits

- [98.css](https://jdan.github.io/98.css/) — Windows 98/95 UI styling
- [@react95/icons](https://github.com/react95-io/React95) — Windows 95 icon set
- [oneko.js](https://github.com/adryd325/oneko.js) — the cursor-chasing cat
- [Pixelify Sans](https://fonts.google.com/specimen/Pixelify+Sans) — pixel typeface

Brand logos, icons, fonts and any music belong to their respective owners.
