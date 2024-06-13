import React, { useState } from 'react'
import '../Inscription/inscrire.css';
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
import axios from 'axios';
// import googles from '../Inscription/googles.png'

function Connexion() {
    const [email ,setEmail]=useState('');
    const [password ,setPassword]=useState('')

    async function login(e) {
        e.preventDefault();
        try {
          const res = await axios.post("http://localhost:8080/api/auth", {
            email,
            password,
          });
    
          if (res.data === "exist") {
            alert("Connexion réussie");
            // Rediriger l'utilisateur ou effectuer d'autres actions nécessaires
          } else {
            alert("Identifiants incorrects");
          }
          setEmail('');
          setPassword('');
         
        } catch (error) {
          console.log("Error during login:", error);
          alert("Erreur lors de la connexion");
        }
      }
    return (
        <div>
            <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
                <form className='form  align-items-center' onSubmit={login}>
                    <h2 className='text-center fw-bold fs-2 color '>Connecter</h2>

                    <div className=' inscript1'>
                        <input class=" input  email my-2" type="email" placeholder="Email" required />
                        <input class=" input  email my-2" type="password" placeholder="mot de pass" required />
                    </div>
                    <div className='text-center my-4'>
                        <Link to="/reinitialiser" className=' oublie '>mot de pass oublié</Link>
                    </div>
                    <button type='submit ' className='liens align-items-center creer fs-5 fw-bold '> Se connecter</button>
                    <p className='text-center'>Vous n'avez pas de compte ?</p>
                    <div className='text-center my-4'>
                        <Link to="/inscrire"> <a href="#" className=' oublie '> S'inscrire</a></Link></div>
                    <div className='d-flex '>
                        <div className='d-flex icon-google gap-3 align-items-center '>
                            
                            <p className='ecriture mt-3'> google</p>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Connexion