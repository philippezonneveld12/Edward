'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { label: 'Collectie', href: '#collectie' },
  { label: 'Projecten', href: '#projecten' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Divisies', href: '#divisies' },
  { label: 'Contact', href: '#contact' },
]

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 300)
    }
  }

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: PREMIUM_EASE }}
      >
        <motion.div
          className="relative px-6 md:px-10 lg:px-16"
          animate={{
            backgroundColor: scrolled ? 'rgba(246, 244, 239, 0.97)' : 'rgba(246, 244, 239, 0)',
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between h-[72px]">
            {/* Logo */}
            <a
              href="/"
              className="font-serif text-2xl font-light tracking-tight transition-colors duration-300"
              style={{ letterSpacing: '-0.02em', color: scrolled ? '#1C1A17' : '#F4F1EC' }}
            >
              S<span style={{ color: '#9A8A6C' }}>+</span>B
            </a>

            {/* Desktop nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="text-[13px] font-sans font-[400] tracking-wide transition-colors duration-300"
                  style={{ color: scrolled ? '#5A5855' : 'rgba(244,241,236,0.7)' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = scrolled ? '#1C1A17' : '#F4F1EC' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = scrolled ? '#5A5855' : 'rgba(244,241,236,0.7)' }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA button + hamburger */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#contact')
                }}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 border text-[12px] font-sans font-[500] tracking-widest uppercase transition-all duration-300"
                style={{
                  borderColor: scrolled ? 'rgba(154,138,108,0.4)' : 'rgba(244,241,236,0.35)',
                  color: scrolled ? '#9A8A6C' : '#F4F1EC',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = '#9A8A6C'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = scrolled ? 'rgba(154,138,108,0.08)' : 'rgba(255,255,255,0.1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.borderColor = scrolled ? 'rgba(154,138,108,0.4)' : 'rgba(244,241,236,0.35)'
                  ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
                }}
              >
                Offerte aanvragen
              </a>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 relative"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-label="Menu openen"
              >
                <motion.span
                  className="block w-6 h-px origin-center"
                  style={{ backgroundColor: scrolled ? '#1C1A17' : '#F4F1EC' }}
                  animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: PREMIUM_EASE }}
                />
                <motion.span
                  className="block w-6 h-px origin-center"
                  style={{ backgroundColor: scrolled ? '#1C1A17' : '#F4F1EC' }}
                  animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.3, ease: PREMIUM_EASE }}
                />
              </button>
            </div>
          </div>

          {/* Bottom border */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-px bg-sb-border"
            animate={{ opacity: scrolled ? 1 : 0 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.header>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: '#1A1816' }}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: PREMIUM_EASE }}
          >
            {/* Top padding for header */}
            <div className="h-[72px]" />

            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(link.href)
                    }}
                    className="font-serif text-[clamp(2.5rem,8vw,4rem)] font-light py-2 transition-colors duration-300"
                    style={{ color: '#F4F1EC', borderBottom: '1px solid rgba(255,255,255,0.1)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#B8A98C' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#F4F1EC' }}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: PREMIUM_EASE }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="mt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick('#contact')
                  }}
                  className="inline-flex items-center gap-3 px-8 py-4 text-[13px] font-sans font-[500] tracking-widest uppercase transition-all duration-300"
                  style={{ border: '1px solid rgba(184,169,140,0.5)', color: '#B8A98C' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(184,169,140,0.1)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent' }}
                >
                  Offerte aanvragen
                </a>
              </motion.div>
            </div>

            <div className="px-8 pb-12 text-[12px] font-sans" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <p>Est. 1987 — Nederland</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
