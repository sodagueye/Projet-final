import React from "react";
import { NavLink } from "react-router-dom";
export default function MenuBtn() {
  return (
    <div className="navmenu d-flex justify-content-center align-items-center pt-5 mt-5">
      <NavLink className="text-white shadow" to="/menu/tout">Tout</NavLink>
      <NavLink className="text-white shadow" to="/menu/platsSenegalais">Plats Sénégalais</NavLink>
      <NavLink className="text-white shadow" to="/menu/burgers">FastFood</NavLink>
      <NavLink className="text-white shadow" to="/menu/cuisineAilleurs">Cuisine D'ailleurs</NavLink>
      <NavLink className="text-white shadow" to="/menu/boissons"> Boissons</NavLink>
      <NavLink className="text-white shadow" to="/menu/desserts">Desserts</NavLink>
    </div>
  );
}
