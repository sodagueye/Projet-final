import React from "react";
import { FaRegUser } from "react-icons/fa";
import "./Temoignage.css";
import avatar from "../assets/avatar.jpg";
//import "./AppreciationCard.css"; // Assurez-vous que ce fichier existe

const Temoignage = () => {
  return (
    <div className="appreciation-container">
      <div className="appreciation-card">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h6>Eva</h6>
        <p>
          "Chez Keur Yaay Soda, j'ai retrouvé les saveurs authentiques de mon enfance. Chaque bouchée est un voyage culinaire, et l'ambiance conviviale ajoute au plaisir. C'est l'endroit idéal pour partager un bon repas en famille ou entre amis."
        </p>
      </div>
      <div className="appreciation-card">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h6>Fa</h6>
        <p>
          "J'ai découvert Keur Yaay Soda par hasard et c'est devenu mon endroit préféré pour déjeuner. Les plats sont toujours frais et délicieux, et l'accueil est chaleureux. Je recommande vivement à tous les amateurs de bonne cuisine!"
        </p>
      </div>
      <div className="appreciation-card">
        <img
          src={avatar}
          alt="User Avatar"
          className="avatar"
          style={{ width: "60px", height: "60px" }}
        />
        <h6>Khady</h6>
        <p>
          "Chez Keur Yaay Soda, j'ai retrouvé les saveurs authentiques de mon enfance. Chaque bouchée est un voyage culinaire, et l'ambiance conviviale ajoute au plaisir. C'est l'endroit idéal pour partager un bon repas en famille ou entre amis."
        </p>
      </div>
    </div>
  );
};

export default Temoignage;
