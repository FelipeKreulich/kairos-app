'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import { Button } from '@/components/ui/button'
import { Home, Mail, Clock, Calendar } from 'lucide-react'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'

export default function NotFound() {
  const { t } = useLanguage()
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      rotate: [0, 5, -5, 0],
      transition: { duration: 2, repeat: Infinity, ease: 'easeInOut' },
    })
  }, [controls])

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e
    setMousePosition({ x: clientX, y: clientY })
  }

  // Floating numbers animation
  const floatingNumbers = [
    { number: '4', delay: 0, x: -100, y: -50 },
    { number: '0', delay: 0.2, x: 50, y: -80 },
    { number: '4', delay: 0.4, x: 120, y: 30 },
    { number: '?', delay: 0.6, x: -80, y: 60 },
    { number: '⏰', delay: 0.8, x: 150, y: -20 },
    { number: '⌛', delay: 1, x: -120, y: -90 },
  ]

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-4"
      onMouseMove={handleMouseMove}
    >
      {/* Header with theme and language toggles */}
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      {/* Animated background grid */}
      <div className="absolute inset-0 -z-10 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Floating particles */}
      <div className="absolute inset-0 -z-10">
        {floatingNumbers.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: item.x,
              y: item.y,
            }}
            transition={{
              duration: 3,
              delay: item.delay,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute left-1/2 top-1/2 text-6xl font-bold text-muted-foreground/20"
          >
            {item.number}
          </motion.div>
        ))}
      </div>

      {/* Broken clock animation */}
      <motion.div
        animate={controls}
        className="absolute left-1/2 top-1/4 -translate-x-1/2"
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Clock className="h-32 w-32 text-muted-foreground/10" />
        </motion.div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Glitch 404 */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <motion.h1
            animate={{
              textShadow: [
                '0 0 0px rgba(255,255,255,0)',
                '0 0 20px rgba(147,51,234,0.5)',
                '0 0 0px rgba(255,255,255,0)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-[150px] font-bold leading-none sm:text-[200px] md:text-[250px]"
            style={{
              background: 'linear-gradient(to right, hsl(var(--primary)), hsl(var(--muted)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            {t.notFound.code}
          </motion.h1>

          {/* Glitch effect overlays */}
          <motion.div
            animate={{
              x: [-2, 2, -2],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="absolute inset-0 text-[150px] font-bold leading-none text-red-500/20 sm:text-[200px] md:text-[250px]"
          >
            {t.notFound.code}
          </motion.div>
        </motion.div>

        {/* Title and description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {t.notFound.title}
          </h2>
          <p className="text-lg text-muted-foreground sm:text-xl">
            {t.notFound.subtitle}
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-8 max-w-md text-muted-foreground"
        >
          {t.notFound.description}
        </motion.p>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" asChild className="group">
            <Link href="/">
              <Home className="mr-2 h-4 w-4 transition-transform group-hover:-translate-y-1" />
              {t.notFound.homeButton}
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="mailto:support@kairos.com">
              <Mail className="mr-2 h-4 w-4" />
              {t.notFound.contactButton}
            </Link>
          </Button>
        </motion.div>

        {/* Suggestions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <p className="mb-4 text-sm text-muted-foreground">
            {t.notFound.suggestions}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { label: t.nav.features, href: '/#features' },
              { label: t.nav.pricing, href: '/#pricing' },
              { label: t.nav.about, href: '/#about' },
            ].map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className="rounded-full border bg-card px-4 py-2 text-sm transition-colors hover:bg-accent"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Interactive calendar icon that follows mouse */}
      <motion.div
        className="pointer-events-none absolute"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
        }}
      >
        <Calendar className="h-8 w-8 text-primary/20" />
      </motion.div>

      {/* Gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
      />
    </div>
  )
}
