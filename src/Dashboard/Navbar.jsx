import React from "react";
import { FaSearch } from "react-icons/fa";
import IconDash from "./IconDash";
import { FaBell } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import vector from "../pictures/vector.jpg"
export default function Navbar() {
  return (
    <div>
      <nav className="navbar  navbar-expand-lg bg-white shadow">
        <div className="container-fluid">
          <div className="d-flex justify-content-center align-items-center">
            <div>
              <input
                type="text"
                placeholder="Search for..."
                className="form-control  input-search"
              />
            </div>
            <div className="navbar-icon ">
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
            <ul className="navbar-nav">
              <li className="nav-item nav-icon">
                <IconDash icon={<FaBell />} />
              </li>
              <li class="nav-item nav-icon ">
                <IconDash icon={<IoMdMail />} />
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                 Faabii
                </a>
              </li>
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
