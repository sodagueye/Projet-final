import React, { useState } from 'react';
import '../Inscription/inscrire.css';
import { Link, useNavigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logoMaron from '../assets/logoMaron.png';

function Connexion() {
     const navigate = useNavigate();
   
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login(e) {
        e.preventDefault();
        try {
             const res = await axios.post("https://tache-de-validition-nodejs-6.onrender.com/api/auth", {
                email,
                password,
            });

            if (res.data === "exist") {
                toast.success("Connexion réussie");
               
                console.log("Redirection vers la page d'accueil...");
                 navigate("/"); 
            } 
            else {
                toast.error("Email ou mot de passe incorrect");
            }

            setEmail('');
            setPassword('');

        } catch (error) {
            console.error(error);
            toast.error("Erreur lors de la connexion");
        }
    }

    return (
        <div>
            <div className='backCConnexion shadow mt-5'>
                <form className='form align-items-center' onSubmit={login}>
                    <img src={logoMaron} className='fs-2 logoMaron' alt="" />
                    <h2 className='text-center fw-bold fs-2 color'>Connecter</h2>

                    <div className='inscript1'>
                        <input className="nom email" type="email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
                        <input className="nom email" type="password" placeholder="mot de passe" required onChange={(e) => setPassword(e.target.value)} />
                    </div>

                    <div className='text-center my-4'>
                        <Link to="/reinitialiser" className='oublie'>mot de passe oublié</Link>
                    </div>

                    <div className='creer'>
                        <button type='submit' className='liens align-items-center connect fs-5 fw-bold'>Se connecter</button>
                    </div>

                    <p className='text-center mt-3'>Vous n'avez pas de compte ?</p>

                    <div className='text-center my-4'>
                        <Link to="/inscription" className='oublie'>Créer un compte</Link>
                    </div>
                </form>
            </div>
            <ToastContainer position='top-center' />
        </div>
    );
}

export default Connexion;
