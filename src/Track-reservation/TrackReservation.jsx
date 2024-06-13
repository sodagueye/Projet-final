import "./TrackReservation.css"
import { FaCheckCircle } from "react-icons/fa";

const TrackReservation = () => {
  return (
    <section id="trackreservation">
      <div className="container">
        <div className="row">
            <div className="d-flex trackreservation-state">
                <div className="d-flex fa active"><FaCheckCircle /> <p>En attente</p></div> <hr />
                <div className="d-flex fa"><FaCheckCircle /><p>Confirmé</p></div> <hr />
                <div className="d-flex fa"><FaCheckCircle /><p>Reservé</p></div>
            </div>
          <div className="trackreservation-head d-flex justify-content-between">
            <div className="restaurantRef">
                <div className="restaurantLogo"></div>
                <div className="restaurantID">
                    <h5>restaurant name</h5>
                    <p className="text-muted">restaurant localisation</p>
                </div>
            </div>
            <div className="cancelReservation">
                <button className="btn btn-danger">Annuler la réservation</button>
            </div>
          </div>
          <div className="trackreservation-body">
            <div class="row">
              <div class="col">
              <h5>Les details de la réservation</h5>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
              </div>
              <div class="col">
                <h5>Vos details</h5>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
                <input type="text" className="form-control"/>
              </div>
            </div>
            <div className="trackreservation-footer">
                <button className="btn btn-modify">Modifié la réservation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackReservation;
