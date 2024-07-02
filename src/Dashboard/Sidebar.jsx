import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal, GiHumanTarget } from "react-icons/gi";
import { FaSellsy } from "react-icons/fa";
import { NavLink} from "react-router-dom";
// import "./styles.css";

export default function Sidebar() {
  return <div className="sidebar shadow text-white">
    <div className="d-flex align-items-center fs-5 mb-4">
      <p className="fs-5">{<AiFillDashboard />}</p>
      <NavLink to="/admin">Dashboard</NavLink>
    </div>
    <div className="d-flex flex-column align-items-start ps-2" >
      <div className="d-flex align-items-center mb-4 fs-5">
        <CiUser/>
        <NavLink to="/admin/utilisateur">Utilisateurs</NavLink>
      </div>
      <div className="d-flex align-items-center fs-5 mb-4">
        <GiHotMeal />
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to="/admin/plats"
        >
          Plats
        </NavLink>
      </div>
      <div className="d-flex align-items-center mb-4 fs-5">
          <GiHumanTarget />
          <NavLink to="/admin/employe">R-H</NavLink>
      </div>
      <div className="d-flex align-items-center fs-5 mb-4">
        <FaSellsy />
        <NavLink to="/admin/ventes">Ventes</NavLink>
      </div>
    </div>

  </div>
}
