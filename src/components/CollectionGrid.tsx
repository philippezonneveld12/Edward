'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const categoryMeta = [
  { number: '01', image: '/images/brochure/rot-000.jpg', imageAlt: 'S+B laboratoriumwerkbanken — open lab met blauwe accenten', large: true,  href: 'https://www.splusb.nl/lab' },
  { number: '02', image: '/images/brochure/rot-015.jpg', imageAlt: 'S+B practicumlokaal — lichte omgeving met extractiearm', large: false,   href: 'https://www.splusb.nl/scholen' },
  { number: '03', image: '/images/danone.jpg',            imageAlt: 'Cleanroom interieur S+B', large: false,                                    href: 'https://www.splusb.nl/lab' },
  { number: '04', image: '/images/brochure/rot-014.jpg', imageAlt: 'S+B industriële werkplekken — grijze werkstations met grote ramen', large: false, href: 'https://www.splusb.nl/solid-factory' },
  { number: '05', image: '/images/brochure/rot-002.jpg', imageAlt: 'S+B afzuigkasten — S+B zuurkasten met blauwe accenten', large: true,       href: 'https://www.splusb.nl/labair' },
  { number: '06', image: '/images/brochure/rot-016.jpg', imageAlt: 'S+B opslagsystemen — werkstations met geïntegreerde opslag', large: false, href: 'https://www.splusb.nl/lab' },
  { number: '07', image: '/images/brochure/rot-011.jpg', imageAlt: 'S+B ergonomische werkplekken — witte ovale werkbanken met blauw blad', large: false, href: 'https://www.splusb.nl/solid-factory' },
  { number: '08', image: '/images/brochure/rot-001.jpg', imageAlt: 'S+B technische werkbanken — lab met groene accenten en grote ramen', large: false, href: 'https://www.splusb.nl/solid-factory' },
]

interface CardProps {
  meta: (typeof categoryMeta)[0]
  name: string
  description: string
  viewLabel: string
  index: number
  gridClass?: string
}

function CollectionCard({ meta, name, description, viewLabel, index, gridClass }: CardProps) {
  return (
    <motion.a
      href={meta.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`collection-card relative overflow-hidden cursor-pointer group bg-sb-surface block${gridClass ? ` ${gridClass}` : ''}`}
      style={{
        minHeight: meta.large ? '420px' : '300px',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
      whileHover={{ scale: 1.012 }}
    >
      <Image
        src={meta.image}
        alt={meta.imageAlt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="transition-transform duration-700 group-hover:scale-105 opacity-75"
      />

      <div
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
        aria-hidden="true"
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, transparent 60%, rgba(11,11,9,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative z-10 flex flex-col justify-between p-6 md:p-8"
        style={{ height: '100%', minHeight: 'inherit' }}
      >
        <span
          className="font-sans block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.4)' }}
        >
          {meta.number}
        </span>

        <div>
          <h3
            className="font-serif font-light mb-2"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: '1.1', color: '#F4F1EC' }}
          >
            {name}
          </h3>
          <p className="font-sans font-light text-sm mb-4" style={{ lineHeight: '1.6', color: 'rgba(244,241,236,0.65)' }}>
            {description}
          </p>
          <div className="flex items-center gap-2 text-sm font-sans font-light" style={{ color: '#C4B49A' }}>
            <span>{viewLabel}</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </div>
      </div>
    </motion.a>
  )
}

export default function CollectionGrid() {
  const t = useTranslation()

  return (
    <section id="collectie" aria-label="Collectie overzicht" className="section-padding bg-sb-black">
      <div className="container-sb">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">{t.collection.overline}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              {t.collection.heading[0]}<br />{t.collection.heading[1]}
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm md:text-right" style={{ lineHeight: '1.7' }}>
              {t.collection.subheading}
            </p>
          </div>
        </motion.div>

        <hr className="rule mb-10" />

        {/* Unified responsive grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <CollectionCard meta={categoryMeta[0]} name={t.collection.categories[0].name} description={t.collection.categories[0].description} viewLabel={t.collection.viewLabel} index={0} gridClass="lg:col-span-2" />
          <CollectionCard meta={categoryMeta[1]} name={t.collection.categories[1].name} description={t.collection.categories[1].description} viewLabel={t.collection.viewLabel} index={1} />
          <CollectionCard meta={categoryMeta[2]} name={t.collection.categories[2].name} description={t.collection.categories[2].description} viewLabel={t.collection.viewLabel} index={2} />
          <CollectionCard meta={categoryMeta[3]} name={t.collection.categories[3].name} description={t.collection.categories[3].description} viewLabel={t.collection.viewLabel} index={3} gridClass="lg:col-start-2 lg:col-span-2" />
          <CollectionCard meta={categoryMeta[4]} name={t.collection.categories[4].name} description={t.collection.categories[4].description} viewLabel={t.collection.viewLabel} index={4} />
          <CollectionCard meta={categoryMeta[5]} name={t.collection.categories[5].name} description={t.collection.categories[5].description} viewLabel={t.collection.viewLabel} index={5} />
          <CollectionCard meta={categoryMeta[6]} name={t.collection.categories[6].name} description={t.collection.categories[6].description} viewLabel={t.collection.viewLabel} index={6} />
          <CollectionCard meta={categoryMeta[7]} name={t.collection.categories[7].name} description={t.collection.categories[7].description} viewLabel={t.collection.viewLabel} index={7} />
        </div>
      </div>
    </section>
  )
}
