import React from "react";
import { AiFillDashboard } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { GiHotMeal } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ icon }) {
  const navigation = useNavigate();
  return (
    <div className="sidebar text-white">
      <div onClick={()=>navigation('/admin')} className="d-flex justify-content-start mb-4">
        <p>{<AiFillDashboard />}</p>
        <p>Dashboard</p>
      </div>
      <div onClick={()=>navigation('/users')}  className="d-flex justify-content-start">
        <p>
          <CiUser />
        </p>
        <p>Utilisateurs</p>
      </div>
      <div
        onClick={()=>navigation('/plats')}
        className="d-flex justify-content-start mt-4"
      >
        <p>
          <GiHotMeal />
        </p>
        <p>Plats</p>
      </div>
    </div>
  );
}
