'use client'

import { motion } from 'framer-motion'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

export default function ContactSection() {
  const t = useTranslation()

  return (
    <section id="contact" aria-label="Contact" className="section-padding bg-sb-black">
      <div className="container-sb">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          {/* Left: heading */}
          <div className="lg:max-w-lg">
            <p className="overline mb-4">{t.contact.overline}</p>
            <h2 className="font-serif text-display-lg text-sb-text font-light mb-6">
              {t.contact.heading[0]}<br />{t.contact.heading[1]}
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base" style={{ lineHeight: '1.75' }}>
              {t.contact.subheading}
            </p>
          </div>

          {/* Right: contact details + CTA */}
          <div className="flex flex-col gap-8 lg:items-end">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="font-sans text-sb-text-dim text-xs tracking-widest uppercase">
                  {t.contact.emailLabel}
                </span>
                <a
                  href="mailto:info@splusb.nl"
                  className="font-sans font-light text-sb-text text-lg hover:text-sb-accent transition-colors duration-300"
                >
                  info@splusb.nl
                </a>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-sans text-sb-text-dim text-xs tracking-widest uppercase">
                  {t.contact.phoneLabel}
                </span>
                <a
                  href="tel:+31102582580"
                  className="font-sans font-light text-sb-text text-lg hover:text-sb-accent transition-colors duration-300"
                >
                  +31 10 258 25 80
                </a>
              </div>
            </div>

            <a
              href="mailto:info@splusb.nl?subject=Projectgesprek plannen"
              className="inline-flex items-center gap-3 px-8 py-4 font-sans font-light text-sm tracking-widest uppercase transition-all duration-300"
              style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'rgba(184,169,140,0.08)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.backgroundColor = 'transparent'
              }}
            >
              {t.contact.cta}
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
