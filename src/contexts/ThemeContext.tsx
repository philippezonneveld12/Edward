'use client'

import { createContext, useContext, useEffect, useState } from 'react'

export type Theme = 'light' | 'dark'
export type Language = 'nl' | 'en' | 'de' | 'es' | 'it'

export const LANGUAGES: { code: Language; label: string; short: string }[] = [
  { code: 'nl', label: 'Nederlands', short: 'NL' },
  { code: 'en', label: 'English',    short: 'EN' },
  { code: 'de', label: 'Deutsch',    short: 'DE' },
  { code: 'es', label: 'Español',    short: 'ES' },
  { code: 'it', label: 'Italiano',   short: 'IT' },
]

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  language: Language
  setLanguage: (lang: Language) => void
  mounted: boolean
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'light',
  toggleTheme: () => {},
  language: 'nl',
  setLanguage: () => {},
  mounted: false,
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguageState] = useState<Language>('nl')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const storedTheme = localStorage.getItem('sb-theme') as Theme | null
    const storedLang = localStorage.getItem('sb-language') as Language | null
    if (storedTheme) setTheme(storedTheme)
    if (storedLang) setLanguageState(storedLang)
  }, [])

  const toggleTheme = () => {
    const next: Theme = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('sb-theme', next)
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('sb-language', lang)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, language, setLanguage, mounted }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
