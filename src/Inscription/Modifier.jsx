
import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ModifierPassword() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const HandleSubmit = async (e) => {
    e.preventdefault()

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    try {
      await axios.post(`http://localhost:3030/api/reset-password/${token}`, { password });
      alert('Mot de passe mis à jour avec succès');


    } catch (error) {
      alert('Erreur lors de la mise à jour du mot de passe');
    }

  }
  return (
    <div>
      <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
        <form className='form  align-items-center' onSubmit={HandleSubmit}>
          <h2 className='text-center fw-bold fs-2 color '>Récupération de compte</h2>

          <div className=' inscript1'>
            <input class=" input  email my-2" type="password" placeholder="mot de pass"
              value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input class=" input  email my-2" type="password" placeholder=" confirm mot de pass"
              value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
          </div>

          <button type='submit ' className='liens align-items-center creer fs-5 fw-bold mt-5 '>Envoyer</button>

        </form>
      </div>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default ModifierPassword