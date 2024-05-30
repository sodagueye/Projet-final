import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, NavDropdown } from 'react-bootstrap';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import './Navbar.css';
import { FaUser } from "react-icons/fa";
import logo1 from '../assets/logo1.png';

const CustomNavbar = () => {
  const [activeLink, setActiveLink] = useState('');
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = (quantity) => {
    setCartQuantity(cartQuantity + quantity);
  };

  return (
    <Navbar bg="custom" variant="dark" expand="lg" className="navbar-custom fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={logo1} alt="Burger 1" className="me-2" style={{ width: "80px" }} />
          Teranga FOOD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex search-bar mx-auto" style={{ position: "relative", right: "80px" }}>
            <div className="search-input-container">
              <FaSearch className="search-icon" />
              <FormControl
                type="text"
                placeholder="Search"
                className="search-input"
                aria-label="Search"
              />
            </div>
          </Form>
          <Nav className="ml-auto navbar-nav">
            <Nav.Link href="#menu" className={`text-white ${activeLink === '#menu' ? 'active' : ''}`} onClick={() => setActiveLink('#menu')}>Menu</Nav.Link>
            <Nav.Link href="#reservation" className={`text-white ${activeLink === '#reservation' ? 'active' : ''}`} onClick={() => setActiveLink('#reservation')}>Reservation</Nav.Link>
            <Nav.Link href="#about" className={`text-white ${activeLink === '#about' ? 'active' : ''}`} onClick={() => setActiveLink('#about')}>About</Nav.Link>
          <FaUser style={{fontSize:"19px"}}/>
            {/** <NavDropdown title="Dakar" id="basic-nav-dropdown" className="select" style={{ borderRadius: "10px", backgroundColor: "white", color: "#E7272D", width: "50px" }}>
              <NavDropdown.Item href="#action/1">Dakar</NavDropdown.Item>
              <NavDropdown.Item href="#action/2">Scart-urbam</NavDropdown.Item>
              
              <NavDropdown.Item href="#action/2">Scart-urbam</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#cart" className={`text-white ${activeLink === '#cart' ? 'active' : ''}`} onClick={() => setActiveLink('#cart')}>
              <FaShoppingCart className="cart-icon" />
              {/**<span>{cartQuantity}</span> */}
              <span>0</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
