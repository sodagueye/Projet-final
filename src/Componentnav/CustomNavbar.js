import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Container, Offcanvas, Button } from 'react-bootstrap';
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa';
import AffichagePanier from './AffichagePanier';

import './Navbar.css';
import logo1 from '../assets/logo1.png';

const CustomNavbar = ({ cartProducts, setCartProducts }) => {
  const [activeLink, setActiveLink] = useState('');
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const [showCartModal, setShowCartModal] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  useEffect(() => {
    const totalQuantity = cartProducts.reduce((total, product) => total + product.quantity, 0);
    setCartQuantity(totalQuantity);
  }, [cartProducts]);

  const handleToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const handleCloseOffcanvas = () => {
    setShowOffcanvas(false);
  };

  const handleShowCartModal = () => {
    setShowCartModal(true);
  };

  const handleCloseCartModal = () => {
    setShowCartModal(false);
  };

  const incrementQuantity = (productId) => {
    setCartProducts(prevCartProducts => 
      prevCartProducts.map(product => 
        product.id === productId 
          ? { ...product, quantity: product.quantity + 1 } 
          : product
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCartProducts(prevCartProducts => 
      prevCartProducts.map(product => 
        product.id === productId && product.quantity > 1 
          ? { ...product, quantity: product.quantity - 1 } 
          : product
      )
    );
  };

  const removeProduct = (productId) => {
    setCartProducts(prevCartProducts => 
      prevCartProducts.filter(product => product.id !== productId)
    );
  };

  return (
    <>
      <Navbar bg="custom" variant="dark" expand="lg" className="navbar-custom fixed-top">
        <Container fluid style={{ color: "#111" }}>
          <Navbar.Brand href="#" style={{ color: "#fff" }}>
            <img src={logo1} alt="Burger 1" className="me-2" style={{ width: "80px" }} />
            Teranga FOOD
          </Navbar.Brand>
          <Button className="hamburger-button" onClick={handleToggle}>☰</Button>
          <Form className="d-flex search-bar mx-auto">
            <div className="search-input-container">
              <FaSearch className="search-icon recherche fs-5" />
              <FormControl type="text" placeholder="Search" className="search-input" aria-label="Search" />
            </div>
          </Form>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto navbar-nav" style={{ color: "#111" }}>
              <Nav.Link href="#menu">Menu</Nav.Link>
              <Nav.Link href="#reservation">Reservation</Nav.Link>
              <Nav.Link href="#about">A-Propos</Nav.Link>
              <FaUser className="text-white" style={{ fontSize: "19px" }} />
              <Nav.Link href="#cart" onClick={handleShowCartModal}>
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
              <FormControl type="text" placeholder="Search" className="search-input" aria-label="Search" />
            </div>
          </Form>
          <Nav className="flex-column">
            <Nav.Link href="#menu" className='text-dark fs-4'>Menu</Nav.Link>
            <Nav.Link href="#reservation" className='text-dark fs-4'>Reservation</Nav.Link>
            <Nav.Link href="#about" className='text-dark fs-4'>About</Nav.Link>
            <Nav.Link href='#user'>
              <FaUser className="user" style={{ fontSize: "19px" }} />
            </Nav.Link>
            <Nav.Link href="#cart" onClick={handleShowCartModal}>
              <div className='ensemble'>
                <FaShoppingCart className="cart-icon" />
                <span>{cartQuantity}</span>
              </div>
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <AffichagePanier
        show={showCartModal} 
        handleClose={handleCloseCartModal} 
        cartProducts={cartProducts} 
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeProduct={removeProduct}
      />
    </>
  );
};

export default CustomNavbar;
