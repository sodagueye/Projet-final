import "./Reservation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Footer } from "../khadyComponent/Footer/Footer";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReservationPage() {
  const [invites, setInvites] = useState(1);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const [hours, setHours] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    Hours();
  }, [date]);

  const Hours = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/reservation/hours");
      console.log(response.data);
      const { heures_disponibles } = response.data;
      setHours(heures_disponibles);
    } catch (err) {
      console.error(err);
      alert("Erreur lors du chargement des heures disponibles");
    }
  };

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  }

  const isAuthenticated = () => {
    return localStorage.getItem('authToken') !== null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!hour) {
      toast.error("Veuillez sélectionner une heure.");
      return;
    }

    if (!isAuthenticated()) {
      toast.error("Veuillez vous connecter pour continuer.");
      setTimeout(() => {
        navigate('/connexion');
       }, 3000); 
      return;
    }

    const formData = {
      invites: invites,
      date: date.toISOString().split('T')[0],
      hour: hour,
    };

    try {
      await axios.post("http://localhost:8080/api/reservation", formData);
      navigate('/table', { state: formData });
    } catch (err) {
      console.error(err);
      toast.error("Erreur lors de la demande de réservation");
    }
  };

  const handleHourChange = (hour) => {
    setHour(hour);
  };

  const renderHourButtons = () => {
    return hours.map((hour, index) => (
      <React.Fragment key={index}>
        <button
          className="col-md-2 secondaire"
          type="button"
          onClick={() => handleHourChange(hour)}
        >
          {hour}
        </button>
      </React.Fragment>
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
                onChange={(e) => setInvites(Number(e.target.value))}>
                {[...Array(8).keys()].map((i) => (
                  <option className="option-back" key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <label>Guest</label>
            </div>
            <div className="form-floating col-md-4 mx-2 my-3">
              <select
                className="form-select"
                value={date.toISOString().split('T')[0]}
                onChange={handleDateChange}
              >
                {Array.from({ length: 7 }, (_, i) => {
                  const newDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
                  return (
                    <option className="option-back" key={i} value={newDate.toISOString().split('T')[0]}>
                      {newDate.toLocaleDateString("fr-FR", {
                        weekday: "short",
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="floatingSelect">Date</label>
            </div>
            <div className="form-floating mx-2 my-3">
              <input
                type="text"
                className="form-control"
                id="floatingInputDisabled"
                disabled
                value={hour}
              />
              <label htmlFor="floatingInputDisabled">Time</label>
            </div>
          </div>
          <label>
            <div className="row reservationPage-heure">
              {renderHourButtons()}
            </div>
          </label>
          <br />
          <button className="btn btnsend" type="submit">
            Continue
          </button>
        </form>
      </div>
      <div className="container-fluid">
        <div className="row">
          <Footer />
        </div>
      </div>
    </section>
  );
}
export default ReservationPage;