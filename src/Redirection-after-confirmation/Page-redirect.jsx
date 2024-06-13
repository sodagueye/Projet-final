import React from "react";
import "./Page-redirect.css";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import { IoIosArrowBack } from "react-icons/io";



const PageRedirection = () => {
  const location = useLocation();
  const { invites, date, hour } = location.state || {};

  // Bouton qui renvoie à la page précédente
  const [prevPage, setPrevPage] = useState(window.location.href);

  useEffect(() => {
    const handlePrevPage = () => {
      window.history.back();
    };

    const prevPageButton = document.getElementById("prev-page-button");
    if (prevPageButton) {
      prevPageButton.addEventListener("click", handlePrevPage);
    }
  }, []);


  return (
    <section id="PageRedirection">
      <div className="container">
        <div className="row">
          <div className="Redirect-Page-head">
            <h4>Table reservations</h4>
          </div>
          <div className="Redirect-Page-body">
            <div className="Redirect-Page-body-navigate-button">
            <button id="prev-page-button " className="btn btn-back-page"> <span><IoIosArrowBack /></span> Back</button>
            </div>
            <iframe
              title="icon-success"
              src="https://lottie.host/embed/a034fca6-de7c-4398-8fc9-026c5be7a51e/NZZuRrhGYL.json"
            />
            <h4>Votre reservation a été effectuée avec succès</h4>
            <p className="text-muted">
              vous recevrez un autre email une fois votre reservation confirmé
            </p>
            <div className="recup-reservation-date">
              <h5 className="my-4">
                {`${new Date(date).toLocaleDateString("fr-FR", {
                  weekday: "short",
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })} à ${hour}`}
              </h5>
              <p className="d-grid">
                <span> {`Nombre d'invités: ${invites}`}</span>{" "}
              </p>
            </div>
            <div className="Redirect-Page-footer my-3">
              <button className="btn btn-new mx-2"> Reserver de nouveau</button>
              <button className="btn btn-track mx-2">
                {" "}
                Suivre votre reservation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageRedirection;
