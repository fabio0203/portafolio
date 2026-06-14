import { useEffect, useRef } from 'react'
import { gsap } from '../../lib/gsap'
import { SectionReveal } from '../ui/SectionReveal'
import { CountUp } from '../ui/CountUp'
import { Tag } from '../ui/Tag'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteData, type CaseStudy } from '../../data/content'

function CaseCard({ cs, index }: { cs: CaseStudy; index: number }) {
  const imageRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const isEven = index % 2 === 0

  useEffect(() => {
    if (!imageRef.current || reduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { yPercent: -8 },
        {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: imageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1.8,
          },
        }
      )
    })

    return () => ctx.revert()
  }, [reduced])

  const metricsCount = cs.metrics?.length ?? 0

  return (
    <article
      className="grid md:grid-cols-2 gap-12 md:gap-20 items-center py-24 md:py-32 border-t"
      style={{ borderColor: 'var(--color-border)' }}
    >
      {/* ── Text side ── */}
      <div className={`flex flex-col gap-8 ${isEven ? 'md:order-1' : 'md:order-2'}`}>

        <SectionReveal delay={0.05}>
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
          >
            {cs.tag}
          </span>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <h3
            className="leading-tight tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
              color: 'var(--color-text)',
            }}
          >
            {cs.title}
          </h3>
        </SectionReveal>

        {/* Problem / Solution */}
        <SectionReveal delay={0.2}>
          <div className="flex flex-col gap-4">
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
              >
                El reto
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {cs.problem}
              </p>
            </div>
            <div>
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
              >
                La solución
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
                {cs.solution}
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Features list (caso 2) */}
        {cs.features && cs.features.length > 0 && (
          <SectionReveal delay={0.25}>
            <div className="flex flex-col gap-2">
              <p
                className="text-xs font-semibold tracking-widest uppercase mb-1"
                style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
              >
                Lo que lo hace diferente
              </p>
              <ul className="flex flex-col gap-2">
                {cs.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm leading-relaxed"
                    style={{ color: 'var(--color-muted)' }}
                  >
                    <span className="mt-0.5 shrink-0" style={{ color: 'var(--color-accent)' }}>→</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </SectionReveal>
        )}

        {/* Metrics (caso 1) */}
        {cs.metrics && cs.metrics.length > 0 && (
          <SectionReveal delay={0.3}>
            <div
              className={`grid gap-4 py-6 border-t border-b ${
                metricsCount >= 4 ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3'
              }`}
              style={{ borderColor: 'var(--color-border)' }}
            >
              {cs.metrics.map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span
                    className="text-3xl md:text-4xl font-bold tabular-nums leading-none"
                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
                  >
                    <CountUp
                      end={m.value}
                      suffix={m.suffix}
                      prefix={m.prefix}
                      staticDisplay={m.display}
                    />
                  </span>
                  <span className="text-xs leading-tight" style={{ color: 'var(--color-muted)' }}>
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </SectionReveal>
        )}

        {/* Testimonial */}
        {cs.testimonial && (
          <SectionReveal delay={0.33}>
            <blockquote
              className="pl-4 py-1 text-sm leading-relaxed italic"
              style={{
                borderLeft: '2px solid var(--color-accent)',
                color: 'var(--color-muted)',
              }}
            >
              {cs.testimonial}
            </blockquote>
          </SectionReveal>
        )}

        {/* Tags */}
        <SectionReveal delay={0.35}>
          <div className="flex flex-wrap gap-2">
            {cs.tags.map((t) => <Tag key={t} label={t} />)}
          </div>
        </SectionReveal>

        {/* External link */}
        {cs.link && (
          <SectionReveal delay={0.4}>
            <a
              href={cs.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-200"
              style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = '#fff')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = 'var(--color-accent)')}
            >
              {cs.linkText ?? 'Ver proyecto'} →
            </a>
          </SectionReveal>
        )}
      </div>

      {/* ── Image side ── */}
      <div
        className={`relative overflow-hidden rounded-2xl ${isEven ? 'md:order-2' : 'md:order-1'}`}
        style={{ background: 'var(--color-surface-2)', aspectRatio: '4/3' }}
      >
        <div ref={imageRef} className="absolute inset-[-15%] w-[130%] h-[130%]">
          {/* Placeholder detrás */}
          <div
            className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-3"
            style={{ background: 'var(--color-surface-2)' }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center"
              style={{ border: '1px solid var(--color-border)' }}
            >
              <span style={{ color: 'var(--color-accent)', fontSize: '1.25rem' }}>◈</span>
            </div>
            <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-border)' }}>
              Próximamente
            </span>
          </div>
          {/* Imagen encima del placeholder */}
          <img
            src={cs.image}
            alt={cs.title}
            className="relative z-10 w-full h-full object-cover"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
        </div>
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: isEven
              ? 'linear-gradient(135deg, rgba(201,240,77,0.05) 0%, transparent 60%)'
              : 'linear-gradient(225deg, rgba(201,240,77,0.05) 0%, transparent 60%)',
          }}
        />
      </div>
    </article>
  )
}

export function CaseStudies() {
  return (
    <section id="cases" className="py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-4">
        <SectionReveal>
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-accent)' }}
          >
            <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
            Casos de estudio
          </span>
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <h2
            className="mt-4 leading-tight tracking-tight max-w-2xl"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: 'var(--color-text)',
            }}
          >
            Resultados reales.{' '}
            <span style={{ color: 'var(--color-muted)' }}>No promesas.</span>
          </h2>
        </SectionReveal>
      </div>

      {siteData.caseStudies.map((cs, i) => (
        <CaseCard key={cs.id} cs={cs as CaseStudy} index={i} />
      ))}
    </section>
  )
}
