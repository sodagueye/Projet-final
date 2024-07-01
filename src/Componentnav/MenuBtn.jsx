import React from "react";
import { NavLink } from "react-router-dom";
export default function MenuBtn() {
  return (
    <div className="navmenu d-flex p-5 justify-content-center align-items-center mt-5">
      <NavLink to="/menu/boissons"> Boissons Froides</NavLink>
      <NavLink to="/menu/burgers">Burgers</NavLink>
      <NavLink to="/menu/platsSenegalais">Plats Sénégalais</NavLink>
      <NavLink to="/menu/cuisineAilleurs">Cuisine D'ailleurs</NavLink>
      <NavLink to="/menu/desserts">Desserts</NavLink>
    </div>
  );
}
