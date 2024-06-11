import React, { useState } from "react";
import "./ReservationTable.css";

const ReservationTable = () => {
  return (
    <section id="reservation-table">
      <div className="container">
        <div className="row">
          <h3>Tables reservations</h3>
          <div className="reservation-body">
            <div className="reservation-details">
              <h5>Reservations details</h5>
              <p className="text-muted info">
                date de reservation + heure de reservation
              </p>
              <p className="text-muted info">nombre invité</p>
            </div>
            <form action="">
              <div className="personnal-details">
                <h5>Personnal details</h5>
                <div className="form-head d-flex justify-space-between mb-3">
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control input-name"
                      id="floatingInput"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">First name</label>
                  </div>
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="password"
                      className="form-control input-name"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Last name</label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="name@example.com"
                  />
                  <label for="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Password"
                  />
                  <label for="number">Mobile number</label>
                </div>
                <div className="select-part d-flex justify-space-between mb-3">
                  <div className="form-floating form-x col-md-6">
                    <select className="form-select">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    <label>Room name</label>
                  </div>
                  <div className="form-floating form-x col-md-6">
                    <select className="form-select">
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                      <option value=""></option>
                    </select>
                    <label>Table name</label>
                  </div>
                </div>
                <div class="">
                  <label for="floatingTextarea2">Requetes speciales</label>
                  <textarea
                    class="form-control"
                    placeholder="Leave a comment here"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationTable;
