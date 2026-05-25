'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const categories = [
  {
    number: '01',
    name: 'Labomeubilair',
    description: 'Engineered lab benches for every discipline',
    gradient: 'linear-gradient(135deg, #1A1E24, #0E1218)',
    large: true,
  },
  {
    number: '02',
    name: 'Practicumlokalen',
    description: 'Turn-key practical classroom environments',
    gradient: 'linear-gradient(135deg, #201E18, #0F0E0B)',
    large: false,
  },
  {
    number: '03',
    name: 'Cleanrooms',
    description: 'ISO-certified cleanroom construction',
    gradient: 'linear-gradient(135deg, #1C2024, #0E1014)',
    large: false,
  },
  {
    number: '04',
    name: 'Industriële interieurs',
    description: 'Heavy-duty industrial workspace solutions',
    gradient: 'linear-gradient(135deg, #1E1C18, #111009)',
    large: false,
  },
  {
    number: '05',
    name: 'Ventilatiesystemen',
    description: 'Precision airflow & extraction systems',
    gradient: 'linear-gradient(135deg, #181C20, #0B0E12)',
    large: true,
  },
  {
    number: '06',
    name: 'Opslagsystemen',
    description: 'Modular storage & chemical cabinet systems',
    gradient: 'linear-gradient(135deg, #1C1A18, #100F0D)',
    large: false,
  },
  {
    number: '07',
    name: 'Ergonomische werkplekken',
    description: 'Adjustable, safety-first workstations',
    gradient: 'linear-gradient(135deg, #1E1C1A, #100F0D)',
    large: false,
  },
  {
    number: '08',
    name: 'Technische werkbanken',
    description: 'Custom technical furniture & benching',
    gradient: 'linear-gradient(135deg, #1A1C1E, #0D0F11)',
    large: false,
  },
]

interface CardProps {
  category: (typeof categories)[0]
  index: number
  gridStyle?: React.CSSProperties
}

function CollectionCard({ category, index, gridStyle }: CardProps) {
  return (
    <motion.article
      className="collection-card relative overflow-hidden cursor-pointer group"
      style={{
        background: category.gradient,
        minHeight: category.large ? '420px' : '300px',
        ...gridStyle,
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.05, ease: EASE }}
      whileHover={{ scale: 1.012 }}
    >
      {/* <!-- REPLACE WITH: product photography for category: {category.name} --> */}
      <div
        data-replace="true"
        className="absolute inset-0"
        style={{ background: category.gradient }}
        aria-hidden="true"
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 bg-sb-black/0 group-hover:bg-sb-black/20 transition-all duration-500"
        aria-hidden="true"
      />

      {/* Inner vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, transparent 60%, rgba(11,11,9,0.6) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col justify-between p-6 md:p-8"
        style={{ height: '100%', minHeight: 'inherit' }}
      >
        {/* Top: number */}
        <span
          className="font-sans text-sb-text-dim block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.2em' }}
        >
          {category.number}
        </span>

        {/* Bottom: name, description, arrow */}
        <div>
          <h3
            className="font-serif text-sb-text font-light mb-2"
            style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)', lineHeight: '1.1' }}
          >
            {category.name}
          </h3>
          <p className="font-sans font-light text-sb-text-muted text-sm mb-4" style={{ lineHeight: '1.6' }}>
            {category.description}
          </p>
          <div className="flex items-center gap-2 text-sb-accent text-sm font-sans font-light">
            <span>Bekijk</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default function CollectionGrid() {
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
          <p className="overline mb-4">Collectie</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              Acht categorieën,<br />één visie op kwaliteit.
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm md:text-right" style={{ lineHeight: '1.7' }}>
              Van laboratoriumwerkbank tot cleanroom — elk product engineered voor precisie en duurzaamheid.
            </p>
          </div>
        </motion.div>

        <hr className="rule mb-10" />

        {/* Desktop grid — 3 columns with spanning */}
        <div className="hidden lg:grid gap-3" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {/* Row 1: large (span 2) + medium */}
          <CollectionCard
            category={categories[0]}
            index={0}
            gridStyle={{ gridColumn: '1 / 3' }}
          />
          <CollectionCard category={categories[1]} index={1} />

          {/* Row 2: medium + large (span 2) */}
          <CollectionCard category={categories[2]} index={2} />
          <CollectionCard
            category={categories[3]}
            index={3}
            gridStyle={{ gridColumn: '2 / 4' }}
          />

          {/* Row 3: 3 cards normal */}
          <CollectionCard category={categories[4]} index={4} />
          <CollectionCard category={categories[5]} index={5} />
          <CollectionCard category={categories[6]} index={6} />

          {/* Row 4: last card */}
          <CollectionCard category={categories[7]} index={7} />
        </div>

        {/* Tablet grid — 2 columns */}
        <div className="hidden md:grid lg:hidden gap-3" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
          {categories.map((cat, i) => (
            <CollectionCard key={cat.number} category={cat} index={i} />
          ))}
        </div>

        {/* Mobile grid — 1 column */}
        <div className="grid md:hidden gap-3">
          {categories.map((cat, i) => (
            <CollectionCard key={cat.number} category={cat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
