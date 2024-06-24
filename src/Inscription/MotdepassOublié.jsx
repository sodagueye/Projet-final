import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function MotdepassOublié() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/request-reset', { email });
      navigate('/sendmail'); 
    } catch (err) {
      console.error(err);
      alert('Erreur lors de la demande de réinitialisation');
    }
  };

  return (
    <div>
      <div className='backpass shadow d-flex justify-content-center align-items-center mt-5'>
        <form onSubmit={handleSubmit} className='form align-items-center'>
          <h2 className='text-center fw-bold fs-2 color mt-5'>Mot de passe oublié</h2>
          <p className='text-center'>Veuillez spécifier votre adresse e-mail pour recevoir les instructions pour la réinitialisation</p>
          <div className='inscript1 align-items-center'>
            <input
              className="input email my-5"
              type="email"
              placeholder="adresse email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
           <button type='submit' className='liens align-items-center creer fs-5 fw-bold'>Réinitialiser le mot de passe</button>
          <div className='text-center my-4'></div>
        </form>
      </div>
    </div>
  );
}

export default MotdepassOublié;