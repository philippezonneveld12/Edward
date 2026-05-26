'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const productMeta = [
  { number: '01', materials: ['HPL', '316L Staal', 'Epoxy'], image: '/images/brochure/rot-000.jpg', imageAlt: 'S+B laboratoriumwerkbanken — open lab met witte werkbanken en marine blauwe accenten', imageLeft: true },
  { number: '02', materials: ['Poedercoating', 'Polypropeen', 'Staal'], image: '/images/brochure/rot-006.jpg', imageAlt: 'S+B afzuigkasten — S+B branded zuurkasten met VAV-regeling', imageLeft: false },
  { number: '03', materials: ['Gecoat Staal', 'Aluminium', 'Veiligheidslas'], image: '/images/brochure/rot-016.jpg', imageAlt: 'S+B opslagsystemen — werkstations met geïntegreerde opslageenheden', imageLeft: true },
  { number: '04', materials: ['HPL', 'Gepoedercoat Staal', 'Aluminium'], image: '/images/brochure/rot-010.jpg', imageAlt: 'S+B maatwerk werkstations — witte ronde eilandwerkbanken met blauwe accenten in grote ruimte', imageLeft: false },
]

interface ProductSectionProps {
  index: number
}

function ProductSection({ index }: ProductSectionProps) {
  const t = useTranslation()
  const meta = productMeta[index]
  const item = t.products.items[index]
  const isLeft = meta.imageLeft

  return (
    <motion.article
      className={`flex flex-col lg:flex-row border-b border-sb-border ${isLeft ? '' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE }}
      aria-label={item.title}
    >
      {/* Image — 58% */}
      <div
        className="relative lg:w-[58%] overflow-hidden group"
        style={{ minHeight: '480px' }}
      >
        <Image
          src={meta.image}
          alt={meta.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content — 42% */}
      <div className="lg:w-[42%] bg-sb-surface flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-14 lg:py-20">
        <span
          className="font-sans text-sb-text-dim mb-6 block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}
        >
          {meta.number} / {String(productMeta.length).padStart(2, '0')}
        </span>

        <h3
          className="font-serif text-sb-text font-light mb-3 leading-none"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
        >
          {item.title}
        </h3>

        <p className="font-sans font-light text-sb-accent text-sm mb-7 tracking-wide">
          {item.subtitle}
        </p>

        <div className="w-12 h-px bg-sb-border mb-7" aria-hidden="true" />

        <p
          className="font-sans font-light text-sb-text-muted text-base mb-8"
          style={{ lineHeight: '1.8' }}
        >
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {meta.materials.map((mat) => (
            <span
              key={mat}
              className="px-3 py-1.5 border border-sb-border text-sb-text-muted font-sans text-xs tracking-wider"
            >
              {mat}
            </span>
          ))}
        </div>

        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-sans font-light text-sb-text-muted hover:text-sb-accent transition-colors duration-300 group w-fit"
        >
          {t.products.detailsLabel}
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>
    </motion.article>
  )
}

export default function ProductVisuals() {
  const t = useTranslation()

  return (
    <section aria-label="Product details" className="bg-sb-black">
      {/* Section header */}
      <div className="container-sb py-16 border-b border-sb-border">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <p className="overline mb-4">{t.products.overline}</p>
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              {t.products.heading[0]}<br />{t.products.heading[1]}
            </h2>
          </div>
          <p
            className="font-sans font-light text-sb-text-muted text-base max-w-sm"
            style={{ lineHeight: '1.7' }}
          >
            {t.products.subheading}
          </p>
        </motion.div>
      </div>

      {/* Product rows */}
      <div className="flex flex-col">
        {productMeta.map((_, i) => (
          <ProductSection key={i} index={i} />
        ))}
      </div>
    </section>
  )
}
