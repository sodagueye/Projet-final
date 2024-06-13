
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShippingFast } from 'react-icons/fa';

const ConfirmationPage = ({ orderDetails, totalPrice }) => {
  

  const handleBackToMenu = () => {
  
  };

  return (
    <div className="confirmation-page text-center">
      <h6 ><FaCheckCircle className="fs-5"style={{color:"green"}} /> Confirmation de Commande</h6>
      <p>Merci d'avoir passé une commande sur <b>Restaurant LeVrai!</b></p>
      {/***
      <ul>
        {orderDetails.map((product, index) => (
          <li key={index}>{product.name} - {product.quantity} x {product.price} FCFA</li>
        ))}
      </ul>
      <h3>Total: {totalPrice} FCFA</h3> */}
      <p><FaShippingFast /> Votre commande sera livrée dans les plus brefs délais. </p>
      <p>Merci pour votre confiance !</p>
      <Link to="/Menu">
        <Button variant="danger" onClick={handleBackToMenu}>Retour au Menu</Button>
      </Link>
    </div>
  );
};

export default ConfirmationPage;

