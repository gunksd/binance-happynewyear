"use client"

import { useState, useEffect } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeUntilLunarNewYear())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeUntilLunarNewYear())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  function getTimeUntilLunarNewYear() {
    const now = new Date()
    const lunarNewYear2025 = new Date("2025-01-29T00:00:00") // 2025 Lunar New Year date
    const diff = lunarNewYear2025.getTime() - now.getTime()

    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((diff % (1000 * 60)) / 1000)

    return { days, hours, minutes, seconds }
  }

  return (
    <div className="text-3xl font-bold text-white shadow-lg bg-red-600 bg-opacity-70 rounded-lg p-4">
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </div>
  )
}

