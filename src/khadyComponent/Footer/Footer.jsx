import { useState, useEffect } from "react";
import axios from 'axios';
import "../Footer/Footer.css";
import logo from "../Footer-img/logo.jpg"
// import { FaFacebook , FaSquareInstagram } from "react-icons/fa";

export function Footer() {

    const [email, setEmail] = useState("");
    const [newsletter, setNewsletter] = useState([]);

    useEffect(() => {
        axios.post('http://localhost:8080/api/email/send')
            .then(response => {
                console.log(response.data);
                setNewsletter(response.data);
            })
            .catch(error => {
                console.error('Une erreur est survenue :', error);
            });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEmail = { email };
        setNewsletter([newEmail, ...newsletter]);
        setEmail(""); // Utiliser setEmail pour réinitialiser l'email
    };

    return (
        <footer>
            <div style={{ borderBottom: "1px solid white" }}>
                <div className="container d-flex justify-content-between align-items-center deux" >
                    <div>
                        <a href=""> <img src={logo} alt="" style={{ width: 130, height: 130 }} /></a>
                    </div>
                    <div className="d-flex gap-3">
                        <a href="https://chat.whatsapp.com/LvHkLHkFx8V6JgjuXSqXQ5 "  target="_blank" ><i class="bi bi-whatsapp"></i></a>
                        <a href="https://www.tiktok.com/@nom_utilisateur" target="_blank"><i class="bi bi-tiktok"></i></a>
                        <a href="https://www.facebook.com/nom_utilisateur" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://www.instagram.com/nom_utilisateur" target="_blank"><i class="bi bi-instagram"></i></a>
                    </div>
                </div>
            </div>
            <div className="py-4" style={{ borderBottom: "1px solid white" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md4 col-lg-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Produits</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md4 col-lg-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Famille</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md4 col-lg-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Service conso</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md4 col-lg-4">
                            <div className="d-flex flex-column align-items-center">
                                <h5>Informations légales</h5>
                                <ul>
                                    <li><a href="">Catalogue produits</a></li>
                                    <li><a href="">Nos burgers</a></li>
                                    <li><a href="">Nos menus</a></li>

                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md4 col-lg-2">
                            <div className="d-flex flex-column align-items-center">
                                <h5>L'entreprise</h5>
                                <ul>
                                    <li><a href="">Histoire</a></li>
                                    <li><a href="">Recrutement</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4" style={{ borderBottom: "1px solid white" }}>
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
                                onChange={(e) => setEmail(e.target.value)}
                                style={{ height: 40 }}
                            />
                            <button
                                className="rounded border-0 px-2"
                                style={{ position: "relative", right: 8, height: 40 }}
                            >
                                Abonnez-vous
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </footer>
    );
}
