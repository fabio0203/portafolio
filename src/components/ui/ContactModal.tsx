import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useContactModal } from '../../context/ContactModalContext'
import { siteData } from '../../data/content'

const WA_HREF = `https://wa.me/5356501045?text=${encodeURIComponent('Hola vengo desde la web de Almanac para conocer mas sobre sus servicios')}`
const EMAIL_HREF = `mailto:${siteData.email}?subject=${encodeURIComponent('Web de Almanac')}`

export function ContactModal() {
  const { open, closeModal } = useContactModal()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') closeModal() }
    if (open) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, closeModal])

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[90]"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
          />

          {/* Card */}
          <motion.div
            className="fixed inset-0 z-[91] flex items-center justify-center p-6 pointer-events-none"
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 24 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          >
            <div
              className="pointer-events-auto relative w-full max-w-sm rounded-2xl p-8 flex flex-col gap-6"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
              }}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                aria-label="Cerrar"
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-xs transition-colors duration-200"
                style={{ color: 'var(--color-muted)', border: '1px solid var(--color-border)' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-text)'
                  e.currentTarget.style.color = 'var(--color-text)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.color = 'var(--color-muted)'
                }}
              >
                ✕
              </button>

              {/* Header */}
              <div>
                <span
                  className="text-xs font-medium tracking-[0.2em] uppercase"
                  style={{ color: 'var(--color-accent)' }}
                >
                  Contacto
                </span>
                <h3
                  className="mt-2 leading-tight"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontWeight: 700,
                    fontSize: '1.5rem',
                    color: 'var(--color-text)',
                  }}
                >
                  ¿Cómo prefiere contactarnos?
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'var(--color-muted)' }}>
                  Respondemos rápido y sin compromiso.
                </p>
              </div>

              {/* WhatsApp */}
              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-accent)'
                  e.currentTarget.style.background = 'rgba(201,240,77,0.04)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.background = 'var(--color-surface-2)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-base"
                  style={{
                    background: 'rgba(201,240,77,0.1)',
                    border: '1px solid rgba(201,240,77,0.25)',
                  }}
                >
                  💬
                </div>
                <div className="flex flex-col min-w-0">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                  >
                    WhatsApp
                  </span>
                  <span className="text-xs truncate" style={{ color: 'var(--color-muted)' }}>
                    {siteData.whatsapp}
                  </span>
                </div>
                <span className="ml-auto shrink-0 text-sm" style={{ color: 'var(--color-accent)' }}>
                  ↗
                </span>
              </a>

              {/* Email */}
              <a
                href={EMAIL_HREF}
                onClick={closeModal}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200"
                style={{
                  background: 'var(--color-surface-2)',
                  border: '1px solid var(--color-border)',
                  textDecoration: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-text)'
                  e.currentTarget.style.background = 'rgba(240,237,232,0.03)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--color-border)'
                  e.currentTarget.style.background = 'var(--color-surface-2)'
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-base"
                  style={{
                    background: 'rgba(240,237,232,0.05)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  ✉
                </div>
                <div className="flex flex-col min-w-0">
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                  >
                    Email
                  </span>
                  <span className="text-xs truncate" style={{ color: 'var(--color-muted)' }}>
                    {siteData.email}
                  </span>
                </div>
                <span className="ml-auto shrink-0 text-sm" style={{ color: 'var(--color-muted)' }}>
                  →
                </span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
