import React from 'react';
import { FaHamburger, FaIceCream, FaUtensils, FaCocktail, FaListAlt } from 'react-icons/fa';
import '../Componentnav/section22.css';

const Section22 = ({ onCategorySelect }) => {
  return (
    <div>
      <button onClick={() => onCategorySelect('')} className='b1'>
        <FaListAlt /> Tous
      </button>
      <button onClick={() => onCategorySelect('burger')} className='b1'>
        <FaHamburger /> Burger
      </button>
      <button onClick={() => onCategorySelect('glace')} className='b1'>
        <FaIceCream /> Glace
      </button>
      <button onClick={() => onCategorySelect('plat')} className='b1'>
        <FaUtensils /> Plats
      </button>
      <button onClick={() => onCategorySelect('jus')} className='b1'>
        <FaCocktail /> Jus
      </button>
    </div>
  );
};

export default Section22;
