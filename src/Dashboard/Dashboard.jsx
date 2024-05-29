import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";
export default function Dashboard() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-2  p-0">
          <Sidebar />
        </div>
        <div className="col-10 p-0">
          <Navbar />
          <div>
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}
