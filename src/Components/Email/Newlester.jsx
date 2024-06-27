import React, { useState } from 'react';
import axios from 'axios';
import '../../Styles/Newlester.css'

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/subscribe', { email });
      console.log('Réponse du backend:', response.data);
      setEmail('');
    } catch (error) {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    }
  };

  return (
    <div>
      <h2 className='text-center'>Inscrivez-vous à notre newsletter</h2>
      <form onSubmit={handleSubmit} className='frm-mail'>
          <input
            className='inpt-mail'
            type="email"
            value={email}
            onChange={handleChange}
            placeholder='Entrer votre e-mail'
            required
          />
        <button type="submit" className="btn btn-mail">Success</button>
      </form>
    </div>
  );
}

export default Newsletter;
