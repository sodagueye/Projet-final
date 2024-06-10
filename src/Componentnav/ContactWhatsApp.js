import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContactWhatsApp = () => {
  const handleWhatsAppContact = () => {
    window.location.href = 'https://api.whatsapp.com/send?phone=778883551';
  };

  return (
    <div className="contact-whatsapp">
      <button 
        style={{
          background: "#E7272D",
          color: "#fff",
          border: "2px solid #E7272D",
          padding: "5px 5px",
          fontSize: "16px",
          
        }} 
        onClick={handleWhatsAppContact}
      >
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: "10px",fontSize:"37px" }} />
        Contactez-nous sur WhatsApp
      </button>
    </div>
  );
};

export default ContactWhatsApp;
