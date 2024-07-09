import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal, GiHumanTarget } from "react-icons/gi";
import { FaSellsy } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./styles.css";

export default function Sidebar() {
  return (
    <div className="sidebar shadow text-white">
      <div className="d-flex justify-content-start mb-4">
        <p className="fs-5">{<AiFillDashboard />}</p>
        <p className="fs-5">
          <NavLink to="/admin/dashboard">Dashboard</NavLink>
        </p>
      </div>
      <div className="d-flex justify-content-start">
        <p className="fs-5">
          <CiUser />
        </p>
        <p className="fs-5">
          <NavLink to="/admin/utilisateur">Utilisateurs</NavLink>
        </p>
      </div>
      <div className="d-flex justify-content-start mt-4">
        <p className="fs-5">
          <GiHotMeal />
        </p>
        <p className="fs-5">
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "")}
            to="/admin/plats"
          >
            Plats
          </NavLink>
        </p>
      </div>
      <div className="d-flex justify-content-start mt-4">
        <p className="fs-5">
          <GiHumanTarget />
        </p>
        <p className="fs-5">
          <NavLink to="/admin/employe">Ressources Humaines</NavLink>
        </p>
      </div>
      <div className="d-flex justify-content-start mt-4">
        <p className="fs-5">
          <FaSellsy />
        </p>
        <p className="fs-5">
          <NavLink to="/admin/ventes">Ventes</NavLink>
        </p>
      </div>
    </div>
  );
}
