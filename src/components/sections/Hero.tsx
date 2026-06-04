import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from '../../lib/gsap'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteData } from '../../data/content'

export function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!headlineRef.current) return

    const el = headlineRef.current
    const words = el.querySelectorAll('.word')

    if (reduced) {
      gsap.set(words, { opacity: 1, y: 0, skewY: 0 })
      return
    }

    gsap.fromTo(
      words,
      { opacity: 0, y: 72, skewY: 4 },
      {
        opacity: 1,
        y: 0,
        skewY: 0,
        duration: 1,
        stagger: 0.08,
        ease: 'expo.out',
        delay: 0.3,
      }
    )
  }, [reduced])

  // Split headline into word spans for GSAP stagger
  const words = siteData.heroHeadline.split(' ')

  const ease = [0.16, 1, 0.3, 1] as const

  const fadeIn = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: reduced ? 0.01 : 0.8, delay: reduced ? 0 : delay, ease },
  })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-gradient"
    >
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden />

      {/* Decorative accent line */}
      <div
        className="absolute left-0 top-0 h-px w-full opacity-20"
        style={{ background: 'linear-gradient(90deg, transparent, var(--color-accent), transparent)' }}
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24 md:pt-40 md:pb-32">

        {/* Eyebrow tag */}
        <motion.div
          {...fadeIn(0.1)}
          className="inline-flex items-center gap-2 mb-10"
        >
          <span
            className="w-6 h-px"
            style={{ background: 'var(--color-accent)' }}
          />
          <span
            className="text-xs font-medium tracking-[0.2em] uppercase"
            style={{ color: 'var(--color-accent)', fontFamily: 'var(--font-display)' }}
          >
            {siteData.title}
          </span>
        </motion.div>

        {/* Headline — GSAP word stagger */}
        <h1
          ref={headlineRef}
          className="max-w-5xl leading-[1.05] tracking-tight mb-8"
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(2.8rem, 7vw, 6rem)',
            color: 'var(--color-text)',
          }}
          aria-label={siteData.heroHeadline}
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="word inline-block mr-[0.25em] overflow-hidden"
              aria-hidden
              style={{ opacity: 0 }}
            >
              {/* Color accent on last word */}
              <span style={i === words.length - 1 ? { color: 'var(--color-accent)' } : {}}>
                {word}
              </span>
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <motion.p
          {...fadeIn(1.1)}
          className="max-w-2xl text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-body)' }}
        >
          {siteData.heroSubtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeIn(1.35)}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-sm transition-all duration-300"
            style={{
              background: 'var(--color-accent)',
              color: '#000',
              fontFamily: 'var(--font-display)',
              letterSpacing: '0.05em',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#fff'
              el.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'var(--color-accent)'
              el.style.transform = 'translateY(0)'
            }}
          >
            {siteData.heroCta}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>

          <a
            href="#cases"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#cases')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-muted)',
              fontFamily: 'var(--font-body)',
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--color-text)'
              el.style.color = 'var(--color-text)'
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement
              el.style.borderColor = 'var(--color-border)'
              el.style.color = 'var(--color-muted)'
            }}
          >
            Ver casos de estudio
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          {...fadeIn(1.7)}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          aria-hidden
        >
          <span className="text-xs tracking-widest uppercase" style={{ color: 'var(--color-muted)' }}>
            scroll
          </span>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, var(--color-muted), transparent)' }}
            animate={reduced ? {} : { scaleY: [0, 1, 0], originY: 0 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>
    </section>
  )
}
