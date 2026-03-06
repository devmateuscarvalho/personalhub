<div align="center">

# 🔗 Personal Link Hub

**Your own Linktree-style page — minimal, fast, and 100% yours.**

[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Static](https://img.shields.io/badge/Static-Site-22c55e?style=for-the-badge)](https://vercel.com)

*One page. Zero backend. Deploy anywhere.*

---

</div>

## ✨ What's inside

| | Feature |
|---|--------|
| 🖼️ | **Profile card** — Avatar, name, title & bio |
| 🔘 | **Social links** — Icon buttons with custom hover tooltips (LinkedIn, GitHub, Instagram, YouTube, WhatsApp, Email) |
| 🌓 | **Light / dark theme** — Toggle + saved preference |
| 🌐 | **PT / EN** — Language switch, persisted |
| 📱 | **Responsive** — Works on every screen |
| ♿ | **Accessible** — Semantic HTML, ARIA, keyboard-friendly |

---

## 🛠️ Tech stack

<div align="center">

`Vite` · `TypeScript` · `Vanilla CSS` · `CSS Variables` · `Google Fonts (Outfit)`

</div>

---

## 🚀 Quick start

```bash
# clone, then:
npm install
npm run dev
```

Open **http://localhost:5173** — that's it.

<details>
<summary><b>📁 Project structure</b></summary>

```
├── index.html
├── package.json
├── tsconfig.json
├── public/
│   ├── avatar.jpg
│   └── notebook.png
└── src/
    ├── main.ts    # App logic, links, theme, i18n
    └── style.css  # Themes & layout
```

</details>

<details>
<summary><b>📦 Build & preview</b></summary>

```bash
npm run build    # → dist/
npm run preview  # Local preview of production build
```

</details>

---

## 🎨 Customize it

| Change | Edit in `src/main.ts` |
|--------|------------------------|
| Social links (URLs, icons) | `links` + `linkAriaLabels` |
| Name, title, bio (PT/EN) | `texts.pt` & `texts.en` |
| New network icons | `iconSvgs` |

Replace `public/avatar.jpg` with your photo and tweak `index.html` (title, description, favicon).

---

## ☁️ Deploy (free)

Static site → deploy to **Vercel**, **Netlify**, or **Cloudflare Pages**. No env vars needed.

- **Vercel**: Connect repo → auto deploy. Add a custom domain in *Settings → Domains*.

---

<div align="center">

*Use it as your link hub or as a base for a full portfolio.*

</div>
