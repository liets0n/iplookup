import { Header, InfoWindow, Input, MapWindow } from '@/components'

export default function Home() {
  return (
    <>
      <main className='relative min-h-screen min-w-screen flex items-center justify-center -mt-8.5'>
        <div className='main-layout'>
          <Header />
          <InfoWindow />
          <MapWindow />
          <Input />
        </div>
      </main>

      <footer className='absolute left-[50%] bottom-1 -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 text-sm text-center text-gray-500'>
        <p>Made with 🧠 by Lietson Dos S.</p>
        <p>
          &copy; 2025-2026 IP Lookup. All rights reserved. Powered by real-time
          data.
        </p>
      </footer>
    </>
  )
}
