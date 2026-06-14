import { SectionReveal } from '../ui/SectionReveal'
import { siteData } from '../../data/content'
import { useContactModal } from '../../context/ContactModalContext'

export function Contact() {
  const { openModal } = useContactModal()

  return (
    <section
      id="contact"
      className="relative py-32 md:py-48 px-6 md:px-12 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}
    >
      {/* Background accent blob */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 80%, rgba(201,240,77,0.06) 0%, transparent 65%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto text-center">
        <SectionReveal>
          <span
            className="inline-flex items-center justify-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-8"
            style={{ color: 'var(--color-accent)' }}
          >
            <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
            Contacto
            <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
          </span>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <h2
            className="leading-tight tracking-tight mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              color: 'var(--color-text)',
            }}
          >
            ¿Tienes un proyecto{' '}
            <span style={{ color: 'var(--color-accent)' }}>en mente?</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <p
            className="text-lg leading-relaxed max-w-xl mx-auto mb-14"
            style={{ color: 'var(--color-muted)' }}
          >
            Cuéntanos qué necesita tu negocio. Respondemos rápido y sin compromiso.
          </p>
        </SectionReveal>

        {/* CTA principal */}
        <SectionReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-sm transition-all duration-300"
              style={{
                background: 'var(--color-accent)',
                color: '#000',
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.05em',
                border: 'none',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#fff'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--color-accent)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Hablemos
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </button>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.4}>
          <p
            className="mt-16 text-sm"
            style={{ color: 'var(--color-border)' }}
          >
            {siteData.email}
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}
