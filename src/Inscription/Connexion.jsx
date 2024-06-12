import React from 'react'
import '../Inscription/inscrire.css';
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';
// import googles from '../Inscription/googles.png'

function Connexion() {
    return (
        <div>
            <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
                <form className='form  align-items-center'>
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