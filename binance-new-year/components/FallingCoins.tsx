"use client"

import { useEffect, useRef } from "react"

export default function FallingCoins() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const createCoin = () => {
      const coin = document.createElement("img")
      coin.src = "https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
      coin.alt = "Binance Coin"
      coin.className = "absolute w-8 h-8"
      coin.style.left = `${Math.random() * 100}%`
      coin.style.top = "-32px"
      container.appendChild(coin)

      const animation = coin.animate(
        [
          { transform: "translateY(0) rotate(0deg)" },
          { transform: `translateY(${window.innerHeight}px) rotate(720deg)` },
        ],
        {
          duration: Math.random() * 2000 + 3000,
          easing: "linear",
        },
      )

      animation.onfinish = () => {
        coin.remove()
      }
    }

    const interval = setInterval(createCoin, 500)

    return () => clearInterval(interval)
  }, [])

  return <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-10" />
}

