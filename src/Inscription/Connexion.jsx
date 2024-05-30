import React from 'react'
import '../Inscription/inscrire.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { Link } from 'react-router-dom';

function Connexion() {
    return (
        <div>
           
            {/* <p className='text-center'></p> */}
            <div className='backCConnexion  d-flex justify-content-center align-items-center '>
                <form className='form  align-items-center'>
                <h2 className='text-center fw-bold fs-2 color mt-5'>Connecter</h2>

                    <div className=' inscript1'>
                        <input class=" input  email my-3" type="email" placeholder="Email" required />
                        <input class=" input  email my-3" type="password" placeholder="mot de pass" required />
                    </div>
                    <div className='text-center my-4'>
                       <Link to="/reinitialiser" className=' oublie '>mot de pass oublié</Link> 
                       </div>
                    <button type='submit ' className='liens align-items-center creer '> Se connecter</button>
                    <p className='text-center'>Vous n'avez pas de compte ?</p>
                    <div className='text-center my-4'>
                        <Link to="/inscrire"> <a href="#" className=' oublie '> S'inscrire</a></Link></div>
                    <div className='d-flex icon-groupe gap-3 align-items-center my-3'>
                        <a href="#"><FaFacebookF className='facebook fs-5 ' /></a>
                        <p className='avec mt-3'>Connecter avec facebook</p>
                    </div>
                    <div className='d-flex icon-google gap-3 align-items-center my-3'>
                        <a href="#"><FaGoogle className='google fs-5 ' /></a>
                        <p className='ecriture mt-3'>Connecter avec google</p>
                    </div>

                </form>

            </div>


        </div>
    )
}

export default Connexion