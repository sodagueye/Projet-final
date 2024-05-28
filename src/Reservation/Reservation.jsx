import React, { useState } from "react";
import "./Reservation.css";

function ReservationPage() {
  const [invites, setInvites] = useState(1);
  const [date, setDate] = useState(new Date());

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoi de la requête de réservation
  };

  const [hour, setHour] = useState(6); // Initialiser l'heure à 6h00

  const handleHourChange = (hour) => {
    setHour(hour);
  };

  const hours = [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <section id="reservation">
      <div className="row reservation-body">
        <h1>Table de réservations</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-flex justify-space-between">
            <div className="form-floating col-md-4 mx-2 my-3">
              <select
                className="form-select"
                id="floatingSelect"
                value={invites}
                onChange={(e) => setInvites(e.target.value)}
              >
                {[...Array(8).keys()].map((i) => (
                  <option className="option-back" key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <label for="floatingSelect">Guest</label>
            </div>
            <div className="form-floating col-md-4 mx-2 my-3">
              <select
                className="form-select"
                id="floatingSelect"
                value={date}
                onChange={handleDateChange}
              >
                {Array.from({ length: 7 }, (_, i) => (
                  <option
                    key={i}
                    value={new Date(Date.now() + i * 24 * 60 * 60 * 1000)}
                  >
                    {new Date(
                      Date.now() + i * 24 * 60 * 60 * 1000
                    ).toLocaleDateString("fr-FR", {
                      weekday: "short",
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </option>
                ))}
              </select>
              <label for="floatingSelect">Date</label>
            </div>
            <div class="form-floating mx-2 my-3">
              <input
                type="email"
                class="form-control"
                id="floatingInputDisabled"
                placeholder="name@example.com"
                disabled
              />
              <label for="floatingInputDisabled">Time</label>
            </div>
          </div>
          <label>
            <div className="row reservation-heure">
              {hours.map((hour, index) => (
                <>
                  <button
                    className="col-md-2 secondaire"
                    key={index}
                    onClick={() => handleHourChange(hour)}
                  >
                    {hour}:00 AM
                  </button>
                  <button
                    className="col-md-2 secondaire"
                    key={index}
                    onClick={() => handleHourChange(hour)}
                  >
                    {hour}:30 PM
                  </button>
                </>
              ))}
            </div>
          </label>
          <br />
          <button
            className="btn btnsend"
            onClick={() => {
              const formData = {
                invites: invites,
                date: date.toISOString(),
                hour: hour,
              };
              // Envoi de la réservation au serveur
              fetch("/api/reservation", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
              })
                .then((response) => response.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
            }}
          >
            Continue
          </button>
        </form>
      </div>
    </section>
  );
}

export default ReservationPage;
