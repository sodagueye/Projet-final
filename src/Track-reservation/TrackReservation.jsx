import axios from "axios";
import "./TrackReservation.css"
import { FaCheckCircle } from "react-icons/fa";
import { useLocation, useNavigate} from 'react-router-dom';

const TrackReservation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { invites, date, hour } = location.state || {};



  const handleDelete = async (e) => {
    e.preventDefault();
    const formData = {
      invites: invites,
      date: new Date(date).toISOString(),
      hour: hour,
    }; 
    try {
      const response = await axios.delete("http://localhost:8080/api/reservation", formData);
      alert('vous avez annuler votre réservation')

      navigate('/reservation', { state: formData });
      // navigate('/redirection-confirmation', { state: formData });

      console.log(response.data);
    } catch (err) {
      console.error(err);
      alert("Erreur lors de l'annulation de la réservation");
    }
  };



  const handlePrevPage = () => {
    navigate('/reservation');    

  };
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
                <div className="restaurantLogo">
                </div>
                <div className="restaurantID">
                    <h5>Keur Yaay Soda</h5>
                    <p className="text-muted">restaurant localisation</p>
                </div>
            </div>
            <div className="cancelReservation">
                <button className="btn btn-danger" onClick={handleDelete}>Annuler la réservation</button>
            </div>
          </div>
          <div className="trackreservation-body">
            <div class="row">
              <div class="col">
              <h5>Les details de la réservation</h5>
               <input type="text" className="form-control" value={invites}readOnly />
                 <input type="text" className="form-control" value={new Date(date).toLocaleDateString("fr-FR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} readOnly />
                <input type="text" className="form-control" value={hour} />
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
                <button className="btn btn-modify" onClick={handlePrevPage}>Modifié la réservation</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackReservation;
