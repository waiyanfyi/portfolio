import { useEffect, useRef, useState } from 'react'

export function AnimatedCounter({ value, suffix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const duration = 1200
          const start = performance.now()

          const tick = (timestamp) => {
            const progress = Math.min((timestamp - start) / duration, 1)
            setCount(Math.floor(progress * value))

            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }

          requestAnimationFrame(tick)
          observer.disconnect()
        })
      },
      { threshold: 0.35 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return <span ref={ref}>{count}{suffix}</span>
}
