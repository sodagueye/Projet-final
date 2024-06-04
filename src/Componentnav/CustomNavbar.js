import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Offcanvas, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import './Navbar.css';
import logo1 from '../assets/logo1.png';

const CustomNavbar = ({ cartQuantity }) => {
  const [activeLink, setActiveLink] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  return (
    <>
      <Navbar bg="custom" variant="dark" expand="lg" className="navbar-custom fixed-top">
        <Container fluid style={{ color: "#111" }}>
          <Navbar.Brand href="#" style={{ color: "#fff" }}>
            <img src={logo1} alt="Burger 1" className="me-2" style={{ width: "80px" }} />
            Teranga FOOD
          </Navbar.Brand>
          <Button
            className="hamburger-button"
            onClick={handleToggle}
          >
            ☰
          </Button>
          <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex search-bar mx-auto">
              <div className="search-input-container">
                <FaSearch className="search-icon recherche" />
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="search-input"
                  aria-label="Search"
                />
              </div>
            </Form>
            <Nav className="ml-auto navbar-nav" style={{ color: "#111" }}>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#reservation">Reservation</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <FaUser className="text-white" style={{ fontSize: "19px" }} />
              <Nav.Link href="#cart">
                <FaShoppingCart className="cart-icon" />
                <span>{cartQuantity}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} placement="end">
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
          <Nav className="flex-column ">
            <Nav.Link href="#menu" className='text-dark fs-4'>Menu</Nav.Link>
            <Nav.Link href="#reservation" className='text-dark fs-4'>Reservation</Nav.Link>
            <Nav.Link href="#about" className='text-dark fs-4'>About</Nav.Link>
            <Nav.Link href='#user'>
            <FaUser className="user" style={{ fontSize: "19px" }} /></Nav.Link>
            <Nav.Link href="#cart">
              <div className='ensemble'>
              <FaShoppingCart className="cart-icon" />
              <span>{cartQuantity}</span></div>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CustomNavbar;
