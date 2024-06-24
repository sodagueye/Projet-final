import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cards.css";
export default function Card() {
  const [plat, setPlat] = useState("");
  async function Plats() {
    try {
      const response = await axios.get(
        "https://tache-de-validition-nodejs-1p19n5070.vercel.app/admin/liste-produits"
      );
      const resultat = await response.data;
      setPlat(resultat.length);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(()=>{
    Plats()
  },[])

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div class="card carte">
            <div class="card-body">
              <p class="card-text">{plat}</p>
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
