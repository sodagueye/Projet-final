import React from "react";
import { NavLink } from "react-router-dom";
export default function MenuBtn() {
  return (
    <div className="navmenu d-flex p-5 justify-content-center align-items-center mt-5">
      <NavLink to="/boissons"> Boissons Froides</NavLink>
      <NavLink to="/burgers">Burgers</NavLink>
      <NavLink to="/platsSenegalais">Plats Sénégalais</NavLink>
      <NavLink to="/cuisineAilleurs">Cuisine D'ailleurs</NavLink>
      <NavLink to="/desserts">Desserts</NavLink>
    </div>
  );
}
