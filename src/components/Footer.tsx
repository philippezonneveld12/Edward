'use client'

import { motion } from 'framer-motion'
import { Linkedin, Instagram, ArrowUpRight } from 'lucide-react'

const EASE = [0.16, 1, 0.3, 1] as const

const divisions = [
  { name: 'S+B Lab', href: '#divisies' },
  { name: 'S+B Scholen', href: '#divisies' },
  { name: 'Solid Factory', href: '#divisies' },
  { name: 'Labair', href: '#divisies' },
  { name: 'Schaik & Berghuis', href: '#divisies' },
]

const services = [
  { name: 'Labomeubilair', href: '#collectie' },
  { name: 'Practicumlokalen', href: '#collectie' },
  { name: 'Cleanrooms', href: '#collectie' },
  { name: 'Industriële interieurs', href: '#collectie' },
  { name: 'Ventilatiesystemen', href: '#collectie' },
  { name: 'Technische werkbanken', href: '#collectie' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      aria-label="Footer"
      className="bg-sb-black"
      style={{ borderTop: '1px solid var(--color-border)' }}
    >
      {/* Main footer content */}
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
              Specialist in laboratoriuminterieurs, practicumlokalen en industriële werkplekken op maat. Opgericht 1987, actief in Europa.
            </p>
          </div>

          {/* 5-column grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {/* Column 1: Company */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                S+B Groep
              </h4>
              <div className="space-y-3">
                <p className="font-sans font-light text-sb-text-muted text-sm" style={{ lineHeight: '1.7' }}>
                  Schaik & Berghuis Groep B.V.<br />
                  Nederland
                </p>
                <p className="font-sans font-light text-sb-text-dim text-xs" style={{ lineHeight: '1.7' }}>
                  KvK: 00000000<br />
                  BTW: NL000000000B00
                </p>
              </div>
            </div>

            {/* Column 2: Divisies */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                Divisies
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

            {/* Column 3: Diensten */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                Diensten
              </h4>
              <ul className="space-y-2.5" role="list">
                {services.map((item) => (
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

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                Contact
              </h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:info@splusb.nl"
                  className="block font-sans font-light text-sb-text-muted text-sm hover:text-sb-accent transition-colors duration-300"
                >
                  info@splusb.nl
                </a>
                <a
                  href="tel:+31000000000"
                  className="block font-sans font-light text-sb-text-muted text-sm hover:text-sb-accent transition-colors duration-300"
                >
                  +31 (0)00 000 0000
                </a>
              </div>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-sb-accent/40 text-sb-accent text-xs font-sans font-light tracking-widest uppercase hover:border-sb-accent hover:bg-sb-accent/10 transition-all duration-300"
              >
                Offerte aanvragen
              </a>
            </div>

            {/* Column 5: Social */}
            <div>
              <h4 className="font-sans font-medium text-sb-text text-xs tracking-widest uppercase mb-5">
                Volg ons
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
                <a
                  href="https://www.instagram.com/splusb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 text-sb-text-muted text-sm font-sans font-light hover:text-sb-accent transition-colors duration-300 group"
                >
                  <Instagram size={16} strokeWidth={1.5} />
                  Instagram
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 py-6 border-t border-sb-border"
        >
          <p className="font-sans font-light text-sb-text-dim text-xs order-2 md:order-1">
            © {currentYear} Schaik & Berghuis Groep B.V. — Alle rechten voorbehouden.
          </p>

          <div className="flex items-center gap-6 order-1 md:order-2">
            <a
              href="/privacy"
              className="font-sans font-light text-sb-text-dim text-xs hover:text-sb-text-muted transition-colors duration-300"
            >
              Privacy
            </a>
            <a
              href="/sitemap"
              className="font-sans font-light text-sb-text-dim text-xs hover:text-sb-text-muted transition-colors duration-300"
            >
              Sitemap
            </a>
            <div className="flex items-center gap-2">
              <button className="font-sans font-light text-sb-accent text-xs hover:text-sb-accent-light transition-colors duration-300 tracking-wide">
                NL
              </button>
              <span className="text-sb-text-dim text-xs">/</span>
              <button className="font-sans font-light text-sb-text-dim text-xs hover:text-sb-text-muted transition-colors duration-300 tracking-wide">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
