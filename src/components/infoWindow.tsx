'use client'

import { useTranslations } from 'next-intl'

import { Window } from '@/components'
import { useInfo } from '@/store'
import { textFormatter } from '@/utils'

export default function InfoWindow() {
  const t = useTranslations('home')
  const data = useInfo(state => state.data)
  const time = new Date(String(data.time_zone.current_time))

  return (
    <Window windowTitle={t('window.title.information')}>
      <div className='[grid-area:info-window] pt-2 pr-4 pb-4 pl-8'>
        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.ipv4')}</span>
            &nbsp;
            <span>{textFormatter(data.ip, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.city')}</span>
            &nbsp;
            <span>{textFormatter(data.city, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.state')}</span>
            &nbsp;
            <span>{textFormatter(data.region, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.country')}</span>
            &nbsp;
            <span>
              {textFormatter(`${data.country_name} ${data.emoji_flag}`, t)}
            </span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>
              {t('info.continent')}
            </span>
            &nbsp;
            <span>{textFormatter(data.continent_name, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.time')}</span>
            &nbsp;
            <span>{textFormatter(time.toLocaleString(), t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>
              {t('info.latitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.latitude, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>
              {t('info.longitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.longitude, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.idiom')}</span>
            &nbsp;
            <span>
              {textFormatter(
                Array.isArray(data.languages) && data.languages.length > 0
                  ? `${data.languages[0].name} (${String(data.languages[0].code).toUpperCase()})`
                  : 'N/A',
                t
              )}
            </span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>
              {t('info.currency')}
            </span>
            &nbsp;
            <span>
              {textFormatter(
                `${data.currency.name} (${data.currency.code})`,
                t
              )}
            </span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.ddd')}</span>
            &nbsp;
            <span>{textFormatter(`${data.calling_code}`, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.tor')}</span>
            &nbsp;
            <span>{textFormatter(data.threat.is_tor, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>{t('info.proxy')}</span>
            &nbsp;
            <span>{textFormatter(data.threat.is_proxy, t)}</span>
          </p>
        </li>

        <li>
          <p className='leading-[2.1rem] [&>span]:text-base'>
            <span className='font-bold text-gray-800'>
              {t('info.dataCenter')}
            </span>
            &nbsp;
            <span>{textFormatter(data.threat.is_datacenter, t)}</span>
          </p>
        </li>
      </div>
    </Window>
  )
}
