import React, { useState } from 'react'
import '../Inscription/inscrire.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

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
            <div className='backCConnexion shadow d-flex justify-content-center align-items-center mt-5'>
                <form className='form  align-items-center' onSubmit={login}>
                    <h2 className='text-center fw-bold fs-2 color '>Connecter</h2>

                    <div className=' inscript1'>
                        <input class=" input  email my-2" type="email" placeholder="Email" required  onChange={(e)=>setEmail(e.target.value)}/>
                        <input class=" input  email my-2" type="password" placeholder="mot de pass" required onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div className='text-center my-4'>
                        <Link to="/reinitialiser" className=' oublie '>mot de pass oublié</Link>
                    </div>
                    <button type='submit ' className='liens align-items-center creer fs-5 fw-bold '> Se connecter</button>
                    <p className='text-center'>Vous n'avez pas de compte ?</p>
                    <div className='text-center my-4'>
                        <Link to="/inscription"> <a href="#" className=' oublie '> S'inscrire</a></Link>
                        </div>
                    {/* <div className='d-flex '> */}
                        {/* <div className='d-flex icon-google gap-3 align-items-center '>

                            <p className='ecriture mt-3'> google</p>
                        </div> */}
                    {/* </div> */}

                </form>
            </div>
            <ToastContainer position='top-center' />
        </div>
    )
}

export default Connexion