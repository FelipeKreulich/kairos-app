'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface WavyBackgroundProps {
  className?: string
}

export function WavyBackground({ className = '' }: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()
  const { theme, systemTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    const currentTheme = theme === 'system' ? systemTheme : theme
    const isDark = currentTheme === 'dark'

    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.scale(dpr, dpr)
    }

    resize()
    window.addEventListener('resize', resize)

    const animate = () => {
      const width = canvas.offsetWidth
      const height = canvas.offsetHeight

      ctx.clearRect(0, 0, width, height)

      // Criar múltiplas ondas com cores diferentes
      const waves = [
        { color: { r: 59, g: 130, b: 246 }, speed: 0.0003, amplitude: 30, offset: 0 },
        { color: { r: 251, g: 146, b: 60 }, speed: 0.0004, amplitude: 25, offset: Math.PI / 3 },
        { color: { r: 236, g: 72, b: 153 }, speed: 0.0002, amplitude: 35, offset: Math.PI * 2 / 3 },
      ]

      waves.forEach((wave, waveIndex) => {
        ctx.beginPath()

        // Opacidade baseada no tema
        const opacity = isDark ? 0.15 : 0.25

        for (let x = 0; x <= width; x += 5) {
          // Calcular altura da onda usando seno
          const y =
            height / 2 +
            Math.sin((x / width) * Math.PI * 4 + time * wave.speed + wave.offset) *
              wave.amplitude +
            Math.sin((x / width) * Math.PI * 2 + time * wave.speed * 1.5 + wave.offset) *
              (wave.amplitude / 2)

          if (x === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }

        // Completar o caminho para criar preenchimento
        ctx.lineTo(width, height)
        ctx.lineTo(0, height)
        ctx.closePath()

        // Criar gradiente vertical
        const gradient = ctx.createLinearGradient(0, 0, 0, height)
        gradient.addColorStop(0, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, 0)`)
        gradient.addColorStop(0.5, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${opacity})`)
        gradient.addColorStop(1, `rgba(${wave.color.r}, ${wave.color.g}, ${wave.color.b}, ${opacity * 0.5})`)

        ctx.fillStyle = gradient
        ctx.fill()
      })

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
  }, [theme, systemTheme])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  )
}
