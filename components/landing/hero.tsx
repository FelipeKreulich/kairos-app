'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import { Button } from '@/components/ui/button'
import { WavyBackground } from '@/components/ui/wavy-background'
import { ArrowRight, Play } from 'lucide-react'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* Wavy Background */}
      <div className="absolute inset-0 -z-10">
        <WavyBackground />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-2 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-blue-500 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                {t.hero.title}
              </span>
            </h1>
            <p className="mb-6 text-2xl font-light text-muted-foreground sm:text-3xl md:text-4xl">
              {t.hero.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" asChild className="group">
                <Link href="/register">
                  {t.hero.cta}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button size="lg" variant="outline" asChild>
                <Link href="#demo">
                  <Play className="mr-2 h-4 w-4" />
                  {t.hero.secondaryCta}
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mx-auto mt-16 max-w-4xl"
          >
            <div className="aspect-video overflow-hidden rounded-lg border bg-muted/50 shadow-2xl">
              <div className="flex h-full items-center justify-center">
                <Calendar className="h-24 w-24 text-muted-foreground/20" />
              </div>
            </div>

            {/* Floating cards animation */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -right-4 top-8 hidden w-48 rounded-lg border bg-card p-4 shadow-lg md:block"
            >
              <div className="mb-2 h-3 w-3/4 rounded bg-primary/20" />
              <div className="h-2 w-full rounded bg-muted" />
              <div className="mt-1 h-2 w-2/3 rounded bg-muted" />
            </motion.div>

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
              className="absolute -left-4 bottom-8 hidden w-48 rounded-lg border bg-card p-4 shadow-lg md:block"
            >
              <div className="mb-2 flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-green-500" />
                <div className="h-2 w-2/3 rounded bg-muted" />
              </div>
              <div className="h-2 w-full rounded bg-muted" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Calendar({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}
