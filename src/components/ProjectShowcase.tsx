'use client'

import { motion } from 'framer-motion'

const EASE = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    number: '01',
    title: 'Academisch Laboratorium, Utrecht',
    industry: 'Universiteit',
    type: 'Onderzoekslaboratorium',
    area: '850m²',
    description:
      'Een volledig geïntegreerd onderzoekslaboratorium voor de Universiteit Utrecht. Ontworpen voor multidisciplinair gebruik met gespecialiseerde zones voor chemisch, biologisch en fysisch onderzoek. Elke werkbank is op maat gefabriceerd met geïntegreerde services.',
    materials: ['HPL', 'Staal', 'Glas', 'Linoleum'],
    stats: [
      { value: '120', label: 'werkplekken' },
      { value: '8', label: 'laboratoria' },
      { value: '6', label: 'maanden' },
    ],
    gradient: 'linear-gradient(135deg, #161C24 0%, #0C1018 50%, #080C10 100%)',
    imageRight: false,
  },
  {
    number: '02',
    title: 'Practicumvleugel, Amsterdam',
    industry: 'MBO/HBO Onderwijs',
    type: 'Onderwijsomgeving',
    area: '620m²',
    description:
      'Een complete practicumvleugel voor een grote MBO/HBO-instelling in Amsterdam. Flexibele lokalen die eenvoudig kunnen worden omgeconfigureerd voor verschillende vakken. Duurzame materialen, veiligheidsklasse NEN-12, volledig ARBO-conform.',
    materials: ['Compact HPL', 'Aluminium'],
    stats: [
      { value: '24', label: 'lokalen' },
      { value: '480', label: 'leerlingen' },
      { value: '8', label: 'maanden' },
    ],
    gradient: 'linear-gradient(135deg, #1E1A12 0%, #14100A 50%, #0C0A06 100%)',
    imageRight: true,
  },
  {
    number: '03',
    title: 'Industrieel Testcentrum, Rotterdam',
    industry: 'Industrieel',
    type: 'Testcentrum',
    area: '1.200m²',
    description:
      'Een grootschalig industrieel testcentrum voor een toonaangevende productiefaciliteit in Rotterdam. Zware industriële werkbanken, geïntegreerde tilsystemen, explosieveilige zones en een complete extractie-installatie conform ATEX-richtlijnen.',
    materials: ['Staal', 'Beton', 'Gecoat aluminium'],
    stats: [
      { value: '45', label: 'werkstations' },
      { value: 'ISO', label: 'gecertificeerd' },
      { value: '12', label: 'maanden' },
    ],
    gradient: 'linear-gradient(135deg, #1A1816 0%, #100E0C 50%, #080706 100%)',
    imageRight: false,
  },
]

interface ProjectProps {
  project: (typeof projects)[0]
  index: number
}

function ProjectItem({ project, index }: ProjectProps) {
  const isReversed = project.imageRight

  return (
    <motion.article
      className={`flex flex-col lg:flex-row gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {/* Image area — 60% */}
      <div className="relative lg:w-[60%] overflow-hidden" style={{ minHeight: '520px' }}>
        {/* <!-- REPLACE WITH: professional project photography for {project.title} --> */}
        <div
          data-replace="true"
          className="absolute inset-0"
          style={{ background: project.gradient }}
          aria-hidden="true"
        />

        {/* Subtle texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(184,169,140,0.03) 40px, rgba(184,169,140,0.03) 41px)',
          }}
          aria-hidden="true"
        />

        {/* Area badge */}
        <div className="absolute top-6 left-6 z-10">
          <span
            className="inline-block px-3 py-1.5 border border-sb-border bg-sb-black/60 font-sans text-sb-text-muted backdrop-blur-sm"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.15em' }}
          >
            {project.area}
          </span>
        </div>
      </div>

      {/* Text area — 40% */}
      <div className="lg:w-[40%] flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-0">
        {/* Project number */}
        <span
          className="font-sans text-sb-text-dim mb-4 block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}
        >
          {project.number} / {String(projects.length).padStart(2, '0')}
        </span>

        {/* Industry tag */}
        <span className="inline-flex items-center px-3 py-1 border border-sb-border text-sb-text-muted font-sans font-light text-xs tracking-wide mb-6 w-fit">
          {project.industry}
        </span>

        {/* Title */}
        <h3 className="font-serif text-display-md text-sb-text font-light mb-5">
          {project.title}
        </h3>

        {/* Description */}
        <p className="font-sans font-light text-sb-text-muted text-base mb-8" style={{ lineHeight: '1.75' }}>
          {project.description}
        </p>

        {/* Materials */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.materials.map((mat) => (
            <span
              key={mat}
              className="px-3 py-1 bg-sb-surface border border-sb-border font-sans text-sb-text-dim text-xs tracking-wide"
            >
              {mat}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-8 mb-8">
          {project.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-serif text-2xl text-sb-accent font-light leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs text-sb-text-dim tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Link */}
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-sm font-sans font-light text-sb-text-muted hover:text-sb-accent transition-colors duration-300 group"
        >
          Meer over dit project
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
            →
          </span>
        </a>
      </div>
    </motion.article>
  )
}

export default function ProjectShowcase() {
  return (
    <section id="projecten" aria-label="Projecten showcase" className="section-padding bg-sb-black">
      <div className="container-sb">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="overline mb-4">Projecten</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              Gerealiseerde<br />omgevingen.
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm" style={{ lineHeight: '1.7' }}>
              Elk project is een uniek vraagstuk. Wij engineeren maatwerkoplossingen die decennialang meegaan.
            </p>
          </div>
        </motion.div>

        <hr className="rule mb-14" />

        {/* Projects */}
        <div className="flex flex-col gap-0">
          {projects.map((project, index) => (
            <div key={project.number}>
              <ProjectItem project={project} index={index} />
              {index < projects.length - 1 && (
                <hr className="rule my-14" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
