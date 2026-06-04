import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

interface Props {
  end: number
  suffix?: string
  duration?: number
}

export function CountUp({ end, suffix = '', duration = 1800 }: Props) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const reduced = useReducedMotion()
  const started = useRef(false)

  useEffect(() => {
    if (reduced) { setValue(end); return }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            // ease out expo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setValue(Math.round(eased * end))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, reduced])

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  )
}
