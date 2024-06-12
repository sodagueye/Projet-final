import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, ListGroup, Modal } from 'react-bootstrap';

import ConfirmationPage from './ConfirmationPage';
import './FacturationPage.css';
import { Link } from 'react-router-dom';

const FacturationPage = ({ cartProducts = [], totalPrice = 0 }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);


  const handlePayment = (e) => {
    e.preventDefault();
    setOrderDetails(cartProducts);
    setShowConfirmationModal(true);
  };

  const handleClose = () => {
    setShowConfirmationModal(false);
    
  };

  return (
    <Container className="billing-container">
      <h1>Facturation et Paiement</h1>
      <Row>
        <Col md={8}>
          <h6>Informations de facturation</h6>
          <Form onSubmit={handlePayment}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" required />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre adresse" required />
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre ville" required />
            </Form.Group>
        <Link to={"/confirme"}> 
        <Button variant="primary" type="submit">
              Payer
            </Button>
        </Link>
          </Form>
        </Col>
        <Col md={4}>
          <h2>Produits choisis</h2>
          <ListGroup>
            {cartProducts.map((product, index) => (
              <ListGroup.Item key={index}>
                {product.name} - {product.quantity} x {product.price} FCFA
              </ListGroup.Item>
            ))}
          </ListGroup>
          <h3 className="mt-3">Total: {totalPrice} FCFA</h3>

          <h2 className="mt-4">Mode de paiement</h2>
          <Form.Group controlId="formBasicPaymentMethod">
            <Form.Check
              type="radio"
              label="Wave"
              name="paymentMethod"
              id="creditCard"
              value="creditCard"
              required
            />
            <Form.Check
              type="radio"
              label="Orange Money"
              name="paymentMethod"
              id="paypal"
              value="paypal"
              required
            />
          </Form.Group>
        </Col>
      </Row>

      <Modal show={showConfirmationModal} onHide={handleClose} centered style={{height:"105%"}}>
        <Modal.Body>
          <ConfirmationPage orderDetails={orderDetails} totalPrice={totalPrice} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default FacturationPage;
