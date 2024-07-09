import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiUsers } from "react-icons/fi";
import { FaSellsy } from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";
import { BiSolidDish } from "react-icons/bi";
import "./Cards.css";
// import "../styles/style.css"
export default function Card() {
  const [plat, setPlat] = useState("");
  const [users, setUsers] = useState("");
  async function Plats() {
    try {
      const response = await axios.get(
        "https://tache-de-validition-nodejs-61fk.onrender.com/"
      );
      const resultat = await response.data;
      setPlat(resultat.length);
    } catch (e) {
      console.log(e);
    }
  }
  async function Users() {
    try {
      const response = await axios.get(
        "https://tache-de-validition-nodejs-61fk.onrender.com/api/register/getting"
      );
      const data = await response.data;
      setUsers(data.utilisateur.length);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    Plats();
    Users();
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-3">
          <div class="card shadow cartes p-2">
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
          <div class="card shadow cartes p-2">
            <div class="card-body d-flex flex-row align-items-center">
              <p class="card-text">{users} Utilisateurs</p>
              <p className="fs-3">
                <FiUsers />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow cartes p-2">
            <div class="card-body d-flex flex-row align-items-center">
              <h3 class="card-text">Ventes</h3>
              <p className="fs-2">
                <FaSellsy />
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow cartes  p-2">
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
