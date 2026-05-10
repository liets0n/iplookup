'use client'

import type * as L from 'leaflet'
import { useTranslations } from 'next-intl'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { Window } from '@/components'
import { useInfo } from '@/store'

const ZOOM = 7.49
const MIN_ZOOM = 1
const MAX_ZOOM = 17

export default function MapWindow() {
  const {
    latitude: lat,
    longitude: lng,
    ip: ipv4
  } = useInfo(state => state.data)
  const t = useTranslations('home')

  const mapCoordinates =
    lat !== null && lng !== null ? [lat, lng] : [4852.6, 12_323.6]

  return (
    <Window windowTitle={t('window.title.map')} className='overflow-hidden'>
      <div className='[grid-area:map]'>
        <MapContainer
          center={mapCoordinates as L.LatLngExpression}
          zoom={ZOOM}
          style={{ width: '100%', height: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            maxNativeZoom={MAX_ZOOM}
            minZoom={MIN_ZOOM}
            noWrap
          />

          <Marker position={mapCoordinates as L.LatLngExpression}>
            <Popup>
              {lat !== null && lng !== null
                ? t('map.marker.default', { ip: ipv4 })
                : t('map.marker.fallback')}
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </Window>
  )
}
