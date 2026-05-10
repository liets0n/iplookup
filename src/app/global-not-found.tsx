import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getLocale, getTranslations } from 'next-intl/server'
import { cache } from 'react'

import './../styles/globals.css'

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
        <section className='absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2'>
          <div className='w-md h-40 border-2 border-gray-900 rounded-md shadow-[0.4rem_0.4rem_0_var(--gray-900)] overflow-hidden max-[505px]:w-100 max-[505px]:h-32 max-[452px]:w-96 max-[452px]:h-34 max-[425px]:w-84 max-[425px]:h-34 max-[415px]:w-76 max-[415px]:h-34 max-[368px]:w-64 max-[368px]:h-34'>
            <div className='w-full h-[2%] flex items-center justify-between p-4 border-b-2 border-b-gray-900'>
              <p className='font-bold'>{t('title')}</p>

              <ul className='w-36 flex items-center justify-center list-none gap-2'>
                <li className='w-4 h-4 rounded-full border-2 border-gray-900' />
                <li className='w-4 h-4 rounded-full border-2 border-gray-900' />
                <li className='w-4 h-4 rounded-full border-2 border-gray-900 bg-gray-900' />
              </ul>
            </div>

            <div className='flex m-auto items-center justify-center p-4'>
              <h1 className='text-[1.3rem] text-center mt-8 max-[505px]:text-base max-[505px]:mt-2 max-[452px]:text-base max-[452px]:mt-2'>
                {t('content')}
              </h1>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}
