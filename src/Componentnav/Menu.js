import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import CustomNavbar from './CustomNavbar';

const Menu = () => {
  const [cartQuantity, setCartQuantity] = useState(0);

  const updateCartQuantity = (quantity) => {
    setCartQuantity(prevQuantity => prevQuantity + quantity);
  };

  return (
    <div className="container mt-4">
      <CustomNavbar cartQuantity={cartQuantity} />
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
