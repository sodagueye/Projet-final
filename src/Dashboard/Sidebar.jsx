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
      <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center py-2 p-2 das gap-2 m-0">
          <AiFillDashboard />
          <span className="das">Dashboard</span>
        </div>
      </NavLink>
      <NavLink to="/admin/utilisateurs" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center  das gap-2 m-0">
          <CiUser />
          <span>Utilisateurs</span>
        </div>
      </NavLink>
      <NavLink to="/admin/plats" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center   das gap-2 m-0">
          <GiHotMeal />
          <span> Plats</span>
        </div>
      </NavLink>
      <NavLink to="/admin/employe" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center m-2  das gap-2 m-0">
          <GiHumanTarget />
          <span>RH</span>
        </div>
      </NavLink>
      <NavLink to="/admin/ventes" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center m-2  das gap-2 m-0">
          <FaSellsy />
          <span className="">Ventes</span>
        </div>
      </NavLink>
      <NavLink to="/admin/commande" className={({ isActive }) => (isActive ? "active" : "")}>
        <div className="d-flex justify-content-start align-items-center m-2   das gap-2">
          <FaSellsy />
          <span>Commande</span>
        </div>
      </NavLink>
    </div>
  </div>
}
