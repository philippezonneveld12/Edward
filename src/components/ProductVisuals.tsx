'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const products = [
  {
    number: '01',
    title: 'Laboratoriumwerkbanken',
    subtitle: 'Custom lab bench system met geïntegreerde services',
    description:
      'Onze laboratoriumwerkbanken worden volledig op maat gefabriceerd in onze Nederlandse fabriek. Met geïntegreerde gas-, water- en elektriciteitsaansluitingen, verzonken spoelbakken en chemisch-resistente oppervlakken voor elke toepassing.',
    materials: ['HPL', '316L Staal', 'Epoxy'],
    gradient: 'linear-gradient(145deg, #161C22 0%, #0C1016 50%, #080C0E 100%)',
    imageLeft: true,
  },
  {
    number: '02',
    title: 'Afzuigkasten & Extractie',
    subtitle: 'Precisie extractiemeubilair voor gevaarlijke stoffen',
    description:
      'Laboratoriumafzuigkasten en lokale extractiesystemen, ontworpen voor maximale veiligheid en minimaal energieverbruik. Beschikbaar in VAV-uitvoering met automatische snelheidsregeling voor variabele belasting.',
    materials: ['Poedercoating', 'Polypropeen', 'Staal'],
    gradient: 'linear-gradient(145deg, #1A1612 0%, #100D0A 50%, #080604 100%)',
    imageLeft: false,
  },
  {
    number: '03',
    title: 'Technisch Meubilair',
    subtitle: 'Industriële werkstations met geïntegreerd kabelmanagement',
    description:
      'Robuuste technische werkbanken voor de maakindustrie. Draagvermogen tot 800 kg, volledig verstelbaar in hoogte, met geïntegreerde kabelmanagement-systemen en ergonomische accessoires voor elke productieomgeving.',
    materials: ['Gecoat Staal', 'Linoleum', 'Aluminium'],
    gradient: 'linear-gradient(145deg, #181814 0%, #100F0C 50%, #080806 100%)',
    imageLeft: true,
  },
  {
    number: '04',
    title: 'Opslagkasten & Gevaarlijke stoffen',
    subtitle: 'Chemisch veilige opslagsystemen conform ADR/REACH',
    description:
      'Gecertificeerde opslag voor gevaarlijke stoffen, chemicaliën en vloeistoffen. Vloeistofdicht lekbak, brandwerende uitvoering beschikbaar, REACH-conform labeling-systeem en aardingspunten voor antistatische beveiliging.',
    materials: ['Gecoat Staal', '304 RVS', 'Polyethyleen'],
    gradient: 'linear-gradient(145deg, #141616 0%, #0C0E0E 50%, #060808 100%)',
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
      {/* Background gradient placeholder */}
      {/* <!-- REPLACE WITH: close-up product photography of {product.title} --> */}
      <div
        data-replace="true"
        className="absolute inset-0"
        style={{ background: product.gradient }}
        aria-hidden="true"
      />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 59px, rgba(184,169,140,0.02) 59px, rgba(184,169,140,0.02) 60px)',
        }}
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
