
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaShippingFast } from 'react-icons/fa';

const ConfirmationPage = ({ orderDetails, totalPrice }) => {
  const navigate = useNavigate();

  const handleBackToMenu = () => {
    navigate('/menu');
  };

  return (
    <div className="confirmation-page">
      <h1><FaCheckCircle /> Confirmation de Commande</h1>
      <p>Merci pour votre commande !</p>
      <ul>
        {orderDetails.map((product, index) => (
          <li key={index}>{product.name} - {product.quantity} x {product.price} FCFA</li>
        ))}
      </ul>
      <h3>Total: {totalPrice} FCFA</h3>
      <p><FaShippingFast /> Votre commande sera livrée dans les plus brefs délais. Merci pour votre confiance !</p>
      <Link to="/Menu">
        <Button variant="primary" onClick={handleBackToMenu}>Retour au Menu</Button>
      </Link>
    </div>
  );
};

export default ConfirmationPage;

