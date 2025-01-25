"use client"

import { useCallback, useEffect, useState } from "react"
import confetti from "canvas-confetti"

const Fireworks = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const fireConfetti = useCallback(() => {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        }),
      )
      confetti(
        Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        }),
      )
    }, 250)
  }, [])

  useEffect(() => {
    if (isPlaying) {
      fireConfetti()
      const timer = setInterval(fireConfetti, 5000)
      return () => clearInterval(timer)
    }
  }, [isPlaying, fireConfetti])

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8 z-30">
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full shadow-lg"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Stop Fireworks" : "Launch Fireworks"} 🎆
      </button>
    </div>
  )
}

export default Fireworks

