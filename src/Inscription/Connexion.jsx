// import React from 'react'
import React, { useState, useEffect } from 'react'

import '../Inscription/inscrire.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
 import { Link } from 'react-router-dom';
 import googles from '../Inscription/googles.png'
import axios from 'axios';



function Connexion() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


   async function submit(e) {
    e.preventDefault();
    try {
        const res = await axios.post("http://localhost:8000/api/users/login", {
            email,
            password
        });
        
    } catch (error) {
        console.log(error);
    }

   }
    


    return (
        <div>
           <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
                <form className='form  align-items-center' onSubmit={submit}>
                <h2 className='text-center fw-bold fs-2 color '>Connecter</h2>

                    <div className=' inscript1'>
                    {/* <input class=" input  email my-2" type="email" placeholder="Email" required /> */}
                        <input className=" input email" type="email" placeholder="Email" value={email} required onChange={e => setEmail(e.target.value)} />
                        <input className=" input email" type="text" placeholder="Mot de pass" required value={password} onChange={e => setPassword(e.target.value)} />


                        {/* <input class=" input  email my-2" type="password" placeholder="mot de pass" required /> */}
                    </div>
                    <div className='text-center my-4'>
                       <Link to="/reinitialiser" className=' oublie '>mot de pass oublié</Link> 
                       </div>
                    <button type='submit' className='liens align-items-center creer fs-5 fw-bold '> Se connecter</button>
                    <p className='text-center'>Vous n'avez pas de compte ?</p>
                    <div className='text-center my-4'>
                        <Link to="/inscrire"> <a href="#" className=' oublie '> S'inscrire</a></Link></div>
                        <div className='d-flex '>
                    <div className='d-flex icon-groupe gap-3 align-items-center '>
                        <a href=""><FaFacebookF className='facebook fs-5 ' /></a>
                        <p className='avec mt-3'> facebook</p>
                    </div>
                    <div className='d-flex icon-google gap-3 align-items-center '>
                     <a href=""> <img src={googles} className='imggoogle' alt=''/></a> 
                        <p className='ecriture mt-3'> google</p>
                    </div>
                    </div>

                </form>
              </div>
            </div>
    )
}

export default Connexion