import React from 'react';
import { FaHamburger, FaIceCream, FaUtensils, FaCocktail, FaListAlt } from 'react-icons/fa';
import '../Componentnav/section22.css';

const Section22 = ({ onCategorySelect }) => {
  return (
    <div>
      <button onClick={() => onCategorySelect('')} className='b1'>
        <FaListAlt /> 
        <span className='categoriebtn'> Tous</span>
       
      </button>
      <button onClick={() => onCategorySelect('burger')} className='b1'>
        <FaHamburger /> 
      <span>Fasst-Food</span>
      </button>
      <button onClick={() => onCategorySelect('glace')} className='b1'>
        <FaIceCream /> 
        <span>Glace</span>
      </button>
      <button onClick={() => onCategorySelect('plat')} className='b1'>
        <FaUtensils /> 
        <span>Plats</span>
      </button>
      <button onClick={() => onCategorySelect('jus')} className='b1'>
        <FaCocktail /> 
        <span>Jus</span>
      </button>
    </div>
  );
};

export default Section22;
