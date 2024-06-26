import React, { useState } from 'react';
import '../Inscription/inscrire.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoMaron from '../assets/logoMaron.png'; 

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
      
  
      if (res.data === "exist") {
       
        toast.error("l'utilisateur existe deja")
      } else if (res.data === "exist pas") {
       
        toast.success("inscription reussie")
       
      
        
      }
       // Réinitialiser les champs du formulaire
       
      setFirstName('');
      setLastName('');
      setEmail('');
      setNumber('');
      setPassword('');
      setConfirmPassword('');

   // Rediriger vers la page de connexion
      navigate('/connexion');

    } catch (error) {
    toast.error("erreur d inscription")
      console.log(error);
    }
    
  }

  return (
    <div className=''>
      <div className='back shadow d-flex justify-content-center  '>
        <form className='form' onSubmit={submit}>
          <img src={logoMaron} className='fs-2 logoMaron' alt="" />
          <div className=' color  m-0 fw-bold'> <h3>Créez votre compte</h3></div>
          <div className='auth'>
            <input className="nom" type="text" style={{backgroundColor: "transparent"}} placeholder="Prenom" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input className=" nom number" type="text" placeholder="Nom" value={lastName} required onChange={e => setLastName(e.target.value)} />
          </div>
        
          <div className='auth'>
            <input className="nom" type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} />
            <input className="nom number" type="number" placeholder="Telephone" required value={number} onChange={e => setNumber(e.target.value)} />
          </div>
          <div className='auth pass'>
            <input className="nom" type="text" placeholder="Mot de pass" required value={password} onChange={e => setPassword(e.target.value)} />
            <input className="nom" type="text" placeholder="Confirmation mot de pass" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
          </div>
         
          {/* <p className='m-3 text-center'>By clicking "Submit," you agree to <span className='terms'> E-delivery General Terms and Conditions </span> and acknowledge you have read the  <span className='terms'>Privacy Policy.</span></p> */}
          <div className='creer'>
            <button type='submit' className='creer liens fs-5 fw-bold mt-3 connect' >Creer un compte</button>
          </div>
        </form>
      </div>
      <ToastContainer position='top-center'/>
      
    </div>
  )
}

export default Inscrire;
