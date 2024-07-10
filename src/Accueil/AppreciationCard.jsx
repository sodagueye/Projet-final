import React from "react";
import { FaRegUser } from "react-icons/fa";
import "./AppreciationCard.css";
import avatar from "../assets/avatar.jpg";

const Appreciation = () => {
  return (
    <div className="appreciation-container">
      <div className="appreciation-card d-flex flex-column align-items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h5>Astou Fall</h5>
        <p className="fs-6">
           <strong>Keur Yaye Soda</strong> est mon restaurant préféré. La nourriture est
          toujours délicieuse et le service est impeccable. Je recommande
          vivement !
        </p>
      </div>
      <div className="appreciation-card d-flex flex-column align-items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h5>Boubacar Ndiaye</h5>
        <p className="fs-6">
          L'atmosphère chaleureuse et conviviale de <strong>Keur Yaye Soda</strong> me fait me
          sentir chez moi. Les plats traditionnels sont préparés à la
          perfection. Un vrai régal !
        </p>
      </div>
      <div className="appreciation-card d-flex flex-column align-items-center">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h5 >Khady Mbaye</h5>
        <p className="fs-6">
          Chaque visite à <strong>Keur Yaye Soda</strong> est une expérience culinaire
          incroyable. Les saveurs authentiques et les ingrédients frais rendent
          chaque plat exceptionnel. Bravo à l'équipe !
        </p>
      </div>
    </div>
  );
};

export default Appreciation;
