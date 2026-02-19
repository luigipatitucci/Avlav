import { useEffect, useRef } from 'react'

/**
 * Scroll-linked typography tension
 * Creates subtle horizontal drift based on scroll position
 * Editorial friction effect - resistance, not decoration
 */
export const useScrollTension = (intensity: number = 8) => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let rafId: number | null = null
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) {
          rafId = null
          return
        }

        const rect = el.getBoundingClientRect()
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0

        if (isInViewport) {
          const currentScroll = window.scrollY
          const scrollDelta = currentScroll - lastScrollY
          
          // Calculate drift: subtle horizontal offset based on scroll momentum
          // Clamp between -intensity and +intensity
          const drift = Math.max(-intensity, Math.min(intensity, scrollDelta * 0.15))
          
          el.style.transform = `translateX(${drift}px)`
          el.style.transition = 'transform 180ms cubic-bezier(0.4, 0.0, 0.2, 1)'
          
          lastScrollY = currentScroll
        }

        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [intensity])

  return ref
}

/**
 * Directional scroll intent detection
 * Returns 'down' or 'up' based on scroll direction
 */
export const useScrollDirection = () => {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY
    let rafId: number | null = null

    const handleScroll = () => {
      if (rafId) return

      rafId = requestAnimationFrame(() => {
        const el = ref.current
        if (!el) {
          rafId = null
          return
        }

        const currentScroll = window.scrollY
        const direction = currentScroll > lastScrollY ? 'down' : 'up'
        
        el.setAttribute('data-scroll-direction', direction)
        lastScrollY = currentScroll
        rafId = null
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  return ref
}
