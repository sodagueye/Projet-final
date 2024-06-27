import React from 'react';
import '../Componentnav/section22.css';

const Section22 = ({ onCategorySelect }) => {
  return (
    <div className='pt-5'>
      <button onClick={() => onCategorySelect('')} className='bg-transparent border-0'>Tous</button>
      <button onClick={() => onCategorySelect('burger')} className='bg-transparent border-0'>Burger</button>
      <button onClick={() => onCategorySelect('glace')} className='bg-transparent border-0'>Glace</button>
      <button onClick={() => onCategorySelect('plat')} className='bg-transparent border-0'>Plats</button>
      <button onClick={() => onCategorySelect('jus')} className='bg-transparent border-0'>Jus</button>
    </div>
  );
};

export default Section22;
