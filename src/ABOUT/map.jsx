import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Maps.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '50vw', 
  height: '50vh', 
};
const center = {
  lat: 14.7437625,
  lng: -17.4557196,
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
