'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import DotGrid from '@/components/ui/dot-grid'
import { NoiseBackground } from '@/components/ui/noise-background'
import { ArrowRight } from 'lucide-react'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border bg-card p-8 md:p-12 lg:p-16"
        >
          {/* DotGrid Background */}
          <div className="absolute inset-0">
            <DotGrid
              dotSize={4}
              gap={20}
              baseColor="#3b82f6"
              activeColor="#ec4899"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl"
            >
              {t.cta.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 text-lg font-medium text-muted-foreground"
            >
              {t.cta.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-flex"
              >
                <NoiseBackground
                  containerClassName="rounded-lg inline-flex p-1"
                  gradientColors={["rgb(59, 130, 246)", "rgb(236, 72, 153)", "rgb(251, 146, 60)"]}
                  speed={0.15}
                  noiseIntensity={0.2}
                >
                  <Link
                    href="/register"
                    className="group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md bg-background px-6 py-3 text-base font-medium text-foreground transition-colors hover:bg-background/90"
                  >
                    {t.cta.button}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </NoiseBackground>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
