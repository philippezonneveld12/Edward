'use client'

import { motion } from 'framer-motion'
import { Shield, Activity, Wind, Leaf, Layers, Settings2 } from 'lucide-react'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const icons = [Shield, Activity, Wind, Leaf, Layers, Settings2]

export default function ExpertiseSection() {
  const t = useTranslation()

  return (
    <section id="expertise" aria-label="Expertise & Vakkennis" className="section-padding bg-sb-surface">
      <div className="container-sb">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">{t.expertise.overline}</p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              {t.expertise.heading[0]}<br />{t.expertise.heading[1]}
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-md" style={{ lineHeight: '1.75' }}>
              {t.expertise.subheading}
            </p>
          </div>
        </motion.div>

        <hr className="rule mb-14" />

        {/* Pillars grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-sb-border">
          {t.expertise.pillars.map((pillar, i) => {
            const Icon = icons[i]
            return (
              <motion.div
                key={pillar.label}
                className="relative bg-sb-surface expertise-card p-8 group transition-colors duration-500 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
              >
                {/* Left accent border */}
                <div
                  className="absolute left-0 top-6 bottom-6 w-px transition-all duration-500"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, #B8A98C, transparent)',
                    opacity: 0.4,
                  }}
                  aria-hidden="true"
                />
                <div
                  className="absolute left-0 top-6 bottom-6 w-px group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to bottom, transparent, #B8A98C, transparent)',
                    opacity: 0,
                  }}
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="mb-5">
                  <Icon
                    size={20}
                    className="text-sb-accent opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Label */}
                <h3 className="font-sans font-medium text-sb-text text-base mb-3 tracking-tight">
                  {pillar.label}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-sb-text-dim text-sm" style={{ lineHeight: '1.75' }}>
                  {pillar.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
