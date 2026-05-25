'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const units = [
  {
    number: '01',
    name: 'S+B Lab',
    tagline: 'Laboratoriuminterieurs voor onderzoek en industrie',
    description:
      'Van universitaire onderzoekslaboratoria tot industriële QC-labs. S+B Lab ontwerpt en produceert complete laboratoriumomgevingen met bijbehorende installaties, extractie en veiligheidsvoorzieningen.',
    color: '#141820',
    gradient: 'linear-gradient(135deg, #141820 0%, #0E1016 100%)',
    link: '#divisies',
  },
  {
    number: '02',
    name: 'S+B Scholen',
    tagline: 'Practicumlokalen en onderwijsomgevingen',
    description:
      'Praktijklokalen voor MBO, HBO en universiteiten. S+B Scholen realiseert flexibele, veilige leeromgevingen die voldoen aan de strengste onderwijsnormen en decennialang meegaan.',
    color: '#1C1810',
    gradient: 'linear-gradient(135deg, #1C1810 0%, #121008 100%)',
    link: '#divisies',
  },
  {
    number: '03',
    name: 'Solid Factory',
    tagline: 'Industriële werkplekken en maatwerk productie',
    description:
      'Zware industriële werkstations, assemblagelijnen en testomgevingen. Solid Factory levert robuuste oplossingen voor de maakindustrie, met focus op ergonomie, veiligheid en efficiëntie.',
    color: '#151618',
    gradient: 'linear-gradient(135deg, #181A1C 0%, #0E1012 100%)',
    link: '#divisies',
  },
  {
    number: '04',
    name: 'Labair',
    tagline: 'Luchttechnische oplossingen en ventilatie',
    description:
      'Specialistische ventilatie- en extractiesystemen voor laboratoriumomgevingen. Labair ontwerpt en installeert luchttechnische systemen conform de hoogste veiligheidsnormen.',
    color: '#141C1C',
    gradient: 'linear-gradient(135deg, #141C1C 0%, #0C1414 100%)',
    link: '#divisies',
  },
  {
    number: '05',
    name: 'Schaik & Berghuis',
    tagline: 'De groep achter de merken',
    description:
      'De moederorganisatie die strategie, engineering, fabricage en installatie integreert onder één dak. Opgericht in 1987, actief in 12 landen, met een eigen productiefaciliteit in Nederland.',
    color: '#181614',
    gradient: 'linear-gradient(135deg, #181614 0%, #100E0C 100%)',
    link: '#contact',
  },
]

export default function BusinessUnits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="divisies" aria-label="Onze Divisies" className="section-padding bg-sb-black">
      <div className="container-sb mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">Divisies</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              Onze<br />Divisies.
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm" style={{ lineHeight: '1.7' }}>
              Vijf gespecialiseerde divisies onder één groep. Elk merk is marktleider in zijn segment.
            </p>
          </div>
        </motion.div>
      </div>

      <div className="w-full border-t border-sb-border">
        {units.map((unit, i) => (
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
              style={{ background: unit.gradient }}
              animate={{
                opacity: hoveredIndex === i ? 1 : 0,
              }}
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
                          {unit.description}
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
                      {unit.tagline}
                    </p>
                  </div>
                </div>

                {/* Right: link */}
                <a
                  href={unit.link}
                  className="inline-flex items-center gap-2 text-sb-text-muted hover:text-sb-accent text-sm font-sans font-light tracking-wide transition-colors duration-300 group shrink-0 ml-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="hidden sm:inline">Ontdek</span>
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
        ))}
      </div>
    </section>
  )
}
