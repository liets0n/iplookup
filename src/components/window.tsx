import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  windowTitle: string
  className?: string
}

export default function Window({ children, windowTitle, className }: Props) {
  return (
    <section className='w-120 h-90 border-2 border-gray-900 rounded-md shadow-[0.4rem_0.4rem_0_var(--gray-900)] overflow-hidden max-[1050px]:w-full max-[1050px]:h-112 max-[828px]:h-88 max-[828px]:shadow-[0.2rem_0.2rem_0_var(--gray-900)]'>
      <div className='w-full h-[2.6rem] flex items-center justify-between p-4 border-b-2 border-b-gray-900'>
        <p className='font-bold'>{windowTitle}</p>

        <ul className='flex items-center justify-center list-none gap-2'>
          <li className='w-4 h-4 rounded-full border-2 border-gray-900' />
          <li className='w-4 h-4 rounded-full border-2 border-gray-900' />
          <li className='w-4 h-4 rounded-full border-2 border-gray-900 bg-gray-900' />
        </ul>
      </div>

      <div
        className={twMerge(
          'w-full h-[90%] overflow-x-hidden overflow-y-scroll',
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}
