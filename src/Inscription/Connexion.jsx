import React from 'react'
import '../Inscription/inscrire.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';
function Connexion() {
    return (
        <div>
            <h2 className='text-center fw-bold fs-2'>Connecter</h2>
            <p className='text-center'></p>
            <div className='backCConnexion  d-flex justify-content-center align-items-center '>
                <form className='form '>

                    <div className=' inscript1'>
                       <input class=" input mb-5 email " type="email" placeholder="Email"  required />
                       <input class=" input mb-2 email" type="password" placeholder="mot de pass" required />
                       </div>
                       <div className='text-center my-4'>
                       <a href="#" className=' oublie '>mot de pass oublié</a></div>
                       <button type='submit align-items-center' className='comptes'> Se connecter</button>
                       <p className='text-center'>Vous avez pas de compte ?</p>
                       <div className='text-center my-4'>
                    <Link to="/"> <a href="#" className=' oublie '> S'inscrire</a></Link></div>
                       <div className='d-flex icon-groupe gap-3 align-items-center my-3'>
                      <a href="#"><FaFacebookF className='facebook fs-5 '/></a> 
                        <p className='avec mt-3'>Connecter avec facebook</p>
                       </div>
                       <div className='d-flex icon-google gap-3 align-items-center'>
                      <a href="#"><FaGoogle  className='google fs-5 '/></a> 
                        <p className='ecriture mt-3'>Connecter avec google</p>
                       </div>
                       
                </form>

            </div>


        </div>
    )
}

export default Connexion