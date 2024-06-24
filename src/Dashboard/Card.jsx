import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
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
  useEffect(() => {
    Plats();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div class="card shadow carte p-2">
            <div class="card-body d-flex align-items-center flex-row">
              <div>
                <p className="fs-4" style={{color: "#91725d" }}>{plat}</p>
              </div>
              <p className="fs-3">
                <FiShoppingCart />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte p-4">
            <div class="card-body">
              <p class="card-text">Utilisateurs</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte p-4">
            <div class="card-body">
              <p class="card-text">Ventes</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte p-4">
            <div class="card-body">
              <p class="card-text">Recette</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
