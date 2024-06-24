import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaBell } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import avatar from "./avatar.jpg";
export default function Navbar() {
  return (
    <div className="container-fluid p-0">
      <nav class="navbar navbar-expand-lg bg-white shadow ">
        <div class="container-fluid">
          <div className="research d-flex gap-0">
            <input
              className="input-research "
              type="text"
              placeholder="Search Dashboard"
            />
            <div className="icon-search d-flex justify-content-center align-items-center">
              <IoSearch />
            </div>
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item send">
                <a class="nav-link active" aria-current="page" href="#">
                  <span className="fs-5">
                    <IoMdMail />
                  </span>
                  <div className="texte text-white d-flex justify-content-center align-items-center">
                    7
                  </div>
                </a>
              </li>
              <li class="nav-item fabelle">
                <a class="nav-link" href="#">
                  <span className="fs-5 ">
                    <FaBell />
                  </span>
                  <div className="belle text-white d-flex justify-content-center align-items-center">
                    +3
                  </div>
                </a>
              </li>
              <li class="nav-item">
                <span className="ms-4 name">Faabii</span>
                <img className="avatar" src={avatar} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
