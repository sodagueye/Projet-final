import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Card from "./Card";
import { Outlet } from "react-router-dom";
import "./styles.css";
import PanierProvider from "../Components";
import AuthProvider from "../Inscription/AuthProvider";
export default function Dashboard() {
  return (
    <AuthProvider>
      <PanierProvider>
        <div className="container-fluid">
          <div className="row">
            <div className="col-2 p-0">
              <Sidebar />
            </div>
            <div className="col-10 p-0">
              <Navbar />
              <div>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </PanierProvider>
    </AuthProvider>
  );
}
