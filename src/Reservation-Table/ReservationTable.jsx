import React, { useState, useEffect } from "react";
import "./ReservationTable.css";
import { useLocation, useNavigate } from "react-router-dom";
import  Footer  from "../Footer/Footer";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ReservationTable = () => {
  const location = useLocation();
  const { invites, date, hour } = location.state || {};
  const navigate = useNavigate();

  const [reservedTables, setReservedTables] = useState({});
  const [selectedRoom, setSelectedRoom] = useState("");
  const [selectedTable, setSelectedTable] = useState("");
  const [isTableReserved, setIsTableReserved] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  useEffect(() => {
    const fetchReservedTables = async () => {
      try {
        const response = await axios.get("https://tache-de-validition-nodejs-6.onrender.com/api/reservation-table/reserved-tables");
        setReservedTables(response.data);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des tables réservées!", error);
      }
    };

    fetchReservedTables();
  }, []);

  const handleRoomChange = (e) => {
    setSelectedRoom(e.target.value);
    setSelectedTable("");
    setIsTableReserved(false);
  };

  const handleTableChange = (e) => {
    const tableNumber = parseInt(e.target.value, 10);
    setSelectedTable(tableNumber);
    if (reservedTables[selectedRoom]?.includes(tableNumber)) {
      setIsTableReserved(true);
    } else {
      setIsTableReserved(false);
    }
  };

  const handlePass = async (e) => {
    e.preventDefault();
    if (isTableReserved) {
      toast.error("Cette table a déjà été réservée.");
    } else {
      const formData = {
        invites: invites,
        date: date,
        hour: hour,
        firstName,
        lastName,
        email,
        mobileNumber,
        roomId: selectedRoom,
        tableId: selectedTable,
        specialRequests,
      };

      try {
        const response = await axios.post(
          "https://tache-de-validition-nodejs-6.onrender.com/api/reservation-table/tablereserved",
          formData
        );
        toast.success(
          `Vous avez réservé la table ${selectedTable} dans ${selectedRoom}`
        );
        navigate("/redirection-confirmation", { state: formData });
      } catch (error) {
        console.error("Une erreur s'est produite lors de la réservation !", error);
          toast.error("Cette table a déjà été réservée.");
      }
    }
  };

  return (
    <section id="reservation-table">
      <ToastContainer />
      <div>
        <div className="container mt-5">
          <div className="row">
            <h3 className="reservation-table-body-text text-header">
              Tables reservations
            </h3>
            <div className="reservation-table-body">
              <div className="reservation-details">
                <h5 className="mt-3 reservation-table-body-text">
                  Reservations details
                </h5>
                <p className="text-muted reservation-table-body-text">
                  {`Date de reservation: ${new Date(date).toLocaleDateString(
                    "fr-FR",
                    {
                      weekday: "short",
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    }
                  )} à ${hour}`}
                </p>
                <p className="text-muted info reservation-table-body-text">
                  {`Nombre d'invités: ${invites}`}
                </p>
              </div>
              <form>
                <div className="personnal-details">
                  <h5 className="reservation-table-body-text">
                    Personnal details
                  </h5>
                  <div className="form-head d-flex justify-space-between mb-3">
                    <div className="form-floating form-x col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control input-name"
                        id="floatingInput"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Prénom</label>
                    </div>
                    <div className="form-floating form-x col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control input-name"
                        id="floatingInput"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label htmlFor="floatingInput">Nom</label>
                    </div>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="floatingInput"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingInput"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                    />
                    <label htmlFor="number">Télèphone</label>
                  </div>
                  <div className="select-part d-flex justify-space-between mb-3">
                    <div className="form-floating rounded-0 border-0 form-z form-x col-md-6">
                      <select
                        id="floatingSelect"
                        className="form-select rounded-0 border-0"
                        value={selectedRoom}
                        onChange={handleRoomChange}
                      >
                        <option value="">Sélectionner une salle</option>
                        <option value="Salle 1">Salle 1</option>
                        <option value="Salle 2">Salle 2</option>
                        <option value="Salle 3">Salle 3</option>
                        <option value="Salle 4">Salle 4</option>
                        <option value="Salle 5">Salle 5</option>
                        <option value="Salle 6">Salle 6</option>
                        <option value="Salle 7">Salle 7</option>
                        <option value="Salle 8">Salle 8</option>
                        <option value="Salle 9">Salle 9</option>
                        <option value="Salle 10">Salle 10</option>
                        
                      </select>
                      <label>Salles</label>
                    </div>
                    <div className="form-floating rounded-0 border-0 form-z form-x col-md-6">
                      <select
                        id="floatingSelect"
                        className="form-select rounded-0 border-0"
                        value={selectedTable}
                        onChange={handleTableChange}
                        disabled={!selectedRoom}
                      >
                        <option value="">Sélectionner une table</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                      </select>
                      <label>Tables</label>
                    </div>
                  </div>
                  {isTableReserved && (
                    <p className="text-danger">
                      Cette table a déjà été réservée.
                    </p>
                  )}
                  <div>
                    <label
                      className="reservation-table-body-text text-muted"
                      htmlFor="floatingTextarea2"
                    >
                     Commentaires
                    </label>
                    <textarea
                      className="form-control"
                      id="floatingTextarea2"
                      value={specialRequests}
                      onChange={(e) => setSpecialRequests(e.target.value)}
                    ></textarea>
                  </div>
                </div>
                <p className="reservation-table-body-text text-muted mt-3 fs-6">
                En continuant, vous acceptez les conditions d'utilisation et la politique de confidentialité.!
                </p>
                <button
                  type="submit"
                  className="btn btnsend"
                  onClick={handlePass}
                >
                  Réserver
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReservationTable;
