import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Ventes.css"
import { IoSearch } from "react-icons/io5";

function Ventas() {
  const [ventes, setVentes] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/ventes?date=${date}`)
      .then((response) => {
        setVentes(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [date]);

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTotalVentas = () => {
    axios
      .get("http://localhost:5000/total-ventes")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container">
      <div className="row">
        <h2 className="my-3">Suivis des ventes du restaurant</h2>
        <form className="d-flex justify-content-between align-content-center">
          <div className="">
          <label>Choisisez la date de recherche: </label>
          <input
            className="form-control ventes mx-auto"
            type="date"
            value={date}
            onChange={handleDateChange}
          />
          </div>
        <div className="research d-flex gap-0 align-content-center">
            <input
              className="input-research "
              type="text"
              placeholder="Rechercher"
            />
            <div className="icon-search d-flex justify-content-center align-items-center">
              <IoSearch />
            </div>
          </div>  
        </form>
        <table className="table my-4 mx-auto">
          <thead>
            <tr>
              <th>Date</th>
              <th>Plat</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {ventes.map((vente) => (
              <tr key={vente._id}>
                <td>{vente.date}</td>
                <td>{vente.plat}</td>
                <td>{vente.quantite}</td>
                <td>{vente.prix}</td>
                <td>{vente.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn my-3"
         onClick={handleTotalVentas} 
         style={{ backgroundColor: "#91725d", color: "white" }}>
          Total ventes
        </button>
      </div>
    </div>
  );
}

export default Ventas;
