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
    image: '/images/hero-lab.jpg',
    imageAlt: 'S+B laboratoriumwerkbanken — witte werkbanken met blauwe accenten en geïntegreerde services',
    imageLeft: true,
  },
  {
    number: '02',
    title: 'Afzuigkasten & Extractie',
    subtitle: 'Precisie extractiemeubilair voor gevaarlijke stoffen',
    description:
      'Laboratoriumafzuigkasten en lokale extractiesystemen, ontworpen voor maximale veiligheid en minimaal energieverbruik. Beschikbaar in VAV-uitvoering met automatische snelheidsregeling voor variabele belasting. Volledig conform EN 14175.',
    materials: ['Poedercoating', 'Polypropeen', 'Staal'],
    image: '/images/universiteit-twente.jpg',
    imageAlt: 'S+B afzuigkasten Universiteit Twente — blauwe afzuigkasten met VAV-regeling en houten krukken',
    imageLeft: false,
  },
  {
    number: '03',
    title: 'Opslagsystemen',
    subtitle: 'Hoogwaardige opslagwanden voor laboratoriumbenodigdheden',
    description:
      'Modulaire opslagkasten en hoge opslagwanden voor laboratoria en technische omgevingen. Voorzien van schuifrail en bijpassende ladder voor veilige toegang tot hogere planken. Gecertificeerd voor opslag van gevaarlijke stoffen conform ADR/REACH.',
    materials: ['Gecoat Staal', 'Aluminium', 'Veiligheidslas'],
    image: '/images/storage-cabinet.jpg',
    imageAlt: 'S+B opslagkasten laboratorium — hoge witte kasten met glazen deuren en aluminium ladder',
    imageLeft: true,
  },
  {
    number: '04',
    title: 'Maatwerk Werkstations',
    subtitle: 'Precision-engineered dark lab furniture',
    description:
      'Onze donkere laboratoriumlijn combineert industriële robuustheid met een premium esthetiek. Volledig op maat gefabriceerd, uitgerust met digitale panelen, geïntegreerde verlichting en ergonomisch ontworpen lab-stools — voor omgevingen waar precisie en uitstraling samenkomen.',
    materials: ['Zwart HPL', 'Gepoedercoat Staal', 'LED'],
    image: '/images/dark-lab.jpg',
    imageAlt: 'S+B maatwerk donker laboratoriuminterieur — zwarte kasten met geïntegreerde verlichting en laboratoriumstoelen',
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
      className="relative w-full overflow-hidden"
      style={{ minHeight: '70vh' }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.9, ease: EASE }}
      aria-label={product.title}
    >
      {/* Real product photography */}
      <Image
        src={product.image}
        alt={product.imageAlt}
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
        className="opacity-70"
      />
      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 bg-black/50 pointer-events-none"
        aria-hidden="true"
      />

      {/* Content overlay */}
      <div
        className={`absolute inset-0 flex items-end ${isLeft ? 'justify-start' : 'justify-end'}`}
      >
        <motion.div
          className={`relative z-10 max-w-lg p-8 md:p-12 lg:p-16 m-4 md:m-8 lg:m-12 ${isLeft ? '' : ''}`}
          style={{
            background: 'rgba(11, 11, 9, 0.88)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderTop: '1px solid rgba(184, 169, 140, 0.15)',
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
        >
          {/* Number */}
          <span
            className="block font-sans text-sb-text-dim mb-3"
            style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}
          >
            {product.number} / {String(products.length).padStart(2, '0')}
          </span>

          {/* Title */}
          <h3 className="font-serif text-sb-text font-light mb-2" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', lineHeight: '1.1' }}>
            {product.title}
          </h3>

          {/* Subtitle */}
          <p className="font-sans font-light text-sb-accent text-sm mb-5 tracking-wide">
            {product.subtitle}
          </p>

          {/* Description */}
          <p className="font-sans font-light text-sb-text-muted text-sm mb-6" style={{ lineHeight: '1.75' }}>
            {product.description}
          </p>

          {/* Material badges */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.materials.map((mat) => (
              <span
                key={mat}
                className="px-2.5 py-1 border border-sb-border text-sb-text-dim font-sans text-xs tracking-wider"
              >
                {mat}
              </span>
            ))}
          </div>

          {/* Link */}
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-sans font-light text-sb-text-muted hover:text-sb-accent transition-colors duration-300 group"
          >
            Meer details
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default function ProductVisuals() {
  return (
    <section aria-label="Product details" className="bg-sb-black">
      <div className="container-sb py-16 mb-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">Producten</p>
          <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
            Vakmanschap in<br />elk detail.
          </h2>
        </motion.div>
      </div>

      <div className="flex flex-col gap-px">
        {products.map((product, i) => (
          <ProductSection key={product.number} product={product} index={i} />
        ))}
      </div>
    </section>
  )
}
