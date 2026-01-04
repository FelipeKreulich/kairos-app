'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { useLanguage } from '@/components/providers/language-provider'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageToggle } from '@/components/language-toggle'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'

export function Header() {
  const { t } = useLanguage()

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Calendar className="h-6 w-6" />
          <span className="text-xl font-bold">Kairos</span>
        </Link>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          <LanguageToggle />
          <Button variant="ghost" asChild className="hidden sm:inline-flex">
            <Link href="/login">{t.nav.login}</Link>
          </Button>
          <Button asChild>
            <Link href="/register">{t.nav.signup}</Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
