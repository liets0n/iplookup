import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getLocale, getTranslations } from 'next-intl/server'
import { cache } from 'react'

import styles from '@/styles/pages/notFound.module.scss'

const inter = Inter({ subsets: ['latin'] })

const getT = cache(() => getTranslations('globalNotFound'))

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()

  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  }
}

export default async function GlobalNotFound() {
  const t = await getT()
  const locale = await getLocale()

  return (
    <html lang={locale} className={inter.className}>
      <body>
        <section className={styles.wrapper}>
          <div className={styles.window}>
            <div className={styles.header}>
              <p className={styles.header__title}>{t('title')}</p>

              <ul className={styles.header__list}>
                <li className={styles.list__item} />
                <li className={styles.list__item} />
                <li
                  className={`${styles.list__item} ${styles['list__item--contrast']}`}
                />
              </ul>
            </div>

            <div className={styles.content}>
              <h1 className={styles.content__text}>{t('content')}</h1>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
