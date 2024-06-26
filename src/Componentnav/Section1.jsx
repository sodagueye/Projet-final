import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './Section1.css'; 

const products = [
  { id: 1, name: 'Creme Glace', price: 2000, image: require('../assets/gl.png'), category: 'glace', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, name: 'Jus de Fruit', price: 1000, image: require('../assets/jus4.jpg'), category: 'jus', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, name: 'Burger', price: 4000, image: require('../assets/bur4.png'), category: 'burger', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, name: 'Burger', price: 13000, image: require('../assets/bur1.png'), category: 'burger', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, name: 'Burger', price: 13000, image: require('../assets/bur2.png'), category: 'burger', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, name: 'Burger + KFC', price: 13000, image: require('../assets/img7.png'), category: 'burger', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  
  { id: 5, name: 'Frite avec Sauce tomate', price: 3500, image: require('../assets/img10.png'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, name: 'Salade+Poulet', price: 4000, image: require('../assets/img3.png'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, name: 'Glace', price: 2000, image: require('../assets/glace.png'), category: 'glace', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, name: 'Jus naturelle', price: 1000, image: require('../assets/jus6.jpg'), category: 'jus', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 9, name: 'Theboudjeune', price: 1500, image: require('../assets/tb2.jpg'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 10, name: 'Cest Bon', price: 2000, image: require('../assets/tb7.jpg'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 11, name: 'Vermiselle', price: 2000, image: require('../assets/tb8.jpg'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 12, name: 'Theboudjeune', price: 1500, image: require('../assets/tb11.png'), category: 'plat', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
];

const Section1 = ({ updateCartQuantity, selectedCategory }) => {
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
    updateCartQuantity(selectedProduct, quantity);
    handleCloseModal();
  };

  const handleQuantityChange = (newQuantity) => {
    const updatedQuantity = Math.max(1, newQuantity);
    setQuantity(updatedQuantity);
    setTotalPrice(updatedQuantity * selectedProduct.price);
  };

  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory) 
    : products;

  return (
    <div className="section1-container">
      <div className="slider">
        <div className="slider-track">
          <div className="slider-row">
            {filteredProducts.map((product, index) => (
              <div key={index} className="card card-spacing card-container py-3">
                  <div>
                   <img src={product.image} alt={product.name} className="mx-auto  d-block align-items-center "  />
                  </div>
                <div className="card-body" >
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.price} FCFA</p>
                  <div className=''>
                  <button className="btn card-button" onClick={() => handleShowModal(product)} style={{background:"#91725d",color:"white", width:"150px", borderRadius:20}}>Ajouter au panier</button>
                  </div>
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
            <Button variant="" style={{ backgroundColor: "#91725d", color: "white" }}  onClick={handleAddToCart}>Ajouter au panier</Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Section1;