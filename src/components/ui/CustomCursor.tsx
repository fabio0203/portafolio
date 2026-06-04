import { useEffect, useRef } from 'react'
import { useReducedMotion } from '../../hooks/useReducedMotion'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Disable on touch devices and reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch || reduced) return

    document.body.classList.add('custom-cursor-active')

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
    }

    const handleEnter = () => {
      ringRef.current?.classList.add('scale-150')
      dotRef.current?.classList.add('opacity-0')
    }
    const handleLeave = () => {
      ringRef.current?.classList.remove('scale-150')
      dotRef.current?.classList.remove('opacity-0')
    }

    let rafId: number
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t
    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.1)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.1)
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafId = requestAnimationFrame(animate)
    }

    animate()
    window.addEventListener('mousemove', move)

    // Scale ring on interactive elements
    const interactives = document.querySelectorAll('a, button, [data-cursor-grow]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', handleEnter)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', move)
      document.body.classList.remove('custom-cursor-active')
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', handleEnter)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [reduced])

  if (reduced) return null

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: 'var(--color-accent)',
          marginLeft: -3,
          marginTop: -3,
          transition: 'opacity 0.2s',
          willChange: 'transform',
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none transition-transform duration-300"
        style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(201,240,77,0.5)',
          marginLeft: -18,
          marginTop: -18,
          willChange: 'transform',
        }}
      />
    </>
  )
}
