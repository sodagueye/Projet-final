import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import "./Reservation.css";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  import { Contexte } from '../Inscription/AuthProvider'; 

function ReservationPage() {
 const { email, password } = useContext(Contexte); // Accès aux valeurs fournies par le contexte
  const [invites, setInvites] = useState(1);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [hours, setHours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAvailableHours();
  }, [date]);

  const fetchAvailableHours = async () => {
    try {
      const response = await axios.get("https://tache-de-validition-nodejs-6.onrender.com/api/reservation/hours");
      const { heures_disponibles } = response.data;
      setHours(heures_disponibles);
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors du chargement des heures disponibles");
    }
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
// conneion
    if (!email || !password) { // Vérifier si l'utilisateur est connecté
      toast.error("Veuillez vous connecter pour faire une réservation.");
      setTimeout(() => {
        navigate("/connexion"); // Redirection vers la page de connexion
     }, 2000);
      
      return;
    }

    if (!hour) {
      toast.error("Veuillez sélectionner une heure.");
      return;
    }

    const formData = {
      invites: invites,
      date: date.toISOString().split("T")[0],
      hour: hour,
    };

    try {
      const res = await axios.post("https://tache-de-validition-nodejs-6.onrender.com/api/reservation", formData);
      navigate('/table', { state: formData });
    } catch (error) {
      console.error(error);
      toast.error("Erreur lors de la demande de réservation");
    }
  };

  const handleHourChange = (selectedHour) => {
    setHour(selectedHour);
  };

  const renderHourButtons = () => {
    return hours.map((hour, index) => (
      <button
        key={index}
        className="col-md-2 secondaire"
        type="button"
        onClick={() => handleHourChange(hour)}
      >
        {hour}
      </button>
    ));
  };

  return (
    <section id="reservationPage">
      <ToastContainer />
      <div className="row reservationPage-body mt-5">
        <h1>Table de réservations</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-head justify-space-between">
            <div className="form-floating col col-md-4 mx-2 my-3">
              <select
                className="form-select"
                value={invites}
                onChange={(e) => setInvites(Number(e.target.value))}
              >
                {[...Array(8).keys()].map((i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <label>Nombres d'invités</label>
            </div>
            <div className="form-floating col-md-4 mx-2 my-3">
              <input
                type="date"
                className="form-control"
                value={date.toISOString().split("T")[0]}
                onChange={handleDateChange}
              />
              <label>Date</label>
            </div>
            <div className="form-floating mx-2 my-3">
              <input
                type="text"
                className="form-control"
                disabled
                value={hour}
              />
              <label>Heure</label>
            </div>
          </div>
          <div className="row reservationPage-heure">
            {renderHourButtons()}
          </div>
          <br />
          <button className="btn btnsend" type="submit">
            Continuer
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationPage;
