import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Card() {
  const [productNumber, setProductNumber] = useState(null);
  useEffect(() => {
    async function connect() {
      try {
        const response = await axios.get("http://localhost:4000/recup");
        const resultat = await response.data;
        console.log(resultat);
        setProductNumber(resultat.length);
      } catch (e) {
        console.log(e);
      }
    }
    connect();
  }, []);
  return (
    <div className="container mt-5">
      <div className="row  p-2">
        <div className="col-lg-3">
          <div class="card shadow border-0 card-border">
            <div class="card-body">
              <h5 className="card-text text-center ">Nombre de Plats</h5>
              <h6 className="text-center fs-4 text-plat"> {productNumber}</h6>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow border-0 card-border">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow border-0 card-border">
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div class="card shadow border-0 card-border">
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
