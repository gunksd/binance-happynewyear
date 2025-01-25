"use client"

import { useEffect, useRef } from "react"

const FestiveBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const lanterns: Lantern[] = []
    const snowflakes: Snowflake[] = []

    class Lantern {
      x: number
      y: number
      size: number
      speed: number
      image: HTMLImageElement

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = canvas.height + Math.random() * 100
        this.size = Math.random() * 50 + 30
        this.speed = Math.random() * 0.5 + 0.2
        this.image = new Image()
        this.image.src = "https://www.pngall.com/wp-content/uploads/2016/07/Chinese-Lantern-PNG-Picture.png"
        this.image.onload = () => {
          this.draw()
        }
      }

      draw() {
        if (!ctx) return
        ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
      }

      update() {
        this.y -= this.speed
        if (this.y < -this.size) {
          this.y = canvas.height + this.size
          this.x = Math.random() * canvas.width
        }
      }
    }

    class Snowflake {
      x: number
      y: number
      size: number
      speed: number
      image: HTMLImageElement

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = -10
        this.size = Math.random() * 20 + 10
        this.speed = Math.random() * 1 + 0.5
        this.image = new Image()
        this.image.src = "https://www.pngall.com/wp-content/uploads/2016/06/Snowflake-Free-Download-PNG.png"
        this.image.onload = () => {
          this.draw()
        }
      }

      draw() {
        if (!ctx) return
        ctx.drawImage(this.image, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size)
      }

      update() {
        this.y += this.speed
        this.x += Math.sin(this.y / 50) * 0.5

        if (this.y > canvas.height + this.size) {
          this.y = -this.size
          this.x = Math.random() * canvas.width
        }
      }
    }

    for (let i = 0; i < 5; i++) {
      lanterns.push(new Lantern())
    }

    for (let i = 0; i < 50; i++) {
      snowflakes.push(new Snowflake())
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#FF6B6B")
      gradient.addColorStop(1, "#4ECDC4")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      lanterns.forEach((lantern) => {
        lantern.draw()
        lantern.update()
      })

      snowflakes.forEach((snowflake) => {
        snowflake.draw()
        snowflake.update()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0" />
}

export default FestiveBackground

