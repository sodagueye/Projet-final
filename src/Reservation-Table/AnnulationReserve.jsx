import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AnnulationReserve() {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const cancelReservation = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/cancel-reservation`,
          { token },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setMessage(response.data.msg);
      } catch (error) {
        console.error("Erreur lors de l'annulation de la réservation:", error);
        setMessage('Erreur lors de l\'annulation de la réservation. Veuillez réessayer plus tard.');
      }
    };

    cancelReservation();
  }, [token]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>{message ? 'Confirmation' : 'Annulation en cours...'}</h2>
          {message && <p>{message}</p>}
        </div>
      </div>
    </div>
  );
}

export default AnnulationReserve;
