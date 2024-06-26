import React, { useState } from 'react'
import '../Inscription/inscrire.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import logoMaron from '../assets/logoMaron.png'; 

function Connexion() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    async function login(e) {
        e.preventDefault();
        console.log(email ,"email" ,password);
        try {
            // https://tache-de-validition-nodejs-6.onrender.com/api-docs/#/default/userLogin
            const res = await axios.post("https://tache-de-validition-nodejs-6.onrender.com/api/auth", {
                email,
                password,
            });
            console.log(res);

            if (res.data === "exist") {
                toast.success("Connexion réussie")


            } 
            else {
                toast.error("Email ou mot de passe incorrect");
            }
            setEmail('');
            setPassword('');
            //   rediger vers la page d'accueil
            navigate("/")

        } catch (error) {

            toast.error("Erreur lors de la connexion")
        }
    }
    return (
        <div>
            <div className='backCConnexion shadow  mt-5'>
                <form className='form  align-items-center' onSubmit={login}>
                <img src={logoMaron} className='fs-2 logoMaron' alt="" />
                    <h2 className='text-center fw-bold fs-2 color  '>Connecter</h2>

                    <div className=' inscript1  '>
                        {/* <div className='d-flex justify-content-center m-auto  '> */}
                        <input class=" nom  email " type="email" placeholder="Email" required  onChange={(e)=>setEmail(e.target.value)}/>
                        {/* </div> */}
                        <input class=" nom  email " type="password" placeholder="mot de pass" required onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='text-center my-4'>
                        <Link to="/reinitialiser" className=' oublie '>mot de pass oublié</Link>
                    </div>
                    <div className=' creer'>
                    <button type='submit ' className='liens align-items-center connect  fs-5 fw-bold '> Se connecter</button></div>
                    <p className='text-center mt-3'>Vous n'avez pas de compte ?</p>
                    <div className='text-center my-4'>
                        <Link to="/inscription"> <a href="#" className=' oublie  '> Creer un compte</a></Link>
                        </div>
                    

                </form>
            </div>
            <ToastContainer position='top-center' />
        </div>
    )
}

export default Connexion