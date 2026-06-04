import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteData } from '../../data/content'

const links = [
  { label: 'Sobre mí', href: '#about' },
  { label: 'Casos', href: '#cases' },
  { label: 'Proyectos', href: '#projects' },
  { label: 'Servicios', href: '#services' },
  { label: 'Contacto', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const prevY = useRef(0)

  useEffect(() => {
    const handler = () => {
      setScrolled(window.scrollY > 60)
      prevY.current = window.scrollY
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setOpen(false)
    const target = document.querySelector(href)
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(8,8,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <a
            href="#"
            className="font-semibold text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
          >
            {siteData.name.split(' ')[0]}
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={(e) => handleLink(e, l.href)}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--color-muted)' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-text)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-muted)')}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={`mailto:${siteData.email}`}
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 text-xs font-semibold rounded-full transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: '#000',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-accent-dim)')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-accent)')}
          >
            Hablemos
          </a>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menú"
          >
            <span
              className="block w-5 h-px transition-all duration-300 origin-center"
              style={{
                background: 'var(--color-text)',
                transform: open ? 'rotate(45deg) translate(2px, 2px)' : 'none',
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300"
              style={{
                background: 'var(--color-text)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-all duration-300 origin-center"
              style={{
                background: 'var(--color-text)',
                transform: open ? 'rotate(-45deg) translate(2px, -2px)' : 'none',
              }}
            />
          </button>
        </nav>
      </header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center items-center gap-10"
            style={{ background: 'var(--color-bg)' }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={(e) => handleLink(e, l.href)}
                className="text-4xl font-bold"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.16, 1, 0.3, 1], duration: 0.5 }}
              >
                {l.label}
              </motion.a>
            ))}
            <motion.a
              href={`mailto:${siteData.email}`}
              className="mt-4 px-8 py-3 text-sm font-semibold rounded-full"
              style={{ background: 'var(--color-accent)', color: '#000', fontFamily: 'var(--font-display)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Hablemos
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
