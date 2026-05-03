import Link from 'next/link'
import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/localeSwitcher'
import styles from './styles.module.scss'

export default function Header() {
  const t = useTranslations('home')

  return (
    <header className={styles.wrapper}>
      <div className={styles.leftSide}>
        <Link href='/' className={styles.leftSide__title}>
          <h1>IP Lookup</h1>
        </Link>

        <p className={styles.leftSide__description}>{t('header.subtitle')}</p>
      </div>

      <div className={styles.rightSide}>
        <select
          name='theme'
          defaultValue='system'
          className={`${styles.rightSide__select} ${styles['rightSide__select--theme']}`}
        >
          <option value='system'>{t('header.theme.system')}</option>
          <option value='light'>{t('header.theme.light')}</option>
          <option value='dark'>{t('header.theme.dark')}</option>
        </select>

        <LocaleSwitcher />
      </div>
    </header>
  )
}
