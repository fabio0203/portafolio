import { SectionReveal } from '../ui/SectionReveal'
import { siteData } from '../../data/content'

export function Services() {
  return (
    <section
      id="services"
      className="py-32 md:py-48 px-6 md:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 mb-20 md:mb-28">
          <SectionReveal>
            <span
              className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: 'var(--color-accent)' }}
            >
              <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
              Servicios
            </span>
            <h2
              className="leading-tight tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: 'var(--color-text)',
              }}
            >
              Qué hacemos
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p
              className="md:self-end text-base leading-relaxed"
              style={{ color: 'var(--color-muted)' }}
            >
              Trabajamos con clientes que quieren resultados concretos: más velocidad, menos fricción, más conversiones. Cada proyecto empieza entendiendo tu negocio, no el código.
            </p>
          </SectionReveal>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: 'var(--color-border)' }}>
          {siteData.services.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 0.1}>
              <div
                className="group flex flex-col gap-6 p-8 md:p-10 h-full transition-colors duration-300"
                style={{ background: 'var(--color-surface)' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-surface-2)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'var(--color-surface)')}
              >
                <span
                  className="text-2xl"
                  style={{ color: 'var(--color-accent)' }}
                  aria-hidden
                >
                  {service.icon}
                </span>
                <h3
                  className="text-lg font-semibold"
                  style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--color-muted)' }}
                >
                  {service.description}
                </p>
                <span
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: 'var(--color-border)' }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = 'var(--color-accent)')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'var(--color-border)')}
                >
                  →
                </span>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
