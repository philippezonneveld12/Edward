'use client'

import { motion } from 'framer-motion'
import { Linkedin, ArrowUpRight } from 'lucide-react'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const divisions = [
  { name: 'S+B Lab', href: '#divisies' },
  { name: 'S+B Scholen', href: '#divisies' },
  { name: 'Solid Factory', href: '#divisies' },
  { name: 'Labair', href: '#divisies' },
  { name: 'Schaik & Berghuis', href: '#divisies' },
]

const serviceHrefs = ['#collectie', '#collectie', '#collectie', '#collectie', '#collectie', '#collectie']

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslation()

  return (
    <footer
      aria-label="Footer"
      className="bg-sb-black"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      <div className="container-sb">
        <motion.div
          className="py-16 lg:py-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE }}
        >
          {/* Top: Logo + tagline */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14 pb-14 border-b border-sb-border">
            <a
              href="/"
              className="font-serif text-3xl font-light text-sb-text hover:text-sb-accent transition-colors duration-300"
              style={{ letterSpacing: '-0.02em' }}
              aria-label="S+B Groep homepagina"
            >
              S<span className="text-sb-accent">+</span>B
            </a>
            <p className="font-sans font-light text-sb-text-muted text-sm max-w-sm" style={{ lineHeight: '1.7' }}>
              {t.footer.tagline}
            </p>
          </div>

          {/* 5-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Column 1: Company */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                {t.footer.companyHeading}
              </h4>
              <div className="space-y-3">
                <p className="font-sans font-light text-sb-text-muted text-sm" style={{ lineHeight: '1.7' }}>
                  Schaik & Berghuis Groep B.V.<br />
                  Postbus 256<br />
                  2900 AG Capelle aan den IJssel<br />
                  Nederland
                </p>
              </div>
            </div>

            {/* Column 2: Divisions */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                {t.footer.divisionsHeading}
              </h4>
              <ul className="space-y-2.5" role="list">
                {divisions.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="font-sans font-light text-sb-text-muted text-sm hover:text-sb-text transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                {t.footer.servicesHeading}
              </h4>
              <ul className="space-y-2.5" role="list">
                {t.footer.services.map((name, i) => (
                  <li key={i}>
                    <a
                      href={serviceHrefs[i]}
                      className="font-sans font-light text-sb-text-muted text-sm hover:text-sb-text transition-colors duration-300"
                    >
                      {name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                {t.footer.contactHeading}
              </h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:info@splusb.nl"
                  className="block font-sans font-light text-sb-text-muted text-sm hover:text-sb-accent transition-colors duration-300"
                >
                  info@splusb.nl
                </a>
                <a
                  href="tel:+31102582580"
                  className="block font-sans font-light text-sb-text-muted text-sm hover:text-sb-accent transition-colors duration-300"
                >
                  +31 (0)10 258 25 80
                </a>
              </div>
              <a
                href="mailto:info@splusb.nl?subject=Projectgesprek plannen"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-sb-border text-sb-accent text-xs font-sans font-light tracking-widest uppercase hover:border-sb-accent transition-all duration-300"
              >
                {t.footer.cta}
              </a>
            </div>

            {/* Column 5: Social */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                {t.footer.followHeading}
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://www.linkedin.com/company/splusb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sb-text-muted text-sm font-sans font-light hover:text-sb-accent transition-colors duration-300 group"
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                  LinkedIn
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-sb-border">
          <p className="font-sans font-light text-sb-text-dim text-xs order-2 md:order-1">
            © {currentYear} Schaik & Berghuis Groep B.V. — {t.footer.copyright}
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <a
              href="/privacy"
              className="font-sans font-light text-sb-text-dim text-xs hover:text-sb-text-muted transition-colors duration-300"
            >
              {t.footer.privacyLabel}
            </a>
            <a
              href="/sitemap"
              className="font-sans font-light text-sb-text-dim text-xs hover:text-sb-text-muted transition-colors duration-300"
            >
              {t.footer.sitemapLabel}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
