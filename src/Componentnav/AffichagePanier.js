import React, { useState, useEffect } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import './Affichage.css';
import Connexion from '../Inscription/Connexion'; 

const AffichagePanier = ({ show, handleClose, cartProducts, incrementQuantity, decrementQuantity, removeProduct }) => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    // Calculer le nombre total d'articles dans le panier
    let total = 0;
    cartProducts.forEach(product => {
      total += product.quantity;
    });
    setTotalItems(total);
  }, [cartProducts]); // Mettre à jour lorsque le contenu du panier change

  // Calcul du total
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Faire commande
  const handleOrder = () => {
    alert('Veuillez-vous connecter pour valider votre commande!');
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => setShowLoginModal(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Mon Panier</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartProducts.length === 0 ? (
            <p>Votre panier est vide.</p>
          ) : (
            <div className="container-fluid">
              {cartProducts.map((product, index) => (
                <Row key={index} className="mb-3">
                  <Col md={2} className="d-flex align-items-center">
                    <img src={product.image} alt={product.name} className="product-image" style={{ width: '100%', maxHeight: '200px' }} />
                  </Col>
                  <Col md={4} className="d-flex align-items-center">
                    <div>
                      <h5>{product.name}</h5>
                      <p>{product.price} FCFA</p>
                    </div>
                  </Col>
                  <Col md={2} className="d-flex align-items-center">
                    <Button variant="danger" onClick={() => removeProduct(product.id)}>Supprimer</Button>
                  </Col>
                  <Col md={4} className="d-flex align-items-center">
                    <table>
                      <tbody>
                        <tr>
                          <td>Recapitulatif</td>
                        </tr>
                        <tr>
                          <td>Nombre d'articles: {totalItems}</td>
                        </tr>
                        <tr>
                          <td>Prix de la livraison:</td> 
                        </tr>
                        <tr>
                          <td>Total: {totalPrice} FCFA</td>
                        </tr>
                        <tr>
                          <td>
                            <Button variant="primary" onClick={handleOrder}>Commander</Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </Col>
                </Row>
              ))}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showLoginModal} onHide={handleCloseLoginModal} centered size="lg" className="login-modal">
        <Modal.Header closeButton>
          <Modal.Title>Connexion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="login-container">
            <Connexion />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AffichagePanier;
