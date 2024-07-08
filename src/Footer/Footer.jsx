import { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../Footer/Footer.css";
import { FaFacebook ,  FaTiktok , FaWhatsapp , FaInstagram} from "react-icons/fa";
// import { FaInstagram  } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa";
// import { FaTiktok } from "react-icons/fa";
import logo from "../Footer-img/logo1.png";

export default function Footer() {
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/subscribe', { email });
            console.log('Réponse du backend:', response.data);
            setEmail('');
            toast.success('Vous êtes abonné avec succès à notre newsletter!' , { className: 'toast-success'});
        } catch (error) {
            console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
            toast.error('Une erreur est survenue. Veuillez réessayer.' , {className: 'toast-error'});
            ;
        }
    };

    return (
        <footer className="py-3">
            <div >
                <div className="container d-flex justify-content-between align-items-center deux">
                  
                  
                </div>
            </div>
            <div style={{ borderBottom: "1px solid white" }}>
                <div className="container py-3">
                
                    <div className="row">
                    <div className="col-12 col-md-2">
                        <a href=""> <img src={logo} alt="logo" className="img-fluid" style={{ width: 100, height: 100 }} /></a>
                    </div>
                        <div className="col-12 col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Produits</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Famille</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Service conso</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Informations légales</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-md-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>L'entreprise</h5>
                                <ul>
                                    <li><a href="">Histoire</a></li>
                                    <li><a href="">Recrutement</a></li>
                                    <li><a href="">
                                    <div className="d-flex gap-3 ">
                                      <a href="https://chat.whatsapp.com/LvHkLHkFx8V6JgjuXSqXQ5 "  target="_blank">< FaWhatsapp/></a>
                                      <a href="https://www.tiktok.com/@nom_utilisateur" target="_blank"><FaTiktok/></a>
                                      <a href="https://www.facebook.com/nom_utilisateur" target="_blank"><FaFacebook/></a>
                                      <a href="https://www.instagram.com/nom_utilisateur" target="_blank"><FaInstagram/></a>
                                  </div> 
                                </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pt-3">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <h5>Tiens-toi à jour</h5>
                    <p>Abonnez-vous à notre newsletter</p>
                    <div>
                        <form className="d-flex align-items-center" onSubmit={handleSubmit}>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                className="rounded ps-2"
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

            </div>
            {/*  */}
            <ToastContainer  position="bottom-left"/>
        </footer>
    );
}
