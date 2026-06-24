import { useEffect, useRef, useState } from 'react'

export default function useReveal({ root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.12, once = true } = {}) {
  const ref = useRef(null)
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true)
            if (once) obs.unobserve(entry.target)
          }
        })
      },
      { root, rootMargin, threshold }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [root, rootMargin, threshold, once])

  return [ref, isVisible]
}
