import React, { useState } from 'react';
import './Section2.css';

const Section2 = () => {
  const [filterLetter, setFilterLetter] = useState('');
  const products = [
    "Pizza Margherita",
    "Pizza Pepperoni",
    "Burger Classic",
    "Burger Double",
    "Tacos Chicken",
    "Tacos Beef",
    "Thieboudienne",
    "Yassa Chicken",
    "Bissap Juice",
    "Ginger Juice"
  ];

  const handleFilterChange = (event) => {
    setFilterLetter(event.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.toLowerCase().startsWith(filterLetter.toLowerCase())
  );

  return (
    <div>
      <div style={{height: "20px"}}></div>

      
      <div className="section2-container" style={{width:"250px",marginLeft:"40px"}}>
        <div className="partie2">
          <div>
            <input 
              type="text" 
              className="" 
              placeholder="Search"
              value={filterLetter}
              onChange={handleFilterChange}
              style={{width:"228px",border:"none",padding:"3px",position:"relative",right:"10px",borderRadius:"10px",border:"1px solid white "}}
            />
          </div>
        </div>
      </div>

      
      <div className="section2-container" style={{width:"250px",marginLeft:"40px",}}>
        <h6 className="text-black"><strong>Filter par Nom de Produits</strong></h6>
        <ul className="product-list">
          {filteredProducts.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Section2;
