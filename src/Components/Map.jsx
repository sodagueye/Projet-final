import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import axios from 'axios';

function Map() {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/localisation')
      .then(response => {
        setLocation(response.data);
      })
      .catch(error => {
        console.error('Error fetching location:', error);
      });
  }, []);

  return (
    <div>
      {location && (
        <MapContainer center={[14.7437625, -17.4557196]} zoom={10} style={{ height: '600px', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[location.latitude, location.longitude]}>
            <Popup>
              A site.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
}

export default Map;
