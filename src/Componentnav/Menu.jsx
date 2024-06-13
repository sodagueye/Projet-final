import React, { useState } from 'react';
import Section1 from './Section1';
import CustomNavbar from './CustomNavbar';
import VoirMenu from './VoirMenu';

const Menu = () => {
  const [cartQuantity, setCartQuantity] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

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

  const handleCategoryFilter = (category) => {
    console.log('Category selected:', category);
    setSelectedCategory(category);
  };

  return (
    <div className="container mt-5">
      <CustomNavbar 
        cartQuantity={cartQuantity} 
        cartProducts={cartProducts} 
        setCartProducts={setCartProducts}
      />
      <div className="w-100">
        <VoirMenu onCategorySelect={handleCategoryFilter} />
      </div>
      <div className="row">
        <div className="col-md-12 mt-4">
          <Section1 
            updateCartQuantity={updateCartQuantity} 
            selectedCategory={selectedCategory} 
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
