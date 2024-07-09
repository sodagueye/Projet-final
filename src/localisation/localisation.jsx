import { useEffect, useState } from "react";
import axios from 'axios';

export default function Localisation(){   
    const [localisation, setLocalisation] = useState({latitude:null , longitude:null});

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const {latitude , longitude} = response.data
            setLocalisation({latitude , longitude})
        })
        .catch(error => {
            console.error('Une erreur est survenue :', error);
        });
    },[])

    return <div className="container localisaton" style={{height:"100vh"}}>
        <div style={{height:"70vh"}}>
          {localisation.latitude && localisation.longitude ? (
                    <div>
                        <p>Latitude: {localisation.latitude}</p>
                        <p>Longitude: {localisation.longitude}</p>
                        {/* Vous pouvez aussi intégrer une carte ici, par exemple avec Google Maps ou Leaflet */}
                    </div>
                ) : (
                    'Chargement de la localisation...'
                )}
        </div>
      
    </div>
}