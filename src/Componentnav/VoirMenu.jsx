import React from 'react';
import Section22 from './Section22';
import './VoirMenu.css'; 

const VoirMenu = ({ onCategorySelect }) => {
  return (
    <div className="VoirMenu mt-5 w-100 text-center">
      <button className='mt-5'> 
        <span>Menu de </span>
        <span><b>K</b>eur</span>
        <span><b>Y</b>aay</span>
        <span><b>S</b>oda</span>
      </button>
      <Section22 onCategorySelect={onCategorySelect} />
    </div>
  );
}

export default VoirMenu;
