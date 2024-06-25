import React, { useState } from "react";
import "./Reservation.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomNavbar from "../Componentnav/CustomNavbar";

function ReservationPage() {
  const [invites, setInvites] = useState(1);
  const [date, setDate] = useState(new Date());
  const [hour, setHour] = useState("");
  const navigate = useNavigate();

  const handleDateChange = (e) => {
    setDate(new Date(e.target.value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      invites: invites,
      date: date.toISOString(),
      hour: hour,
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/reservation",
        formData
      );

      navigate("/tables", { state: formData });
      // navigate('/redirection-confirmation', { state: formData });

      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de la demande de réservation");
    }
  };

  const handleHourChange = (hour) => {
    setHour(hour);
  };

  const hours = Array.from({ length: 23 }, (_, i) => i);

  return (
    <section id="reservationPage">
      <CustomNavbar />
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
                value={date.toISOString()}
                onChange={handleDateChange}
              >
                {Array.from({ length: 7 }, (_, i) => {
                  const newDate = new Date(
                    Date.now() + i * 24 * 60 * 60 * 1000
                  );
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
            <div className="row reservationPage-heure">
              {hours.map((hour, index) => (
                <React.Fragment key={index}>
                  <button
                    className="col-md-2 secondaire"
                    type="button"
                    onClick={() => handleHourChange(`${hour}:00:00`)}
                  >
                    {hour === 6
                      ? `06:00:00`
                      : hour < 12
                      ? `${hour}:00:00`
                      : hour === 12
                      ? `12:00:00`
                      : `${hour + 1}:00:00`}
                  </button>
                  <button
                    className="col-md-2 secondaire"
                    type="button"
                    onClick={() => handleHourChange(`${hour}:30:00`)}
                  >
                    {hour === 6
                      ? `06:30:00`
                      : hour < 12
                      ? `${hour}:30:00`
                      : hour === 12
                      ? `12:30:00`
                      : `${hour + 1}:30:00`}
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
