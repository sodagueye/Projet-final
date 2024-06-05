import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import '../Styles/Maps.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '140rem',
  height: '140rem',
};
const center = {
  lat: 14.737557, // default latitude
  lng: -17.461164, // default longitude http://localhost:8000/admin/liste-produits
};

const Maps = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAdKwjLzJuWDo3edxGodSjvsu1vMrfckfY',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div className='maps'>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Maps;