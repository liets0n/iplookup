import Link from 'next/link'
import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/localeSwitcher'

export default function Header() {
  const t = useTranslations('home')

  return (
    <header className='h-max flex items-end [grid-area:header] pb-[0.3rem] pr-[0.3rem] max-[1050px]:w-full max-[887px]:items-start max-[887px]:flex-col max-[887px]:gap-8'>
      <div className='w-full flex flex-col gap-4'>
        <Link
          href='/'
          className='w-max text-5xl no-underline normal-case text-gray-900 max-[486px]:text-3xl'
        >
          <h1 className='font-bold'>IP Lookup</h1>
        </Link>

        <p className='w-98 text-gray-500 max-[486px]:w-68 max-[486px]:text-sm'>
          {t('header.subtitle')}
        </p>
      </div>

      <div className='flex items-center gap-[1.3rem] max-[486px]:w-full max-[486px]:gap-[0.7rem]'>
        <select
          name='theme'
          defaultValue='system'
          className='w-32 h-12 text-base p-2 border-2 border-gray-900 rounded-md shadow-hard text-gray-900 bg-gray-50 cursor-pointer max-[486px]:w-1/2 max-[486px]:text-sm max-[486px]:shadow-hard-sm'
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
