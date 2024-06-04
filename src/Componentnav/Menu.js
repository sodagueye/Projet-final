import React, { useState } from 'react';
import Section1 from './Section1';
import Section2 from './Section2';
import CustomNavbar from './CustomNavbar';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="container mt-4">
      <CustomNavbar cartItems={cartItems} />
      <div className="row">
        <div className="col-md-8">
          <Section1 setCartItems={setCartItems} cartItems={cartItems} />
        </div>
        <div className="col-md-4">
          <Section2 />
        </div>
      </div>
    </div>
  );
};

export default Menu;
