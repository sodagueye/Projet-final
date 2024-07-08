import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Accueil/Presentation.css";

export default function Tout() {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  async function getProducts() {
    const resultat = await axios.get(
      "https://tache-de-validition-nodejs-61fk.onrender.com/admin/liste-produits"
    );
    const response = await resultat.data;
    setPlats(response);
    setLoading(false);
  }
  getProducts();
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {loading ? (
          <div>
            <div
              className="spinner-border"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
            <div
              className="spinner-grow"
              style={{ width: "3rem", height: "3rem" }}
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          plats.map((item) => (
            <div key={item.id} className="col-lg-4 mt-4 scale-image">
              <Link to={`/detail/${item._id}`}>
                <div className="card border-0 carte shadow">
                  <img src={item.image} className="" alt="..." />
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
