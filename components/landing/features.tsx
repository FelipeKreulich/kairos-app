'use client'

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import {
  Calendar,
  ClipboardList,
  StickyNote,
  Palette,
  RefreshCw,
  Grip,
} from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Calendar,
      title: t.features.calendar.title,
      description: t.features.calendar.description,
    },
    {
      icon: ClipboardList,
      title: t.features.events.title,
      description: t.features.events.description,
    },
    {
      icon: StickyNote,
      title: t.features.notes.title,
      description: t.features.notes.description,
    },
    {
      icon: Grip,
      title: t.features.dragdrop.title,
      description: t.features.dragdrop.description,
    },
    {
      icon: Palette,
      title: t.features.themes.title,
      description: t.features.themes.description,
    },
    {
      icon: RefreshCw,
      title: t.features.sync.title,
      description: t.features.sync.description,
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {t.features.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.features.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className="group relative overflow-hidden rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>

              {/* Decorative gradient */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 opacity-0 blur-2xl transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
