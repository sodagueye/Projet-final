import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";
export default function Card() {
  const [plat, setPlat] = useState("");
  async function getNumberOfMeals() {
    try {
      const response = await axios.get("http://localhost:4000/recup");
      const resultat = await response.data;
      setPlat(resultat.length);
    } catch {
      console.log("Erreur");
    }
  }
  useEffect(() => {
    getNumberOfMeals();
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">Nombre de plats: {plat}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">Utilisateurs</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
