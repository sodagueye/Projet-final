import React from 'react';
import { useNavigate } from 'react-router-dom';

function MsgSuccess() {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate('/connexion'); 
  };

  return (
    <div className="backpass shadow p-5 fs-5 mt-5">
      <p>Bravo ! Votre mot de passe a été bien réinitialisé. Vous pouvez vous connecter dorénavant avec votre email et votre nouveau mot de passe.</p>
      <button 
        type='button' 
        className='liens align-items-center creer mt-5 fs-5 fw-bold'
        onClick={handleLoginRedirect}
      >
        Connectez-vous
      </button>
    </div>
  );
}

export default MsgSuccess;