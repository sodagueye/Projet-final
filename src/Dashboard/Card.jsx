import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiShoppingCart } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { FaSellsy } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import "./Cards.css";
export default function Card() {
  const [plat, setPlat] = useState("");
  async function Plats() {
    try {
      const response = await axios.get(
        "https://tache-de-validition-nodejs-6.onrender.com/admin/liste-produits/"
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div class="card shadow carte">
            <div class="card-body d-flex align-items-center flex-row">
              <div>
                <p className="fs-4">{plat} plats</p>
              </div>
              <p className="fs-2">
                <BiSolidDish />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 class="card-text">Utilisateurs</h3>
              <p className="fs-2">
                <FiUsers />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 class="card-text">Ventes</h3>
              <p className="fs-2">
                <FaSellsy />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow carte">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 className="card-text">Recette</h3>
              <p className="fs-2">
                <GiMoneyStack />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
