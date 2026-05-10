import { Header, InfoWindow, Input, MapWindow } from '@/components'

export default function Home() {
  return (
    <main className='relative min-h-screen min-w-screen flex items-center justify-center'>
      <div className='main-layout'>
        <Header />
        <InfoWindow />
        <MapWindow />
        <Input />
      </div>
    </main>
  )
}
