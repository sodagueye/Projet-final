import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoMaron from '../assets/logoMaron.png'; 
import './inscrire.css'; // Assurez-vous que votre CSS est correctement importé ici

function Inscrire() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      return;
    }
    
    try {
      const res = await axios.post("https://tache-de-validition-nodejs-6.onrender.com/api/register", {
        firstName,
        lastName,
        email,
        number,
        password,
        confirmPassword
      });

      if (res.status === 201) {
        toast.error(res.data.msg);
        setFirstName('');
        setLastName('');
        setEmail('');
        setNumber('');
        setPassword('');
        setConfirmPassword('');
        // Rediriger vers la page de connexion après une inscription réussie
        navigate('/connexion');

      }else {
        toast.error(res.data.errors[0].msg);
      }
    } catch (error) {
      toast.error("Erreur lors de l'inscription");
      console.error(error);
    }
  }

  return (
    <div className=''>
      <div className='back shadow d-flex justify-content-center'>
        <form className='form' onSubmit={submit}>
          <img src={logoMaron} className='fs-2 logoMaron' alt="" />
          <div className='color m-0 fw-bold'>
            <h3>Créez votre compte</h3>
          </div>
          <div className='auth'>
            <input className="nom" type="text" style={{backgroundColor: "transparent"}} placeholder="Prénom" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className="nom number" type="text" placeholder="Nom" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className='auth'>
            <input className="nom" type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input className="nom number" type="number" placeholder="Téléphone" required value={number} onChange={(e) => setNumber(e.target.value)} />
          </div>
          <div className='auth pass'>
            <input className="nom" type="password" placeholder="Mot de passe" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input className="nom" type="password" placeholder="Confirmation mot de passe" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className='creer'>
            <button type='submit' className='creer liens fs-5 fw-bold mt-3 connect'>Créer un compte</button>
          </div>
        </form>
      </div>
      <ToastContainer position='top-center' />
    </div>
  )
}

export default Inscrire;
