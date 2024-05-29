import React from "react";
import { FaSearch } from "react-icons/fa";
import IconDash from "./IconDash";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import vector from "../pictures/vector.jpg";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-white shadow">
        <div className="container-fluid">
          <div className="d-flex">
            <div className="p-0">
              <input
                type="text"
                placeholder="Search for..."
                className="form-control p-2   input-search"
              />
            </div>
            <div className="navbar-icon text-white p-0 d-flex justify-content-center align-items-center">
              <IconDash icon={<FaSearch />} />
            </div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse  navbar-collapse justify-content-end "
            id="navbarNav"
          >
            <ul className="navbar-nav  d-flex align-items-center justify-content-center">
              <li className="nav-item nav-icon">
                <p className="test">
                  <IconDash icon={<FaBell />} />
                </p>
                <p className="bell">3+</p>
              </li>
              <li class="nav-item nav-icon ms-4 me-3">
                <p className="test">
                  <IconDash icon={<IoMdMail />} />
                </p>
                <p className="mail">7</p>
              </li>
              <li className="tiret ms-3 me-3"></li>
              <li className="nav-item avatar">Faabii</li>
              <li className="nav-item">
                <img src={vector} alt="" className="avatar" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
