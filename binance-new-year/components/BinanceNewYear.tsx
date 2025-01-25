"use client"

import { motion } from "framer-motion"
import Countdown from "./Countdown"
import FestiveBackground from "./FestiveBackground"
import FallingCoins from "./FallingCoins"
import Fireworks from "./Fireworks"

export default function BinanceNewYear() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <FestiveBackground />
      <FallingCoins />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 flex flex-col items-center justify-center z-20"
      >
        <img
          src="https://public.bnbstatic.com/20190405/eb2349c3-b2f8-4a93-a286-8f86a62ea9d8.png"
          alt="Binance Logo"
          className="w-40 h-40 mb-8"
        />
        <h1 className="text-4xl font-bold mb-4 text-white shadow-lg">Binance Lunar New Year 2025 Celebration</h1>
        <Countdown />
      </motion.div>
      <Fireworks />
    </div>
  )
}

