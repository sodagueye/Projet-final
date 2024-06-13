import "./ReservationTable.css";

const ReservationTable = () => {
  return (
    <section id="reservation-table">
      <div className="container">
        <div className="row">
          <h3 className="reservation-table-body-text text-header">Tables reservations</h3>
          <div className="reservation-table-body">
            <div className="reservation-details">
              <h5 className="mt-3 reservation-table-body-text">Reservations details</h5>
              <p className="text-muted reservation-table-body-text">
                date de reservation + heure de reservation
              </p>
              <p className="text-muted info reservation-table-body-text">nombre invité</p>
            </div>
            <form action="">
              <div className="personnal-details">
                <h5 className="reservation-table-body-text ">Personnal details</h5>
                <div className="form-head d-flex justify-space-between mb-3">
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="email"
                      className="form-control input-name"
                      id="floatingInputDisabled"
                      disabled
                    />
                    <label for="floatingInput">First name</label>
                  </div>
                  <div className="form-floating form-x col-md-6 mb-3">
                    <input
                      type="password"
                      className="form-control input-name"
                      id="floatingInputDisabled"
                      disabled
                    />
                    <label for="floatingInput">Last name</label>
                  </div>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingInputDisabled"
                    disabled
                  />
                  <label for="email">Email address</label>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    id="floatingInputDisabled"
                    disabled
                  />
                  <label for="number">Mobile number</label>
                </div>
                <div className="select-part d-flex justify-space-between mb-3">
                  <div className="form-floating rounded-0 border-0  form-z form-x col-md-6">
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
                <div class="">
                  <label className="reservation-table-body-text text-muted" for="floatingTextarea2">Requetes speciales</label>
                  <textarea
                    class="form-control"
                    id="floatingTextarea2"
                  ></textarea>
                </div>
              </div>
              <p className="reservation-table-body-text text-muted mt-3 fs-6" >By continuing, you agree to Terms of Service and Privacy Policy.</p>
              <button type="submit" className="btn btnsend">Reserver</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationTable;
