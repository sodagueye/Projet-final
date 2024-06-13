import React from "react";
import "./ReservationTable.css";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ReservationTable = () => {
  const location = useLocation();
  const { invites, date, hour } = location.state || {};
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    navigate('/redirection-confirmation', {
      state: {
        invites: invites,
        date: date,
        hour: hour
      }
    });
  };


  return (
    <section id="reservation-table">
      <div className="container">
        <div className="row">
          <h3 className="reservation-table-body-text text-header">Tables reservations</h3>
          <div className="reservation-table-body">
            <div className="reservation-details">
              <h5 className="mt-3 reservation-table-body-text">Reservations details</h5>
              <p className="text-muted reservation-table-body-text">
                {`Date de reservation: ${new Date(date).toLocaleDateString("fr-FR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} à ${hour}`}
              </p>
              <p className="text-muted info reservation-table-body-text">
                {`Nombre d'invités: ${invites}`}
              </p>
            </div>
            <form action="">
              <div className="personnal-details">
                <h5 className="reservation-table-body-text">Personnal details</h5>
                <div className="form-head d-flex justify-space-between mb-3">
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control input-name"
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput">First name</label>
                  </div>
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control input-name"
                      id="floatingInput"
                    />
                    <label htmlFor="floatingInput">Last name</label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label htmlFor="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInput"
                  />
                  <label htmlFor="number">Mobile number</label>
                </div>
                <div className="select-part d-flex justify-space-between mb-3">
                  <div className="form-floating rounded-0 border-0 form-z form-x col-md-6">
                    <select id="floatingSelect" className="form-select rounded-0 border-0">
                      <option value="">Salle 8</option>
                      <option value="">Salle 4</option>
                      <option value="">Salle 6</option>
                      <option value="">Salle 2</option>
                      <option value="">Salle 10</option>
                    </select>
                    <label>Room name</label>
                  </div>
                  <div className="form-floating rounded-0 border-0 form-z form-x col-md-6">
                    <select id="floatingSelect" className="form-select rounded-0 border-0">
                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                    </select>
                    <label>Table name</label>
                  </div>
                </div>
                <div>
                  <label className="reservation-table-body-text text-muted" htmlFor="floatingTextarea2">Requetes speciales</label>
                  <textarea
                    className="form-control"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
              </div>
              <p className="reservation-table-body-text text-muted mt-3 fs-6">By continuing, you agree to Terms of Service and Privacy Policy.</p>
              <button type="submit" className="btn btnsend"  onClick={handleSubmit}>Reserver</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationTable;

