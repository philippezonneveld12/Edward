'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const stats = [
  { value: 100, suffix: '', label: 'Jaar marktleider', description: 'Marktleider in laboratoriuminterieurs' },
  { value: 2400, suffix: '+', label: 'Projecten gerealiseerd', description: 'Verspreid over Europa' },
  { value: 12, suffix: '', label: 'Landen geleverd', description: 'Internationaal netwerk' },
  { value: 98, suffix: '%', label: 'Klanttevredenheid', description: 'Gemeten over 5 jaar' },
]

const processSteps = [
  { number: '01', label: 'Ontwerp', desc: 'Intake, analyse en conceptontwerp' },
  { number: '02', label: 'Engineering', desc: 'Technische uitwerking en CAD' },
  { number: '03', label: 'Productie', desc: 'Fabricage in eigen fabriek NL' },
  { number: '04', label: 'Installatie', desc: 'Montage en oplevering op locatie' },
]

function useCountUp(target: number, duration: number = 1800, start: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        requestAnimationFrame(step)
      }
    }
    requestAnimationFrame(step)
  }, [start, target, duration])

  return count
}

interface StatCardProps {
  stat: (typeof stats)[0]
  index: number
  inView: boolean
}

function StatCard({ stat, index, inView }: StatCardProps) {
  const count = useCountUp(stat.value, 1600 + index * 200, inView)

  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: EASE }}
    >
      <div className="font-serif text-sb-text font-light mb-2" style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', lineHeight: '1', letterSpacing: '-0.02em' }}>
        <span>{inView ? count : 0}</span>
        <span className="text-sb-accent">{stat.suffix}</span>
      </div>
      <p className="font-sans font-medium text-sb-text text-base mb-1">
        {stat.label}
      </p>
      <p className="font-sans font-light text-sb-text-dim text-sm">
        {stat.description}
      </p>
    </motion.div>
  )
}

export default function TrustAuthority() {
  const sectionRef = useRef<HTMLElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="vertrouwen"
      ref={sectionRef}
      aria-label="Vertrouwen en autoriteit"
      className="section-padding bg-sb-surface"
    >
      <div className="container-sb">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">Autoriteit</p>
          <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
            Bewezen in<br />de praktijk.
          </h2>
        </motion.div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-20">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>

        <hr className="rule mb-16" />

        {/* Three columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Column 1: European Manufacturing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
          >
            <h3 className="font-sans font-medium text-sb-text text-base mb-4 tracking-tight">
              Europese Fabricage
            </h3>
            <p className="font-sans font-light text-sb-text-muted text-sm mb-6" style={{ lineHeight: '1.75' }}>
              Alle producten worden geproduceerd in onze eigen fabriek in Nederland. Volledige controle over kwaliteit, levertijden en maatvoering — van tekentafel tot installatie.
            </p>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 border border-sb-border text-sb-text-dim font-sans text-xs tracking-widest uppercase"
            >
              🇳🇱 Made in Netherlands
            </div>
          </motion.div>

          {/* Column 2: Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          >
            <h3 className="font-sans font-medium text-sb-text text-base mb-4 tracking-tight">
              Certificeringen
            </h3>
            <p className="font-sans font-light text-sb-text-muted text-sm mb-6" style={{ lineHeight: '1.75' }}>
              S+B Groep is gecertificeerd volgens de hoogste internationale normen.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {['NEN-EN', 'ISO 9001', 'ARBO', 'VPR', 'ATEX', 'CE'].map((cert) => (
                <div
                  key={cert}
                  className="flex items-center justify-center px-3 py-2.5 border border-sb-border text-sb-text-dim font-sans text-xs tracking-widest uppercase text-center"
                >
                  {cert}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Process */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          >
            <h3 className="font-sans font-medium text-sb-text text-base mb-6 tracking-tight">
              Ons Proces
            </h3>
            <div className="flex flex-col gap-0">
              {processSteps.map((step, i) => (
                <div key={step.number} className="flex gap-4 relative">
                  {/* Vertical line connector */}
                  {i < processSteps.length - 1 && (
                    <div
                      className="absolute left-[11px] top-7 w-px bg-sb-border"
                      style={{ height: 'calc(100% + 0px)', bottom: 0 }}
                      aria-hidden="true"
                    />
                  )}
                  {/* Dot */}
                  <div className="flex flex-col items-center pt-1 shrink-0">
                    <div
                      className="w-[22px] h-[22px] rounded-full border border-sb-border flex items-center justify-center shrink-0 bg-sb-surface z-10"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-sb-accent" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="pb-7">
                    <p className="font-sans font-medium text-sb-text text-sm leading-snug">
                      {step.label}
                    </p>
                    <p className="font-sans font-light text-sb-text-dim text-xs mt-0.5" style={{ lineHeight: '1.6' }}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
