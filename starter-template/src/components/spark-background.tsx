"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  twinkleSpeed: number
  twinkleDirection: number
}

export default function SparklingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create stars
    const stars: Star[] = []
    const starCount = Math.floor((canvas.width * canvas.height) / 10000) // Adjust density here

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5, // Size between 0.5 and 2
        opacity: Math.random() * 0.7 + 0.3, // Opacity between 0.3 and 1
        speed: Math.random() * 0.05 + 0.01, // Movement speed
        twinkleSpeed: Math.random() * 0.02 + 0.005, // How fast it twinkles
        twinkleDirection: Math.random() > 0.5 ? 1 : -1, // Whether opacity is increasing or decreasing
      })
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw stars
      stars.forEach((star) => {
        // Update star position (slight movement)
        star.y -= star.speed
        if (star.y < -5) star.y = canvas.height + 5

        // Twinkle effect
        star.opacity += star.twinkleSpeed * star.twinkleDirection
        if (star.opacity > 1) {
          star.opacity = 1
          star.twinkleDirection = -1
        } else if (star.opacity < 0.3) {
          star.opacity = 0.3
          star.twinkleDirection = 1
        }

        // Draw the star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()

        // Add glow effect for larger stars
        if (star.size > 1) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity * 0.15})`
          ctx.fill()
        }
      })

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  )
}
