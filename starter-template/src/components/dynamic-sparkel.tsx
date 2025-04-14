"use client"

import { useEffect, useRef } from "react"

interface Sparkle {
  x: number
  y: number
  size: number
  opacity: number
  life: number
  maxLife: number
  color: string
  speedX: number
  speedY: number
}

export default function DynamicSparkles() {
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

    const sparkles: Sparkle[] = []
    const maxSparkles = 100 // Maximum number of sparkles at any time

    // Colors for sparkles
    const colors = [
      "rgba(255, 255, 255, 1)", // White
      "rgba(173, 216, 230, 1)", // Light blue
      "rgba(135, 206, 250, 1)", // Sky blue
      "rgba(240, 248, 255, 1)", // Alice blue
    ]

    // Function to create a new sparkle
    const createSparkle = (): Sparkle => {
      const maxLife = Math.random() * 100 + 50 // Life between 50 and 150 frames
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1, // Size between 1 and 4
        opacity: 0, // Start with 0 opacity and fade in
        life: 0,
        maxLife,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 0.7, // Random horizontal movement
        speedY: (Math.random() - 0.5) * 0.7, // Random vertical movement
      }
    }

    // Add initial sparkles
    for (let i = 0; i < maxSparkles / 3; i++) {
      sparkles.push(createSparkle())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Randomly add new sparkles
      if (sparkles.length < maxSparkles && Math.random() > 0.9) {
        sparkles.push(createSparkle())
      }

      // Update and draw sparkles
      for (let i = sparkles.length - 1; i >= 0; i--) {
        const sparkle = sparkles[i]

        // Update life
        sparkle.life++

        // Calculate opacity based on life cycle
        if (sparkle.life < sparkle.maxLife * 0.3) {
          // Fade in
          sparkle.opacity = sparkle.life / (sparkle.maxLife * 0.3)
        } else if (sparkle.life > sparkle.maxLife * 0.7) {
          // Fade out
          sparkle.opacity = (sparkle.maxLife - sparkle.life) / (sparkle.maxLife * 0.3)
        } else {
          // Full opacity in the middle of life
          sparkle.opacity = 1
        }

        // Move sparkle
        sparkle.x += sparkle.speedX
        sparkle.y += sparkle.speedY

        // Remove if it's dead or out of bounds
        if (
          sparkle.life >= sparkle.maxLife ||
          sparkle.x < -10 ||
          sparkle.x > canvas.width + 10 ||
          sparkle.y < -10 ||
          sparkle.y > canvas.height + 10
        ) {
          sparkles.splice(i, 1)
          continue
        }

        // Draw sparkle
        ctx.save()
        ctx.globalAlpha = sparkle.opacity

        // Star shape for larger sparkles
        if (sparkle.size > 2) {
          const spikes = 5
          const outerRadius = sparkle.size
          const innerRadius = sparkle.size / 2

          ctx.beginPath()
          ctx.translate(sparkle.x, sparkle.y)
          ctx.rotate(sparkle.life * 0.01) // Slow rotation

          for (let i = 0; i < spikes * 2; i++) {
            const radius = i % 2 === 0 ? outerRadius : innerRadius
            const angle = Math.PI * 2 * (i / (spikes * 2))
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius

            if (i === 0) {
              ctx.moveTo(x, y)
            } else {
              ctx.lineTo(x, y)
            }
          }

          ctx.closePath()
          ctx.fillStyle = sparkle.color
          ctx.fill()
        } else {
          // Simple circle for smaller sparkles
          ctx.beginPath()
          ctx.arc(sparkle.x, sparkle.y, sparkle.size, 0, Math.PI * 2)
          ctx.fillStyle = sparkle.color
          ctx.fill()
        }

        // Add glow effect
        const glow = ctx.createRadialGradient(sparkle.x, sparkle.y, 0, sparkle.x, sparkle.y, sparkle.size * 3)
        glow.addColorStop(0, `rgba(255, 255, 255, ${sparkle.opacity * 0.3})`)
        glow.addColorStop(1, "rgba(255, 255, 255, 0)")

        ctx.beginPath()
        ctx.arc(sparkle.x, sparkle.y, sparkle.size * 3, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.restore()
      }

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
