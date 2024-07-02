import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function MotdepassOublié() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/api/forgot-password', { email });
      navigate('/sendmail'); 
    } catch (err) {
      console.error(err);
      toast.error('Erreur lors de la demande de réinitialisation');
    }
  };

  return (
    <div>
      <ToastContainer/>
      <div className='backpass shadow d-flex justify-content-center align-items-center mt-5'>
        <form onSubmit={handleSubmit} className='form align-items-center'>
          <h2 className='text-center fw-bold fs-2 color mt-5'>Mot de passe oublié</h2>
          <p className='text-center'>Veuillez spécifier votre adresse e-mail pour recevoir les instructions pour la réinitialisation</p>
          <div className='inscript1 align-items-center'>
            <input
              className="nom email my-5"
              type="email"
              placeholder="adresse email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='creer'>
            <button type='submit' className='liens align-items-center m-auto  connect fs-5 fw-bold'>Reinitialiser</button></div>
          {/* <div className='text-center my-4'></div> */}
        </form>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default MotdepassOublié;