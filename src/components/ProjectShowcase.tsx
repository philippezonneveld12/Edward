'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.16, 1, 0.3, 1] as const

const projects = [
  {
    number: '01',
    title: 'FrieslandCampina',
    location: 'Wageningen',
    industry: 'Food & Research',
    type: 'Onderzoekslaboratorium',
    area: 'Wageningen',
    description:
      'Volledig geïntegreerd onderzoekslaboratorium voor FrieslandCampina in Wageningen. Maatwerk eilandwerkbanken met groene accenten, glazen laboratoriumwanden en geïntegreerde afzuigkasten. Ontworpen voor intensief dagelijks gebruik in een professionele R&D-omgeving.',
    materials: ['HPL', 'Compact Laminaat', 'Glas', 'Aluminium'],
    stats: [
      { value: '3', label: 'laboratoria' },
      { value: 'NEN', label: 'gecertificeerd' },
      { value: 'R&D', label: 'omgeving' },
    ],
    image: '/images/frieslandcampina.jpg',
    imageAlt: 'FrieslandCampina laboratoriuminterieur Wageningen — witte werkbanken met groene accenten en glazen wanden',
    imageRight: false,
  },
  {
    number: '02',
    title: 'Universiteit Twente',
    location: 'Enschede',
    industry: 'Academisch',
    type: 'Onderzoekslaboratorium',
    area: 'Enschede',
    description:
      'Grootschalig universitair laboratorium voor de Universiteit Twente, uitgerust met een complete wand van professionele afzuigkasten. De blauwe afzuigkasten zijn voorzien van VAV-regeling voor variabel luchtvolumetransport en zijn volledig conform EN 14175. Hoogwaardige opslagsystemen met ladderRail voor de grote opslagwanden.',
    materials: ['Staal', 'HPL', 'Glas', 'Gecoat aluminium'],
    stats: [
      { value: 'EN', label: '14175 conform' },
      { value: 'VAV', label: 'afzuigregeling' },
      { value: 'WO', label: 'onderzoek' },
    ],
    image: '/images/universiteit-twente.jpg',
    imageAlt: 'Universiteit Twente laboratorium Enschede — blauwe afzuigkasten en werkbanken met houten krukken',
    imageRight: true,
  },
  {
    number: '03',
    title: 'Danone',
    location: 'Utrecht',
    industry: 'Food & Nutrition',
    type: 'Onderzoekscentrum',
    area: 'Utrecht',
    description:
      'Iconisch open laboratoriumconcept voor Danone Utrecht. De rondingswerkbanken met geïntegreerde servicekolommen zijn volledig op maat ontworpen. De gebogen witte HPL-bladen met blauwe servicekokers creëren een luchtig, ergonomisch werkconcept over een groot vloeroppervlak.',
    materials: ['HPL wit', 'Blauw Compact', 'Staal'],
    stats: [
      { value: '400+', label: 'm² laboratorium' },
      { value: 'Custom', label: 'rondingsontwerp' },
      { value: 'GMP', label: 'conform' },
    ],
    image: '/images/danone.jpg',
    imageAlt: 'Danone laboratorium Utrecht — ronde witte werkbanken met blauwe servicekokers in grote open ruimte',
    imageRight: false,
  },
  {
    number: '04',
    title: 'Sanquin',
    location: 'Amsterdam',
    industry: 'Medisch / Bloedonderzoek',
    type: 'Medisch Laboratorium',
    area: 'Amsterdam',
    description:
      'Medisch laboratoriuminterieur voor Sanquin in Amsterdam. Stalen draagstructuur met HPL-bladen, afzuigarmen en gespecialiseerde medische kasten. De oranje accenten op de afzuigkast geven het lab een herkenbare visuele identiteit. Volledig ARBO- en ISO-conform voor bloedonderzoek en medische diagnostiek.',
    materials: ['HPL grijs', 'Staal', 'Oranje HPL-accent'],
    stats: [
      { value: 'ISO', label: 'gecertificeerd' },
      { value: 'ARBO', label: 'conform' },
      { value: 'Medisch', label: 'diagnostiek' },
    ],
    image: '/images/sanquin-wide.jpg',
    imageAlt: 'Sanquin laboratorium Amsterdam — grijze stalen werkbanken met blauwe muuraccenten en medische uitrusting',
    imageRight: true,
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
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        {/* Subtle dark overlay */}
        <div
          className="absolute inset-0 bg-sb-black/30 pointer-events-none"
          aria-hidden="true"
        />

        {/* Location badge */}
        <div className="absolute top-6 left-6 z-10">
          <span
            className="inline-block px-3 py-1.5 border border-sb-border bg-sb-black/60 font-sans text-sb-text-muted backdrop-blur-sm"
            style={{ fontSize: '0.6875rem', letterSpacing: '0.15em' }}
          >
            {project.location}
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
        <h3 className="font-serif text-display-md text-sb-text font-light mb-1 leading-none">
          {project.title}
        </h3>
        <p className="font-sans text-sb-text-dim text-sm tracking-wide mb-5">{project.location}</p>

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
