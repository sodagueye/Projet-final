// import { useState } from "react";
// import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import "../Footer/Footer.css";
import logo from "../Footer-img/logo.jpg";
import { Link } from "react-router-dom";

export function Footer() {
    // const [email, setEmail] = useState('');

    // const handleChange = (e) => {
    //   setEmail(e.target.value);
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await axios.post('http://localhost:8080/subscribe', { email });
    //         console.log('Réponse du backend:', response.data);
    //         setEmail('');
    //         toast.success('Vous êtes abonné avec succès à notre newsletter!' , { className: 'toast-success'});
    //     } catch (error) {
    //         console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
    //         toast.error('Une erreur est survenue. Veuillez réessayer.' , {className: 'toast-error'});
    //         ;
    //     }
    // };
    //////////////////////////////////////////////////////////////
    
    return (
        <footer>
            <div style={{ borderBottom: "1px solid white" }}>
                <div className="container d-flex justify-content-around align-items-center deux" >
                    <div>
                        <a href=""> <img src={logo} alt="" style={{ width: 130, height: 130 }} /></a>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="https://chat.whatsapp.com/LvHkLHkFx8V6JgjuXSqXQ5 " target="_blank" ><i class="bi bi-whatsapp"></i></a>
                        <a href="https://www.tiktok.com/@nom_utilisateur" target="_blank"><i class="bi bi-tiktok"></i></a>
                        <a href="https://www.facebook.com/nom_utilisateur" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/nom_utilisateur" target="_blank"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="py-4" style={{ borderBottom: "1px solid white" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="d-flex flex-column align-items-center">
                                <h5>À propos</h5>
                                <ul>
                                    <li><a href="/notre-histoire">Notre histoire</a></li>
                                    <li><a href="/equipe">Notre équipe</a></li>
                                    {/* <li><a href="/carriere">Carrières</a></li> */}
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="d-flex flex-column align-items-center">
                                <h4>Menu</h4>
                                <ul>
                                    <li><a href="/menu/plats">Plats</a></li>
                                    <li><a href="/menu/boissons">Boissons</a></li>
                                    <li><a href="/menu/desserts">Desserts</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Informations légales</h5>
                                <ul>
                                    <li><a href="/conditions-utilisation">Conditions d'utilisation</a></li>
                                    <li><a href="/politique-de-confidentialite">Politique de confidentialité</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-3">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Contact</h5>
                                <ul>
                                    <li><Link to="/Contact">Contact</Link></li>
                                    <li><Link to="/Localisation">Localisation</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="py-4" style={{ borderBottom: "1px solid white" }}>
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h5>Tiens-toi à jour</h5>
                    <p>Abonnez-vous à notre newsletter</p>
                    <div>
                        <form className="d-flex align-items-center" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                className="rounded"
                                value={email}
                                onChange={handleChange}
                                style={{ height: 40 }}
                            />
                            <button type="submit"
                                className="rounded border-0 px-2"
                                style={{ position: "relative", right: 8, height: 40 }}
                            >
                                Abonnez-vous
                            </button>
                        </form>
                    </div>
                </div>

            </div>  */}
            {/* <ToastContainer  position="bottom-left"/> */}
        </footer>
    );
}
