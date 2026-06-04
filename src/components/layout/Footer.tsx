import { siteData } from '../../data/content'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      className="py-10 px-6 md:px-12 border-t flex flex-col md:flex-row items-center justify-between gap-4"
      style={{ borderColor: 'var(--color-border)' }}
    >
      <span
        className="text-xs tracking-widest uppercase"
        style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-display)' }}
      >
        {siteData.name} © {year}
      </span>
      <div className="flex items-center gap-6">
        <a
          href={`mailto:${siteData.email}`}
          className="text-xs transition-colors duration-200"
          style={{ color: 'var(--color-muted)' }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-muted)')}
        >
          {siteData.email}
        </a>
        <a
          href={siteData.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs transition-colors duration-200"
          style={{ color: 'var(--color-muted)' }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text)')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-muted)')}
        >
          WhatsApp
        </a>
      </div>
    </footer>
  )
}
