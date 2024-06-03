import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import logo1 from '../assets/logo1.png';

const CustomNavbar = ({ cartQuantity }) => {
  const [activeLink, setActiveLink] = useState('');
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <Navbar bg="custom" variant="dark" expand="lg" className={`navbar-custom fixed-top ${isNavbarExpanded ? 'navbar-expanded' : ''}`}>
      <Container fluid style={{ color: "#111" }}>
        <Navbar.Brand href="#" style={{ color: "#fff" }}>
          <img src={logo1} alt="Burger 1" className="me-2" style={{ width: "80px" }} />
          Teranga FOOD
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />
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
          <Nav className="ml-auto navbar-nav" style={{ color: "#111" }}>
            <Nav.Link href="#menu" className={`text-white ${activeLink === '#menu' ? 'active' : ''}`} onClick={() => setActiveLink('#menu')}>Menu</Nav.Link>
            <Nav.Link href="#reservation" className={`text-white ${activeLink === '#reservation' ? 'active' : ''}`} onClick={() => setActiveLink('#reservation')}>Reservation</Nav.Link>
            <Nav.Link href="#about" className={`text-white ${activeLink === '#about' ? 'active' : ''}`} onClick={() => setActiveLink('#about')}>About</Nav.Link>
            <FaUser className="text-white" style={{ fontSize: "19px" }} />
            <Nav.Link href="#cart" className={`text-white ${activeLink === '#cart' ? 'active' : ''}`} onClick={() => setActiveLink('#cart')}>
              <FaShoppingCart className="cart-icon" />
              <span>{cartQuantity}</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
