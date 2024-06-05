import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import CustomNavbar from './CustomNavbar';
//je vais cree 1 etat pr stocker les produits du panier 
const Menu = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartProducts,setCartProducts]=useState([])

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
    <div className="container mt-4">
      <CustomNavbar cartQuantity={cartQuantity} cartProducts={cartProducts} />
      <div className="row">
        <div className="col-md-8">
          <Section1 updateCartQuantity={updateCartQuantity} />
        </div>
        <div className="col-md-4">
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default Menu;
