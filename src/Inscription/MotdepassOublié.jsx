import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import "./inscrire.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logoMaron from "../assets/logoMaron.png";



function MotdepassOublié() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://tache-de-validition-nodejs-6.onrender.com/api/forgot-password', { email });
      
      toast.success(`Un mail avec lien de confirmation est envoyé sur votre compte ${email}`);
      setTimeout(()=>{
        navigate('/connexion'); 
      },3000)
       
    } catch (err) {
      console.error(err);
      toast.error('Erreur lors de la demande de réinitialisation');
    }
  };

  return (
    <div className=''>
      <ToastContainer/>
      <div className='shadow d-flex justify-content-center align-items-center backCConnexion mt-5 pb-5'>
        <form onSubmit={handleSubmit} className='form align-items-center'>
          <img src={logoMaron} className=" logoMaron w-50" alt="" />
          <h2 className='text-center'>Réinitialisation mot de passe</h2>
          <div className='inscript1 align-items-center'>
            <input
              className="nom email my-3"
              type="email"
              placeholder="adresse email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='creer d-flex mt-3'>
            <button type='submit' className='liens align-items-center m-auto  connect fs-5 fw-bold border-0'>Envoyer</button></div>
          {/* <div className='text-center my-4'></div> */}
        </form>
      </div>
      <ToastContainer position='top-center'/>
    </div>
  );
}

export default MotdepassOublié;