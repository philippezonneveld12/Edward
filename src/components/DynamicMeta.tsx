'use client'

import { useEffect } from 'react'
import { useTranslation } from '@/i18n/translations'

export default function DynamicMeta() {
  const t = useTranslation()

  useEffect(() => {
    document.title = t.meta.title

    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!descEl) {
      descEl = document.createElement('meta')
      descEl.name = 'description'
      document.head.appendChild(descEl)
    }
    descEl.content = t.meta.description
  }, [t.meta.title, t.meta.description])

  return null
}
