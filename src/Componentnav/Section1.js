import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import bur4 from '../assets/bur4.png';
import img7 from '../assets/img7.png';
import img10 from '../assets/img10.png';
import img3 from '../assets/img3.png';
import jus6 from '../assets/jus6.jpg';
import jus4 from '../assets/jus4.jpg';
import gl from '../assets/gl.png';
import glace from '../assets/glace.png';
import jus11 from '../assets/jus11.png';
import tb2 from '../assets/tb2.jpg';
import tb7 from '../assets/tb7.jpg';
import tb8 from '../assets/tb8.jpg';
import tb11 from '../assets/tb11.png';
import './Section1.css';
import ContactWhatsApp from './ContactWhatsApp';
import logo1 from '../assets/logo1.png';
//import Icons from './Icons';  

const products = [
  { name: 'Creme Glace', price: 2000, image: gl, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Jus de Fruit', price: 1000, image: jus4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Burger', price: 4000, image: bur4, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Burger + KFC', price: 13000, image: img7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Frite avec Sauce tomate', price: 3500, image: img10, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Salade+Poulet', price: 4000, image: img3, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Glace', price: 2000, image: glace, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Jus naturelle', price: 1000, image: jus6, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Jus naturelle', price: 1000, image: jus11, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Theboudjeune', price: 1500, image: tb2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Cest Bon', price: 2000, image: tb7, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Vermiselle', price: 2000, image: tb8, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },
  { name: 'Theboudjeune', price: 1500, image: tb11, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada, diam sed consequat consectetur, nunc eros congu...' },

];

const Section1 = ({ updateCartQuantity }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleShowModal = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
    setQuantity(1);
    setTotalPrice(product.price);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
    setQuantity(1);
    setTotalPrice(0);
  };

  const handleAddToCart = () => {
    updateCartQuantity(quantity);
    handleCloseModal();
  };

  const handleQuantityChange = (newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity);
    setQuantity(updatedQuantity);
    setTotalPrice(updatedQuantity * selectedProduct.price);
  };

  const halfLength = Math.ceil(products.length / 2);
  const firstRow = products.slice(0, halfLength);
  const secondRow = products.slice(halfLength);

  return (
    <div className="section1-container">
      
      <div className="slider">
        <div className="slider-track">
          <div className="slider-row">
            {firstRow.map((product, index) => (
              <div key={index} className="card card-spacing card-container">
                <img src={product.image} alt={product.name} className="mx-auto d-block" style={{ width: "140px" }} />
                <div className="card-body" style={{textAlign:"center"}}>
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} FCFA</p>
                  <button className="btn btn-primary card-button bg-danger" style={{ border: "#fff solid 1px" }} onClick={() => handleShowModal(product)}>Ajouter au panier</button>
                  {/**<Icons comments={[]} />  */}
                </div>
              </div>
            ))}
          </div>
          <div className="slider-row">
            {secondRow.map((product, index) => (
              <div key={index} className="card card-spacing card-container">
                <img src={product.image} alt={product.name} className="mx-auto d-block" style={{ width: "140px" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} FCFA</p>
                  <button className="btn btn-primary card-button bg-danger" style={{ border: "#fff solid 1px" }} onClick={() => handleShowModal(product)}>Ajouter au panier</button>
                 {/** <Icons comments={[]} />  */}
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedProduct && (
        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="img-fluid mx-auto d-block" style={{ width: "70%" }} />
            <p className="mt-3">{totalPrice} FCFA</p>
            <p>{selectedProduct.description}</p>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <button onClick={() => handleQuantityChange(quantity - 1)} className="btn btn-secondary">-</button>
              <span className="mx-2">{quantity}</span>
              <button onClick={() => handleQuantityChange(quantity + 1)} className="btn btn-secondary">+</button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>Fermer</Button>
            <Button variant="" style={{backgroundColor:"#E7272D", color:"white"}} onClick={handleAddToCart}>Ajouter au panier</Button>
          </Modal.Footer>
        </Modal>
      )}
   
<ContactWhatsApp />
    </div>
    
  );
  
};

export default Section1;
