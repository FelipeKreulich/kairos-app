'use client'

import { useEffect, useRef } from 'react'

interface AuroraProps {
  colorStops?: string[]
  amplitude?: number
  blend?: number
  className?: string
}

export function Aurora({
  colorStops = ['#5227FF', '#7cff67', '#5227FF'],
  amplitude = 1,
  blend = 0.5,
  className = '',
}: AuroraProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Create multiple gradient layers
      for (let i = 0; i < 3; i++) {
        const gradient = ctx.createRadialGradient(
          width / 2 + Math.sin(time * 0.001 + i) * width * 0.3 * amplitude,
          height / 2 + Math.cos(time * 0.0015 + i) * height * 0.3 * amplitude,
          0,
          width / 2,
          height / 2,
          Math.max(width, height) * 0.8
        )

        const color1 = colorStops[i % colorStops.length]
        const color2 = colorStops[(i + 1) % colorStops.length]

        gradient.addColorStop(0, `${color1}${Math.floor(blend * 255).toString(16).padStart(2, '0')}`)
        gradient.addColorStop(1, `${color2}00`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      }

      time++
      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [colorStops, amplitude, blend])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      style={{ mixBlendMode: 'screen' }}
    />
  )
}
