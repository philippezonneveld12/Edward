'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, ChevronDown } from 'lucide-react'
import { useTheme, LANGUAGES, type Language } from '@/contexts/ThemeContext'

const navLinks = [
  { label: 'Collectie', href: '#collectie' },
  { label: 'Projecten', href: '#projecten' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Divisies', href: '#divisies' },
  { label: 'Contact', href: '#contact' },
]

const EASE = [0.16, 1, 0.3, 1] as const

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)
  const { theme, toggleTheme, language, setLanguage, mounted } = useTheme()

  const isDark = theme === 'dark'
  // Over hero = always white; scrolled on dark theme = white; scrolled on light = dark
  const textOnDark = !scrolled || isDark

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 300)
  }

  const currentLang = LANGUAGES.find(l => l.code === language) ?? LANGUAGES[0]

  const navBgScrolled = isDark ? 'rgba(11,11,9,0.97)' : 'rgba(246,244,239,0.97)'
  const navBgTop = isDark ? 'rgba(11,11,9,0)' : 'rgba(246,244,239,0)'
  const logoCol = textOnDark ? '#F4F1EC' : '#1C1A17'
  const linkCol = textOnDark ? 'rgba(244,241,236,0.7)' : '#5A5855'
  const linkHover = textOnDark ? '#F4F1EC' : '#1C1A17'
  const iconCol = textOnDark ? 'rgba(244,241,236,0.7)' : '#5A5855'
  const iconBorder = textOnDark ? 'rgba(244,241,236,0.2)' : 'rgba(28,26,23,0.15)'
  const hamCol = textOnDark ? '#F4F1EC' : '#1C1A17'

  return (
    <>
      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
      >
        <motion.div
          className="relative px-6 md:px-10 lg:px-16"
          animate={{
            backgroundColor: scrolled ? navBgScrolled : navBgTop,
            backdropFilter: scrolled ? 'blur(20px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        >
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a
              href="/"
              className="font-serif text-2xl font-light tracking-tight transition-colors duration-300 shrink-0"
              style={{ letterSpacing: '-0.02em', color: logoCol }}
            >
              S<span style={{ color: 'var(--color-accent)' }}>+</span>B
            </a>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                  className="text-[13px] font-sans font-[400] tracking-wide transition-colors duration-300"
                  style={{ color: linkCol }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = linkHover }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = linkCol }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right controls */}
            <div className="flex items-center gap-2">

              {/* Language picker — desktop */}
              <div ref={langRef} className="hidden lg:block relative">
                <button
                  onClick={() => setLangOpen(v => !v)}
                  className="flex items-center gap-1 px-3 py-1.5 font-sans text-[11px] font-[500] tracking-widest uppercase transition-all duration-300 rounded-none"
                  style={{
                    color: iconCol,
                    border: `1px solid ${iconBorder}`,
                  }}
                  aria-label="Taal kiezen"
                >
                  {mounted ? currentLang.short : 'NL'}
                  <ChevronDown
                    size={10}
                    className="transition-transform duration-200"
                    style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                  />
                </button>

                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      className="absolute right-0 top-full mt-2 min-w-[140px] py-1 shadow-lg z-50"
                      style={{
                        background: isDark ? '#161614' : '#F6F4EF',
                        border: `1px solid var(--color-border)`,
                      }}
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15 }}
                    >
                      {LANGUAGES.map(lang => (
                        <button
                          key={lang.code}
                          onClick={() => { setLanguage(lang.code); setLangOpen(false) }}
                          className="w-full text-left px-4 py-2.5 font-sans text-[12px] tracking-wide transition-colors duration-150 flex items-center justify-between"
                          style={{
                            color: language === lang.code ? 'var(--color-accent)' : 'var(--color-text-muted)',
                            backgroundColor: language === lang.code
                              ? (isDark ? 'rgba(184,169,140,0.08)' : 'rgba(154,138,108,0.06)')
                              : 'transparent',
                          }}
                          onMouseEnter={e => { if (language !== lang.code) (e.currentTarget as HTMLElement).style.color = 'var(--color-text)' }}
                          onMouseLeave={e => { if (language !== lang.code) (e.currentTarget as HTMLElement).style.color = 'var(--color-text-muted)' }}
                        >
                          <span>{lang.label}</span>
                          <span className="text-[10px] tracking-widest opacity-60">{lang.short}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme toggle — desktop */}
              {mounted && (
                <button
                  onClick={toggleTheme}
                  className="hidden lg:flex items-center justify-center w-8 h-8 transition-all duration-300"
                  style={{ color: iconCol, border: `1px solid ${iconBorder}` }}
                  aria-label={isDark ? 'Schakel naar licht thema' : 'Schakel naar donker thema'}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = iconCol }}
                >
                  {isDark ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
                </button>
              )}

              {/* CTA button — desktop */}
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 text-[12px] font-sans font-[500] tracking-widest uppercase transition-all duration-300 ml-2"
                style={{
                  borderColor: textOnDark ? 'rgba(244,241,236,0.35)' : 'rgba(154,138,108,0.4)',
                  border: `1px solid ${textOnDark ? 'rgba(244,241,236,0.35)' : 'rgba(154,138,108,0.4)'}`,
                  color: textOnDark ? '#F4F1EC' : 'var(--color-accent)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--color-accent)'
                  el.style.backgroundColor = isDark ? 'rgba(184,169,140,0.1)' : 'rgba(154,138,108,0.08)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = textOnDark ? 'rgba(244,241,236,0.35)' : 'rgba(154,138,108,0.4)'
                  el.style.backgroundColor = 'transparent'
                }}
              >
                Offerte aanvragen
              </a>

              {/* Mobile: lang + theme + hamburger */}
              <div className="lg:hidden flex items-center gap-2">

                {/* Language button mobile */}
                <div ref={undefined} className="relative">
                  <button
                    onClick={() => setLangOpen(v => !v)}
                    className="flex items-center gap-1 px-2.5 py-1.5 font-sans text-[11px] font-[500] tracking-widest uppercase"
                    style={{ color: iconCol, border: `1px solid ${iconBorder}` }}
                    aria-label="Taal kiezen"
                  >
                    {mounted ? currentLang.short : 'NL'}
                    <ChevronDown size={9} style={{ transform: langOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                  </button>
                  <AnimatePresence>
                    {langOpen && (
                      <motion.div
                        className="absolute right-0 top-full mt-2 min-w-[140px] py-1 shadow-lg z-50"
                        style={{ background: isDark ? '#161614' : '#F6F4EF', border: `1px solid var(--color-border)` }}
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.15 }}
                      >
                        {LANGUAGES.map(lang => (
                          <button
                            key={lang.code}
                            onClick={() => { setLanguage(lang.code); setLangOpen(false) }}
                            className="w-full text-left px-4 py-2.5 font-sans text-[12px] tracking-wide flex items-center justify-between"
                            style={{
                              color: language === lang.code ? 'var(--color-accent)' : 'var(--color-text-muted)',
                            }}
                          >
                            <span>{lang.label}</span>
                            <span className="text-[10px] opacity-60">{lang.short}</span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Theme toggle mobile */}
                {mounted && (
                  <button
                    onClick={toggleTheme}
                    className="flex items-center justify-center w-8 h-8"
                    style={{ color: iconCol, border: `1px solid ${iconBorder}` }}
                    aria-label="Thema wisselen"
                  >
                    {isDark ? <Sun size={13} strokeWidth={1.5} /> : <Moon size={13} strokeWidth={1.5} />}
                  </button>
                )}

                {/* Hamburger */}
                <button
                  className="flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                  onClick={() => setMobileOpen(!mobileOpen)}
                  aria-label="Menu openen"
                >
                  <motion.span
                    className="block w-6 h-px origin-center"
                    style={{ backgroundColor: hamCol }}
                    animate={mobileOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                  <motion.span
                    className="block w-6 h-px origin-center"
                    style={{ backgroundColor: hamCol }}
                    animate={mobileOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                    transition={{ duration: 0.3, ease: EASE }}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom border when scrolled */}
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
            style={{ backgroundColor: isDark ? '#0B0B09' : '#F6F4EF' }}
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            <div className="h-[72px]" />

            <div className="flex-1 flex flex-col justify-center px-8">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNavClick(link.href) }}
                    className="font-serif text-[clamp(2.5rem,8vw,4rem)] font-light py-2 transition-colors duration-300"
                    style={{
                      color: 'var(--color-text)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.5, ease: EASE }}
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
                  onClick={e => { e.preventDefault(); handleNavClick('#contact') }}
                  className="inline-flex items-center gap-3 px-8 py-4 text-[13px] font-sans font-[500] tracking-widest uppercase transition-all duration-300"
                  style={{ border: '1px solid var(--color-accent)', color: 'var(--color-accent)' }}
                >
                  Offerte aanvragen
                </a>
              </motion.div>
            </div>

            <div className="px-8 pb-12 text-[12px] font-sans" style={{ color: 'var(--color-text-dim)' }}>
              Est. 1987 — Nederland
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
