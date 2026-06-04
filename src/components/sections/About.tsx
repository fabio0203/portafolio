import { SectionReveal } from '../ui/SectionReveal'
import { siteData } from '../../data/content'

export function About() {
  return (
    <section id="about" className="py-32 md:py-48 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* Photo column */}
        <SectionReveal direction="left">
          <div
            className="relative aspect-[4/5] rounded-2xl overflow-hidden"
            style={{ background: 'var(--color-surface-2)' }}
          >
            <img
              src={siteData.aboutPhoto}
              alt={siteData.name}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Placeholder gradient when image missing
                (e.target as HTMLImageElement).style.display = 'none'
              }}
            />
            {/* Placeholder state */}
            <div
              className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest"
              style={{ color: 'var(--color-muted)' }}
            >
              Tu foto aquí
            </div>
            {/* Accent corner decoration */}
            <div
              className="absolute bottom-0 left-0 w-24 h-24 rounded-tr-2xl"
              style={{ background: 'var(--color-accent)', opacity: 0.15 }}
            />
          </div>
        </SectionReveal>

        {/* Text column */}
        <div className="flex flex-col gap-8">
          <SectionReveal delay={0.1}>
            <span
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
              style={{ color: 'var(--color-accent)' }}
            >
              <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
              Sobre mí
            </span>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <h2
              className="leading-tight tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-text)',
              }}
            >
              Tecnología con propósito.{' '}
              <span style={{ color: 'var(--color-muted)' }}>
                Resultados medibles.
              </span>
            </h2>
          </SectionReveal>

          <div className="flex flex-col gap-4">
            {siteData.aboutText.map((para, i) => (
              <SectionReveal key={i} delay={0.3 + i * 0.1}>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {para}
                </p>
              </SectionReveal>
            ))}
          </div>

          {/* Skills row */}
          <SectionReveal delay={0.5}>
            <div className="flex flex-wrap gap-2 pt-2">
              {['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Next.js', 'SEO', 'n8n'].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs rounded-full border"
                  style={{
                    borderColor: 'var(--color-border)',
                    color: 'var(--color-muted)',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
