import { useState , useEffect} from "react";
import axios from 'axios';
import "../Footer/Footer.css"

export function Footer() {

    const [email, setEmail] = useState()
    const [newsletter, setNewsletter] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/api/email/send')
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
        setNewsletter([...newsletter, newEmail]);
        
    };


    return <footer className="py-5 bg-white">
        <div className="d-flex flex-column align-items-center justify-contend-around pb-3">
            <h5>Tiens-toi à jour</h5>
            <p>Abonnez-vous à notre newsletter</p>
            <div>
                <form className="d-flex align-items-center" onSubmit={handleSubmit}>
                    <a href="mailto:khadymbaye541@gmail.com">
                        <input type="email" name="email" placeholder="E-mail" className="rounded" onChange={(e) => setEmail({ email: e.target.value })} style={{ backgroundColor: "#ddd", height: 40 }} />
                    </a>
                    <button className="rounded bg-danger border-0 px-2" style={{ position: "relative", right: 8, height: 40 }}>Abonnez-vous</button>
                </form>
            </div>
        </div>
        <div style={{ borderTop: "1px solid #ccc" }}></div>
        <div className="container">
            <div className="row my-3">
                <div className="col-12 col-sm-4">
                    <div>
                        <h1>logo</h1>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="cen">
                        <ul>
                            <li>Contactez-nous</li>
                            <li> Termes et conditions</li>
                            <li>Politique de confidentialité</li>
                        </ul>
                    </div>
                </div>
                <div className="col-12 col-sm-4">
                    <div className="d-flex gap-2">
                        <a href="https://www.instagram.com/Yaye fatou Beye/" target="_blank"><i class="bi bi-instagram"></i></a>
                        <a href="https://www.tiktok.com/@lasalihate4258" target="_blank"><i class="bi bi-tiktok"></i></a>
                        <a href="https://www.facebook.com/votre_nom_utilisateur" target="_blank"><i class="bi bi-facebook"></i></a>
                        <a href="https://wa.me/775636854" target="_blank"><i class="bi bi-whatsapp"></i></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="container d-flex justify-content-between">
            <ul className="d-flex gap-3">
                <li>Den</li>
                <li>pasta</li>
            </ul>
            <a href="">
                <div className="bg-danger d-flex justify-content-center align-items-center" style={{ width: 25, height: 25, borderRadius: 100 }}>
                    <i class="bi bi-chevron-up text-white"></i>
                </div>
            </a>
        </div>
    </footer>
}