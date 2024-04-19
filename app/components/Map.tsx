'use client';

import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker } from 'react-leaflet/Marker';
import 'leaflet/dist/leaflet.css';
import { useCountries } from '../lib/getCountries';
import { icon } from 'leaflet';

const ICON = icon({
  iconUrl:
    'https://upload.wikimedia.org/wikipedia/commons/f/f2/678111-map-marker-512.png',
  iconSize: [50, 50],
});

export default function Map({ locationValue }: { locationValue: string }) {
  const { getCountryByValue } = useCountries();
  const latLang = getCountryByValue(locationValue)?.latLang;
  return (
    <MapContainer
      scrollWheelZoom={false}
      className='h-[50vh] rounded-lg relative z-0'
      center={latLang ?? [52.505, -0.09]}
      zoom={7}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={latLang ?? [52.505, -0.09]} icon={ICON} />
    </MapContainer>
  );
}
