'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useInfo } from '@/store'

type SchemaValidationType = { ipv4: string }

export default function Input() {
  const t = useTranslations('home')
  const setIpv4 = useInfo(state => state.setIpv4)
  const { ip: ipv4 } = useInfo(state => state.data)

  const schemaValidation = useMemo(
    () =>
      z.object({
        ipv4: z
          .string()
          .regex(
            /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
            t('input.error')
          )
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SchemaValidationType>({
    resolver: zodResolver(schemaValidation),
    mode: 'onChange'
  })

  const handleSearchForIpAddr = (data: SchemaValidationType) => {
    setIpv4(String(data.ipv4))
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchForIpAddr)}
      className='[grid-area:input]'
    >
      <div className='mt-1.5 w-120 h-16 flex py-2 text-gray-900 border-2 border-gray-900 rounded-md shadow-[0.3rem_0.3rem_0_var(--gray-900)] max-[1050px]:w-full max-[828px]:shadow-[0.2rem_0.2rem_0_var(--gray-900)]'>
        <input
          type='text'
          id='ipv4'
          placeholder={ipv4}
          className='w-[85%] h-full text-base p-4 border-none text-gray-900 bg-gray-50 max-[828px]:text-sm max-[481px]:text-sm'
          {...register('ipv4')}
        />

        <button
          type='submit'
          className='w-[15%] h-full flex items-center justify-center border-none border-l-2 border-l-gray-900 bg-transparent cursor-pointer max-[481px]:w-1/4'
          aria-label={t('input.btnTitle')}
        >
          <MagnifyingGlass size={32} className='text-gray-900' />
        </button>
      </div>

      {errors.ipv4 != null && (
        <div className='relative w-120 h-16 flex items-center p-6 mt-4 text-gray-900 border-2 border-gray-900 rounded-md shadow-[0.3rem_0.3rem_0_var(--gray-900)]'>
          <p className='text-center'>{errors.ipv4?.message}</p>
        </div>
      )}
    </form>
  )
}
