import { motion } from 'framer-motion'
import { SectionReveal } from '../ui/SectionReveal'
import { Tag } from '../ui/Tag'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteData, type Project } from '../../data/content'
import { assetUrl } from '../../lib/assetUrl'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reduced = useReducedMotion()
  const isClickable = project.href !== null && !project.badge

  const cardContent = (
    <>
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '16/9', background: 'var(--color-surface-2)' }}
      >
        {/* Placeholder detrás */}
        <div
          className="absolute inset-0 z-0 flex flex-col items-center justify-center gap-2"
          style={{ background: 'var(--color-surface-2)' }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ border: '1px solid var(--color-border)' }}
          >
            <span style={{ color: 'var(--color-accent)', fontSize: '1rem' }}>◈</span>
          </div>
          <span className="text-xs uppercase tracking-widest" style={{ color: 'var(--color-border)' }}>
            Próximamente
          </span>
        </div>
        {/* Imagen encima */}
        <img
          src={assetUrl(project.image)}
          alt={project.title}
          className={`relative z-10 w-full h-full object-cover transition-transform duration-500 ${isClickable ? 'group-hover:scale-105' : ''}`}
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
        />

        {/* Hover arrow — only for clickable cards */}
        {isClickable && (
          <div
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'var(--color-accent)', color: '#000' }}
          >
            ↗
          </div>
        )}

        {/* "En desarrollo" badge overlay */}
        {project.badge && (
          <div className="absolute top-4 left-4">
            <span
              className="px-3 py-1 text-xs font-semibold rounded-full"
              style={{
                background: 'rgba(201,240,77,0.12)',
                color: 'var(--color-accent)',
                border: '1px solid rgba(201,240,77,0.3)',
                fontFamily: 'var(--font-display)',
              }}
            >
              {project.badge}
            </span>
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-6">
        <h3
          className="text-base font-semibold"
          style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}
        >
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((t) => <Tag key={t} label={t} />)}
        </div>
      </div>
    </>
  )

  const sharedStyles: React.CSSProperties = {
    borderColor: 'var(--color-border)',
    background: 'var(--color-surface)',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '1rem',
    overflow: 'hidden',
    border: '1px solid var(--color-border)',
  }

  return (
    <SectionReveal delay={index * 0.1}>
      {isClickable ? (
        <motion.a
          href={project.href!}
          target="_blank"
          rel="noopener noreferrer"
          className="group"
          style={sharedStyles}
          whileHover={reduced ? {} : { y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } }}
        >
          {cardContent}
        </motion.a>
      ) : (
        <motion.div
          className="group"
          style={{ ...sharedStyles, cursor: 'default' }}
          whileHover={reduced ? {} : { y: -3, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const } }}
        >
          {cardContent}
        </motion.div>
      )}
    </SectionReveal>
  )
}

export function Projects() {
  return (
    <section
      id="projects"
      className="py-32 md:py-48 px-6 md:px-12"
      style={{ background: 'var(--color-surface)' }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <div>
            <SectionReveal>
              <span
                className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase mb-4"
                style={{ color: 'var(--color-accent)' }}
              >
                <span className="w-6 h-px" style={{ background: 'var(--color-accent)' }} />
                Proyectos
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
                Más trabajo destacado
              </h2>
            </SectionReveal>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p as Project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
