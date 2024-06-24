import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Products from "./Products";
export default function Plats() {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2 p-0">
            <Sidebar />
          </div>
          <div className="col-10 p-0">
            <Navbar />
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
}
