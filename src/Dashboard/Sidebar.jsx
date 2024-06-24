import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";
import { GiHumanTarget } from "react-icons/gi";
import { FaSellsy } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./styles.css";
export default function Sidebar({ icon }) {
  const navigation = useNavigate();
  return (
    <div className="sidebar text-white">
      <div
        onClick={() => navigation("/admin")}
        className="d-flex justify-content-start mb-4"
      >
        <p>{<AiFillDashboard />}</p>
        <p>Dashboard</p>
      </div>
      <div
        onClick={() => navigation("/users")}
        className="d-flex justify-content-start"
      >
        <p>
          <CiUser />
        </p>
        <p>Utilisateurs</p>
      </div>
      <div
        onClick={() => navigation("/plats")}
        className="d-flex justify-content-start mt-4"
      >
        <p>
          <GiHotMeal />
        </p>
        <p>Plats</p>
      </div>
      <div
        onClick={() => navigation("/employe")}
        className="d-flex justify-content-start mt-4"
      >
        <p>
          <GiHumanTarget />
        </p>
        <p>Ressources Humaines</p>
      </div>
      <div
        onClick={() => navigation("/ventes")}
        className="d-flex justify-content-start mt-4"
      >
        <p>
          <FaSellsy />
        </p>
        <p>Ventes</p>
      </div>
    </div>
  );
}
