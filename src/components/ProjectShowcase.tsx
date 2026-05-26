'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from '@/i18n/translations'

const EASE = [0.16, 1, 0.3, 1] as const

const projectMeta = [
  {
    number: '01',
    title: 'FrieslandCampina',
    location: 'Wageningen',
    materials: ['HPL', 'Compact Laminaat', 'Glas', 'Aluminium'],
    stats: [{ value: '3' }, { value: 'NEN' }, { value: 'R&D' }],
    image: '/images/frieslandcampina.jpg',
    imageAlt: 'FrieslandCampina laboratoriuminterieur Wageningen — witte werkbanken met groene accenten en glazen wanden',
    imageRight: false,
  },
  {
    number: '02',
    title: 'Universiteit Twente',
    location: 'Enschede',
    materials: ['Staal', 'HPL', 'Glas', 'Gecoat aluminium'],
    stats: [{ value: 'EN' }, { value: 'VAV' }, { value: 'WO' }],
    image: '/images/universiteit-twente.jpg',
    imageAlt: 'Universiteit Twente laboratorium Enschede — blauwe afzuigkasten en werkbanken met houten krukken',
    imageRight: true,
  },
  {
    number: '03',
    title: 'Danone',
    location: 'Utrecht',
    materials: ['HPL wit', 'Blauw Compact', 'Staal'],
    stats: [{ value: '400+' }, { value: 'Custom' }, { value: 'GMP' }],
    image: '/images/danone.jpg',
    imageAlt: 'Danone laboratorium Utrecht — ronde witte werkbanken met blauwe servicekokers in grote open ruimte',
    imageRight: false,
  },
  {
    number: '04',
    title: 'Sanquin',
    location: 'Amsterdam',
    materials: ['HPL grijs', 'Staal', 'Oranje HPL-accent'],
    stats: [{ value: 'ISO' }, { value: 'ARBO' }, { value: 'Medisch' }],
    image: '/images/sanquin-wide.jpg',
    imageAlt: 'Sanquin laboratorium Amsterdam — grijze stalen werkbanken met blauwe muuraccenten en medische uitrusting',
    imageRight: true,
  },
]

interface ProjectProps {
  index: number
}

function ProjectItem({ index }: ProjectProps) {
  const t = useTranslation()
  const meta = projectMeta[index]
  const item = t.projects.items[index]
  const isReversed = meta.imageRight

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
          src={meta.image}
          alt={meta.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none" aria-hidden="true" />
      </div>

      {/* Text area — 40% */}
      <div className="lg:w-[40%] flex flex-col justify-center px-8 lg:px-14 py-12 lg:py-0">
        <span
          className="font-sans text-sb-text-dim mb-4 block"
          style={{ fontSize: '0.625rem', letterSpacing: '0.3em' }}
        >
          {meta.number} / {String(projectMeta.length).padStart(2, '0')}
        </span>

        <span className="inline-flex items-center px-3 py-1 border border-sb-border text-sb-text-muted font-sans font-light text-xs tracking-wide mb-6 w-fit">
          {item.industry}
        </span>

        <h3 className="font-serif text-display-md text-sb-text font-light mb-1 leading-none">
          {meta.title}
        </h3>
        <p className="font-sans text-sb-text-dim text-sm tracking-wide mb-5">{meta.location}</p>

        <p className="font-sans font-light text-sb-text-muted text-base mb-8" style={{ lineHeight: '1.75' }}>
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {meta.materials.map((mat) => (
            <span
              key={mat}
              className="px-3 py-1 bg-sb-surface border border-sb-border font-sans text-sb-text-dim text-xs tracking-wide"
            >
              {mat}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-8 mb-8">
          {meta.stats.map((stat, si) => (
            <div key={si} className="flex flex-col">
              <span className="font-serif text-2xl text-sb-accent font-light leading-none mb-1">
                {stat.value}
              </span>
              <span className="font-sans text-xs text-sb-text-dim tracking-wide">
                {item.stats[si].label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </motion.article>
  )
}

export default function ProjectShowcase() {
  const t = useTranslation()

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
          <p className="overline mb-4">{t.projects.overline}</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-serif text-display-lg text-sb-text font-light max-w-lg">
              {t.projects.heading[0]}<br />{t.projects.heading[1]}
            </h2>
            <p className="font-sans font-light text-sb-text-muted text-base max-w-sm" style={{ lineHeight: '1.7' }}>
              {t.projects.subheading}
            </p>
          </div>
        </motion.div>

        <hr className="rule mb-14" />

        <div className="flex flex-col gap-0">
          {projectMeta.map((_, index) => (
            <div key={index}>
              <ProjectItem index={index} />
              {index < projectMeta.length - 1 && (
                <hr className="rule my-14" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
