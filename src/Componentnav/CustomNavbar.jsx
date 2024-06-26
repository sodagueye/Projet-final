import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Container,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import AffichagePanier from "./AffichagePanier";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Navbar.css";
import logo1 from "../assets/logo1.png";
// { cartProducts, setCartProducts }
// const CustomNavbar = () => {
// const [activeLink, setActiveLink] = useState('');
// const [showOffcanvas, setShowOffcanvas] = useState(false);
// const [showCartModal, setShowCartModal] = useState(false);
// const [cartQuantity, setCartQuantity] = useState(0);
// const [isMenuOpen, setIsMenuOpen] = useState(false);

// import './Navbar.css';
import soda from "../assets/soda.png";

const CustomNavbar = ({ cartProducts, setCartProducts, test }) => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  return (
    <>
      <Navbar
        bg="custom"
        variant="dark"
        expand="lg"
        className="navbar-custom fixed-top mb-5"
      >
        <Container fluid style={{ color: "#111" }}>
          <NavLink to="/" style={{ color: "#fff" }}>
            <img
              src={soda}
              alt="Burger 1"
              className="me-2 logonav"
              style={{ width: "180px" }}
            />
          </NavLink>
          <Button className="hamburger-button">☰</Button>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-nav" style={{ color: "#111" }}>
              <NavLink className="text-white ms-2" to="/menu">
                Menu
              </NavLink>
              <NavLink className="text-white ms-2" to="/reservation">
                Reservation
              </NavLink>
              {/* <NavLink className="text-white ms-2" to="/about">A-Propos</NavLink> */}
              <NavLink className="text-white ms-2" to="/connexion">
                <FaUser className="text-white" style={{ fontSize: "19px" }} />
              </NavLink>
              <NavLink className="text-white panier" to="/panier">
                <span className="fs-4">
                  <AiOutlineShoppingCart />
                </span>
                <p className="bg-white  ajout">
                  {test}
                </p>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas placement="end">
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
            <Nav.Link href="#menu" className="text-dark fs-4">
              Menu
            </Nav.Link>
            <Nav.Link href="#reservation" className="text-dark fs-4">
              Reservation
            </Nav.Link>
            <Nav.Link href="#about" className="text-dark fs-4">
              About
            </Nav.Link>
            <Nav.Link href="inscription">
              <FaUser className="user" style={{ fontSize: "19px" }} />
            </Nav.Link>
            <Nav.Link href="#cart">
              <div className="ensemble">
                <FaShoppingCart className="cart-icon" />
              </div>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      {/* <AffichagePanier
        show={showCartModal} 
        handleClose={handleCloseCartModal} 
        cartProducts={cartProducts} 
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeProduct={removeProduct}
      /> */}
    </>
  );
};

export default CustomNavbar;
