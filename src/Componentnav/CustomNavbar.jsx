import React, { useState, useContext } from "react";
import { FaHome } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { Context } from "../Components";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PiWarningCircleLight } from "react-icons/pi";
import "./Navbar.css";
import logo from "../Componentnav/logoMaron.png";
import { Contexte } from "../Inscription/AuthProvider";

const CustomNavbar = () => {
  const { cartQuantity } = useContext(Context);
  const { firstName, lastName } = useContext(Contexte);
  console.log(firstName, lastName);
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleClose = () => setShowOffcanvas(false);

//TEST
  const { user, logout } = useContext(Contexte);

  return (
    <>
      {/* <Offcanvas show={showOffcanvas} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Form className="d-flex search-bar mx-auto">
            <div className="search-input-container">
              <FaSearch className="search-icon recherche fs-5" />
              <FormControl
                type="text"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
            </div>
          </Form>
          <Nav className="flex-column">
            <Nav.Link href="menu" className="text-dark fs-4">
              Menu
            </Nav.Link>
            <Nav.Link href="reservation" className="text-dark fs-4">
              Reservation
            </Nav.Link>
            <Nav.Link href="about" className="text-dark fs-4">
             About
            </Nav.Link>
            <Nav.Link href="connexion">
              <div>
                <FaUser className="user" style={{ fontSize: "19px" }} />
              </div>
            </Nav.Link>

            <Nav.Link href="panier">
              <div className="panierk">
                <FaShoppingCart className="cart-icon" />
              </div>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas> */}
      <nav class="navbar navbar-expand-lg mb-5 fixed-top w-100 bg-white shadow ">
        <div class="container-fluid ">
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
              <li className="nav-item d-flex align-items-center me-2 ">
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
              {/* <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <FaUser />
                </p>
                <span className="ms-1">
                  <NavLink to="connexion">
                    {firstName && lastName ? (
                      <span className="ms-1">
                        CONNEXION {firstName} {lastName}
                      </span>
                    ) : (
                      <span className="ms-1">Connexion</span>
                    )}
                  </NavLink>
                </span>
              </li> */}
              {/* //TEST */}
              <li className="nav-item d-flex align-items-center ms-3">
                <p className="fs-5 mt-2 icon-nav">
                  <FaUser />
                </p>
                <span className="ms-1">
                  {user ? (
                    <div className="dropdown">
                      <span className="dropdown-toggle" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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