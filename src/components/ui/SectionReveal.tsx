import { motion } from 'framer-motion'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Props {
  children: React.ReactNode
  className?: string
  delay?: number
  /** 'up' (default) | 'left' | 'none' */
  direction?: 'up' | 'left' | 'none'
}

export function SectionReveal({ children, className, delay = 0, direction = 'up' }: Props) {
  const reduced = useReducedMotion()

  const initial =
    reduced || direction === 'none'
      ? { opacity: 0 }
      : direction === 'left'
      ? { opacity: 0, x: -40 }
      : { opacity: 0, y: 40 }

  const animate =
    reduced || direction === 'none'
      ? { opacity: 1 }
      : direction === 'left'
      ? { opacity: 1, x: 0 }
      : { opacity: 1, y: 0 }

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: '-8%' }}
      transition={{
        duration: reduced ? 0.01 : 0.75,
        delay: reduced ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
