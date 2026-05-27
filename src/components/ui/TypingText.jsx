import { useEffect, useState } from 'react'

export function TypingText({ words, speed = 90, pause = 1200 }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex]

    const timer = setTimeout(
      () => {
        if (!deleting) {
          const next = currentWord.slice(0, displayText.length + 1)
          setDisplayText(next)

          if (next === currentWord) {
            setDeleting(true)
          }
        } else {
          const next = currentWord.slice(0, displayText.length - 1)
          setDisplayText(next)

          if (next.length === 0) {
            setDeleting(false)
            setWordIndex((prev) => (prev + 1) % words.length)
          }
        }
      },
      deleting ? speed / 2 : displayText === currentWord ? pause : speed,
    )

    return () => clearTimeout(timer)
  }, [deleting, displayText, pause, speed, wordIndex, words])

  return (
    <span className="typing-text">
      {displayText}
      <span className="typing-caret" aria-hidden>
        |
      </span>
    </span>
  )
}
