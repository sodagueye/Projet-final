import React, { useState } from "react";
import "./Reservation.css";
import axios from "axios";

function ReservationPage() {
  const [invites, setInvites] = useState(1);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");

  const handleDateChange = (event) => {
    setDate(new Date(event.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      invites: invites,
      date: date.toISOString(),
      hour: hour,
    };

    try {
      const response = await axios.post("http://localhost:5000/api/reservation", formData);
      console.log(response.data);
      alert("Réservation réussie !");
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la demande de réservation");
    }
  };

  const handleHourChange = (hour) => {
    setHour(hour);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i);

  return (
    <section id="reservation">
      <div className="row reservation-body">
        <h1>Table de réservations</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-head justify-space-between">
            <div className="form-floating col-md-4 mx-2 my-3">
              <select
                className="form-select"
                value={invites}
                onChange={(e) => setInvites(Number(e.target.value))}
              >
                {[...Array(8).keys()].map((i) => (
                  <option
                    className="option-back"
                    key={i + 1}
                    value={i + 1}
                  >
                    {i + 1}
                  </option>
                ))}
              </select>
              <label>Guest</label>
            </div>
            <div className="form-floating col-md-4 mx-2 my-3">
              <select
                className="form-select"
                value={date.toISOString()}
                onChange={handleDateChange}
              >
                {Array.from({ length: 7 }, (_, i) => {
                  const newDate = new Date(Date.now() + i * 24 * 60 * 60 * 1000);
                  return (
                    <option
                      className="option-back"
                      key={i}
                      value={newDate.toISOString()}
                    >
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
            <div className="row reservation-heure">
              {hours.map((hour, index) => (
                <React.Fragment key={index}>
                  <button
                    className="col-md-2 secondaire"
                    type="button"
                    onClick={() => handleHourChange(`${hour}:00`)}
                  >
                    {hour === 0 ? `12:00 AM` : hour < 12 ? `${hour}:00 AM` : hour === 12 ? `12:00 PM` : `${hour - 12}:00 PM`}
                  </button>
                  <button
                    className="col-md-2 secondaire"
                    type="button"
                    onClick={() => handleHourChange(`${hour}:30`)}
                  >
                    {hour === 0 ? `12:30 AM` : hour < 12 ? `${hour}:30 AM` : hour === 12 ? `12:30 PM` : `${hour - 12}:30 PM`}
                  </button>
                </React.Fragment>
              ))}
            </div>
          </label>
          <br />
          <button className="btn btnsend" type="submit">
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationPage;
