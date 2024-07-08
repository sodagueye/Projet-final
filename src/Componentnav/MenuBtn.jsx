import React from "react";
import { NavLink } from "react-router-dom";
export default function MenuBtn() {
  return (
    <div className="navmenu d-flex justify-content-center align-items-center pt-5 mt-5">
      <NavLink to="/menu/tout">Tout</NavLink>
      <NavLink to="/menu/platsSenegalais">Plats Sénégalais</NavLink>
      <NavLink to="/menu/burgers">FastFood</NavLink>
      <NavLink to="/menu/cuisineAilleurs">Cuisine D'ailleurs</NavLink>
      <NavLink to="/menu/boissons"> Boissons</NavLink>
      <NavLink to="/menu/desserts">Desserts</NavLink>
    </div>
  );
}
