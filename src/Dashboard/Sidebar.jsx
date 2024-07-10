import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal, GiHumanTarget } from "react-icons/gi";
import { IoIosListBox } from "react-icons/io";
import { FaSellsy } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Dashboard/Sidbar.css";
import logo from "../Dashboard/logoMaron.png";

export default function Sidebar() {
  return (
    <div className="sidbar shadow text-white">
      <div className="d-flex flex-column justify-content-around align-items-start  div">
        <div>
          <img src={logo} alt="" style={{ width: "80px" }} />
        </div>
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center mt-2  das gap-2 m-0">
            <span className="fs-4">
              <AiFillDashboard />
            </span>
            <span className="das">Dashboard</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin/utilisateurs"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center  das gap-2 m-0">
            <span className="fs-4">
              <CiUser />
            </span>
            <span>Utilisateurs</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin/plats"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center   das gap-2 m-0">
            <span className="fs-4">
              <GiHotMeal />
            </span>
            <span>Plats</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin/employe"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center   gap-2 ">
            <span className="fs-4">
              <GiHumanTarget />
            </span>
            <span>RH</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin/ventes"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center  das gap-2 m-0">
            <span className="fs-4">
              <FaSellsy />
            </span>
            <span className="">Ventes</span>
          </div>
        </NavLink>
        <NavLink
          to="/admin/commande"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <div className="d-flex justify-content-start align-items-center   das gap-2">
            <span className="fs-4">
              <FaSellsy />
            </span>
            <span>Commande</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
}
