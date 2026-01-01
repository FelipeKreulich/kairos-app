'use client'

import Link from 'next/link'
import { useLanguage } from '@/components/providers/language-provider'
import { Calendar } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = {
    product: {
      title: t.footer.product,
      links: [
        { name: t.footer.features, href: '#features' },
        { name: t.footer.pricing, href: '#pricing' },
        { name: t.footer.changelog, href: '/changelog' },
      ],
    },
    company: {
      title: t.footer.company,
      links: [
        { name: t.footer.about, href: '/about' },
        { name: t.footer.blog, href: '/blog' },
        { name: t.footer.careers, href: '/careers' },
      ],
    },
    legal: {
      title: t.footer.legal,
      links: [
        { name: t.footer.privacy, href: '/privacy' },
        { name: t.footer.terms, href: '/terms' },
      ],
    },
  }

  return (
    <footer className="border-t bg-muted/30">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center space-x-2">
              <Calendar className="h-6 w-6" />
              <span className="text-xl font-bold">Kairos</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t.hero.description}
            </p>
          </div>

          {/* Links */}
          {Object.values(footerLinks).map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
