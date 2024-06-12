import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import ConfirmationPage from './ConfirmationPage';
import './FacturationPage.css';
//import AffichagePanier from './AffichagePanier';
import AffichagePanier from './AffichagePanier';

const FacturationPage = ({ location, cartProducts = [] }) => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [deliveryDate, setDeliveryDate] = useState('');
  const [billingInfo, setBillingInfo] = useState({
    nom: '',
    email: '',
    adresse: '',
    ville: ''
  });
  const [shippingAddress, setShippingAddress] = useState({
    nom: '',
    adresse: '',
    ville: ''
  });

  const handlePayment = (e) => {
    e.preventDefault();
    setOrderDetails(cartProducts);
    setShowConfirmationModal(true);
  };

  const handleClose = () => {
    setShowConfirmationModal(false);
  };

  const handleDeliveryFeeChange = (e) => {
    setDeliveryFee(parseInt(e.target.value, 10));
  };

  const handleDeliveryDateChange = (e) => {
    setDeliveryDate(e.target.value);
  };

  const handleBillingInfoChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo({ ...billingInfo, [name]: value });
  };

  const handleAddShippingAddress = () => {
    setShippingAddress({ ...billingInfo });
  };

  // Calcul du total
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);
  const totalWithDelivery = totalPrice + deliveryFee;

  return (
    <Container className="billing-container">
      <h6>Facturation et Paiement</h6>
      <Row>
        <Col md={6}>
          <h6>Informations de facturation</h6>
          <Form onSubmit={handlePayment}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre nom" name="nom" value={billingInfo.nom} onChange={handleBillingInfoChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Entrez votre email" name="email" value={billingInfo.email} onChange={handleBillingInfoChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Label>Adresse</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre adresse" name="adresse" value={billingInfo.adresse} onChange={handleBillingInfoChange} required />
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label>Ville</Form.Label>
              <Form.Control type="text" placeholder="Entrez votre ville" name="ville" value={billingInfo.ville} onChange={handleBillingInfoChange} required />
            </Form.Group>

            <Form.Group controlId="formBasicDeliveryFee">
              <Form.Label>Frais de livraison</Form.Label>
              <Form.Control as="select" onChange={handleDeliveryFeeChange} required>
                <option value="">Sélectionnez les frais de livraison</option>
                <option value="1000">Zone 1 - 1000 FCFA</option>
                <option value="2000">Zone 2 - 2000 FCFA</option>
                <option value="3000">Zone 3 - 3000 FCFA</option>
                <option value="3500">Zone 4 - 3500 FCFA</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="formBasicDeliveryDate">
              <Form.Label>Date de livraison</Form.Label>
              <Form.Control type="date" onChange={handleDeliveryDateChange} required />
            </Form.Group>
            <Button variant="primary" onClick={handleAddShippingAddress}>Ajouter</Button>
            <Button className='payer' variant="" type="submit" className="payer">
              Payer
            </Button>
          </Form>
        </Col>
        <Col md={6} className='text-center'>
          <h6>Mode de paiement</h6>
       {/**  <p>Total: {totalPrice} FCFA</p> */}
          <p>Frais de livraison: {deliveryFee} FCFA</p>
          <p>Total à payer: {totalWithDelivery} FCFA</p>
          <AffichagePanier cartProducts={cartProducts} />
          <h6>Adresse de livraison</h6>
          <p>Nom: {shippingAddress.nom}</p>
          <p>Adresse: {shippingAddress.adresse}</p>
          <p>Ville: {shippingAddress.ville}</p>
          <p>Date de livraison: {deliveryDate}</p>
          
        </Col>
        
      </Row>

      <Modal show={showConfirmationModal} onHide={handleClose} centered style={{ height: "105%" }}>
        <Modal.Body>
          <ConfirmationPage orderDetails={orderDetails} totalPrice={totalWithDelivery} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        </Modal.Footer>
      </Modal>
      
    </Container>
    
  );
};

export default FacturationPage;
