import React from 'react';
import { FaRegUser } from "react-icons/fa";
import './AppreciationCard.css'; 
import avatar from '../assets/avatar.jpg';

const Appreciation = () => {
  return (
    <div className="appreciation-container">
      
      <div className="appreciation-card">
        <img src={avatar} alt="User Avatar" className="avatar" style={{width:"60px",height:"60px"}} />
        <h6>Eva</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="appreciation-card">
        <img src={avatar} alt="User Avatar" className="avatar" style={{width:"60px",height:"60px"}} />
        <h6>Fa</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="appreciation-card">
        <img src={avatar} alt="User Avatar" className="avatar" style={{width:"60px",height:"60px"}} />
        <h6>Khady</h6>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
    </div>
  );
};

export default Appreciation;
