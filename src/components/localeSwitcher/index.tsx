'use client'

import { useRouter } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'

import { setLocaleCookie } from '@/actions/locale'
import styles from './styles.module.scss'

const localeLabels: Record<string, string> = {
  pt: 'Português',
  en: 'English'
}

export default function LocaleSwitcher() {
  const router = useRouter()
  const currentLocale = useLocale()

  const [isPending, startTransition] = useTransition()

  const switchLocale = (nextLocale: string) => {
    startTransition(async () => {
      await setLocaleCookie(nextLocale)
      router.refresh()
    })
  }

  return (
    <select
      name='language'
      onChange={e => switchLocale(e.target.value)}
      disabled={isPending}
      defaultValue={currentLocale}
      className={styles.select}
    >
      {Object.entries(localeLabels).map(([code, label]) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}
