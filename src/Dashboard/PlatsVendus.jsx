import React from "react";
import Ventas from "../Suivis-Comptabilité/Ventes";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
export default function PlatsVendus() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar />
        </div>
        <div className="col-10 p-0">
          <Navbar />
          <Ventas />
        </div>
      </div>
    </div>
  );
}
