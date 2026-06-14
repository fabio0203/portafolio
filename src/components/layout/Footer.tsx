import { siteData } from '../../data/content'
import { useContactModal } from '../../context/ContactModalContext'

export function Footer() {
  const year = new Date().getFullYear()
  const { openModal } = useContactModal()

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
        <button
          onClick={openModal}
          className="text-xs transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
          style={{ color: 'var(--color-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          {siteData.email}
        </button>
        <button
          onClick={openModal}
          className="text-xs transition-colors duration-200 bg-transparent border-none p-0 cursor-pointer"
          style={{ color: 'var(--color-muted)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
        >
          WhatsApp
        </button>
      </div>
    </footer>
  )
}
