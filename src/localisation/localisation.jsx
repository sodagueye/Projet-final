import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '90vw', 
  height: '90vh', 
};
const center = {
  lat: 14.7437625,
  lng: -17.4557196,
};

const Localisation = () => {
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
        <div className='maps mt-5 mx-5'>
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
    export default Localisation;
