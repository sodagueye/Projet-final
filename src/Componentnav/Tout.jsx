import React from "react";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Accueil/Presentation.css";
import { Context } from "../Components";
import MenuBtn from "./MenuBtn";

export default function Tout() {
  const [plats, setPlats] = useState([]);
  const [loading, setLoading] = useState(true);
  const { handleAddToCart } = useContext(Context);

  async function getProducts() {
    const resultat = await axios.get(
      "http://localhost:8080/admin/liste-produits"
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
    <div className="container mt-5">
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
          <div className="row mt-4">
            {plats.map((item) => (
              <div key={item.id} className="col-lg-4 mt-5">
                <div class="card border-0 shadow">
                  <img
                    src={item.image}
                    class=""
                    style={{ height: "300px", objectFit: "cover" }}
                    alt="..."
                  />
                  <div class="card-body">
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <button
                      className="border-0 btn-add text-white rounded shadow p-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
