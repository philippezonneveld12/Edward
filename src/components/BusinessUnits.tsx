'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/contexts/ThemeContext'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const unitMeta = [
  { number: '01', name: 'S+B Lab',            lightGradient: 'linear-gradient(135deg, #E4E9F2 0%, #DCE3EE 100%)', darkGradient: 'linear-gradient(135deg, #141820 0%, #0E1016 100%)', link: 'https://www.splusb.nl/lab' },
  { number: '02', name: 'S+B Scholen',         lightGradient: 'linear-gradient(135deg, #F0E8DB 0%, #E8DDD0 100%)', darkGradient: 'linear-gradient(135deg, #1C1810 0%, #121008 100%)', link: 'https://www.splusb.nl/scholen' },
  { number: '03', name: 'Solid Factory',        lightGradient: 'linear-gradient(135deg, #E2E5EA 0%, #DADDE4 100%)', darkGradient: 'linear-gradient(135deg, #181A1C 0%, #0E1012 100%)', link: 'https://www.splusb.nl/solid-factory' },
  { number: '04', name: 'Labair',               lightGradient: 'linear-gradient(135deg, #DEE9EA 0%, #D4E2E4 100%)', darkGradient: 'linear-gradient(135deg, #141C1C 0%, #0C1414 100%)', link: 'https://www.splusb.nl/labair' },
  { number: '05', name: 'Schaik & Berghuis',    lightGradient: 'linear-gradient(135deg, #EAE6E0 0%, #E2DED8 100%)', darkGradient: 'linear-gradient(135deg, #181614 0%, #100E0C 100%)', link: 'https://www.splusb.nl' },
]

export default function BusinessUnits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { theme } = useTheme()
  const isDark = theme === 'dark'
  const t = useTranslation()

  return (
    <section id="divisies" aria-label="Onze Divisies" className="section-padding bg-sb-black">
      <div className="container-sb mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">{t.businessUnits.overline}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              {t.businessUnits.heading[0]}<br />{t.businessUnits.heading[1]}
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm" style={{ lineHeight: '1.7' }}>
              {t.businessUnits.subheading}
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-sb-border">
        {unitMeta.map((unit, i) => {
          const unitT = t.businessUnits.units[i]
          return (
            <motion.div
              key={unit.number}
              className="relative w-full border-b border-sb-border overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background layer */}
              <motion.div
                className="absolute inset-0"
                style={{ background: isDark ? unit.darkGradient : unit.lightGradient }}
                animate={{ opacity: hoveredIndex === i ? 1 : 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                aria-hidden="true"
              />

              <div className="relative z-10 container-sb">
                <motion.div
                  className="flex items-center justify-between"
                  animate={{
                    paddingTop: hoveredIndex === i ? '2.5rem' : '1.75rem',
                    paddingBottom: hoveredIndex === i ? '2.5rem' : '1.75rem',
                  }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  {/* Left content */}
                  <div className="flex items-center gap-8 md:gap-16">
                    <span
                      className="font-sans text-sb-text-dim hidden md:block"
                      style={{ fontSize: '0.6875rem', letterSpacing: '0.2em' }}
                    >
                      {unit.number}
                    </span>

                    <div>
                      <h3 className="font-serif text-sb-text font-light" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: '1.1' }}>
                        {unit.name}
                      </h3>
                      <AnimatePresence>
                        {hoveredIndex === i && (
                          <motion.p
                            className="font-sans font-light text-sb-text-muted text-sm mt-1 max-w-lg"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: EASE }}
                            style={{ lineHeight: '1.7' }}
                          >
                            {unitT.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                      <p
                        className="font-sans font-light mt-1"
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-text-dim)',
                          lineHeight: '1.6',
                          display: hoveredIndex === i ? 'none' : 'block',
                        }}
                      >
                        {unitT.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Right: link */}
                  <a
                    href={unit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sb-text-muted hover:text-sb-accent text-sm font-sans font-light tracking-wide transition-colors duration-300 group shrink-0 ml-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="hidden sm:inline">{t.businessUnits.discoverLabel}</span>
                    <motion.span
                      animate={{ x: hoveredIndex === i ? 4 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                    >
                      →
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
