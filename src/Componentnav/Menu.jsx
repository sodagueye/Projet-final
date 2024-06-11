import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import CustomNavbar from './CustomNavbar';

const Menu = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);

  const updateCartQuantity = (product, quantity) => {
    setCartQuantity(prevQuantity => prevQuantity + quantity);
    setCartProducts(prevProducts => {
      const productIndex = prevProducts.findIndex(item => item.name === product.name);
      if (productIndex > -1) {
        const updatedProducts = [...prevProducts];
        updatedProducts[productIndex].quantity += quantity;
        return updatedProducts;
      }
      return [...prevProducts, { ...product, quantity }];
    });
  };

  return (
    <div className="container mt-5">
      <CustomNavbar 
        cartQuantity={cartQuantity} 
        cartProducts={cartProducts} 
        setCartProducts={setCartProducts}
      />
      <div className="row">
        <div className="col-md-8 mt-4">
          <Section1 updateCartQuantity={updateCartQuantity} />
        </div>
        <div className="col-md-4 mt-4">
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default Menu;
