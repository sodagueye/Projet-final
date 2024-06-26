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
        <div className="d-flex">
        <p className="fs-5">{<AiFillDashboard />}</p>
        <p className="fs-5">Dashboard</p>
        </div>
      </div>
      <div
        onClick={() => navigation("/users")}
        className="d-flex justify-content-start"
      >
        <div className="d-flex"> 
        <p className="fs-5">
          <CiUser />
        </p>
        <p className="fs-5">Utilisateurs</p>
        </div>
      </div>
      <div
        onClick={() => navigation("/plats")}
        className="d-flex justify-content-start mt-4"
      >
        <div className="d-flex"> 
        <p className="fs-5">
          <GiHotMeal />
        </p>
        <p className="fs-5">Plats</p>
          </div>
      </div>
      <div
        onClick={() => navigation("/employe")}
        className="d-flex justify-content-start mt-4"
      >
        <div className="d-flex"> 
        <p className="fs-5">
          <GiHumanTarget />
        </p>
        <p className="fs-5">Ressources <br /> Humaines</p>
          </div>
      </div>
      <div
        onClick={() => navigation("/ventes")}
        className="d-flex justify-content-start mt-4"
      >
        <div className="d-flex">  
        <p className="fs-5">
          <FaSellsy />
        </p>
        <p className="fs-5">Ventes</p>
          </div>
      </div>
    </div>
  );
}
