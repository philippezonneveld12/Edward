'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const EASE = [0.16, 1, 0.3, 1] as const

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE },
  },
}

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section
      id="hero"
      aria-label="Hero sectie"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Full-bleed hero photograph */}
      <Image
        src="/images/hero-lab.jpg"
        alt="S+B laboratoriuminterieur — witte werkbanken met blauwe accenten"
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
        className="opacity-55"
        aria-hidden="true"
      />
      {/* Dark gradient overlay for text legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(11,11,9,0.55) 0%, rgba(11,11,9,0.3) 40%, rgba(11,11,9,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      {/* CSS grid texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(184,169,140,0.03) 79px, rgba(184,169,140,0.03) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(184,169,140,0.03) 79px, rgba(184,169,140,0.03) 80px)',
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 40%, rgba(11,11,9,0.7) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Top-left label */}
      <motion.div
        className="absolute top-24 left-6 md:left-10 lg:left-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <span
          className="text-sb-text-dim font-sans"
          style={{ fontSize: '0.625rem', letterSpacing: '0.25em', textTransform: 'uppercase' }}
        >
          S+B — 100 Jaar Marktleider
        </span>
      </motion.div>

      {/* Main content block — center-bottom */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 lg:pb-24">
        <div className="container-sb">
          <motion.div
            className="max-w-3xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Overline */}
            <motion.p variants={itemVariants} className="overline mb-6">
              Laboratorium&nbsp;·&nbsp;Onderwijs&nbsp;·&nbsp;Industrie
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-display-xl text-sb-text mb-6 leading-none"
            >
              Gebouwd voor
              <br />
              laboratoria, onderwijs
              <br />
              en industrie.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="font-sans font-light text-sb-text-muted text-lg md:text-xl max-w-xl mb-10"
              style={{ lineHeight: '1.6' }}
            >
              Custom engineered environments designed for performance, safety and longevity.
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <a
                href="#collectie"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-sb-text/30 text-sb-text text-sm font-sans font-light tracking-wide hover:border-sb-accent hover:text-sb-accent transition-all duration-500"
              >
                Bekijk collectie
              </a>
              <a
                href="#projecten"
                className="inline-flex items-center gap-3 py-3.5 text-sb-text-muted text-sm font-sans font-light tracking-wide hover:text-sb-accent transition-colors duration-500 group"
              >
                Projecten
                <span className="inline-block transition-transform duration-500 group-hover:translate-x-1.5">
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <motion.div
        className="absolute bottom-10 right-6 md:right-10 lg:right-16 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        ref={scrollRef}
      >
        <span
          className="font-sans text-sb-text-dim"
          style={{ fontSize: '0.625rem', letterSpacing: '0.2em', textTransform: 'uppercase', writingMode: 'vertical-lr' }}
        >
          Scroll
        </span>
        <motion.div
          className="w-px bg-sb-text-dim origin-top"
          style={{ height: '48px' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut', repeatDelay: 0.4 }}
        />
      </motion.div>
    </section>
  )
}
