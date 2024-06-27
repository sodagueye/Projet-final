import React from 'react';
import Section22 from './Section22';
import './VoirMenu.css'; 

const VoirMenu = ({ onCategorySelect }) => {
  return (
    <div className="VoirMenu mt-5 w-100 text-center ">
      <button className='mt-5 KYS '> 
        <span>Menu de </span>
        <span>Keur</span>
        <span>Yaay</span>
        <span>Soda</span>
      </button>
      <Section22 onCategorySelect={onCategorySelect} />
    </div>
  );
}

export default VoirMenu;
