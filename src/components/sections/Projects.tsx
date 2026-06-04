import { motion } from 'framer-motion'
import { SectionReveal } from '../ui/SectionReveal'
import { Tag } from '../ui/Tag'
import { useReducedMotion } from '../../hooks/useReducedMotion'
import { siteData } from '../../data/content'

function ProjectCard({
  project,
  index,
}: {
  project: typeof siteData.projects[0]
  index: number
}) {
  const reduced = useReducedMotion()

  return (
    <SectionReveal delay={index * 0.1}>
      <motion.a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col rounded-2xl overflow-hidden border"
        style={{
          borderColor: 'var(--color-border)',
          background: 'var(--color-surface)',
          textDecoration: 'none',
        }}
        whileHover={reduced ? {} : { y: -6, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } }}
      >
        {/* Image */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: '16/9', background: 'var(--color-surface-2)' }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
          />
          {/* Placeholder */}
          <div
            className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest"
            style={{ color: 'var(--color-muted)' }}
          >
            Imagen del proyecto
          </div>
          {/* Hover arrow */}
          <div
            className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: 'var(--color-accent)', color: '#000' }}
          >
            ↗
          </div>
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
      </motion.a>
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
        {/* Header */}
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

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
