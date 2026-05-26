'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.16, 1, 0.3, 1] as const

const products = [
  {
    number: '01',
    title: 'Laboratoriumwerkbanken',
    subtitle: 'Custom lab bench system met geïntegreerde services',
    description:
      'Onze laboratoriumwerkbanken worden volledig op maat gefabriceerd in onze Nederlandse fabriek. Met geïntegreerde gas-, water- en elektriciteitsaansluitingen, verzonken spoelbakken en chemisch-resistente oppervlakken voor elke toepassing.',
    materials: ['HPL', '316L Staal', 'Epoxy'],
    image: '/images/brochure/rot-000.jpg',
    imageAlt: 'S+B laboratoriumwerkbanken — open lab met witte werkbanken en marine blauwe accenten',
    imageLeft: true,
  },
  {
    number: '02',
    title: 'Afzuigkasten & Extractie',
    subtitle: 'Precisie extractiemeubilair voor gevaarlijke stoffen',
    description:
      'Laboratoriumafzuigkasten en lokale extractiesystemen, ontworpen voor maximale veiligheid en minimaal energieverbruik. Beschikbaar in VAV-uitvoering met automatische snelheidsregeling voor variabele belasting. Volledig conform EN 14175.',
    materials: ['Poedercoating', 'Polypropeen', 'Staal'],
    image: '/images/brochure/rot-006.jpg',
    imageAlt: 'S+B afzuigkasten — S+B branded zuurkasten met VAV-regeling',
    imageLeft: false,
  },
  {
    number: '03',
    title: 'Opslagsystemen',
    subtitle: 'Hoogwaardige opslagwanden voor laboratoriumbenodigdheden',
    description:
      'Modulaire opslagkasten en hoge opslagwanden voor laboratoria en technische omgevingen. Voorzien van schuifrail en bijpassende ladder voor veilige toegang tot hogere planken. Gecertificeerd voor opslag van gevaarlijke stoffen conform ADR/REACH.',
    materials: ['Gecoat Staal', 'Aluminium', 'Veiligheidslas'],
    image: '/images/brochure/rot-016.jpg',
    imageAlt: 'S+B opslagsystemen — werkstations met geïntegreerde opslageenheden',
    imageLeft: true,
  },
  {
    number: '04',
    title: 'Maatwerk Werkstations',
    subtitle: 'Precision-engineered werkplekken voor research & industrie',
    description:
      'Onze maatwerk werkstations combineren ergonomie, duurzaamheid en een strakke esthetiek. Volledig op maat gefabriceerd — van ronde eilandwerkbanken tot lange wandopstellingen. Ontworpen voor omgevingen waar precisie en uitstraling samenkomen.',
    materials: ['HPL', 'Gepoedercoat Staal', 'Aluminium'],
    image: '/images/brochure/rot-010.jpg',
    imageAlt: 'S+B maatwerk werkstations — witte ronde eilandwerkbanken met blauwe accenten in grote ruimte',
    imageLeft: false,
  },
]

interface ProductSectionProps {
  product: (typeof products)[0]
  index: number
}

function ProductSection({ product, index }: ProductSectionProps) {
  const isLeft = product.imageLeft

  return (
    <motion.article
      className={`flex flex-col lg:flex-row border-b border-sb-border ${isLeft ? '' : 'lg:flex-row-reverse'}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE }}
      aria-label={product.title}
    >
      {/* Image — 58% */}
      <div
        className="relative lg:w-[58%] overflow-hidden group"
        style={{ minHeight: '480px' }}
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 58vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>

      {/* Content — 42% */}
      <div className="lg:w-[42%] bg-sb-surface flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-14 lg:py-20">
        {/* Number */}
        <span
          className="font-sans text-sb-text-dim mb-6 block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}
        >
          {product.number} / {String(products.length).padStart(2, '0')}
        </span>

        {/* Title */}
        <h3
          className="font-serif text-sb-text font-light mb-3 leading-none"
          style={{ fontSize: 'clamp(1.75rem, 3vw, 2.75rem)' }}
        >
          {product.title}
        </h3>

        {/* Subtitle */}
        <p className="font-sans font-light text-sb-accent text-sm mb-7 tracking-wide">
          {product.subtitle}
        </p>

        {/* Divider */}
        <div className="w-12 h-px bg-sb-border mb-7" aria-hidden="true" />

        {/* Description */}
        <p
          className="font-sans font-light text-sb-text-muted text-base mb-8"
          style={{ lineHeight: '1.8' }}
        >
          {product.description}
        </p>

        {/* Material badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {product.materials.map((mat) => (
            <span
              key={mat}
              className="px-3 py-1.5 border border-sb-border text-sb-text-muted font-sans text-xs tracking-wider"
            >
              {mat}
            </span>
          ))}
        </div>

        {/* Link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-sans font-light text-sb-text-muted hover:text-sb-accent transition-colors duration-300 group w-fit"
        >
          Meer details
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>
    </motion.article>
  )
}

export default function ProductVisuals() {
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
            <p className="overline mb-4">Producten</p>
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              Vakmanschap in<br />elk detail.
            </h2>
          </div>
          <p
            className="font-sans font-light text-sb-text-muted text-base max-w-sm"
            style={{ lineHeight: '1.7' }}
          >
            Elke S+B oplossing wordt gefabriceerd in onze eigen fabriek in Nederland — van tekening tot oplevering.
          </p>
        </motion.div>
      </div>

      {/* Product rows */}
      <div className="flex flex-col">
        {products.map((product, i) => (
          <ProductSection key={product.number} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
