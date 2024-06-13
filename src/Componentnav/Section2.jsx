import React, { useState } from 'react';
import './Section2.css';
import gl from '../assets/gl.png'; // Importez l'image ou le chemin de l'image correctement

const Section2 = () => {
  const [filterLetter, setFilterLetter] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  const products = [
    { name: "Pizza Margherita", image: gl, price: 2500, category: 'plat' },
    { name: "Pizza Pepperoni", price: 2500, category: 'plat' },
    { name: "Burger Classic", price: 3000, category: 'burger' },
    { name: "Burger Double", price: 4000, category: 'burger' },
    { name: "Tacos Chicken", price: 2500, category: 'plat' },
    { name: "Tacos Beef", price: 2000, category: 'plat' },
    { name: "Theboudjeune", price: 1500, category: 'plat' },
    { name: "Yassa Chicken", price: 2000, category: 'plat' },
    { name: "Bissap Juice", price: 1000, category: 'jus' },
    { name: "Ginger Juice", price: 1000, category: 'jus' }
  ];

  const handleFilterChange = (event) => {
    setFilterLetter(event.target.value);
  };

  const handlePriceFilterChange = (event) => {
    setFilterPrice(event.target.value);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter(product => {
    const matchesName = product.name.toLowerCase().startsWith(filterLetter.toLowerCase());
    const matchesPrice = filterPrice ? product.price <= parseFloat(filterPrice) : true;
    const matchesCategory = selectedCategory === '' || product.category === selectedCategory;

    return matchesName && matchesPrice && matchesCategory;
  });

  return (
    <div>
      {/* Espacement */}
      <div style={{ height: "20px" }}></div>
      <div className="partie2">
        <div>
          {/* Boutons de catégorie */}
          <button onClick={() => handleCategoryFilter('')} className={selectedCategory === '' ? 'active' : ''}>Tous</button>
          <button onClick={() => handleCategoryFilter('glace')} className={selectedCategory === 'glace' ? 'active' : ''}>Glaces</button>
          <button onClick={() => handleCategoryFilter('burger')} className={selectedCategory === 'burger' ? 'active' : ''}>Burgers</button>
          <button onClick={() => handleCategoryFilter('plat')} className={selectedCategory === 'plat' ? 'active' : ''}>Plats</button>
          <button onClick={() => handleCategoryFilter('jus')} className={selectedCategory === 'jus' ? 'active' : ''}>Jus</button>
        </div>
      </div>
      <ul className="product-list">
        {filteredProducts.map((product, index) => (
          <li key={index}>
            <img src={product.image} alt={product.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} /> 
            {product.name} - {product.price} FCFA
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Section2;
