import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal, GiHumanTarget } from "react-icons/gi";
import { IoIosListBox } from "react-icons/io";
import { FaSellsy } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Dashboard/Sidbar.css"


export default function Sidebar() {
  return <div className="sidbar shadow text-white">
    <div className="d-flex flex-column justify-content-around align-items-start fs-5 div">
      <NavLink to="/admin" activeClassName="active">
        <div className="d-flex justify-content-start align-items-center py-2 ms-2 das">
          <AiFillDashboard />
          <span className="das">Dashboard</span>
        </div>
      </NavLink>
      <NavLink to="/admin/utilisateurs" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center ms-2 das">
          <CiUser />
          <span>Utilisateurs</span>
        </div>
      </NavLink>
      <NavLink to="/admin/plats" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center  ms-2 das">
          <GiHotMeal />
          <span> Plats</span>
        </div>
      </NavLink>
      <NavLink to="/admin/employe" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center  ms-2 das">
          <GiHumanTarget />
          <span>R_H</span>
        </div>
      </NavLink>
      <NavLink to="/admin/ventes" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center  ms-2 das">
          <FaSellsy />
          <span className="">Ventes</span>
        </div>
      </NavLink>
      <NavLink to="/admin/commande" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center  ms-2 das">
          <FaSellsy />
          <span>Commande</span>
        </div>
      </NavLink>
    </div>
  </div>
}
