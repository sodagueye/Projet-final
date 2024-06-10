import React, { useState } from 'react';
import './Section2.css';

const Section2 = () => {
  const [filterLetter, setFilterLetter] = useState('');
  const [filterPrice, setFilterPrice] = useState('');

  const products = [
    { name: "Pizza Margherita", price: 2500 },
    { name: "Pizza Pepperoni", price: 2500 },
    { name: "Burger Classic", price: 3000 },
    { name: "Burger Double", price: 4000 },
    { name: "Tacos Chicken", price: 2500 },
    { name: "Tacos Beef", price: 2000 },
    { name: "Thieboudienne", price: 150 },
    { name: "Yassa Chicken", price: 2000 },
    { name: "Bissap Juice", price: 1000 },
    { name: "Ginger Juice", price: 1000}
  ];

  const handleFilterChange = (event) => {
    setFilterLetter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().startsWith(filterLetter.toLowerCase());
    const matchesPrice = filterPrice ? product.price <= parseFloat(filterPrice) : true;
    return matchesName && matchesPrice;
  });

  return (
    <div>
      {/* Espace blanc */}
      <div style={{ height: "20px" }}></div>

      <div className="section2-container" style={{ width: "250px", marginLeft: "40px" }}>
        <div className="partie2">
          <div>
            <input
              type="text"
              className=""
              placeholder="Search"
              value={filterLetter}
              onChange={handleFilterChange}
              style={{ width: "228px", border: "none", padding: "3px", position: "relative", right: "10px", borderRadius: "10px", border: "1px solid white " }}
            />
          </div>
         
        </div>
      </div>

      <div className="section2-container" style={{ width: "250px", marginLeft: "40px" }}>
        <h6 className="text-black"><strong>Filter par Nom de Produits et Prix</strong></h6>
        <ul className="product-list">
          {filteredProducts.map((product, index) => (
            <li key={index}>{product.name} - {product.price} FCFA</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Section2;
