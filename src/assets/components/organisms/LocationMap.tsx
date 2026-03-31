import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps'

const FLORINDA_POSITION = { lat: -25.681920, lng: -54.44655, z: 18 }
const PLACE_ID = 'ChIJ5YS282_q9pQR1N8ULjGbRm4'

export function LocationMap() {
  return (
      <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
        <Map
          defaultCenter={FLORINDA_POSITION}
          defaultZoom={18}
          disableDefaultUI={true}
          gestureHandling="greedy"
          mapId="DEMO_MAP_ID"
        >
            <AdvancedMarker
              position={FLORINDA_POSITION}
              onClick={() => window.open(`https://www.google.com/maps/place/?q=place_id:${PLACE_ID}`, '_blank')}
            >
              <Pin
                background="#36E27B"
                borderColor="#36E27B"
                glyphColor="#0e1409"
              />
            </AdvancedMarker>
        </Map>
      </APIProvider>
  )
}