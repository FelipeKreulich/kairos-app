'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

interface AuroraProps {
  className?: string
}

export function Aurora({ className = '' }: AuroraProps) {
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

    // Apenas 3 cores principais: Azul, Rosa e Laranja
    const colors = [
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 251, g: 146, b: 60 },   // Orange
      { r: 236, g: 72, b: 153 },   // Pink
    ]

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

      // Clear canvas
      ctx.globalCompositeOperation = 'source-over'
      ctx.clearRect(0, 0, width, height)

      // Create aurora layers with triangle distribution
      colors.forEach((color, i) => {
        // Position in stable triangle pattern
        // Blue: top-left, Orange: top-right, Pink: bottom
        const positions = [
          { x: 0.25, y: 0.3 },   // Blue - top-left
          { x: 0.75, y: 0.3 },   // Orange - top-right
          { x: 0.5, y: 0.7 },    // Pink - bottom
        ]

        // Very subtle movement
        const movement = 0.05
        const offsetX = Math.sin(time * 0.0002 + i) * width * movement
        const offsetY = Math.cos(time * 0.0003 + i) * height * movement

        const x = width * positions[i].x + offsetX
        const y = height * positions[i].y + offsetY

        // Larger gradients to fill space
        const outerRadius = Math.max(width, height) * 0.6

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          outerRadius
        )

        // Cores bem vivas no light mode
        const baseOpacity = isDark ? 0.35 : 0.75
        const pulseOpacity = Math.sin(time * 0.001 + i) * 0.05
        const opacity = baseOpacity + pulseOpacity

        // Smoother gradient falloff
        gradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity})`)
        gradient.addColorStop(0.4, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.7})`)
        gradient.addColorStop(0.7, `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity * 0.3})`)
        gradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)

        // Use screen blending for better color mixing
        ctx.globalCompositeOperation = i === 0 ? 'source-over' : 'screen'
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, width, height)
      })

      // Removed shimmer to avoid white washing

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
