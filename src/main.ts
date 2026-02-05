import './style.css'

type Lang = 'pt' | 'en'
type Theme = 'light' | 'dark'

const links = [
  { id: 'linkedin', href: 'https://www.linkedin.com/in/vieiracmateus/', icon: 'linkedin' },
  { id: 'github', href: 'https://github.com/devmateuscarvalho', icon: 'github' },
  { id: 'instagram', href: 'https://www.instagram.com/mateus.ccarvalho', icon: 'instagram' },
  { id: 'youtube', href: 'https://www.youtube.com/@devmateuscarvalho', icon: 'youtube' },
  { id: 'whatsapp', href: 'https://wa.me/5548998009100', icon: 'whatsapp' },
  { id: 'email', href: 'mailto:dev.mateuscarvalho@gmail.com', icon: 'email' },
]

const texts = {
  pt: {
    title: 'Engenheiro de Software',
    bio: 'Engenheiro de software com mais de 4 anos de experiência, focado em sistemas seguros e robustos. Atuo com Java/Spring, React.js, Android (Kotlin), AWS, CI/CD e arquitetura limpa. Sempre em busca de superar expectativas e entregar soluções de alta qualidade.',
    linkLabels: { linkedin: 'LinkedIn', github: 'GitHub', instagram: 'Instagram', youtube: 'YouTube', whatsapp: 'WhatsApp', email: 'E-mail' },
  },
  en: {
    title: 'Software Engineer',
    bio: 'Software Engineer with 4+ years of experience, focused on building secure and robust systems. I work with Java/Spring, React.js, Android (Kotlin), AWS, CI/CD and Clean Architecture. Constantly seeking to exceed expectations and deliver high-quality solutions.',
    linkLabels: { linkedin: 'LinkedIn', github: 'GitHub', instagram: 'Instagram', youtube: 'YouTube', whatsapp: 'WhatsApp', email: 'Email' },
  },
}

const STORAGE_LANG = 'linktree-lang'
const STORAGE_THEME = 'linktree-theme'

function getStoredLang(): Lang {
  const v = localStorage.getItem(STORAGE_LANG)
  return v === 'en' || v === 'pt' ? v : 'en'
}

function getStoredTheme(): Theme {
  const v = localStorage.getItem(STORAGE_THEME)
  return v === 'light' || v === 'dark' ? v : 'dark'
}

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute('data-theme', theme)
}

function render(lang: Lang) {
  const t = texts[lang]
  const app = document.querySelector<HTMLDivElement>('#app')!
  app.innerHTML = `
    <div class="page">
      <div class="card">
        <div class="toggles">
          <div class="lang-toggle" role="group" aria-label="Idioma">
            <button type="button" class="lang-btn ${lang === 'pt' ? 'active' : ''}" data-lang="pt">PT</button>
            <button type="button" class="lang-btn ${lang === 'en' ? 'active' : ''}" data-lang="en">EN</button>
          </div>
          <button type="button" class="theme-toggle" aria-label="Tema" title="Alternar tema">
            <span class="theme-icon sun" aria-hidden="true">☀</span>
            <span class="theme-icon moon" aria-hidden="true">🌙</span>
          </button>
        </div>
        <img src="/avatar.jpg" alt="Mateus Carvalho" class="avatar" />
        <h1 class="name">Mateus Carvalho Vieira</h1>
        <p class="title">${t.title}</p>
        <p class="bio">${t.bio}</p>
        <nav class="links">
          ${links
      .map(
        (link) => `
            <a href="${link.href}" target="_blank" rel="noopener noreferrer" class="link link-${link.icon}">
              <span class="link-label">${t.linkLabels[link.id as keyof typeof t.linkLabels]}</span>
            </a>
          `
      )
      .join('')}
        </nav>
      </div>
    </div>
  `

  app.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const newLang = (btn as HTMLElement).dataset.lang as Lang
      localStorage.setItem(STORAGE_LANG, newLang)
      render(newLang)
    })
  })

  const themeBtn = app.querySelector('.theme-toggle')
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') as Theme
      const next: Theme = current === 'dark' ? 'light' : 'dark'
      localStorage.setItem(STORAGE_THEME, next)
      applyTheme(next)
    })
  }
}

// Init
const initialLang = getStoredLang()
const initialTheme = getStoredTheme()
applyTheme(initialTheme)
render(initialLang)
