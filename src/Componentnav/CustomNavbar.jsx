import React, { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiWarningCircleLight } from "react-icons/pi";
import "./Navbar.css";
import logo from "../Componentnav/logoMaron.png";
import { Contexte } from "../Inscription/AuthProvider";

const CustomNavbar = () => {
  const { cart, user, logout } = useContext(Contexte);
  const cartQuantity = cart.length;
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top w-100 bg-white shadow">
        <div className="container-fluid">
          <div className="col-12 col-md-2">
            <NavLink to="/">
              <img src={logo} alt="logo" style={{ width: "80px" }} />
            </NavLink>
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
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item d-flex align-items-center me-2">
                <p className="fs-5 mt-2 icon-nav">
                  <FaHome />
                </p>
                <span className="ms-2">
                  <NavLink to="/">ACCUEIL</NavLink>
                </span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <MdOutlineRestaurantMenu />
                </p>
                <span className="ms-1">
                  <NavLink to="menu">MENU</NavLink>
                </span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-4 mt-2 icon-nav">
                  <PiWarningCircleLight />
                </p>
                <span className="ms-1">
                  <NavLink to="about">A PROPOS</NavLink>
                </span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <MdDashboard />
                </p>
                <span className="ms-1">
                  <NavLink to="reservation">RESERVATION</NavLink>
                </span>
              </li>
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <FaUser />
                </p>
                <span className="ms-1">
                  {user ? (
                    <div className="dropdown">
                      <span
                        className="dropdown-toggle"
                        id="userDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {user.firstName} {user.lastName}
                      </span>
                      <ul className="dropdown-menu" aria-labelledby="userDropdown">
                        <li>
                          <button className="dropdown-item" onClick={logout}>
                            Déconnexion
                          </button>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <NavLink to="/connexion">Connexion</NavLink>
                  )}
                </span>
              </li>
              <li className="nav-item cart d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <FaShoppingCart />
                </p>
                <span className="ajout">{cartQuantity}</span>
                <span className="ms-1">
                  <NavLink to="panier">PANIER</NavLink>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CustomNavbar;
