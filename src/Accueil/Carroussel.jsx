import React from "react";
import asset6 from "../Accueil/asset6.jpeg";
import asset7 from "../Accueil/asset7.jpeg";
import asset5 from "../Accueil/asset5.jpeg";
import "./Presentation.css"; // Assurez-vous d'importer le fichier CSS

export default function Carroussel() {
  return (
    <div className="container-fluid p-0  container-text">
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <h1 className="text">Bienvenue chez Yaay Soda</h1>

        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src={asset6}
              className="d-block w-100 zoom"
              alt="..."
              style={{ height: 450, objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src={asset7}
              className="d-block w-100 zoom"
              alt="..."
              style={{ height: 450, objectFit: "cover" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={asset5}
              className="d-block w-100 zoom"
              alt="..."
              style={{ height: 450, objectFit: "cover" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
