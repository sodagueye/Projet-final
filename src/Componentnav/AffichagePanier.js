// AffichagePanier.js
import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import './Affichage.css';

const AffichagePanier = ({ show, handleClose, cartProducts, incrementQuantity, decrementQuantity, removeProduct }) => {
  // Calculon la total
  const totalPrice = cartProducts.reduce((total, product) => total + (product.price * product.quantity), 0);

  // Faire commande
  const handleOrder = () => {
    // 
    alert('Voulezvous validez votre commande!');
  };

  return (
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
                 {/**   <MdDelete className='delete' onClick={() => removeProduct(product.id)} /> */}
                  </div>
                  <div className='incremente'>
                  </div>
                </Col>
                <Col md={4} className="d-flex align-items-center">
                  <table>
                    <tbody>
                      <tr>
                        <td>Recapitulatif</td>
                      </tr>
                      <tr>
                        <td>Nombre d'articles: {cartProducts.length}</td>
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
  );
};

export default AffichagePanier;
