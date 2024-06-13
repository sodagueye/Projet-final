import React from 'react';
import '../Componentnav/section22.css';

const Section22 = ({ onCategorySelect }) => {
  return (
    <div>
      <button onClick={() => onCategorySelect('')} className='b1'>Tous</button>
      <button onClick={() => onCategorySelect('burger')} className='b1'>Burger</button>
      <button onClick={() => onCategorySelect('glace')} className='b1'>Glace</button>
      <button onClick={() => onCategorySelect('plat')} className='b1'>Plats</button>
      <button onClick={() => onCategorySelect('jus')} className='b1'>Jus</button>
    </div>
  );
};

export default Section22;
